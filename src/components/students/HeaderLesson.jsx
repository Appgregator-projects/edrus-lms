import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Progress,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const HeaderLesson = () => {
  return (
    <Box
      borderBottom="1px solid #e2e7ed"
      w="100%"
      position="sticky"
      top="0"
      bgColor="white"
      zIndex="999"
    >
      <Flex
        spacing="20px"
        align="center"
        justify="space-between"
        gap="5"
        h="50px"
        px="5"
      >
        <Flex w="60%" align="center" gap="10">
          <Image
            src="https://demo.learndash.com/wp-content/uploads/2022/04/learndash-demo-logo-1.svg"
            alt="logo"
            h="15px"
          />
          <Box w="100%" fontSize="12px">
            <Flex gap={3}>
              <Text color="green" textTransform="uppercase" fontWeight="bold">
                37% complete
              </Text>
              <Text>3/8 Steps</Text>
            </Flex>
            <Progress
              colorScheme="green"
              size="sm"
              value={8}
              borderRadius={5}
            />
          </Box>
        </Flex>
        <Divider orientation="vertical" w="2%" h="70%" />
        <HStack
          display="flex"
          w="40%"
          gap="2"
          align="center"
          justify="right"
          divider={<StackDivider borderColor="gray.200" />}
          spacing="20px"
          H="40px"
          fontSize="12px"
          fontWeight="bold"
        >
          <Flex align="center">
            <Text color="#2c698d">Next Lesson</Text>
            <ChevronRightIcon color="#2c698d" fontSize="25px" />
          </Flex>
          <Popover islazy trigger={'hover'}>
            <PopoverTrigger>
              <Image
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                alt="user-img"
                h="40px"
                borderRadius="100%"
              />
            </PopoverTrigger>
            <PopoverContent bgColor="#2c698d" w="100%" color="white">
              <PopoverArrow bgColor="#2c698d" />
              <PopoverBody>
                <Flex flexDir="column" gap="3">
                  <Text>Course Home</Text>
                  <Text>My Account</Text>
                  <Text>Logout</Text>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>
      </Flex>
    </Box>
  );
};

export default HeaderLesson;
