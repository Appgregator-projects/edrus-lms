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
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
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
              Welcome Mr/Mrs!
            </Heading>
            <Text fontWeight="light" fontSize="20px" textAlign="center">
              Sign up to start teaching
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
              <Input type="text" placeholder="Enter name" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter email" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              w="100%"
              my="5"
              bgColor="#2c698d"
              color="white"
              onClick={() => navigate('/')}
              colorScheme="blue"
            >
              Sign up
            </Button>
            <Link fontSize="14px" onClick={() => navigate('/login')}>
              Have an account? Login
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Signup;
