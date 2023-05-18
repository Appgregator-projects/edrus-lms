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
import React from 'react';
import Sidebar from '../../../../components/teachers/Sidebar';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const EditCourses = () => {
  const navigate = useNavigate();
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
          <Input type="text" placeholder="e.g English" />
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
            onClick={() => navigate('/teacher/lessons/create')}
          >
            Save
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
const EditCoursesPage = () => {
  return (
    <Sidebar>
      <EditCourses />
    </Sidebar>
  );
};
export default EditCoursesPage;
