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
	Select,
} from '@chakra-ui/react';
import {
	AddIcon,
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronUpIcon,
} from '@chakra-ui/icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2'
import { db } from '../../../../config/firebase';
import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, onSnapshot, query, setDoc, updateDoc } from 'firebase/firestore';
import { FiBookOpen, FiEdit2, FiEye, FiFolder, FiMessageCircle, FiVideo } from 'react-icons/fi';




const SingleCourse = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [data, setData] = useState()
	const [sectionTitle, setSectionTitle] = useState()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [lessonTitle, setLessonTitle] = useState([])
	const [modalFor, setModalFor] = useState('')
	const [sectionOnEdit, setSectionOnEdit] = useState('')
	const [loading, setLoading] = useState(false)

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

	const handleAddLesson = async () => {
		setLoading(true)
		const section = sectionOnEdit
		//ADD NEW LESSON FIRST AND GET THE ID
		const docRef = await addDoc(collection(db, `courses/${id}/lesson`), { title: lessonTitle, status: 'draft', comment: 'hidden' });
		const lessonId = docRef.id;

		//insert array union to courses db
		const course = doc(db, "courses", id);
		await updateDoc(course, {
			lessons: arrayUnion({ id: lessonId, title: lessonTitle, section: section })
		});
		setLoading(false)

		onClose()
	}

	const getLessons = (section) => {
		if (data.lessons)
			return data.lessons.filter((x) => x.section === section)
	}

	const handleOpenMmodal = (type, sectionTitle) => {
		setModalFor(type)
		onOpen()
		if (type === "lesson") {
			setSectionOnEdit(sectionTitle)
		}
	}

	const handleChangeStatus = async (e) => {
		console.log(e.target.value)
		Swal.fire({
			title: e.target.value === "draft" ? `Save ${data.title} as draft?` : `Publish ${data.title}?`,
			showDenyButton: true,
			showCancelButton: false,
			confirmButtonText: 'Save',
			denyButtonText: `Don't save`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				const docRef = doc(db, 'courses', id);

				setDoc(docRef, { status: e.target.value, lastUpdated: new Date() }, { merge: true })
					.then(() => {
						Swal.fire('Saved!', `Success saving ${data.title} as ${e.target.value}`, 'success')
					})
					.catch(err => {
						console.log(err.message)
						Swal.fire({
							icon: 'error',
							title: 'Error',
							text: err.message,
						})
					});

			} else if (result.isDenied) {
				Swal.fire('Changes are not saved', '', 'info')
			};
		})
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
						{data?.image ?
							<Image width='100px' src={data.image} alt='Dan Abramov' />
							:
							<Image width='100px' src='https://kajabi-app-assets.kajabi-cdn.com/assets/upload_image_placeholder-8156b59904f2c4ffaa4e045f09ee36f73ac4ca59b7232da5cd0d66c95ac53739.png' alt='Dan Abramov' />
						}
						<Box p='2'>
							<HStack>
								<Heading fontWeight="bold" textTransform="capitalize">
									{data ? data.title : <></>}
								</Heading>
								<Badge
									fontSize={10}
									colorScheme={
										data?.status !== undefined && data?.status === "draft" ?
											"red" : data?.status !== undefined && data?.status === "published" ?
												"green" : undefined
									}
								>
									{data?.status !== undefined && data?.status}
								</Badge>
							</HStack>
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
							<Button colorScheme='blue' onClick={() => handleOpenMmodal('section')}>Add Section</Button>
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
											<Button size='xs' colorScheme='green'
												onClick={() => handleOpenMmodal('lesson', x.title)}
											// onClick={() => handleAddLesson(x.title)}
											>Add Lesson</Button>
										</HStack>
										{getLessons(x.title) ? getLessons(x.title).map((z) =>
											<Box borderBottom='1px' pl='10' mb='2' borderColor='gray.50'>
												<HStack>
													<Icon as={z.media ? FiVideo : FiBookOpen} />
													<Box>
														<Link to={`lesson/${z.id}`}>
															<Text m='0' >{z.title}</Text>
															<Text m='0' fontSize='3xs'>ID: {z.id}</Text>
														</Link>

													</Box>
													<Spacer />
													<Icon as={FiEye} />

													<Link to={`lesson/${z.id}`} state={data}>
														<Icon as={FiEdit2} />
													</Link>

													<Icon as={FiMessageCircle} />
													{/* <Button size='xs' colorScheme='blue' onClick={() => console.log('add content')}>Add Content</Button> */}
													{z.status ? <Badge colorScheme='green'>published</Badge>
														:
														<Badge colorScheme='red'>draft</Badge>
													}
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
					<ModalHeader>Add {modalFor}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{modalFor === "section" ? <Input type='text' placeholder='Insert section title' onChange={(e) => setSectionTitle(e.target.value)} /> :
							<Input type='text' placeholder='Insert lesson title' onChange={(e) => setLessonTitle(e.target.value)} />}

					</ModalBody>

					<ModalFooter>

						{modalFor === "section" ?
							<Button colorScheme='green' onClick={() => handleAddSection()}>Add Section</Button>
							:
							loading ?
								<Button
									isLoading
									loadingText='Submitting'
									colorScheme='green'
								>Add Lesson</Button>
								:
								<Button colorScheme='green' onClick={() => handleAddLesson()}>Add Lesson</Button>
						}

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
