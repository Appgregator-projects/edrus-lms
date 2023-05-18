import React from 'react';

import {
  Box,
  Button,
  Flex,
  Image,
  Progress,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { GiBookshelf, GiTrophy } from 'react-icons/gi';
import { TbActivity, TbClockFilled, TbMessages, TbUser } from 'react-icons/tb';
import { FaUserAlt } from 'react-icons/fa';
import { BiBadge } from 'react-icons/bi';
import Header from '../../../../components/students/Header';
import Footer from '../../../../components/students/Footer';
import { useNavigate } from 'react-router-dom';
const ProfileUser = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Box
        bgColor="#272643"
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
        w="100%"
        h="60vh"
        textAlign="center"
        color="white"
        fontWeight="bold"
        textTransform="uppercase"
        gap="20"
      >
        <Flex gap="20">
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            <GiBookshelf fontSize="50px" />
            <Text>1</Text>
            <Text>Courses</Text>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            <TbClockFilled fontSize="50px" />
            <Text>1</Text>
            <Text>Hourses</Text>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            <Image
              src="https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png"
              alt="img-profile"
              w="100px"
              borderRadius="100%"
            />

            <Text>User</Text>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            <TbMessages fontSize="50px" />
            <Text>1</Text>
            <Text>Posts</Text>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            <GiTrophy fontSize="50px" />
            <Text>1</Text>
            <Text>Achievements</Text>
          </Box>
        </Flex>
        <Flex gap="5">
          <Button
            variant="solid"
            bgColor="#2c698d"
            color="white"
            w="100%"
            colorScheme="blue"
          >
            Follow
          </Button>
          <Button
            variant="solid"
            bgColor="#2c698d"
            color="white"
            w="100%"
            colorScheme="blue"
            onClick={() => navigate('/inbox')}
          >
            Contact
          </Button>
        </Flex>
      </Box>
      <Box>
        <Tabs variant="enclosed" isFitted colorScheme="whiteAlpha">
          <TabList bgColor="#2c698d" color="white">
            <Tab>
              <Flex flexDir="column" align="center" justify="center">
                <FaUserAlt fontSize="38px" />
                <Text>About</Text>
              </Flex>
            </Tab>
            <Tab>
              <Flex flexDir="column" align="center" justify="center">
                <TbActivity fontSize="38px" />
                <Text>Activity</Text>
              </Flex>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box>
                <Text fontWeight="bold" fontSize="20px">
                  Achievements
                </Text>
                <Flex align="center" justify="center" gap="20">
                  <BiBadge fontSize="100px" fill="grey" />
                  <BiBadge fontSize="100px" fill="grey" />
                  <BiBadge fontSize="100px" fill="grey" />
                  <BiBadge fontSize="100px" fill="grey" />
                  <BiBadge fontSize="100px" fill="grey" />
                </Flex>
              </Box>
              <Box>
                <Text fontWeight="bold" fontSize="20px" mt="5">
                  Courses
                </Text>
                <Flex
                  my="5"
                  gap="5"
                  flexWrap="wrap"
                  align="center"
                  justify="center"
                >
                  <Box w="22.7%">
                    <Flex>
                      <Box pos="relative">
                        <Image src="https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png" />
                        <Box pos="absolute" left="85%" bottom="10%">
                          <Text color="white" fontWeight="bold">
                            80%
                          </Text>
                        </Box>
                        <Progress value={80} />
                      </Box>
                    </Flex>
                    <Box
                      bgColor="white"
                      p="5"
                      fontWeight="bold"
                      fontSize="20px"
                    >
                      <Text>Title Course</Text>
                    </Box>
                  </Box>
                  <Box w="22.7%">
                    <Flex>
                      <Box pos="relative">
                        <Image src="https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png" />
                        <Box pos="absolute" left="85%" bottom="10%">
                          <Text color="white" fontWeight="bold">
                            80%
                          </Text>
                        </Box>
                        <Progress value={80} />
                      </Box>
                    </Flex>
                    <Box
                      bgColor="white"
                      p="5"
                      fontWeight="bold"
                      fontSize="20px"
                    >
                      <Text>Title Course</Text>
                    </Box>
                  </Box>
                  <Box w="22.7%">
                    <Flex>
                      <Box pos="relative">
                        <Image src="https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png" />
                        <Box pos="absolute" left="85%" bottom="10%">
                          <Text color="white" fontWeight="bold">
                            80%
                          </Text>
                        </Box>
                        <Progress value={80} />
                      </Box>
                    </Flex>
                    <Box
                      bgColor="white"
                      p="5"
                      fontWeight="bold"
                      fontSize="20px"
                    >
                      <Text>Title Course</Text>
                    </Box>
                  </Box>
                  <Box w="22.7%">
                    <Flex>
                      <Box pos="relative">
                        <Image src="https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png" />
                        <Box pos="absolute" left="85%" bottom="10%">
                          <Text color="white" fontWeight="bold">
                            80%
                          </Text>
                        </Box>
                        <Progress value={80} />
                      </Box>
                    </Flex>
                    <Box
                      bgColor="white"
                      p="5"
                      fontWeight="bold"
                      fontSize="20px"
                    >
                      <Text>Title Course</Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>
              <Text fontWeight="bold" fontSize="20px">
                Network
              </Text>
              <Box display="flex" flexDir="column" gap="5" my="5">
                <Flex align="center" justify="left">
                  <Flex
                    bgColor="#272643"
                    color="white"
                    fontWeight="bold"
                    fontSize="20px"
                    w="150px"
                    h="100px"
                    flexDir="column"
                    align="center"
                    justify="center"
                  >
                    <Text>0</Text>
                    <Text>Followers</Text>
                  </Flex>
                  <Flex
                    w="150px"
                    h="100px"
                    alignItems="center"
                    justify="center"
                    bgColor="#bae8e8"
                  >
                    <TbUser fontSize="50px" />
                  </Flex>
                </Flex>

                <Flex align="center" justify="left">
                  <Flex
                    bgColor="#272643"
                    color="white"
                    fontWeight="bold"
                    fontSize="20px"
                    w="150px"
                    h="100px"
                    flexDir="column"
                    align="center"
                    justify="center"
                  >
                    <Text>0</Text>
                    <Text>Followers</Text>
                  </Flex>
                  <Flex
                    w="150px"
                    h="100px"
                    alignItems="center"
                    justify="center"
                    bgColor="#bae8e8"
                  >
                    <TbUser fontSize="50px" />
                  </Flex>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Footer />
    </>
  );
};

export default ProfileUser;
