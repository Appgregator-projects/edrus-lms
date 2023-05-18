import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { GrCircleAlert } from 'react-icons/gr';
const AlertTopics = () => {
  return (
    <>
      <Box bgColor="#fff6cd" border="2px solid #ffd200" borderRadius="5px">
        <Flex p="5" gap="2" align="center">
          <GrCircleAlert fontSize="30px" />
          <Text>Please go back and complete the previous topic.</Text>
          <Spacer />
          <Button
            align="center"
            w="200px"
            justify="center"
            borderRadius="30px"
            bgColor="#ffd200"
            fontSize="12px"
            fontWeight="medium"
            leftIcon={<ChevronLeftIcon fontSize="20px" />}
          >
            <Flex w="80%" align="center" justify="center">
              <Text>Back</Text>
            </Flex>
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default AlertTopics;
