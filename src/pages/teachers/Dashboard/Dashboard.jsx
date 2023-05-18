import {
  Box,
  Flex,
  Grid,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  GridItem,
  Card,
  CardHeader,
  Link,
  CardBody,
  Image,
  HStack,
  Button,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import { FaSchool } from 'react-icons/fa';
import { TfiAnnouncement, TfiCalendar, TfiReload } from 'react-icons/tfi';
import Sidebar from '../../../components/teachers/Sidebar';
import { BsCircleFill, BsHandbag, BsTag } from 'react-icons/bs';
import { BiAlarm, BiUser } from 'react-icons/bi';
import { RiFileList2Line } from 'react-icons/ri';
import { TbActivity, TbKey } from 'react-icons/tb';
const Dashboard = () => {
  return (
    <Box>
      <Flex gap="2" align="center">
        <FaSchool />
        <Text fontWeight="medium">Your School</Text>
      </Flex>
      <Flex justify="space-between">
        <Box w="60%">
          <Tabs>
            <TabList>
              <Tab>New signups</Tab>
              <Tab>Reveue</Tab>
              <Tab>Product sales</Tab>
              <Tab>Active learners</Tab>
              <Select size="sm" w="fit-content">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 60 days</option>
              </Select>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
              <TabPanel>
                <p>four!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box w="39%">
          <Grid templateColumns="repeat(3,1fr)" rowGap="10">
            <GridItem>
              <VStack>
                <BiUser fontSize="40px" />
                <Text>All user</Text>
                <Text fontWeight="medium" fontSize="30px">
                  2
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <TfiReload fontSize="40px" />
                <Text>Conversions</Text>
                <Flex gap="2" align="center" justify="end">
                  <Text fontWeight="medium" fontSize="30px">
                    0
                  </Text>
                  <Text>%</Text>
                </Flex>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <BsHandbag fontSize="40px" />
                <Text>30 days sales</Text>
                <Text fontWeight="medium" fontSize="30px">
                  0
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <BiAlarm fontSize="40px" />
                <Text>Avg time</Text>
                <Flex gap="2" align="center" justify="end">
                  <Text fontWeight="medium" fontSize="30px">
                    11
                  </Text>
                  <Text>min</Text>
                </Flex>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <RiFileList2Line fontSize="40px" />
                <Text>Courses</Text>
                <Text fontWeight="medium" fontSize="30px">
                  1
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <BsTag fontSize="40px" />
                <Text>Course categories</Text>
                <Text fontWeight="medium" fontSize="30px">
                  0
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
      <Grid templateColumns="repeat(4,1fr)" gap="3" my="5">
        <GridItem>
          <Card>
            <CardHeader>
              <Flex align="center" gap="3">
                <Flex align="center" gap="1">
                  <BiUser fontSize="30px" />
                  <Text>All user</Text>
                </Flex>
                <Link
                  bgColor="#2c698d"
                  borderRadius="30px"
                  color="white"
                  fontSize="14px"
                  w="60px"
                  size="sm"
                  textAlign="center"
                  h="fit-content"
                >
                  See all
                </Link>
              </Flex>
            </CardHeader>
            <CardBody>
              <HStack>
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt="img-user"
                  w="50px"
                  h="50px"
                  objectFit="cover"
                />
                <VStack align="left">
                  <Text>User1</Text>
                  <Text>3 days</Text>
                </VStack>
              </HStack>
              <HStack>
                <Image
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt="img-user"
                  w="50px"
                  h="50px"
                  objectFit="cover"
                />
                <VStack align="left">
                  <Text>User2</Text>
                  <Text>4 days</Text>
                </VStack>
              </HStack>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardHeader>
              <Flex align="center" gap="3">
                <Flex align="center" gap="1">
                  <TbActivity fontSize="30px" />
                  <Text>Events log</Text>
                </Flex>
                <Link
                  bgColor="#2c698d"
                  borderRadius="30px"
                  color="white"
                  fontSize="14px"
                  w="60px"
                  size="sm"
                  textAlign="center"
                  h="fit-content"
                >
                  See all
                </Link>
              </Flex>
            </CardHeader>
            <CardBody>
              <Box>
                <HStack align="start">
                  <TbKey />
                  <VStack align="left" spacing="0">
                    <Link color="#2c698d">User1</Link>
                    <Text>3 days</Text>
                    <Link color="#2c698d">more info</Link>
                  </VStack>
                </HStack>
                <HStack align="start">
                  <TbKey />
                  <VStack align="left" spacing="0">
                    <Link color="#2c698d">User1</Link>
                    <Text>3 days</Text>
                    <Link color="#2c698d">more info</Link>
                  </VStack>
                </HStack>
                <HStack align="start">
                  <TbKey />
                  <VStack align="left" spacing="0">
                    <Link color="#2c698d">User1</Link>
                    <Text>3 days</Text>
                    <Link color="#2c698d">more info</Link>
                  </VStack>
                </HStack>
                <HStack align="start">
                  <TbKey />
                  <VStack align="left" spacing="0">
                    <Link color="#2c698d">User1</Link>
                    <Text>3 days</Text>
                    <Link color="#2c698d">more info</Link>
                  </VStack>
                </HStack>
              </Box>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardHeader>
              <Flex align="center" gap="3">
                <Flex align="center" gap="1">
                  <BiUser fontSize="30px" />
                  <Text fontSize="14px">Online user (2)</Text>
                </Flex>
                <Link
                  bgColor="#2c698d"
                  borderRadius="30px"
                  color="white"
                  fontSize="14px"
                  w="60px"
                  size="sm"
                  textAlign="center"
                  h="fit-content"
                >
                  See all
                </Link>
              </Flex>
            </CardHeader>
            <CardBody>
              <VStack align="start">
                <Flex align="center" gap="2">
                  <Box position="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt="img-user"
                      w="50px"
                      h="50px"
                      objectFit="cover"
                    />

                    <Box position="absolute" color="green" bottom="0" right="0">
                      <BsCircleFill />
                    </Box>
                  </Box>
                  <Text align="left">User1</Text>
                  <Spacer />
                  <Button bgCollor="#2c698d" colorScheme="blue" size="sm">
                    contact
                  </Button>
                </Flex>
                <Flex align="center" gap="2">
                  <Box position="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt="img-user"
                      w="50px"
                      h="50px"
                      objectFit="cover"
                    />

                    <Box position="absolute" color="green" bottom="0" right="0">
                      <BsCircleFill />
                    </Box>
                  </Box>
                  <Text align="left">User2</Text>
                  <Spacer />
                  <Button bgCollor="#2c698d" colorScheme="blue" size="sm">
                    contact
                  </Button>
                </Flex>
              </VStack>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardHeader>
              <Flex align="center" gap="3">
                <Flex align="center" gap="1">
                  <TfiAnnouncement fontSize="30px" />
                  <Text fontSize="14px">Announcement</Text>
                </Flex>
                <Link
                  bgColor="#2c698d"
                  borderRadius="30px"
                  color="white"
                  fontSize="14px"
                  w="60px"
                  size="sm"
                  textAlign="center"
                  h="fit-content"
                >
                  See all
                </Link>
              </Flex>
            </CardHeader>
            <CardBody>
              <Box>
                <HStack align="start">
                  <TfiCalendar />
                  <VStack align="left" spacing="0">
                    <Text fontWeight="medium">
                      Upacara peringatan Hari Pancasila
                    </Text>
                    <Text>Memakai baju batik</Text>
                  </VStack>
                </HStack>
              </Box>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Box>
  );
};

const DashboardPage = () => {
  return (
    <Sidebar>
      <Dashboard />
    </Sidebar>
  );
};

export default DashboardPage;
