import React, { useState } from 'react';
import HeaderLesson from '../../../components/students/HeaderLesson';
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Divider,
	Flex,
	Heading,
	ListItem,
	Tag,
	Text,
	UnorderedList,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Sidebar from '../../../components/students/Sidebar';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { BsCircle } from 'react-icons/bs';



const Topics = () => {
	const { course_id, section_id } = useParams();
	const { state: { section_title } } = useLocation();
	const [dataSection, setDataSection] = useState({});
	const [lessons, setLessons] = useState({});
	const navigate = useNavigate();


	const getLessons = async () => {
		const q = query(collection(db, 'courses', course_id, 'sections', section_id, 'lessons'))
		///courses/jQfPtG1omfheQTDwEt4z/sections/IDSZ6sKJYD64MiZjKCBO/lessons/BGO9c5CbFnrO9mtb3ps0
		const querySnapshot = await getDocs(q)
		let arr = []
		querySnapshot.forEach((doc) => {
			arr.push({ id: doc.id, ...doc.data() })
		})

		setLessons(arr)
	}


	const getSectionData = async () => {
		const docRef = doc(db, 'courses', course_id, 'sections', section_id)
		const docSnap = await getDoc(docRef);
		setDataSection({ id: docSnap.id, ...docSnap.data() })
	};


	useEffect(() => {
		getSectionData();
		getLessons();
	}, []);

	return (
		<>
			<HeaderLesson />
			<Box w="90%" m="auto">
				<Heading fontSize="48px" fontWeight="normal">
					{section_title}
				</Heading>

				<Box w="90%" m="auto">
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
							<BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<BreadcrumbLink href={`/courses/tititititile`}>Judul</BreadcrumbLink>
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
				<Box >
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem,
						explicabo laudantium voluptate totam excepturi molestiae. Voluptates
						ab vitae quo fuga magni obcaecati laboriosam soluta quod expedita
						suscipit perspiciatis nemo ducimus sit necessitatibus vero eveniet
						quis maxime, ipsa dolores impedit commodi error saepe architecto.
						Qui corrupti obcaecati officiis dolorem accusamus.
					</Text>
					<UnorderedList my="5" mx="10">
						<ListItem>Lorem ipsum dolor sit amet</ListItem>
						<ListItem>Consectetur adipiscing elit</ListItem>
						<ListItem>Integer molestie lorem at massa</ListItem>
						<ListItem>Facilisis in pretium nisl aliquet</ListItem>
					</UnorderedList>
					<Text>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, hic
						officia. Voluptas praesentium sapiente ratione? Harum, molestias
						sed? Nulla sapiente, voluptatum dicta assumenda aliquid ipsum
						molestiae dolore voluptas repellat temporibus.
					</Text>

					<Box
						borderRadius="5"
						border="2px solid #e2e7ed"
						overflow="hidden"
						my="5"
					>
						<Flex
							bgColor="#2c698d"
							justify="space-between"
							align="center"
							color="white"
							p="5"
						>
							<Text fontWeight="bold">Lesson Content</Text>
							<Flex gap="2" align="center" fontSize="12px">
								<Text textTransform="uppercase" fontWeight="bold">
									37% complete
								</Text>
								<Divider
									orientation="vertical"
									colorScheme="whiteAlpha"
									h="20px"
								/>
								<Text>0/2 Steps</Text>
							</Flex>
						</Flex>
						<Box p="5">
							{lessons?.length > 0 ?lessons.map((item, i) => (
								<>
									<Flex key={i} gap="2" align="center" cursor='pointer' onClick={() => navigate(`lesson/${item.id}`, { state: { section_title: item.title, data : item } })}>
										<BsCircle />
										<Text>
											{item.title}
										</Text>
									</Flex>
									<Divider my="4" />
								</>
							)) : null}

							{/* <Flex gap="2" align="center">
								<BsCardChecklist />
								<Text>Checkpoint</Text>
							</Flex> */}
						</Box>
					</Box>
				</Box>
				<Divider />
				<Text textAlign="center" color="#2c698d" fontSize="12px" my="4">
					Back to Course
				</Text>
			</Box>
			</Box>
		</>
	);
};

const TopicsPage = () => {
	return (
		<>
			<Sidebar>
				<Topics />
			</Sidebar>
		</>
	);
};

export default TopicsPage;
