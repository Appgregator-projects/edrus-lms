import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <>
      <Box bgColor="black" color="white">
        <Flex align="center" h="100px" px="10" gap="2" justify="space-between">
          <Image
            src="https://demo.learndash.com/wp-content/uploads/2022/04/learndash-logo-footer-white.svg"
            alt="img-footer"
          />
          <Text fontSize="14px" fontWeight="medium">
            Copyright 2023, Teacher Site. All Rights Reserved.
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
