import React from 'react';
import Sidebar from '../../../../components/teachers/Sidebar';
import {
  Box,
  Button,
  Card,
  Circle,
  Divider,
  Flex,
  HStack,
  Heading,
  Link,
  StackDivider,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import {
  AddIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
} from '@chakra-ui/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { BsCircle, BsFileCheck, BsFileText } from 'react-icons/bs';
import { useState } from 'react';
import ModalSections from '../Sections/ModalSections';
import ModalQuiz from '../Quiz/ModalQuiz';
import ModalLessons from '../Lessons/ModalLessons';

const SingleCourse = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id, 'ni cn');
  const [expand, setExpand] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modals, setModals] = useState('');
  const [section, setSection] = useState([]);
  const saveSection = data => {
    let arr = [];
    arr.push({ ...data });
    setSection([...section, ...arr]);
    console.log(arr, 'ni arr');
  };
  console.log(section, 'ni sec');
  return (
    <>
      <Box my="5">
        <Link color="#2c698d" fontSize="14px" onClick={() => navigate(-1)}>
          <ChevronLeftIcon />
          Back
        </Link>
      </Box>
      <Box>
        <Flex gap="2">
          <Heading fontWeight="bold" textTransform="capitalize">
            {id}
          </Heading>
        </Flex>
        {section.length === 0 ? (
          <Card p="5">
            <Link
              fontSize="12px"
              onClick={() => {
                setModals('section');
                onOpen();
              }}
            >
              <AddIcon mx="1" />
              Add Section
            </Link>
          </Card>
        ) : (
          <Box>
            {section.map((dataSection, id) => (
              <>
                <Card p="5" my="5">
                  <Flex justify="space-between" align="center">
                    <Flex gap="2" align="center" my="2">
                      <Flex align="center" gap="2">
                        <BsCircle />
                        <Flex flexDir="column">
                          <Text textTransform="capitalize" m="0">
                            {dataSection.title}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
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
                  {expand ? (
                    <Box>
                      <Box>
                        <Flex align="center" gap="2">
                          <BsFileText />
                          <Text m="0">Lessons</Text>
                        </Flex>
                      </Box>
                      <Box px="5">
                        {/* <Flex gap="2" align="center" my="2">
                          <Flex align="center" gap="2">
                            <BsCircle />
                            <Flex flexDir="column">
                              <Text m="0">Present tense</Text>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex gap="2" align="center" my="2">
                          <BsCircle />
                          <Flex flexDir="column">
                            <Text m="0">Past tense</Text>
                          </Flex>
                        </Flex> */}

                        <Link
                          fontSize="12px"
                          onClick={() => {
                            onOpen();
                            setModals('lesson');
                          }}
                        >
                          <AddIcon mx="2" />
                          Add Lesson
                        </Link>
                      </Box>
                      <Box my="5">
                        <Flex align="center" gap="2">
                          <BsFileText />
                          <Text m="0">Quiz</Text>
                        </Flex>
                      </Box>
                      <Box px="5">
                        {/* <Flex gap="2" align="center" my="2">
                          <BsFileCheck fontSize="18px" />
                          <Text m="0">Final Quiz </Text>
                        </Flex> */}
                        <Link
                          fontSize="12px"
                          onClick={() => {
                            onOpen();
                            setModals('quiz');
                          }}
                        >
                          <AddIcon mx="2" />
                          Add Quiz
                        </Link>
                      </Box>
                    </Box>
                  ) : (
                    <></>
                  )}
                </Card>
              </>
            ))}
            <Link
              fontSize="12px"
              onClick={() => {
                setModals('section');
                onOpen();
              }}
            >
              <AddIcon mx="2" />
              Add Section
            </Link>{' '}
          </Box>
        )}
        {/* <Card p="5" gap="5" display="flex" m="0">
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
                    <Text m="0">2 Lessons</Text>
                    <Text m="0">1 Quiz</Text>
                  </HStack>
                </Flex>
              </Flex>
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
          {expand ? (
            <Box>
              <Box>
                <Flex align="center" gap="2">
                  <BsFileText />
                  <Text m="0">Lessons</Text>
                </Flex>
              </Box>
              <Box px="5">
                <Flex gap="2" align="center" my="2">
                  <Flex align="center" gap="2">
                    <BsCircle />
                    <Flex flexDir="column">
                      <Text m="0">Present tense</Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex gap="2" align="center" my="2">
                  <BsCircle />
                  <Flex flexDir="column">
                    <Text m="0">Past tense</Text>
                  </Flex>
                </Flex>

                <Link
                  fontSize="12px"
                  onClick={() => {
                    onOpen();
                    setModals('lessons');
                  }}
                >
                  <AddIcon mx="2" />
                  Add Lesson
                </Link>
              </Box>
              <Box my="5">
                <Flex align="center" gap="2">
                  <BsFileText />
                  <Text m="0">Quiz</Text>
                </Flex>
              </Box>
              <Box px="5">
                <Flex gap="2" align="center" my="2">
                  <BsFileCheck fontSize="18px" />
                  <Text m="0">Final Quiz </Text>
                </Flex>
                <Link
                  fontSize="12px"
                  onClick={() => {
                    onOpen();
                    setModals('quiz');
                  }}
                >
                  <AddIcon mx="2" />
                  Add Quiz
                </Link>
              </Box>
            </Box>
          ) : (
            <></>
          )}
          <Link
            fontSize="12px"
            onClick={() => {
              setModals('Section');
              onOpen();
            }}
          >
            <AddIcon mx="2" />
            Add Section
          </Link>
        </Card> */}
      </Box>
      <Flex my="5" align="center" justify="right">
        <Button
          colorScheme="blue"
          color="white"
          bgColor="#2c698d"
          onClick={() => navigate('/teacher/courses')}
        >
          Done
        </Button>
      </Flex>
      {modals === 'section' ? (
        <ModalSections
          isOpen={isOpen}
          onClose={onClose}
          setModals={setModals}
          setSection={setSection}
          saveSection={saveSection}
        />
      ) : modals === 'lesson' ? (
        <ModalLessons isOpen={isOpen} onClose={onClose} setModals={setModals} />
      ) : modals === 'quiz' ? (
        <ModalQuiz isOpen={isOpen} onClose={onClose} setModals={setModals} />
      ) : (
        <></>
      )}
    </>
  );
};

const SingleCoursePage = () => {
  return (
    <Sidebar>
      <SingleCourse />
    </Sidebar>
  );
};
export default SingleCoursePage;
