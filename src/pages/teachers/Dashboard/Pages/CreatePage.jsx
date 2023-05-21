import {
	Box, Button, Container, Flex, Heading, Image, useDisclosure, Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	SimpleGrid,
	Text,
	HStack,
	Icon,
	Center,
	Spacer,
	Switch,
	VStack,
	Avatar,
	Input,
	Spinner,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FiBook, FiEdit, FiExternalLink, FiMoreVertical, FiTrash2, FiUser, FiYoutube } from 'react-icons/fi';
import Sidebar from '../../../../components/teachers/Sidebar'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../../../config/firebase';
import { ChevronLeftIcon } from '@chakra-ui/icons';


function CreatePage() {
	const [dataBase, setDataBase] = useState()
	const [data, setData] = useState([])
	const navigate = useNavigate()

	const param = useParams()
	let height = window.innerHeight;
	let width = window.innerWidth;
	const { isOpen, onOpen, onClose } = useDisclosure()

	const add = [
		{ icon: FiBook, description: 'Get your course page', title: 'Course', type: 'product', color: 'white', bgColor: 'blue' },
		{ icon: FiBook, description: 'Get your community page', title: 'Community', type: 'product', color: 'white', bgColor: 'green' },
		{ icon: FiBook, description: 'Get your coaching page', title: 'Coaching', type: 'product', color: 'black', bgColor: 'yellow' },
		{ icon: FiBook, description: 'Get your consultation page', title: 'Consultation', type: 'product', color: 'white', bgColor: 'purple' },
		{ icon: FiEdit, description: 'Get your custom page', title: 'Custom Page', type: 'product', color: 'black', bgColor: 'gray' },
		{ icon: FiUser, description: 'Get your avatar', title: 'Avatar', type: 'image', color: 'white', bgColor: 'red' },
		{ icon: FiExternalLink, description: 'Get your avatar', title: 'URL', type: 'link', color: 'white', bgColor: 'red' },
		{ icon: FiYoutube, description: 'Get your youtube video', title: 'Youtube', type: 'link', color: 'white', bgColor: 'red' },
	]

	const getData = async () => {
		const docRef = doc(db, "pages", param.id);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			console.log("Document data:", docSnap.data());
			setDataBase(docSnap.data())
			if (docSnap.data().data)
				setData(docSnap.data().data)

		} else {
			// docSnap.data() will be undefined in this case
			console.log("No such document!");
		}
	}

	const handleSave = async () => {
		const newData = { ...dataBase, data: data }
		console.log(newData)

		//save to firebase
		const cityRef = doc(db, 'pages', param.id);
		setDoc(cityRef, newData, { merge: true });
		navigate(-1)
	}

	function onDragEnd(result) {
		if (!result.destination) {
			return;
		}
		const newItems = [...data];
		const [removed] = newItems.splice(result.source.index, 1);
		newItems.splice(result.destination.index, 0, removed);
		setData(newItems)
	}

	const Card = (props) => {
		const datas = props.data
		const index = props.index

		return (
			<HStack bgColor='gray.100' borderRadius='md' p='2' m='1'>
				{/* {props.provided} */}
				<FiMoreVertical />
				<Box>
					<Text m='0'>{datas.title}</Text>
					<Text m='0'>www.yourdomain.com/{datas.title}</Text>
				</Box>
				<Spacer />
				<HStack>
					<Box>
						<HStack>
							<Switch />
						</HStack>
						<Center cursor='pointer'>
							<FiTrash2
								onClick={() => setData([
									...data.slice(0, index),
									...data.slice(index + 1)
								])} />
						</Center>
					</Box>
				</HStack>
			</HStack>
		)
	}

	useEffect(() => {
		getData()

		return () => {

		}
	}, [])


	return (<>
		<Sidebar>
			<Flex >
				<Box width='60%' height='100vh' overflowY='auto'>
					<Container width='full'>
						<HStack>
							<Box color="#2c698d" fontSize="14px" onClick={() => navigate(-1)}>
								<ChevronLeftIcon />
								Back
							</Box>
							<Heading>
								{dataBase ? dataBase.title : <Center><Spinner></Spinner></Center>}
							</Heading>

						</HStack>
						<Input type='text' placeholder={dataBase ? dataBase.title : ''} onChange={(e) => setDataBase({ ...dataBase, title: e.target.value })} />
						<Button m='1' width='full' onClick={() => console.log(dataBase, data)}>Check Console</Button>
						<Button m='1' width='full' onClick={onOpen}>Add Block</Button>
						<Button m='1' width='full' onClick={() => setData([...data, { id: Math.random().toString(), title: 'Header name', type: 'header' }])}>Add Header</Button>
						<Button width='full' m='1' mb='3' colorScheme='green' onClick={() => handleSave()}>Save Page</Button>


						<DragDropContext onDragEnd={onDragEnd}>
							<Droppable droppableId="droppable" >
								{(provided, snapshot) => (
									<div
										{...provided.droppableProps}
										ref={provided.innerRef}
									>
										{data.map((item, index) => (
											<Draggable draggableId={item.id} index={index}>
												{(provided, snapshot) => (
													<div
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}

													>
														<Card data={item} index={index} provided={provided.placeholder} />
														{provided.placeholder}

													</div>
												)}
											</Draggable>
										))}
									</div>
								)}
							</Droppable>
						</DragDropContext>


					</Container>
				</Box>
				<Box
					width='40%'
					maxH={height * 0.8}
					border='8px'
					borderColor='black'
					borderRadius='xl'
					p='2'
					overflowX='auto'
				>
					<VStack>
						{data ? data.map((x, i) => {
							if (x.type === 'header')
								return <Heading key={i} fontSize='sm'>{x.title}</Heading>
							else if (x.type === 'image')
								return <Avatar key={i} name={x.title} size='2xl' src={'https://bit.ly/dan-abramov'} />
							else
								return <Button key={i} width='full' m='10'>{x.title}</Button>
						}
						)
							:
							<></>}

					</VStack>
				</Box>
			</Flex>

		</Sidebar >
		<Modal isOpen={isOpen} onClose={onClose} size='xl'>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Insert Link</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<SimpleGrid columns={2}>
						{add.map((x, i) => {
							x.id = Math.random().toString()
							const newData = { id: Math.random().toString(), title: x.title, type: x.type }
							return <HStack>
								<Center m='1'
									bgColor={x?.bgColor ? x.bgColor : 'white'}
									w='50px'
									h='50px'
									p='1'
									color={x?.color ? x.color : 'black'}
									borderRadius='md'>
									<Icon as={x.icon} />
								</Center>
								<Box cursor='pointer' onClick={() => { setData([...data, newData]); onClose() }}>
									<Text m='0'>{x.title}</Text>
									<Text m='0' fontSize='sm'>{x.description}</Text>
								</Box>
							</HStack>
						})}
					</SimpleGrid>
				</ModalBody>

				{/* <ModalFooter>
					<Button colorScheme='blue' mr={3} onClick={onClose}>
						Close
					</Button>
					<Button variant='ghost'>Secondary Action</Button>
				</ModalFooter> */}
			</ModalContent>
		</Modal>
	</>
	)
}

export default CreatePage