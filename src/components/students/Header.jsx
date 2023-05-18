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

const Header = () => {
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
      <Flex align="center" gap="2">
        <BsDoorOpenFill />
        <Text>Log Out</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
