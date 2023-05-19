import React, { useEffect, useState } from 'react'
import {
	AspectRatio,
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Image,
	Input,
	Radio,
	RadioGroup,
	Spacer,
	Stack,
	Text,
} from '@chakra-ui/react';
import { FiDelete, FiDownload, FiEdit3 } from 'react-icons/fi';
import Sidebar from '../../../../components/teachers/Sidebar';
import { db } from '../../../../config/firebase';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

function CreateLesson() {
	const [data, setData] = useState()
	const { id, lessonId } = useParams();
	const navigate = useNavigate()

	const getLesson = async () => {
		const docRef = doc(db, `courses/${id}/lesson`, lessonId);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			console.log("Document data:", docSnap.data());
			setData(docSnap.data())
		} else {
			console.log("No such document!");
		}
	}


	const confirmDelete = async () => {
		Swal.fire({
			title: `Do you want to delete ${data.title}?`,
			showDenyButton: true,
			showCancelButton: false,
			confirmButtonText: 'Delete',
			denyButtonText: `Cancel`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				Swal.fire('Saved!', '', 'success')
				deleteDoc(doc(db, `courses/${id}/lesson`, lessonId));
				navigate(`/teacher/courses/${id}`)
			} else if (result.isDenied) {
				Swal.fire('Changes are not saved', '', 'info')
			}
		})
	}

	useEffect(() => {
		getLesson()
		return () => {
		}
	}, [])

	return (
		<Sidebar>
			<Box>
				<HStack>
					<Heading>{data?.title ? data.title : <></>}</Heading>
					<Spacer />
					<Button colorScheme='red' onClick={confirmDelete}>Delete</Button>
					<Button colorScheme='green'>Save</Button>
				</HStack>
				<Flex>
					<Box width='70%'>
						<Box borderRadius='md' shadow='base' p='2' m='1'>
							<Input type='text' placeholder={data?.title ? data.title : 'course'} />
							<Text m='1'>Media :</Text>
							<AspectRatio maxW='full' ratio={16 / 9}>
								<iframe
									title='naruto'
									src='https://www.youtube.com/embed/QhBnZ6NPOY0'
									allowFullScreen
								/>
							</AspectRatio>
							<HStack m='2'>
								<Text>Files</Text>
								<Spacer />
								<Button size='xs' colorScheme='green'>Add Files</Button>

							</HStack>
							<Box borderRadius='md' border='1px' borderColor='gray.50' pl='2' pr='2' mr='2' ml='2'>
								<Box borderBottom='1px' borderColor='gray.50'>
									<HStack>
										<Box>
											<Text>Lesson 4 worksheet</Text>
											<Text fontSize='2xs'>Lesson_4_worksheet.pdf</Text>
										</Box>
										<Spacer />
										<FiDownload />
										<FiEdit3 />
										<FiDelete />
									</HStack>
								</Box>
							</Box>

						</Box>
					</Box>
					<Box width='30%'>
						<Box borderRadius='md' shadow='base' p='2' m='1'>
							<Heading fontSize='md'>Status</Heading>
							<RadioGroup>
								<Stack direction='column'>
									<Radio value='draft'>Draft</Radio>
									<Radio value='published'>published</Radio>
								</Stack>
							</RadioGroup>
						</Box>
						<Box borderRadius='md' shadow='base' p='2' m='1'>
							<Heading fontSize='md'>Thumbnail</Heading>
							<Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
							<HStack mt='2'>
								<Button>Remove</Button>
								<Button>Upload</Button>
							</HStack>
						</Box>
						<Box borderRadius='md' shadow='base' p='2' m='1'>
							<Heading fontSize='md'>Comment</Heading>
							<RadioGroup>
								<Stack direction='column'>
									<Radio value='visible'>Visible</Radio>
									<Radio value='hidden'>Hidden</Radio>
								</Stack>
							</RadioGroup>
						</Box>
					</Box>
				</Flex >
			</Box >
		</Sidebar>
	)
}
export default CreateLesson