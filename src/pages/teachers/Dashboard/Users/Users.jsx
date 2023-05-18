import React from 'react';
import Sidebar from '../../../../components/teachers/Sidebar';
import {
  Box,
  Button,
  Checkbox,
  Flex,
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
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tag,
  TagLabel,
  TagLeftIcon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { AddIcon, SearchIcon } from '@chakra-ui/icons';
import { TfiPencil } from 'react-icons/tfi';
import { FiMoreHorizontal } from 'react-icons/fi';

const User = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Filters</Tab>
          <Tab>Advance search</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box>
              <Box>
                <Flex gap="3">
                  <InputGroup w="fit-content">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<SearchIcon color="gray.300" />}
                    />
                    <Input type="search-course" placeholder="Search" />
                  </InputGroup>
                  <Select w="15%">
                    <option>Course</option>
                    <option>Course: pew</option>
                  </Select>
                  <Select w="15%">
                    <option>Date</option>
                    <option>New users today</option>
                    <option>New users yesterday</option>
                    <option>New users last 7 days</option>
                    <option>New users last 30 days</option>
                    <option>Active users today</option>
                    <option>Active users yesterday</option>
                    <option>Active users last 7 days</option>
                    <option>Active users last 30 days</option>
                  </Select>
                  <Select w="15%">
                    <option>Role</option>
                    <option></option>
                  </Select>
                  <Select w="15%">
                    <option>Status</option>
                    <option>Suspend</option>
                    <option>Paying</option>
                    <option>Non-paying</option>
                    <option>Never logged in</option>
                    <option>Pending verification</option>
                  </Select>
                </Flex>
                <Tag variant="subtle" colorScheme="gray" size="sm" my="2">
                  <TagLeftIcon boxSize="12px" as={AddIcon} />
                  <TagLabel>tag filter</TagLabel>
                </Tag>
              </Box>

              <Link color="#2c698d">Rest filters</Link>
            </Box>
            <Tag color="white" bgColor="#2c698d" my="5">
              Showing 1 of 2 users out of 2
            </Tag>
          </TabPanel>
          <TabPanel>
            <Box>
              <Flex gap="3">
                <Text>Users who have user name that contains</Text>
                <Input type="text" placeholder="e.g. Nick" w="20%" />
                <Text>and are</Text>
                <Select w="20%">
                  <option>not suspended</option>
                  <option>suspended</option>
                </Select>
              </Flex>
              <Tag variant="subtle" colorScheme="gray" size="sm" my="2">
                <TagLeftIcon boxSize="12px" as={AddIcon} />
                <TagLabel>Add filter</TagLabel>
              </Tag>
            </Box>
            <Flex gap="2">
              <Button bgColor="#2c698d" colorScheme="blue" size="sm">
                Apply filters
              </Button>
              <Button variant="ghost" size="sm">
                Remove filters
              </Button>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>
                  <Checkbox />
                </Th>
                <Th>User</Th>
                <Th>Last Login</Th>
                <Th>Registered</Th>
                <Th>Courses</Th>
                <Th>Tags</Th>
                <Th>Manage</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox />
                </Td>
                <Td>
                  <Flex gap="2" align="center">
                    <Image
                      src="https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png"
                      alt="img-user"
                      w="40px"
                      h="40px"
                    />
                    <VStack align="left">
                      <Text>User1</Text>
                      <Text
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        w="200px"
                      >
                        user1@email.com
                      </Text>
                    </VStack>
                  </Flex>
                </Td>
                <Td>07 May 2023 15:57:44</Td>
                <Td>04 May 2023 06:58:10</Td>
                <Td>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-W6CbBQEEsX3mrCgYAOdTY0wvYqhZtkOd79QvMcQAsg&s"
                    alt="img-course"
                    w="100px"
                    maxH="200px"
                  />
                </Td>
                <Td></Td>
                <Td>
                  <Flex gap="2">
                    <Tooltip label="Edit" fontSize="md">
                      <Button size="sm">
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
              <Tr>
                <Td>
                  <Checkbox />
                </Td>
                <Td>
                  <Flex gap="2" align="center">
                    <Image
                      src="https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png"
                      alt="img-user"
                      w="40px"
                      h="40px"
                    />
                    <VStack align="left">
                      <Text>User2</Text>
                      <Text
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        w="200px"
                      >
                        user2@email.com
                      </Text>
                    </VStack>
                  </Flex>
                </Td>
                <Td>07 May 2023 15:57:44</Td>
                <Td>04 May 2023 06:58:10</Td>
                <Td>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-W6CbBQEEsX3mrCgYAOdTY0wvYqhZtkOd79QvMcQAsg&s"
                    alt="img-course"
                    w="100px"
                    maxH="200px"
                  />
                </Td>
                <Td></Td>
                <Td>
                  <Flex gap="2">
                    <Tooltip label="Edit" fontSize="md">
                      <Button size="sm">
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
        </TableContainer>
      </Box>
    </>
  );
};

const UserPage = () => {
  return (
    <Sidebar>
      <User />
    </Sidebar>
  );
};
export default UserPage;
