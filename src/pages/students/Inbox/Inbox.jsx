import React from 'react';
import Header from '../../../components/students/Header';
import Footer from '../../../components/students/Footer';

import {
  Box,
  Button,
  CloseButton,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  Textarea,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { BsFillPencilFill } from 'react-icons/bs';
import { SearchIcon } from '@chakra-ui/icons';
import NewMessage from './NewMessage';

const Inbox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Header />
      <Grid minH="71.8vh" templateColumns="30% 70%">
        <GridItem bgColor="#bae8e8">
          <Box p="5">
            <Button
              w="100%"
              fontSize="14px"
              leftIcon={<BsFillPencilFill />}
              bgColor="#2c698d"
              variant="solid"
              color="white"
              onClick={onOpen}
              colorScheme="blue"
            >
              New message
            </Button>
            <InputGroup my="5">
              <InputRightElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                type="tel"
                placeholder="Search for messages"
                bgColor="white"
                fontSize="14px"
              />
            </InputGroup>
          </Box>
          <Box bgColor="#e3f6f5" pos="relative">
            <Flex w="100%" align="center" justify="right" pos="absolute">
              <CloseButton size="sm" />
            </Flex>
            <Flex fontSize="14px" gap="2" p="5">
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                w="50px"
                h="50px"
                objectFit="contain"
                borderRadius="100%"
              />
              <VStack align="left" w="64%">
                <Text
                  fontWeight="medium"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  w="100%"
                >
                  User
                </Text>
                <Text
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  w="100%"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque eum nostrum ipsa cupiditate dolores labore minus
                  cum recusandae ipsum excepturi!
                </Text>
              </VStack>
              <Text fontSize="12px" fontWeight="medium">
                20 hours
              </Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem p="5">
          <Divider my="5" />
          <Textarea h="100px" />
          <Flex align="center" justify="right" mt="5">
            <Button
              bgColor="#2c698d"
              color="white"
              w="15%"
              fontSize="14px"
              colorScheme="blue"
            >
              Send
            </Button>
          </Flex>
          <Divider my="5" />
          <Flex fontSize="14px" gap="5" p="5">
            <Box w="6%" h="100%" display="flex" justify="center">
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                borderRadius="100%"
                objectFit="contain"
                w="50px"
                h="50px"
              />
            </Box>
            <VStack align="left" w="88%">
              <Link>User</Link>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque eum nostrum ipsa cupiditate dolores labore minus cum
                recusandae ipsum excepturi!
              </Text>
            </VStack>
            <Box w="6%">
              <Text fontSize="12px" fontWeight="medium">
                20 hours
              </Text>
            </Box>
          </Flex>
          <Flex my="3" w="100%" justify="right" align="center">
            <Divider w="90%" />
          </Flex>
          <Flex fontSize="14px" gap="5" p="5">
            <Box w="6%" h="100%" display="flex" justify="center">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                borderRadius="100%"
                objectFit="contain"
                w="50px"
                h="50px"
              />
            </Box>
            <Flex align="left" flexDir="column" w="88%">
              <Link>User 2</Link>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum laboriosam hic repellendus in illo, eaque eos corrupti,
                aspernatur esse, impedit vero rem quae sapiente ipsam! Inventore
                quidem molestiae praesentium. Officia.
              </Text>
            </Flex>
            <Box w="6%">
              <Text fontSize="12px" fontWeight="medium">
                20 hours
              </Text>
            </Box>
          </Flex>
          <Flex my="3" w="100%" justify="right" align="center">
            <Divider w="90%" />
          </Flex>
          <Flex fontSize="14px" gap="5" p="5">
            <Box w="6%" h="100%" display="flex" justify="center">
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                w="50px"
                h="50px"
                objectFit="contain"
                borderRadius="100%"
              />
            </Box>
            <VStack align="left" w="88%">
              <Link>User</Link>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                aliquid molestias quia sapiente saepe ducimus iste, cumque
                molestiae officiis accusantium delectus aliquam est vel nemo
                doloremque, tempora vitae corporis numquam porro similique
                commodi inventore quod. Rerum, magni? Deleniti numquam quisquam
                doloribus aliquid sequi asperiores eligendi, totam, mollitia
                sunt natus provident?
              </Text>
            </VStack>
            <Box w="6%">
              <Text fontSize="12px" fontWeight="medium">
                20 hours
              </Text>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
      <Footer />
      <NewMessage onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Inbox;
