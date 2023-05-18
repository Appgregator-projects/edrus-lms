import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Flex,
  //   Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../../../../components/teachers/Sidebar';
import RichTextEditor from '../../../../components/teachers/Summernote';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['MP4', 'PPTX', 'PDF'];
const fileTypesQuiz = ['PDF', 'JPG', 'JPEG'];
const CreateLessons = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const handleChange = file => {
    setFile(file);
  };
  const [quiz, setQuiz] = useState(false);
  const [lesson, setLesson] = useState(0);

  console.log(lesson);

  return (
    <>
      <Box>
        <Box my="5">
          <Link color="#2c698d" fontSize="14px" onClick={() => navigate(-1)}>
            <ChevronLeftIcon />
            Back
          </Link>
        </Box>
        <VStack align="left">
          <Card p="5">
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input type="text" placeholder="e.g Present tense" />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input type="text" placeholder="Description of Lesson" />
            </FormControl>
            <FormControl>
              <FormLabel>Content</FormLabel>
              <Box my="5">
                <FileUploader
                  multiple={true}
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                />
              </Box>
              <Text fontSize="12px">
                {file ? `File name: ${file[0].name}` : 'no files uploaded yet'}
              </Text>
              <RichTextEditor />
            </FormControl>
            <Checkbox my="5" onChange={() => setQuiz(!quiz)}>
              Add Quiz
            </Checkbox>
            {quiz ? (
              <>
                <Text>Drop a Quiz</Text>
                <FileUploader
                  multiple={true}
                  handleChange={handleChange}
                  name="file"
                  types={fileTypesQuiz}
                />
                <Text fontSize="12px">
                  {file
                    ? `File name: ${file[0].name}`
                    : 'no files uploaded yet'}
                </Text>
              </>
            ) : (
              <></>
            )}
          </Card>

          {lesson >= 1 ? (
            Array.from(Array(lesson), (e, i) => (
              <Box key={i}>
                <Flex align="center" justify="space-between">
                  <Divider borderColor="#2c698d" w="45%" />
                  <Link fontSize="12px">{i + 1}</Link>
                  <Divider borderColor="#2c698d" w="45%" />
                </Flex>
                <Card p="5" marginY="30px">
                  <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input type="text" placeholder="e.g Present tense" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Input type="text" placeholder="Description of Lesson" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Content</FormLabel>
                    <Box my="5">
                      <FileUploader
                        multiple={true}
                        handleChange={handleChange}
                        name="file"
                        types={fileTypes}
                      />
                    </Box>
                    <Text fontSize="12px">
                      {file
                        ? `File name: ${file[0].name}`
                        : 'no files uploaded yet'}
                    </Text>
                    <RichTextEditor />
                  </FormControl>
                  <Checkbox onChange={() => setQuiz(!quiz)} my="5">
                    Add Quiz
                  </Checkbox>
                  {quiz ? (
                    <>
                      <Text>Drop a Quiz</Text>
                      <FileUploader
                        multiple={true}
                        handleChange={handleChange}
                        name="file"
                        types={fileTypesQuiz}
                      />
                      <Text fontSize="12px">
                        {file
                          ? `File name: ${file[0].name}`
                          : 'no files uploaded yet'}
                      </Text>
                    </>
                  ) : (
                    <></>
                  )}
                </Card>
              </Box>
            ))
          ) : (
            <></>
          )}
          <Flex align="center" justify="space-between">
            <Divider borderColor="#2c698d" w="45%" />

            <Link fontSize="12px" onClick={() => setLesson(lesson + 1)}>
              Add Lessons
            </Link>
            <Divider borderColor="#2c698d" w="45%" />
          </Flex>
          <Flex justify="right" w="100%">
            <Button
              size="sm"
              w="10%"
              color="white"
              bgColor="#2c698d"
              colorScheme="blue"
            >
              Submit
            </Button>
          </Flex>
        </VStack>
      </Box>
    </>
  );
};

const CreateLessonsPage = () => {
  return (
    <Sidebar>
      <CreateLessons />
    </Sidebar>
  );
};
export default CreateLessonsPage;
