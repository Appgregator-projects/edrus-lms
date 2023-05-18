import React from 'react';
import Header from '../../../components/students/Header';
import Footer from '../../../components/students/Footer';

import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  StackDivider,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';

const Account = () => {
  return (
    <>
      <Header />
      <Box minH="71.8vh">
        <Grid templateColumns="69% 30%" p="10" gap="1%">
          <GridItem>
            <Text fontWeight="bold" fontSize="20px">
              Payment history
            </Text>
            <Box my="5">
              <Box>
                <Text
                  fontSize="14px"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  20 Juli 2022
                </Text>
                <Text>Pembayaran UKT Semester 2</Text>
                <Flex align="center" gap="2">
                  <Text fontWeight="bold" fontSize="14px">
                    Rp 10.000.000,00
                  </Text>
                  <Tag colorScheme="green" size="sm">
                    Success
                  </Tag>
                </Flex>
                <Box my="3">
                  <Divider />
                </Box>
              </Box>
              <Box>
                <Text
                  fontSize="14px"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  20 Januari 2023
                </Text>
                <Text>Pembayaran UKT Semester 1 & Uang Pangkal</Text>
                <Flex align="center" gap="2">
                  <Text fontWeight="bold" fontSize="14px">
                    Rp 20.000.000,00
                  </Text>
                  <Tag colorScheme="green" size="sm">
                    Success
                  </Tag>
                </Flex>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Text fontWeight="bold" fontSize="20px">
              User details
            </Text>
            <Box bgColor="#bae8e8" p="3" my="5">
              <VStack
                divider={<StackDivider borderColor="#2c698d" />}
                justify="left"
                align="left"
              >
                <Box>
                  <Text fontWeight="bold" fontSize="20px">
                    Name
                  </Text>
                  <Text>User</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize="20px">
                    Email
                  </Text>
                  <Text>email.user@email.co</Text>
                </Box>
              </VStack>
            </Box>
            <Text fontWeight="bold" fontSize="20px">
              Contact sales
            </Text>
          </GridItem>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Account;
