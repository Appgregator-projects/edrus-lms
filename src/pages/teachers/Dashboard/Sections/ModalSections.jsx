import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const ModalSections = props => {
  const { isOpen, onClose, setModals, saveSection } = props;
  const [sec, setSec] = useState({
    title: '',
    description: '',
  });
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
          <ModalHeader>Add Section</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Sections Title</FormLabel>
              <Input
                type="text"
                placeholder="e.g Grammar"
                onChange={e => setSec({ ...sec, title: e.target.value })}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Description of Section"
                onChange={e => setSec({ ...sec, description: e.target.value })}
              />
            </FormControl>
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
            <Button
              colorScheme="green"
              onClick={() => {
                saveSection(sec);

                onClose();
                setModals('');
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalSections;
