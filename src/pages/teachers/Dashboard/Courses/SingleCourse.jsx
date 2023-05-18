import React, { useEffect } from 'react';
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
	// Link,
	StackDivider,
	Text,
	useDisclosure,
	Image,
	Spacer,
	Center,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Spinner,
	Icon,
	Badge,
	Container,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Input,
} from '@chakra-ui/react';
import {
	AddIcon,
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronUpIcon,
} from '@chakra-ui/icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

import { db } from '../../../../config/firebase';
import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore';
import { FiBookOpen, FiEdit2, FiEye, FiFolder, FiMessageCircle, FiVideo } from 'react-icons/fi';

const SingleCourse = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [data, setData] = useState()
	const [sectionTitle, setSectionTitle] = useState()
	const { isOpen, onOpen, onClose } = useDisclosure()

	const getCourseDetail = async () => {
		const unsub = onSnapshot(doc(db, "courses", id), (doc) => {
			console.log("Current data: ", doc.data());
			setData(doc.data())
		});
	}

	const handleAddSection = async () => {
		onClose()
		const course = doc(db, "courses", id);
		await updateDoc(course, {
			sections: arrayUnion({ title: sectionTitle })
		});
	}

	const handleAddLesson = async (section) => {
		//ADD NEW LESSON FIRST AND GET THE ID
		const docRef = await addDoc(collection(db, `courses/${id}/lesson`), { title: 'new Title' });
		const lessonId = docRef.id;

		//insert array union to courses db
		const course = doc(db, "courses", id);
		const result = await updateDoc(course, {
			lessons: arrayUnion({ id: lessonId, title: 'New Lesson', section: section })
		});
		console.log(result)
	}

	const getLessons = (section) => {
		if (data.lessons)
			return data.lessons.filter((x) => x.section === section)
	}

	useEffect(() => {
		getCourseDetail()
		return () => {
		}
	}, [])


	return (
		<>
			<Box my="5">
				<HStack color="#2c698d" fontSize="14px" onClick={() => navigate(-1)}>
					<ChevronLeftIcon />
					<Text>Back</Text>
				</HStack>
			</Box>
			<Box shadow='base' p='2'>
				<Box>
					<Flex >
						<Image boxSize='100px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
						<Box p='2'>
							<Heading fontWeight="bold" textTransform="capitalize">
								{data ? data.title : <></>}
							</Heading>
							<HStack>
								<Text>Overview</Text>
								<Text>Customize</Text>
								<Text>Offers</Text>
								<Text>Members</Text>
								<Text>Settings</Text>
							</HStack>
						</Box>
						<Spacer />
						<Center>
							<Button colorScheme='blue' onClick={onOpen}>Add Section</Button>
						</Center>
					</Flex>
				</Box>
				<Box>
					<Accordion allowMultiple>
						{data?.sections ?
							data.sections.map((x, i) =>
								<AccordionItem borderBottom='1px' borderColor='gray.50'>
									<h2>
										<AccordionButton>
											<Box as="span" flex='1' textAlign='left'>
												<HStack>
													<Icon as={FiFolder} />
													<Text>
														{x.title}
													</Text>

												</HStack>
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel p='2'>
										<HStack>
											<Heading fontSize='md' pl='5'>Lessons</Heading>
											<Spacer />
											<Button size='xs' colorScheme='green' onClick={() => handleAddLesson(x.title)}>Add Lesson</Button>
										</HStack>
										{getLessons(x.title) ? getLessons(x.title).map((z) =>
											<Box borderBottom='1px' pl='10' mb='2' borderColor='gray.50'>
												<HStack>
													<Icon as={FiBookOpen} />
													<Box>
														<Text m='0' >{z.title}</Text>
														<Text m='0' fontSize='3xs'>ID: {z.id}</Text>
													</Box>
													<Spacer />
													<Icon as={FiEye} />

													<Link to={`lesson/${z.id}`}>
														<Icon as={FiEdit2} />
													</Link>

													<Icon as={FiMessageCircle} />
													{/* <Button size='xs' colorScheme='blue' onClick={() => console.log('add content')}>Add Content</Button> */}
													<Badge colorScheme='green'>Published</Badge>
												</HStack>
											</Box>
										)
											:
											<></>}
									</AccordionPanel>
								</AccordionItem>
							)
							:
							<Center>
								<Spinner />
							</Center>
						}



					</Accordion>
				</Box>
			</Box>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add section</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Input type='text' onChange={(e) => setSectionTitle(e.target.value)} />
					</ModalBody>

					<ModalFooter>
						{/* <Button colorScheme='blue' mr={3} onClick={onClose}>
							Close
						</Button> */}
						<Button colorScheme='green' onClick={() => handleAddSection()}>Add</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

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
