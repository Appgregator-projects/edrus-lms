import { ArrowForwardIcon, ChevronLeftIcon, SearchIcon } from '@chakra-ui/icons'
import {
	Flex, Input, InputGroup, InputLeftElement, Button, Select, Tag, Text, HStack, Heading, Spacer, Box, Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Avatar,
	Checkbox,
	Center,
	Image,
} from '@chakra-ui/react'
import { addDoc, collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { FiArrowLeft, FiArrowRight, FiCalendar, FiMoreHorizontal } from 'react-icons/fi'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../../../../components/teachers/Sidebar'
import { db } from '../../../../config/firebase'
import { UseAuthState } from '../../../../context/Context'

function Page() {
	const [data, setData] = useState()
	const [updateData, setUpdateData] = useState()

	const { user: { uid }, project_id } = UseAuthState()
	const authentication = { uid, project: project_id }

	const getPages = async () => {
		const q = query(collection(db, "pages"), where("uid", "==", uid), orderBy("createdAt", "desc"), limit(20));

		try {
			const querySnapshot = await getDocs(q);
			const queryData = []
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data());
				const qData = { id: doc.id, ...doc.data() }
				queryData.push(qData)
			});
			console.log(queryData)
			setData(queryData)
		} catch (error) {
			console.log(error)
		}

	}

	const handleAddPage = async () => {
		console.log(uid, authentication)
		const docRef = await addDoc(collection(db, "pages"), {
			title: "New Page",
			uid: uid,
			createdAt: new Date()
		});
		setUpdateData(docRef.id)
	}

	useEffect(() => {
		getPages()
		return () => {
		}
	}, [updateData])

	return (
		<Sidebar>
			<HStack>
				<Heading>Pages</Heading>
				<Spacer />
				{/* <Link to='new'> */}

				<Button colorScheme='green' onClick={() => handleAddPage()} >Add Page</Button>
				{/* </Link> */}
			</HStack>

			<Box p='5' >

				{data ?
					data.map((x) =>
						<HStack justify="space-between" shadow='base' p='2' m='2'>
							<Flex gap="2" align="center">
								<Image width='100px' src='https://kajabi-app-assets.kajabi-cdn.com/assets/upload_image_placeholder-8156b59904f2c4ffaa4e045f09ee36f73ac4ca59b7232da5cd0d66c95ac53739.png' alt='image' />
								<Flex flexDir="column">
									<Link to={x.id}>
										<Heading fontWeight="bold">{x.title}</Heading>
									</Link>
									<Text fontSize='2xs'>ID:{x.id}</Text>
									<HStack
										// divider={<StackDivider />}
										fontSize="13.2px"
										color="#728188"
										fontWeight="bold"
									>
										<Text m="0">{0} Sections</Text>
										<Text m="0">{0} lessons</Text>

										<HStack>
											<FiCalendar />
											<Text>{moment.unix(x.createdAt.seconds).format("DD MMM YYYY hh:mm a")}</Text>
										</HStack>
									</HStack>
								</Flex>

							</Flex>
							<Flex gap="2" align="center">
								<Link to={x.id}>
									<ArrowForwardIcon />
								</Link>
							</Flex>
						</HStack>
					)

					:
					<></>
				}
			</Box>

			<Center m='3'>
				<HStack>
					<FiArrowLeft />
					<Text>1</Text>
					<FiArrowRight />

				</HStack>
			</Center>


		</Sidebar>
	)
}

export default Page