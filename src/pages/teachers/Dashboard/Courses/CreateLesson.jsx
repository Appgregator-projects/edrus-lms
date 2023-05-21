import React, { useEffect, useState } from 'react'
import {
	AspectRatio,
	Box,
	Button,
	Center,
	Flex,
	Heading,
	HStack,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Radio,
	RadioGroup,
	Spacer,
	Spinner,
	Stack,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { FiDelete, FiDownload, FiEdit3 } from 'react-icons/fi';
import Sidebar from '../../../../components/teachers/Sidebar';
import { db } from '../../../../config/firebase';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import { UploadBlob } from '../../../../utils/Upload';

function CreateLesson() {
	const [data, setData] = useState()
	const { id, lessonId } = useParams();
	const navigate = useNavigate()
	const [modalFor, setModalFor] = useState("")
	const [newData, setNewData] = useState({})
	const [file, setFile] = useState()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { state } = useLocation()


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
			title: 'Confirm deletion',
			text: `Do you want to delete ${data.title}? Click 'Cancel' to abort.`,
			showDenyButton: true,
			showCancelButton: false,
			confirmButtonText: 'Delete',
			denyButtonText: `Cancel`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {

				deleteDoc(doc(db, `courses/${id}/lesson`, lessonId)).then(() => {
					Swal.fire('Saved!', `Success deleted lesson ${lessonId} `, 'success')
					navigate(`/teacher/courses/${id}`)

					// remove from array
					// get array, remove using array filter, push using setdoc merge true

				}).catch(err => {
					Swal.fire('Error', err.message, 'error')
				})
			} else if (result.isDenied) {
				Swal.fire('Changes are not saved', '', 'info')
			}
		})
	}

	const handleSave = async () => {
		console.log(newData)


		// updating lesson's document
		const docRef = doc(db, `courses/${id}/lesson`, lessonId);
		setDoc(docRef,
			{ ...newData, lastUpdated: new Date() }, { merge: true })
			.then(() => {
				Swal.fire('Saved!', `Success saving`, 'success')
			})
			.catch(err => {
				console.log(err.message)
				Swal.fire({
					icon: 'error',
					title: 'Error',
					text: err.message,
				})
			});


		// if the title changes, update array inside course
		if (newData.title) {
			//updating lesson's array inside course's document
			//1. ambil object
			const oldObject = state.lessons.filter(x => x.id === lessonId)[0]
			const newObject = { ...oldObject, title: newData.title }
			//2. hapus yang doc id nya match dari array
			const newArray = state.lessons.filter(x => x.id !== lessonId)
			//3. array.push
			newArray.push(newObject)
			//4. setDoc course
	
			const ref = doc(db, `courses/${id}`);
			setDoc(ref,
				{ lessons: newArray, lastUpdated: new Date() }, { merge: true }).then(() => {
					console.log("update array successful");
				}).catch(e => {
					console.log("update array error", e.message);
				})
		}

	}

	const handleOpenModal = (type) => {
		onOpen()
		if (type === "attachment") {
			setModalFor("attachment")
		} else if (type === "thumbnail") {
			setModalFor("thumbnail")
		}
	}

	const handleSaveFiles = async () => {
		if (modalFor === "attachment") {
			// save to attachment
			// try {
			// 	const uploadedAttachment = await UploadBlob(
			// 		file,
			// 		"donasi",
			// 		"beasiswa",
			// 		file.name,
			// 		"hardcoded name"
			// 	)
			// 	if (uploadedAttachment) {
			// 		console.log("uploadedAttachment : ---", uploadedAttachment);
			// 		setNewData({
			// 			...newData,
			// 			attachment: uploadedAttachment.url
			// 		})
			// 		await handleSave()
			// 	}
			// } catch (error) {
			// 	console.log(error.message, "error on uploading image");
			// } finally {
			// 	getLesson()
			// 	onClose()
			// };
			console.log(file)
		} else if (modalFor === "thumbnail") {
			//save to thumbnail
			try {
				const uploadedImage = await UploadBlob(
					file,
					"donasi",
					"beasiswa",
					file.name,
					"hardcoded name"
				);
				if (uploadedImage) {
					console.log("uploadedImage : ---", uploadedImage);
					setNewData({
						...newData,
						thumbnail: uploadedImage.url
					})
					console.log({
						...newData,
						thumbnail: uploadedImage.url
					})
					await handleSave()
				}
			} catch (error) {
				console.log(error.message, "error on uploading image");
			} finally {
				getLesson()
				onClose()
			};
		}
	}

	useEffect(() => {
		getLesson()
		console.log(state, "state")
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
					<Button colorScheme='green' onClick={() => handleSave()}>Save</Button>
				</HStack>
				<Flex>
					<Box width='70%'>
						<Box borderRadius='md' shadow='base' p='2' m='1'>
							<Input
								type='text'
								placeholder={data?.title ? data.title : 'course'}
								onChange={e => setNewData({
									...newData,
									title: e.target.value
								})}
							/>
							<Flex my={2}>
								<Text m='1'>Media :</Text>
								<Input maxW='xl' type='text' placeholder={""} onChange={e => setNewData({
									...newData,
									videoUrl: e.target.value
								})} />
							</Flex>
							<AspectRatio maxW='full' ratio={16 / 9}>
								{data?.videoUrl !== undefined ?
									<>
										<iframe
											title='naruto'
											src={data.videoUrl}
											allowFullScreen
										/>
										<Text>{data?.videoUrl}</Text>
									</>
									: <Text>Tidak ada video pembelajaran</Text>}
							</AspectRatio>
							<HStack m='2'>
								<Text>Files</Text>
								<Spacer />
								<Button size='xs' colorScheme='green' onClick={() => handleOpenModal("attachment")}>Add Files</Button>

							</HStack>
							<Box borderRadius='md' border='1px' borderColor='gray.50' pl='2' pr='2' mr='2' ml='2'>
								<Box borderBottom='1px' borderColor='gray.50'>

									{data?.attachment !== undefined && data?.attachment?.length > 0 ?
										<HStack>
											<Box>
												<Text noOfLines={1} onClick={() => console.log("")}>{data.attachment}</Text>
											</Box>
											<Spacer />
											<FiDownload />
											<FiEdit3 />
											<FiDelete />
										</HStack>
										:
										newData?.attachment !== undefined ?
											<HStack>
												<Box>
													<Text onClick={() => console.log("")}>nama filenya</Text>
												</Box>
												<Spacer />
												<FiDownload />
												<FiEdit3 />
												<FiDelete />
											</HStack> : <Text>Tidak ada attachment</Text>
									}
								</Box>
							</Box>

						</Box>
					</Box>
					<Box width='30%'>
						<Box borderRadius='md' shadow='base' p='2' m='1'>
							<Heading fontSize='md'>Status</Heading>
							<RadioGroup>
								<Stack direction='column'>
									<Radio value='draft' onChange={e => setNewData({
										...newData,
										status: e.target.value
									})} >Draft</Radio>
									<Radio value='published' onChange={e => setNewData({
										...newData,
										status: e.target.value
									})} >published</Radio>
								</Stack>
							</RadioGroup>
						</Box>
						<Box borderRadius='md' shadow='base' p='2' m='1'>
							<Heading fontSize='md'>Thumbnail</Heading>
							{data?.thumbnail !== undefined ?
								<Image src={data?.thumbnail} alt='Dan Abramov' />
								: <Center>Belum ada thumbnail</Center>}
							<HStack mt='2'>
								<Button>Remove</Button>
								<Button onClick={() => handleOpenModal("thumbnail")}>Upload</Button>
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
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Click 'Choose File' or drag and drop your {modalFor} below:</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Input bg="gray.300" padding={10} type='file' placeholder='Insert file' onChange={(e) => setFile(e.target.files[0])} />
					</ModalBody>

					<ModalFooter>
						{/* <Button colorScheme='blue' mr={3} onClick={onClose}>
							Close
						</Button> */}
						<Button colorScheme='blue' onClick={() => handleSaveFiles()}>Upload {false ? <Spinner mx={5} /> : null}</Button>

					</ModalFooter>
				</ModalContent>
			</Modal>
		</Sidebar>
	)
}
export default CreateLesson