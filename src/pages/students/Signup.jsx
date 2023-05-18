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
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { authFirebase, db } from '../../config/firebase'
import { UseAuthDispatch } from '../../context/Context';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const _showPassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();
  const renderRef = useRef()
  const [loading, setLoading] = useState(false)
  const dispatch = UseAuthDispatch();
  console.count('render : ', renderRef.current)

  const _signUp = async () => {
    setLoading(true)
    console.log({ email })
    console.log({ password })
    createUserWithEmailAndPassword(authFirebase, email, password).then(response => {
      navigate('/')
      localStorage.setItem('user', JSON.stringify(response.user))
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.user
      })
      setDoc(doc(db, "users", response.user.uid), {
        name,
        email,
        role: "user",
        phone: null,
        membership: null,
        createdAt: serverTimestamp()
      });
    }).catch(error => {
      alert(error.message)
    }).finally(() => {
      setLoading(false)
    })
  }
  
  const onEnter = (e) => {
    if (e.key === "Enter") _signUp();
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
              Welcome!
            </Heading>
            <Text fontWeight="light" fontSize="20px" textAlign="center">
              Sign up to start learning
            </Text>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;"
            bgColor="white"
            borderRadius="10"
            p="5"
          >
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Enter name" onChange={useCallback((e) => { setName(e.target.value) }, [])} />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  onChange={useCallback((e) => { setPassword(e.target.value) }, [])}
                  onKeyDown={onEnter}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={_showPassword}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button w="100%" my="5" bgColor="#2c698d" color="white" onClick={() => _signUp()}>
              Sign up {loading ? <Spinner mx={5} /> : <></>}
            </Button>
            <Link fontSize="14px" href="/login">Have an account? Login </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Signup;
