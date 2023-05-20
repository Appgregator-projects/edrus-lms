import React, { useEffect, useState } from 'react'
import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Image,
	Input,
	Radio,
	RadioGroup,
	SimpleGrid,
	Spacer,
	Stack,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Tab,
	Text,
	Center,
	Container,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Select,
	CircularProgress,
} from '@chakra-ui/react';
import { FiDelete, FiDownload, FiEdit3, FiEyeOff, FiVideo, FiVolume2 } from 'react-icons/fi';
import Sidebar from '../../../../components/teachers/Sidebar';
import { db, storage } from '../../../../config/firebase';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { UseAuthState } from '../../../../context/Context';
import ReactPlayer from 'react-player';


function CreateLesson() {
	const [data, setData] = useState()
	const [loading, setLoading] = useState(false)
	const [modalData, setModalData] = useState({ key: 0, type: 0, format: 0 })

	const { id, lessonId } = useParams();
	const { isOpen, onOpen, onClose } = useDisclosure()

	const navigate = useNavigate()

	const { user } = UseAuthState();


	const getLesson = async () => {
		const docRef = doc(db, `courses/${id}/lesson`, lessonId);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			const data = docSnap.data()
			data.id = lessonId
			console.log(data)
			setData(data)
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

	const MediaType = () => (
		<Tabs isFitted variant='soft-rounded'>
			<TabList>
				<Tab>
					<HStack>
						<FiEyeOff />
						<Text>
							None
						</Text>
					</HStack>
				</Tab>
				<Tab><HStack>
					<FiVideo />
					<Text>
						Video
					</Text>
				</HStack></Tab>
				<Tab><HStack>
					<FiVolume2 />
					<Text>
						Audio
					</Text>
				</HStack></Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
				</TabPanel>
				<TabPanel>
					<Container borderRadius='md' p='5' border='1px' borderColor='gray' borderStyle='dotted'>
						<Center>
							<FiVideo />
						</Center>
						<Center>
							<Button onClick={() => handleModal('video', 'media')}>
								Upload Video
							</Button>
						</Center>
					</Container>
				</TabPanel>
				<TabPanel>
					<Container borderRadius='md' p='5' border='1px' borderColor='gray' borderStyle='dotted'>
						<Center>
							<FiVolume2 width='25px' />
						</Center>
						<Center>
							<Button onClick={() => handleModal('audio', 'media')}>
								Upload Audio
							</Button>
						</Center>
					</Container>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)

	const handleModal = (type, key) => {
		//type is for image/video/sound
		//key is for naming
		console.log(type, key)
		let format = ""
		if (type === 'image')
			format = "image/*"

		if (type === 'video')
			format = "video/*"

		if (type === 'audio')
			format = "audio/*"

		setModalData({ type: type, key: key, format: format })
		onOpen()
	}

	const handleUpload = async (data) => {
		const storageRef = ref(storage, `user/${user.uid}/${data.name}`);
		const uploadTask = uploadBytesResumable(storageRef, data);

		uploadTask.on('state_changed',
			(snapshot) => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log('Upload is ' + progress + '% done');
				if (progress !== 100)
					setLoading(progress)
				else {
					onClose()
					setLoading(false)
				}
			},
			(error) => {
				// Handle unsuccessful uploads
				console.log(error.message)
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref)
					.then((downloadURL) => {
						console.log('File available at', downloadURL);
						const updateData = {
							...data,
							[modalData.key]: downloadURL,
							[`${modalData.key}_type`]: modalData.type
						}
						setData({ ...data, updateData })
						return updateData
					})
					.then((data) => {
						const ref = doc(db, `courses/${id}/lesson`, lessonId);
						setDoc(ref, data, { merge: true });
					}
					);
			})

	}

	const handleSave = async () => {
		const ref = doc(db, `courses/${id}/lesson`, lessonId);
		setDoc(ref, { ...data, lastUpdated: new Date() }, { merge: true });
		navigate(-1)
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
					<Button onClick={() => console.log(data, modalData, loading)}>Check Console</Button>
					<Button colorScheme='red' onClick={confirmDelete}>Delete</Button>
					<Button colorScheme='green' onClick={() => handleSave()}>Save</Button>
				</HStack>
				<Flex>
					<Box width='70%'>
						<Box borderRadius='md' shadow='base' p='2' m='1'>
							<Text m='1'>Title :</Text>
							<Input type='text' value={data?.title ? data.title : ''} onChange={(e) => setData({ ...data, title: e.target.value })} />

							<Text m='1'>Section :</Text>
							<Select>
								<option>1</option>
								<option>2</option>
								<option>3</option>

							</Select>

							<Text m='1'>Media :</Text>
							<Box p='5'>
								{data?.media ?
									<ReactPlayer
										width='full'
										controls={true}
										url={data.media} />

									:
									<MediaType />}
							</Box>

							<Box borderRadius='md' border='1px' borderColor='gray' p='2' mr='2' ml='2'>
								{/* <ReactQuill theme="snow"
									value={data?.description ? data.description : ''}
									onChange={(e) => setData({ ...data, description: e })}
								/> */}
							</Box>


							<HStack m='2'>
								<Text>Files</Text>
								<Spacer />
								<Button size='xs' colorScheme='green' onClick={() => handleModal('file', 'download')}>Add Files</Button>

							</HStack>
							<Box borderRadius='md' border='1px' borderColor='gray.50' pl='2' pr='2' mr='2' ml='2'>

								{data?.download ?
									<Box borderBottom='1px' borderColor='gray.50'>
										<HStack>
											<Text>{data.download}</Text>
											<Spacer />
											<FiDownload />
											<FiDelete />
										</HStack>
									</Box>
									:
									<Box borderBottom='1px' borderColor='gray.50'>
									</Box>

								}
							</Box>


						</Box>
					</Box>
					<Box width='30%'>
						<Box borderRadius='md' shadow='base' p='2' m='1'>
							<Heading fontSize='md'>Status</Heading>
							<RadioGroup>
								<Stack direction='column'>
									<RadioGroup
										onChange={(e) => setData({ ...data, status: e })}
										value={data?.status === 'published' ? 'published' : 'draft'}
									>
										<Stack>
											<Radio value='draft'>Draft</Radio>
											<Radio value='published'>Published</Radio>

										</Stack>
									</RadioGroup>
								</Stack>
							</RadioGroup>
						</Box>
						<Box borderRadius='md' shadow='base' p='2' m='1'>
							<Heading fontSize='md'>Thumbnail</Heading>
							<Image borderRadius='md' border='1px' borderColor='gray' src={data?.thumbnail ? data.thumbnail : 'https://kajabi-app-assets.kajabi-cdn.com/assets/upload_image_placeholder-8156b59904f2c4ffaa4e045f09ee36f73ac4ca59b7232da5cd0d66c95ac53739.png'} alt='Dan Abramov' />
							<Text fontSize='sm'>
								Please use .jpg or .png with non-transparent background.
								Recommended dimensions of 1280x720
							</Text>
							<HStack mt='2'>
								<Button>Remove</Button>
								<Button onClick={() => handleModal('image', 'thumbnail')}>Upload</Button>
							</HStack>
						</Box>
						<Box borderRadius='md' shadow='base' p='2' m='1'>
							<Heading fontSize='md'>Comment</Heading>
							<RadioGroup>
								<Stack direction='column'>
									<RadioGroup
										onChange={(e) => setData({ ...data, comment: e })}
										value={data?.comment === 'visible' ? 'visible' : 'hidden'}
									>
										<Stack>
											<Radio value='visible'>visible</Radio>
											<Radio value='hidden'>hidden</Radio>
										</Stack>
									</RadioGroup>
								</Stack>
							</RadioGroup>
						</Box>
					</Box>
				</Flex >
			</Box >


			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Upload {modalData.type} for {modalData.key}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{loading ?
							<Center>
								<CircularProgress value={loading} size='120px' />
							</Center>
							:
							<Center>
								<Input type='file' accept={modalData.format} onChange={(e) => handleUpload(e.target.files[0])} />
							</Center>
						}

					</ModalBody>
				</ModalContent>
			</Modal>
		</Sidebar >
	)
}
export default CreateLesson