import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Select,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../../../../components/teachers/Sidebar';
import { ChevronLeftIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const EditUsers = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Box my="5">
        <Link color="#2c698d" fontSize="14px">
          <ChevronLeftIcon />
          Back to Users
        </Link>
      </Box>
      <Box w="50%" my="5">
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Role</FormLabel>
          <Select>
            <option>Teacher</option>
            <option>Student</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Role</FormLabel>
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
          my="5"
          size="sm"
          w="30%"
          color="white"
          bgColor="#2c698d"
          colorScheme="blue"
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

const EditUsersPage = () => {
  return (
    <Sidebar>
      <EditUsers />
    </Sidebar>
  );
};
export default EditUsersPage;
