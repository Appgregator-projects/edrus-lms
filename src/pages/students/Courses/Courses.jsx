import {
  Box,
  Circle,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  ListItem,
  Progress,
  StackDivider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Header from '../../../components/students/Header';
import {
  BsCircle,
  BsFileCheck,
  BsFileText,
  BsJournalBookmarkFill,
} from 'react-icons/bs';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Footer from '../../../components/students/Footer';

const Courses = () => {
  return (
    <>
      <Header />
      <Box w="90%" m="auto" my="10">
        <Heading fontSize="48px" fontWeight="normal">
          Free Course Demo
        </Heading>
        <Grid
          bgColor="#f0f3f6"
          p="2"
          px="3"
          borderRadius="5"
          my="5"
          fontSize="12px"
          templateColumns="73% 27%"
        >
          <GridItem>
            <Progress
              mt="1.5"
              colorScheme="green"
              size="sm"
              value={37}
              borderRadius={5}
            />
          </GridItem>
          <GridItem>
            <Flex align="center" gap="1" justify="right">
              <Text color="green" textTransform="uppercase" fontWeight="bold">
                37% complete
              </Text>
              <Text>Last activity on May 3, 2023 12:20 am</Text>
            </Flex>
          </GridItem>
        </Grid>
        <Tabs>
          <TabList>
            <Tab>
              <Flex align="center" gap="2">
                <BsFileText />
                <Text>Course</Text>
              </Flex>
            </Tab>
            <Tab>
              <Flex align="center" gap="2">
                <BsJournalBookmarkFill />
                <Text>Materials</Text>
              </Flex>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Text color="green" fontWeight="bold" fontStyle="italic">
                You enrolled in this course
              </Text>
              <Flex flexDir="column" w="100%" align="center" my="5">
                <Divider bgColor="black" height="1px" w="10%" />
              </Flex>

              <Text fontWeight="bold" fontSize="20px">
                Course Description
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                voluptatem aperiam culpa a quasi ducimus.
              </Text>
              <Text fontWeight="bold" my="5">
                Key concepts covered include:
              </Text>
              <UnorderedList mx="10">
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
              <Text my="5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                molestias id voluptatum minima? Ab natus reiciendis rerum in
                quaerat laboriosam ducimus, necessitatibus beatae provident,
                libero hic sapiente doloremque illo fugiat.
              </Text>
            </TabPanel>
            <TabPanel>
              <Text>No additional materials are needed for this course.</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Box>
          <Flex justify="space-between" align="center" my="5">
            <Text fontWeight="medium" fontSize="24px">
              Course Content
            </Text>
            <Flex
              bgColor="#235af4"
              color="white"
              fontWeight="medium"
              borderRadius="25px"
              align="center"
              justify="center"
              w="100px"
              gap="1"
              h="35px"
              fontSize="12px"
            >
              <ChevronDownIcon fontSize="20px" />
              <Text>Expand All</Text>
            </Flex>
          </Flex>
          <Box>
            <Text fontWeight="medium" fontSize="18px" mb="5">
              Section 1
            </Text>
            <Flex flexDir="column" gap="5">
              <Box border="2px solid #e2e7ed" borderRadius="5" p="5">
                <Flex justify="space-between" align="center">
                  <VStack>
                    <Flex gap="2" align="center">
                      <BsCircle />
                      <Text>Lorem ipsum dolor sit amet.</Text>
                    </Flex>
                    <HStack
                      divider={<StackDivider />}
                      fontSize="13.2px"
                      color="#728188"
                      fontWeight="bold"
                    >
                      <Text>2 Topics</Text>
                      <Text>1 Quiz</Text>
                    </HStack>
                  </VStack>
                  <Flex fontWeight="bold" align="center" gap="1">
                    <Box>
                      <Circle bgColor="#235af4">
                        <ChevronDownIcon color="white" fontSize="18px" />
                      </Circle>
                    </Box>
                    <Text color="#235af4" fontSize="12px">
                      Expand
                    </Text>
                  </Flex>
                </Flex>
              </Box>
              <Box border="2px solid #e2e7ed" borderRadius="5" p="5">
                <Flex gap="2" align="center">
                  <BsCircle />
                  <Text>Lorem, ipsum dolor.</Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Text fontWeight="medium" fontSize="18px" my="5">
              Section 2
            </Text>
            <Flex flexDir="column" gap="5">
              <Box border="2px solid #e2e7ed" borderRadius="5" p="5">
                <Flex gap="2" align="center">
                  <BsCircle />
                  <Text>Lorem ipsum dolor sit.</Text>
                </Flex>
              </Box>
              <Box border="2px solid #e2e7ed" borderRadius="5" p="5">
                <Flex gap="2" align="center">
                  <BsCircle />
                  <Text>Lorem ipsum dolor sit amet consectetur.</Text>
                </Flex>
              </Box>
              <Box border="2px solid #e2e7ed" borderRadius="5" p="5">
                <Flex gap="2" align="center">
                  <BsCircle />
                  <Text>Lorem, ipsum.</Text>
                </Flex>
              </Box>
              <Box border="2px solid #e2e7ed" borderRadius="5" p="5">
                <Flex gap="2" align="center">
                  <BsFileCheck fontSize="18px" />
                  <Text>Final Quiz </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Courses;
