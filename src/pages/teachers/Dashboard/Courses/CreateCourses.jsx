import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Sidebar from '../../../../components/teachers/Sidebar';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const CreateCourses = () => {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState('');
  return (
    <Box>
      <Box my="5">
        <Link
          color="#2c698d"
          fontSize="14px"
          onClick={() => navigate('/teacher/courses')}
        >
          <ChevronLeftIcon />
          Back to Course
        </Link>
      </Box>
      <Container>
        <FormControl>
          <FormLabel>Course name</FormLabel>
          <Input
            type="text"
            placeholder="e.g English"
            onChange={e => setCourseName(e.target.value)}
          />
        </FormControl>
        <Flex justify="right">
          <Button
            rightIcon={<ChevronRightIcon fontSize="20px" />}
            size="sm"
            w="30%"
            my="5"
            color="white"
            bgColor="#2c698d"
            colorScheme="blue"
            onClick={() => navigate(`/teacher/courses/${courseName}`)}
          >
            Confirm
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
const CreateCoursesPage = () => {
  return (
    <Sidebar>
      <CreateCourses />
    </Sidebar>
  );
};
export default CreateCoursesPage;
