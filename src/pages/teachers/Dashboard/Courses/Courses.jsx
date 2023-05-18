import React from 'react';
import Sidebar from '../../../../components/teachers/Sidebar';
import {
  Box,
  Button,
  Card,
  CardBody,
  Circle,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Select,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  VStack,
} from '@chakra-ui/react';
import {
  AddIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  SearchIcon,
} from '@chakra-ui/icons';
import { TfiPencil } from 'react-icons/tfi';
import { FiMoreHorizontal } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { BsCircle, BsFileCheck, BsFileText } from 'react-icons/bs';
import { useState } from 'react';

const Courses = () => {
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);
  const [topic, setTopic] = useState(0);
  console.log(expand, 'n exp');
  return (
    <>
      <Flex gap="3">
        <InputGroup w="fit-content">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input type="search-course" placeholder="Search" />
        </InputGroup>
        <Select w="fit-content">
          <option>All courses</option>
          <option>New courses</option>
        </Select>
        <Select w="fit-content">
          <option>All categories</option>
          <option>New courses</option>
        </Select>
        <Select w="fit-content">
          <option>All authors</option>
          <option>New authors</option>
        </Select>
      </Flex>
      <Flex align="center" justify="space-between">
        <Tag color="white" bgColor="#2c698d" my="5">
          Showing 1 courses
        </Tag>
        <Link
          // bgColor="#2c698d"
          my="5"
          fontSize="14px"
          onClick={() => navigate('/teacher/courses/create')}
          // href="/sxx"
          // to="/teacher/courses/create"
        >
          <AddIcon mx="2" />
          Add New Course
        </Link>
      </Flex>
      <Box>
        <Flex
          gap="2"
          onClick={() => navigate('/teacher/courses/english')}
          cursor="pointer"
        >
          <Heading fontWeight="bold">English</Heading>
        </Flex>
        <Card p="5" gap="5" display="flex" m="0">
          <Flex justify="space-between" align="start">
            <Box>
              <Flex gap="2" align="center">
                <BsCircle />
                <Flex flexDir="column">
                  <Text m="0">Grammar</Text>
                  <HStack
                    divider={<StackDivider />}
                    fontSize="13.2px"
                    color="#728188"
                    fontWeight="bold"
                  >
                    <Text m="0">2 Topics</Text>
                    <Text m="0">1 Quiz</Text>
                  </HStack>
                </Flex>
              </Flex>
              {expand ? (
                <Box>
                  <Box p="5">
                    <Flex align="center" gap="2">
                      <BsFileText />
                      <Text m="0">Topics</Text>
                    </Flex>
                  </Box>
                  <Box px="5">
                    <Flex gap="2" align="center">
                      <BsCircle />
                      <Flex flexDir="column">
                        <Text m="0">Present tense</Text>
                      </Flex>
                    </Flex>
                    <Flex gap="2" align="center" my="2">
                      <BsCircle />
                      <Flex flexDir="column">
                        <Text m="0">Past tense</Text>
                      </Flex>
                    </Flex>
                  </Box>
                  <Box p="5">
                    <Flex align="center" gap="2">
                      <BsFileText />
                      <Text m="0">Quiz</Text>
                    </Flex>
                  </Box>
                  <Box p="5">
                    <Flex gap="2" align="center">
                      <BsFileCheck fontSize="18px" />
                      <Text m="0">Final Quiz </Text>
                    </Flex>
                  </Box>
                </Box>
              ) : (
                <></>
              )}
            </Box>
            {!expand ? (
              <Flex
                fontWeight="bold"
                align="center"
                gap="1"
                onClick={() => setExpand(true)}
                cursor="pointer"
                my="5"
              >
                <Box>
                  <Circle bgColor="#235af4">
                    <ChevronDownIcon color="white" fontSize="18px" />
                  </Circle>
                </Box>
                <Text color="#235af4" fontSize="12px" m="0">
                  Expand
                </Text>
              </Flex>
            ) : (
              <Flex
                fontWeight="bold"
                align="center"
                gap="1"
                onClick={() => setExpand(false)}
                cursor="pointer"
                my="5"
              >
                <Box>
                  <Circle bgColor="#235af4">
                    <ChevronUpIcon color="white" fontSize="18px" />
                  </Circle>
                </Box>
                <Text color="#235af4" fontSize="12px" m="0">
                  Collapse
                </Text>
              </Flex>
            )}
          </Flex>
        </Card>
        {/* {topic >= 1 ? (
          Array.from(Array(topic), (e, i) => (
            <Box key={i} my="5">
              <Flex gap="2">
                <Heading>01</Heading>
                <Heading fontWeight="bold">English</Heading>
              </Flex>
              <Card p="5" gap="5" display="flex" m="0">
                <Flex justify="space-between" align="start">
                  <Flex gap="2" align="center">
                    <BsCircle />
                    <Flex flexDir="column">
                      <Text m="0">Grammar</Text>
                      <HStack
                        divider={<StackDivider />}
                        fontSize="13.2px"
                        color="#728188"
                        fontWeight="bold"
                      >
                        <Text m="0">2 Topics</Text>
                        <Text m="0">1 Quiz</Text>
                      </HStack>
                    </Flex>
                  </Flex>
                </Flex>
                {expand ? (
                  <Box>
                    <Box p="5">
                      <Flex align="center" gap="2">
                        <BsFileText />
                        <Text m="0">Topics</Text>
                      </Flex>
                    </Box>
                    <Box px="5">
                      <Flex gap="2" align="center">
                        <BsCircle />
                        <Flex flexDir="column">
                          <Text m="0">Present tense</Text>
                        </Flex>
                      </Flex>
                      <Flex gap="2" align="center" my="2">
                        <BsCircle />
                        <Flex flexDir="column">
                          <Text m="0">Past tense</Text>
                        </Flex>
                      </Flex>
                    </Box>
                    <Flex align="center" justify="space-between">
                      <Divider borderColor="#2c698d" w="45%" />
                      <Link fontSize="12px">Add Topic</Link>
                      <Divider borderColor="#2c698d" w="45%" />
                    </Flex>
                    <Box p="5">
                      <Flex align="center" gap="2">
                        <BsFileText />
                        <Text m="0">Quiz</Text>
                      </Flex>
                    </Box>
                    <Box p="5">
                      <Flex gap="2" align="center">
                        <BsFileCheck fontSize="18px" />
                        <Text m="0">Final Quiz </Text>
                      </Flex>
                    </Box>
                    <Flex align="center" justify="space-between">
                      <Divider borderColor="#2c698d" w="45%" />
                      <Link fontSize="12px">Add Lessons</Link>
                      <Divider borderColor="#2c698d" w="45%" />
                    </Flex>
                  </Box>
                ) : (
                  <></>
                )}

                {!expand ? (
                  <Flex
                    fontWeight="bold"
                    align="center"
                    gap="1"
                    onClick={() => setExpand(true)}
                    cursor="pointer"
                    my="5"
                  >
                    <Box>
                      <Circle bgColor="#235af4">
                        <ChevronDownIcon color="white" fontSize="18px" />
                      </Circle>
                    </Box>
                    <Text color="#235af4" fontSize="12px" m="0">
                      Expand
                    </Text>
                  </Flex>
                ) : (
                  <Flex
                    fontWeight="bold"
                    align="center"
                    gap="1"
                    onClick={() => setExpand(false)}
                    cursor="pointer"
                    my="5"
                  >
                    <Box>
                      <Circle bgColor="#235af4">
                        <ChevronUpIcon color="white" fontSize="18px" />
                      </Circle>
                    </Box>
                    <Text color="#235af4" fontSize="12px" m="0">
                      Collapse
                    </Text>
                  </Flex>
                )}
              </Card>
            </Box>
          ))
        ) : (
          <></>
        )} */}

        {/* <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Author</Th>
                <Th>Categories</Th>
                <Th>Learners</Th>
                <Th>Created</Th>
                <Th>Updated</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-W6CbBQEEsX3mrCgYAOdTY0wvYqhZtkOd79QvMcQAsg&s"
                    alt="img-course"
                    w="100px"
                    maxH="200px"
                  />
                </Td>
                <Td>User1</Td>
                <Td>New Courses</Td>
                <Td>2</Td>
                <Td>02 Februari 2023</Td>
                <Td>08 Mei 2023</Td>
                <Td>
                  <Flex gap="2">
                    <Tooltip label="Edit" fontSize="md">
                      <Button
                        size="sm"
                        onClick={() => navigate('/teacher/courses/edit')}
                      >
                        <TfiPencil />
                      </Button>
                    </Tooltip>
                    <Popover islazy trigger={'hover'}>
                      <PopoverTrigger>
                        <Button size="sm">
                          <FiMoreHorizontal />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent bgColor="#2c698d" w="100%" color="white">
                        <PopoverArrow bgColor="#2c698d" />
                        <PopoverBody>
                          <Flex flexDir="column" gap="3">
                            <Link>Copy course URL</Link>
                            <Link>Copy course ID</Link>
                            <Link>Clone course</Link>
                            <Link>Delete course</Link>
                          </Flex>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer> */}
      </Box>
      {/* <Flex align="center" justify="space-between">
        <Divider borderColor="#2c698d" w="45%" />

        <Link fontSize="12px" onClick={() => setTopic(topic + 1)}>
          Add Courses
        </Link>
        <Divider borderColor="#2c698d" w="45%" />
      </Flex> */}
    </>
  );
};

const CoursesPages = () => {
  return (
    <Sidebar>
      <Courses />
    </Sidebar>
  );
};
export default CoursesPages;
