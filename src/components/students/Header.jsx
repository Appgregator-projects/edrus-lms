import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  PopoverBody,
  Flex,
  Image,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { BsDoorOpenFill } from 'react-icons/bs';
import { authFirebase } from '../../config/firebase';
import { UseAuthDispatch, UseAuthState } from '../../context/Context';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = UseAuthDispatch();
  const { loading, user } = UseAuthState();
  const navigate = useNavigate();


  const handleLogout = async () => {
    dispatch({ type : "INIT_START"})
    console.log("logging out")
    signOut(authFirebase).then(() => {
      // Sign-out successful.
      navigate('/');
      localStorage.removeItem('user')
      dispatch({ type : "LOGOUT_SUCCESS"})

    }).catch((error) => {
      // An error happened.
      alert(error.message)
    }).finally(()=>{
      dispatch({type : "INIT_FINISH"})
    })
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      bgColor="white"
      borderBottom="1px solid #ababab"
      h="90px"
      px="10"
    >
      <Image
        src="https://demo.learndash.com/wp-content/uploads/2022/04/learndash-demo-logo-1.svg"
        alt="logo"
        h="20px"
        onClick={()=>console.log(user)}
      />
      <Spacer />
      <Flex gap="5">
        <Text>Courses</Text>
        <Text>After login</Text>
        <Text>Community</Text>
        <Popover islazy trigger={'hover'}>
          <PopoverTrigger>
            <Flex align="center">
              <Text>Apps</Text>
              <ChevronDownIcon />
            </Flex>
          </PopoverTrigger>
          <PopoverContent bgColor="#2c698d" w="100%" color="white">
            <PopoverArrow bgColor="#2c698d" />
            <PopoverBody>
              <Flex flexDir="column" gap="3">
                <Text>Daily News</Text>
                <Text>Best Resources</Text>
                <Text>Other Students</Text>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover islazy trigger={'hover'}>
          <PopoverTrigger>
            <Flex align="center">
              <Text>Me</Text>
              <ChevronDownIcon />
            </Flex>
          </PopoverTrigger>
          <PopoverContent bgColor="#2c698d" w="100%" color="white">
            <PopoverArrow bgColor="#2c698d" />
            <PopoverBody>
              <Flex flexDir="column" gap="3">
                <Text>Inbox</Text>
                <Text>Profile</Text>
                <Text>Account</Text>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <Spacer />
      <Flex align="center" gap="2" alignItems="center" justifyContent="center">
        <BsDoorOpenFill />
        <Text cursor={'pointer'}  onClick={handleLogout}>{!loading ? 'Log Out' :'Loading...'}</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
