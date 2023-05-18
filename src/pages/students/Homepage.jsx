import React, { useEffect, useState } from 'react';
import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	Flex,
	HStack,
	Heading,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	SimpleGrid,
	Stack,
	StackDivider,
	Text,
} from '@chakra-ui/react';
import { EmailIcon, SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Header from '../../components/students/Header';

const Homepage = () => {
	const navigate = useNavigate();
	const [courses, setCourses] = useState([])

	const getCourses = async () => {
		const q = query(collection(db, 'courses'))
		const querySnapshot = await getDocs(q)
		let arr = []
		querySnapshot.forEach((doc)=>{
			arr.push({id: doc.id, ...doc.data()})
		})

		setCourses(arr)
	}

	useEffect(()=>{
		getCourses()
	},[])
	return (
		<>
			<Header />
			<Flex h="75vh" flexDir="column" align="center" justify="center" gap="10">
				<Heading>Welcome</Heading>
			</Flex>
			<Box bgColor="#272643">
				<HStack
					divider={<StackDivider />}
					justify="center"
					align="center"
					w="100%"
					gap="10"
					h="80px"
					textAlign="center"
					color="white"
					fontWeight="bold"
					textTransform="uppercase"
				>
					<Box>
						<Text>0</Text>
						<Text>Courses</Text>
					</Box>
					<Box>
						<Text>0</Text>
						<Text>Hourses</Text>
					</Box>
					<Box>
						<Text>0</Text>
						<Text>Posts</Text>
					</Box>
					<Box>
						<Text>0</Text>
						<Text>Certicates</Text>
					</Box>
					<Box>
						<EmailIcon />
						<Text>Messages</Text>
					</Box>
				</HStack>
			</Box>
			<Box px="10">
				<Text fontSize="48px" fontWeight="bold" textAlign="center">
					Courses
				</Text>
				<Flex align="center" justify="space-between">
					<InputGroup w="30%">
						<InputRightElement
							pointerEvents="none"
							children={<SearchIcon color="gray" />}
						/>
						<Input type="tel" placeholder="search course" />
					</InputGroup>

					<HStack>
						<Text>all</Text>
						<Text>my</Text>
						<Text>not enrolled</Text>
						<Text>newest</Text>
						<Text>popular</Text>
					</HStack>
				</Flex>
				

					<SimpleGrid columns={{base : 1, md:2, lg:4, xl: 5}}>
						{courses?.length > 0 ? courses.map((item, index) => (
							<Card key={index} cursor='pointer' onClick={()=>navigate(`/courses/${item.id}`, {state : item})}>
								<CardBody>
									<Image
										src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
										alt="Green double couch with wooden legs"
										borderRadius="lg"
									/>
									<Stack mt="6" spacing="3">
										<Heading size="sm">{item.title}</Heading>
										<Text fontSize={12}>
											This sofa is per..
										</Text>
									</Stack>
								</CardBody>
								<CardFooter>
									<Button variant="solid" bgColor="#2c698d" color="white" w="100%" size='xs'>
										Enroll
									</Button>
								</CardFooter>
							</Card>
						)): null}
					</SimpleGrid>
				<Text textAlign="center" my="10">
					There are no available courses yet.
				</Text>
			</Box>
		</>
	);
};

export default Homepage;
