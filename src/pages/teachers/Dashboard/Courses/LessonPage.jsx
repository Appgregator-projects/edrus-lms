import React from 'react'
import Sidebar from '../../../../components/students/Sidebar'
import HeaderLesson from '../../../../components/students/HeaderLesson';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Divider, Flex, Heading, ListItem, Tag, Text, UnorderedList } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';

const LessonPage = () => {
    return (
        <Sidebar><Lesson /></Sidebar>
    )
};



const Lesson = () => {
    const {state} = useLocation();

    return (
        <>
            <HeaderLesson />
            <Box w="90%" m="auto">
                <Heading fontSize="48px" fontWeight="normal">
                {state.section_title}
                </Heading>

                <Flex
                    bgColor="#f0f3f6"
                    p="2"
                    px="3"
                    borderRadius="5"
                    align="center"
                    justify="space-between"
                    my="5"
                >
                    <Breadcrumb
                        spacing="8px"
                        separator={<ChevronRightIcon color="gray.500" />}
                        color="#2c698d"
                        fontWeight="bold"
                        fontSize="12px"
                    >
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Free Course Demo</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href="/courseStructure">
                                Course Structure
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">
                                Example Topic with a Video
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>

                    <Tag
                        borderRadius="full"
                        variant="solid"
                        colorScheme="green"
                        size="sm"
                    >
                        Complete
                    </Tag>
                </Flex>
                <Box>
                    <Flex justify="center">
                        <iframe
                            width="753"
                            height="424"
                            src="https://www.youtube.com/embed/EzKImzjwGyM"
                            title="A short ocean video"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </Flex>
                    <Box my="5">
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem,
                            explicabo laudantium voluptate totam excepturi molestiae.
                            Voluptates ab vitae quo fuga magni obcaecati laboriosam soluta
                            quod expedita suscipit perspiciatis nemo ducimus sit
                            necessitatibus vero eveniet quis maxime, ipsa dolores impedit
                            commodi error saepe architecto. Qui corrupti obcaecati officiis
                            dolorem accusamus.
                        </Text>
                        <UnorderedList my="5" mx="10">
                            <ListItem>Lorem ipsum dolor sit amet</ListItem>
                            <ListItem>Consectetur adipiscing elit</ListItem>
                            <ListItem>Integer molestie lorem at massa</ListItem>
                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                        </UnorderedList>
                        <Text>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
                            hic officia. Voluptas praesentium sapiente ratione? Harum,
                            molestias sed? Nulla sapiente, voluptatum dicta assumenda aliquid
                            ipsum molestiae dolore voluptas repellat temporibus.
                        </Text>
                    </Box>
                </Box>
                <Divider />
                <Flex align="center" justify="space-between" my="5">
                    <Button
                        align="center"
                        w="200px"
                        justify="center"
                        borderRadius="30px"
                        bgColor="#2c698d"
                        color="white"
                        fontSize="12px"
                        fontWeight="medium"
                        leftIcon={<ChevronLeftIcon fontSize="20px" />}
                    >
                        <Flex w="80%" align="center" justify="center">
                            <Text>Back</Text>
                        </Flex>
                    </Button>
                    <Text textAlign="center" color="#2c698d" fontSize="12px" my="4">
                        Back to Course
                    </Text>
                    <Button
                        align="center"
                        w="200px"
                        justify="center"
                        borderRadius="30px"
                        bgColor="#2c698d"
                        fontSize="12px"
                        fontWeight="medium"
                        color="white"
                        rightIcon={<ChevronRightIcon fontSize="20px" />}
                    >
                        <Flex w="80%" align="center" justify="center">
                            <Text>Next</Text>
                        </Flex>
                    </Button>
                </Flex>
            </Box>
        </>
    )
}

export default LessonPage