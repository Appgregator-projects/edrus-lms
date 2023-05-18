import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
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

const ModalQuiz = props => {
  const { isOpen, onClose, setModals } = props;
  const [file, setFile] = useState(null);
  const handleChange = file => {
    setFile(file);
  };

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
          <ModalHeader>Add Quiz</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="left">
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input type="text" placeholder="e.g Quiz for mid semester" />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input type="text" placeholder="Description of quiz" />
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

export default ModalQuiz;
