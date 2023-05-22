import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Container,
	FormControl,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Spinner,
	Text,
} from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { authFirebase, db } from '../../config/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { UseAuthDispatch, UseAuthState } from '../../context/Context';
import { doc, getDoc } from 'firebase/firestore';

const Signin = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { loading } = UseAuthState();
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const handleTogglePassword = () => setShowPassword(!showPassword);
	const dispatch = UseAuthDispatch();

	const handleKeyDown = (e) => {
		// e.preventDefault()
		if (e.key === "Enter") handleLogin()
	};

	const handleLogin = async () => {
		dispatch({ type: "INIT_START" })
		let uid;
		let data;
		signInWithEmailAndPassword(authFirebase, email, password).then(response => {
			localStorage.setItem('user', JSON.stringify(response.user));
			uid = response.user.uid;
			data = response.user;

			dispatch({ type: "LOGIN_SUCCESS", payload: data })
			console.log(data, "userCredentials")
		}).catch(e => {
			alert(e.message)
		})
			.finally(() => {
				dispatch({ type: "INIT_FINISH" })
				navigate('/')
			})


		async function getUserData() {
			const docRef = doc(db, "users", uid);
			const docSnap = await getDoc(docRef);

			if (docSnap) {
				dispatch({ type: "LOGIN_SUCCESS", payload: {user : docSnap.data(), user_uid : uid} })
			} else {
				console.log("Document not found in users collection");
				dispatch({ type: "LOGIN_SUCCESS", payload: {user :data, user_uid : data.uid} })
			};
		}

		if (uid) {
			getUserData()
		} else {
			setTimeout(()=> getUserData(), 2000)
		}
	};

	return (
		<>
			<Box
				//    bgImage="linear-gradient(to right bottom, #2c698d, #4b839f, #6c9db0, #8db8c3, #b1d2d7, #bedde0, #cbe8e9, #d9f3f2, #d1f0ef, #caeeed, #c2ebea, #bae8e8);"
				minH="100vh"
				justifyContent="center"
				display="flex"
				alignItems="center"
			>
				<Container>
					<Box my="5">
						<Heading fontSize="38px" fontWeight="medium" textAlign="center">
							Welcome Back!
						</Heading>
						<Text fontWeight="light" fontSize="20px" textAlign="center">
							Login to start learning
						</Text>
					</Box>
					<Box
						boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;"
						bgColor="white"
						borderRadius="10"
						p="5"
					>
						<FormControl>
							<FormLabel>Email</FormLabel>
							<Input
								onChange={e => setEmail(e.target.value)}
								type="email" placeholder="Enter email" />
						</FormControl>
						<FormControl>
							<FormLabel>Password</FormLabel>
							<InputGroup size="md">
								<Input
									pr="4.5rem"
									type={showPassword ? 'text' : 'password'}
									placeholder="Enter password"
									onKeyDown={handleKeyDown}
									onChange={e => setPassword(e.target.value)}
								/>
								<InputRightElement width="4.5rem">
									<Button h="1.75rem" size="sm" onClick={handleTogglePassword}>
										{showPassword ? <ViewIcon /> : <ViewOffIcon />}
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
						<Button w="100%" my="5" bgColor="#2c698d" color="white" onClick={handleLogin}>
							Login {!loading ? null : <Spinner mx={4} />}
						</Button>
						<Link to="/signup">Don't have an account? Sign up </Link>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Signin;
