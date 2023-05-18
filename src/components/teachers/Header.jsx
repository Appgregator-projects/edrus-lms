import { Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';
import { BsDoorOpenFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex align="center" justify="space-between">
        <Image
          src="https://demo.learndash.com/wp-content/uploads/2022/04/learndash-demo-logo-1.svg"
          alt="img-logo"
        />

        <Flex align="center" gap="2">
          <BsDoorOpenFill />
          <Link onClick={() => navigate('/login')}>Log Out</Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
