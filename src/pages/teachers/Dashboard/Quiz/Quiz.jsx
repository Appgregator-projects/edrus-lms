import {
  Box,
  Checkbox,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../../../../components/teachers/Sidebar';
import { SearchIcon } from '@chakra-ui/icons';

const Quiz = () => {
  return (
    <>
      <Box>
        <Tabs>
          <TabList>
            <Tab>All Quiz</Tab>
            <Tab>Submitted Quiz</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Flex gap="3" my="5">
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
                  <option>All Lessons</option>
                  <option>New Lesson</option>
                </Select>
                <Select w="fit-content">
                  <option>All Topic</option>
                  <option>New Topic</option>
                </Select>
                <Select w="fit-content">
                  <option>All Status</option>
                  <option>Completed</option>
                  <option>Not Completed</option>
                </Select>
              </Flex>
              <TableContainer>
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th>
                        <Checkbox />
                      </Th>
                      <Th>Title</Th>
                      <Th>Assigned Course</Th>
                      <Th>Assigned Lesson</Th>
                      <Th>Assigned Topic</Th>
                      <Th>Date</Th>
                      <Th>Submitted</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        <Checkbox />
                      </Td>
                      <Td>Mid Semester Test</Td>
                      <Td>English</Td>
                      <Td>Grammar</Td>
                      <Td>Present tense</Td>
                      <Td>{new Date().toLocaleString() + ''}</Td>
                      <Td>9 / 10</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Checkbox />
                      </Td>
                      <Td>Mid Semester Test</Td>
                      <Td>English</Td>
                      <Td>Grammar</Td>
                      <Td>Past tense</Td>
                      <Td>{new Date().toLocaleString() + ''}</Td>
                      <Td>
                        <Tag colorScheme="green">Completed</Tag>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <Flex gap="3" my="5">
                <InputGroup w="fit-content">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                  />
                  <Input type="search-course" placeholder="Search" />
                </InputGroup>
                <Select w="fit-content">
                  <option>All Title</option>
                  <option>New Title</option>
                </Select>
                <Select w="fit-content">
                  <option>All Courses</option>
                  <option>New Courses</option>
                </Select>
                <Select w="fit-content">
                  <option>All Lessons</option>
                  <option>New Lesson</option>
                </Select>
              </Flex>
              <TableContainer>
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th>
                        <Checkbox />
                      </Th>
                      <Th>Submitted By</Th>
                      <Th>Title</Th>
                      <Th>Assigned Course</Th>
                      <Th>Assigned Lesson</Th>
                      <Th>Date</Th>
                      <Th>Score</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        <Checkbox />
                      </Td>
                      <Td>User1</Td>
                      <Td>Quiz mid-term</Td>
                      <Td>English</Td>
                      <Td>Grammar</Td>
                      <Td>{new Date().toLocaleString() + ''}</Td>
                      <Td>9 / 10</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Checkbox />
                      </Td>
                      <Td>User2</Td>
                      <Td>Quiz mid-term</Td>
                      <Td>English</Td>
                      <Td>Grammar</Td>
                      <Td>{new Date().toLocaleString() + ''}</Td>
                      <Td>
                        <Link>Add score</Link>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

const QuizPage = () => {
  return (
    <Sidebar>
      <Quiz />
    </Sidebar>
  );
};
export default QuizPage;
