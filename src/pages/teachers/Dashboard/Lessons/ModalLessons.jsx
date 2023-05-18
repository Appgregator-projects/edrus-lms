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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import RichTextEditor from '../../../../components/teachers/Summernote';
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['MP4', 'PPTX', 'PDF'];
const fileTypesAssignment = ['PDF', 'JPG', 'JPEG'];

const ModalLessons = props => {
  const { isOpen, onClose, setModals } = props;
  const [file, setFile] = useState(null);
  const handleChange = file => {
    setFile(file);
  };
  const [assignment, setAssignment] = useState(false);
  const [lesson, setLesson] = useState(0);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setModals('');
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Lesson</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="left">
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
              <Checkbox my="5" onChange={() => setAssignment(!assignment)}>
                Add Assignment
              </Checkbox>
              {assignment ? (
                <>
                  <Text>Drop Assignment</Text>
                  <FileUploader
                    multiple={true}
                    handleChange={handleChange}
                    name="file"
                    types={fileTypesAssignment}
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
                        <Input
                          type="text"
                          placeholder="Description of Lesson"
                        />
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
                      <Checkbox
                        onChange={() => setAssignment(!assignment)}
                        my="5"
                      >
                        Add Assignment
                      </Checkbox>
                      {assignment ? (
                        <>
                          <Text>Drop Assignment</Text>
                          <FileUploader
                            multiple={true}
                            handleChange={handleChange}
                            name="file"
                            types={fileTypesAssignment}
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
                <Divider borderColor="#2c698d" w="40%" />

                <Link fontSize="12px" onClick={() => setLesson(lesson + 1)}>
                  Add Lessons
                </Link>
                <Divider borderColor="#2c698d" w="40%" />
              </Flex>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                setModals('');
              }}
            >
              Close
            </Button>
            <Button colorScheme="green">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalLessons;
