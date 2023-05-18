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
	Link,
	Spinner,
	Text,
} from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { authFirebase } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
	const [email,setEmail] = useState('')
	const [loading, setLoading] = useState(false)
	const [password,setPassword] = useState('')
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const handleTogglePassword = () => setShowPassword(!showPassword);

	const handleKeyDown = (e) => {
		// e.preventDefault()
		if (e.key === "Enter") handleLogin()
	};

	const handleLogin = () => {
		setLoading(true)
		console.log(email, password)
		signInWithEmailAndPassword(authFirebase, email, password).then(response => {
			navigate('/')
			localStorage.setItem('user', JSON.stringify(response.user))
		}).catch(e => {
			alert(e.message)
		}).finally(()=>{
			setLoading(false)
		})
	}

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
							Login {!loading ? null : <Spinner mx={4}/>}
						</Button>
						{/* <Link fontSize="14px">Don't have an account? Sign up </Link> */}
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Signin;
