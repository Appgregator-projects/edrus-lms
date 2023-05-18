import {
  Box,
  Button,
  Checkbox,
  Flex,
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
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../../../../components/teachers/Sidebar';
import { TfiPencil } from 'react-icons/tfi';
import { FiMoreHorizontal } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { AddIcon, SearchIcon } from '@chakra-ui/icons';

const LessonsPages = () => {
  const navigate = useNavigate();
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
          <option>All lessons</option>
          <option>New lessons</option>
        </Select>
        <Select w="fit-content">
          <option>All authors</option>
          <option>New authors</option>
        </Select>
      </Flex>
      <Flex align="center" justify="space-between">
        <Tag color="white" bgColor="#2c698d" my="5">
          Showing 1 lessons
        </Tag>
        <Link
          my="5"
          color="#2c698d"
          fontSize="14px"
          onClick={() => navigate('/teacher/lessons/create')}
        >
          <AddIcon mx="2" />
          Add Lessons
        </Link>
      </Flex>
      <Box>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>
                  <Checkbox />
                </Th>
                <Th>Title</Th>
                <Th>Author</Th>
                <Th>Course</Th>
                <Th>Lessons</Th>
                <Th>Description</Th>
                <Th>Created</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox />
                </Td>
                <Td>Present Tense</Td>
                <Td>User1</Td>
                <Td>
                  <Link>English</Link>
                </Td>
                <Td>
                  <Link>Grammar</Link>
                </Td>
                <Td>We learn about present tense...</Td>
                <Td>{new Date().toLocaleString() + ''}</Td>
                <Td>
                  <Flex gap="2">
                    <Tooltip label="Edit" fontSize="md">
                      <Button
                        size="sm"
                        onClick={() => navigate('/teacher/lessons/edit')}
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
        </TableContainer>
      </Box>
    </>
  );
};

const Lessons = () => {
  return (
    <Sidebar>
      <LessonsPages />
    </Sidebar>
  );
};
export default Lessons;
