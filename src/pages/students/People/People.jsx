import React from 'react';
import Header from '../../../components/students/Header';
import Footer from '../../../components/students/Footer';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const People = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Box minH="71.8vh" p="10">
        <Wrap justify="center">
          <WrapItem>
            <Card maxW="sm">
              <CardBody onClick={() => navigate('/profile/1')} cursor="pointer">
                <Image
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  objectFit="contain"
                  h="250px"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">User1</Heading>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  w="100%"
                  bgColor="#2c698d"
                >
                  Follow
                </Button>
              </CardFooter>
            </Card>
          </WrapItem>
          <WrapItem>
            <Card maxW="sm">
              <CardBody onClick={() => navigate('/profile/2')} cursor="pointer">
                <Image
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  h="250px"
                  objectFit="contain"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">User2</Heading>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  w="100%"
                  bgColor="#2c698d"
                >
                  Follow
                </Button>
              </CardFooter>
            </Card>
          </WrapItem>
          <WrapItem>
            <Card maxW="sm">
              <CardBody onClick={() => navigate('/profile/3')} cursor="pointer">
                <Image
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  h="250px"
                  objectFit="contain"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">User3</Heading>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  w="100%"
                  bgColor="#2c698d"
                >
                  Follow
                </Button>
              </CardFooter>
            </Card>
          </WrapItem>
          <WrapItem>
            <Card maxW="sm">
              <CardBody onClick={() => navigate('/profile/4')} cursor="pointer">
                <Image
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  h="250px"
                  objectFit="contain"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">User4</Heading>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button
                  bgColor="#2c698d"
                  variant="solid"
                  colorScheme="blue"
                  w="100%"
                >
                  Follow
                </Button>
              </CardFooter>
            </Card>
          </WrapItem>
        </Wrap>
      </Box>
      <Footer />
    </>
  );
};

export default People;
