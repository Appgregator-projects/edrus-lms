import React, { useEffect } from 'react';
import Sidebar from '../../../../components/teachers/Sidebar';
import {
	Box,
	Button,
	Card,
	CardBody,
	Circle,
	Divider,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Flex,
	HStack,
	Heading,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Select,
	Stack,
	StackDivider,
	Table,
	TableContainer,
	Tag,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tooltip,
	Tr,
	VStack,
	Center,
	Spinner,
	useDisclosure,
} from '@chakra-ui/react';
import {
	AddIcon,
	ArrowForwardIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	SearchIcon,
} from '@chakra-ui/icons';
import { TfiPencil } from 'react-icons/tfi';
import { FiCalendar, FiMoreHorizontal } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { BsCircle, BsFileCheck, BsFileText } from 'react-icons/bs';
import { useState } from 'react';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { db } from '../../../../config/firebase';
import { UseAuthDispatch, UseAuthState } from '../../../../context/Context';


const Courses = () => {
	const navigate = useNavigate();

	const [courses, setCourses] = useState()

	const authentication = { projectId: 'SgCWDWIda9kqrTF80nY9' }
	const {user, user_uid} = UseAuthState();
	const dispatch = UseAuthDispatch()
	const {loading} = UseAuthState()


	const getCourses = async () => {
		console.log(user.uid, "uid yang mau diambil")
		dispatch({
			type : "INIT_START"
		})
		// const q = query(collection(db, `courses/`), where("project", "==", uid, orderBy("lastUpdated"), limit(25)));
		const q = query(collection(db, "courses"), where("uid", "==", (user.uid === undefined ? user_uid : user.uid))
		// , orderBy("lastUpdated", "desc"), limit(25)
		)
		const querySnapshot = await getDocs(q);

		const sections = []
		querySnapshot.forEach(async (doc) => {
			sections.push({
				id: doc.id,
				data: doc.data()
			})
		});
		console.log(sections, 'ini data sections')
		if (sections) {
			setCourses(sections)
			dispatch({
				type : "INIT_FINISH"
			})
		}
	}

	useEffect(() => {
		getCourses()

		return () => {

		}
	}, [])

	return (
		<>
			<Flex gap="3">
				<InputGroup w="fit-content">
					<InputLeftElement
						pointerEvents="none"
						children={<SearchIcon color="gray.300" />}
					/>
					<Input type="search-course" placeholder="Search" />
				</InputGroup>
				<Select w="fit-content">
					<option>All courses</option>
					<option>New courses</option>
				</Select>
				<Select w="fit-content">
					<option>All categories</option>
					<option>New courses</option>
				</Select>
				<Select w="fit-content">
					<option>All authors</option>
					<option>New authors</option>
				</Select>
			</Flex>
			<Flex align="center" justify="space-between">
				<Tag color="white" bgColor="#2c698d" my="5">
					Showing {courses ? courses.length : 0} courses
				</Tag>
				<Link to='/teacher/courses/create'>
					<Button colorScheme='green'>Add New Course</Button>

				</Link>
			</Flex>
			<Box>
				<Flex
					gap="2"
					onClick={() => navigate('/teacher/courses/english')}
					cursor="pointer"
				>
				</Flex>
				{courses ?
					courses.map((x) =>
						<HStack justify="space-between" shadow='base' p='2' m='2'>
							<Flex gap="2" align="center">
								<Image boxSize='100px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
								<Flex flexDir="column">
									<Link to={`${x.id}`}>
										<Heading fontWeight="bold">{x.data.title}</Heading>
									</Link>
									<Text fontSize='2xs'>ID:{x.id}</Text>
									<HStack
										divider={<StackDivider />}
										fontSize="13.2px"
										color="#728188"
										fontWeight="bold"
									>
										<Text m="0">{x.data?.sections ? x.data.sections.length : 0} Sections</Text>
										<Text m="0">{x.data?.lessons ? x.data.lessons.length : 0} lessons</Text>

										<HStack>
											<FiCalendar />
											<Text>{x.data.lastUpdated.seconds}</Text>

										</HStack>
									</HStack>
								</Flex>

							</Flex>
							<Flex gap="2" align="center">
								<Link to={`${x.id}`}>
									<ArrowForwardIcon />
								</Link>
							</Flex>
						</HStack>)
					:

					loading ? <Center>
					<Spinner />
				</Center> : 
				<>
					<Text>Belum ada course</Text>
				</>
				}
			</Box>


		</>
	);
};

const CoursesPages = () => {
	return (
		<Sidebar>
			<Courses />
		</Sidebar>
	);
};
export default CoursesPages;
