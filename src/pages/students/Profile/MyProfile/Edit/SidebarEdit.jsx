import { Link, Flex } from '@chakra-ui/react';
import React from 'react';

const SidebarEdit = () => {
  return (
    <>
      <Flex flexDir="column" justify="center" align="left">
        <Link h="40px">General</Link>
        <Link h="40px">Professional Experience</Link>
        <Link h="40px">Social</Link>
        <Link h="40px">Change Password</Link>
      </Flex>
    </>
  );
};

export default SidebarEdit;
