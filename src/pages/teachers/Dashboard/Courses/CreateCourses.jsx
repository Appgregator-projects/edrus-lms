import {
	AspectRatio,
	Box,
	Button,
	Container,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Image,
	Input,
	Link,
	Radio,
	RadioGroup,
	SimpleGrid,
	Spacer,
	Stack,
	Text,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Sidebar from "../../../../components/teachers/Sidebar";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { FiDelete, FiDownload, FiEdit3, FiMinimize } from "react-icons/fi";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../../../config/firebase";
import { UseAuthState } from "../../../../context/Context";
import {
	getDownloadURL,
	ref,
	uploadBytesResumable,
	uploadString,
} from "firebase/storage";

const CreateCourses = () => {
	const navigate = useNavigate();
	const [course, setCourse] = useState({});
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [courseType, setCourseType] = useState();
	// const [data, setData] = useState()
	const metadata = {
		contentType: "image/jpeg",
	};
	const {
		user: { uid },
		project_id,
	} = UseAuthState();
	const authentication = { uid, project: project_id };
	const [loading, setLoading] = useState(false);
	console.log(uid, "nio user");
	const product = [
		{
			icon: "✨",
			title: "Blank",
			description: "Start a product from scratch",
		},
		{
			icon: "📚",
			title: "Mini Course",
			description: "Start a product from scratch",
		},
		{
			icon: "📚",
			title: "Online Course",
			description: "Start a product from scratch",
		},
		{
			icon: "📚",
			title: "Drip Course",
			description: "Start a product from scratch",
		},
		{
			icon: "📚",
			title: "Membership",
			description: "Start a product from scratch",
		},
		{
			icon: "📚",
			title: "Community",
			description: "Start a product from scratch",
		},
	];

	const handleModal = (index) => {
		setCourseType(index);
		onOpen();
	};
	const uploadPicture = () => {
		const path = `/user/${uid}/${course.image.name}`;

		const storageRef = ref(storage, path);
		const uploadTask = uploadBytesResumable(storageRef, course.image);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) *
					100;
				console.log("Upload is " + progress + "% done");
				if (progress !== 100) setLoading(progress);
				else {
					onClose();
					setLoading(false);
				}
			},
			(error) => {
				console.log(error.message);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref)
					.then((downloadURL) => {
						console.log("File available at", downloadURL);

						setCourse({ ...course, image: downloadURL });
						return downloadURL;
					})
					.then((downloadURL) => {
						const newObj = {
							...course,
							...authentication,
							dateAdded: new Date(),
							lastUpdated: new Date(),
						};
						console.log(newObj, "ni newobj");
						newObj.image = downloadURL;

						// Add a new document with a generated id.
						const docRef = addDoc(
							collection(db, "courses"),
							newObj
						);
						console.log(
							"Document written with ID: ",
							docRef.id
						);
						onClose();
						uploadPicture();
						// setLoading(false);
						navigate(`/teacher/courses/${docRef.id}`);
					});
			}
		);
	};
	const handleAddCourse = async () => {
		//1. upload image
		//user/uid/filename.jpg
		//2 get img url
		//3. insert to obj
		//4 inmsert to frbse
		try {
			// setLoading(true);
			//add new course with uid and projectid
		} catch (error) {
			console.log(error);
		}
	};
	console.log(course, "ni course");

	return (
		<>
			<SimpleGrid columns="3">
				{product.map((x, i) => (
					<Box
						key={i}
						p="2"
						borderRadius="md"
						shadow="base"
						m="2"
					>
						<Heading>{x.icon}</Heading>
						<Heading fontSize="sm">{x.title}</Heading>
						<Text>{x.description}</Text>
						<Button
							onClick={() => handleModal(i)}
							colorScheme="green"
						>
							Get Started
						</Button>
					</Box>
				))}
			</SimpleGrid>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						{courseType ? (
							<>{`${product[courseType].icon} ${product[courseType].title}`}</>
						) : (
							<></>
						)}{" "}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Input
							type="text"
							placeholder="Title"
							onChange={(e) =>
								setCourse({
									...course,
									title: e.target.value,
								})
							}
						/>
						<Textarea
							placeholder="Description"
							onChange={(e) =>
								setCourse({
									...course,
									description: e.target.value,
								})
							}
						/>
						<Input
							type="file"
							onChange={(e) =>
								setCourse({
									...course,
									image: e.target.files[0],
								})
							}
						/>
					</ModalBody>

					<ModalFooter>
						{loading ? (
							<Button
								isLoading
								loadingText="Submitting"
								colorScheme="teal"
								variant="outline"
							>
								Submit
							</Button>
						) : (
							<Button
								colorScheme="green"
								onClick={() => uploadPicture()}
							>
								Submit
							</Button>
						)}
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
const CreateCoursesPage = () => {
	return (
		<Sidebar>
			<CreateCourses />
		</Sidebar>
	);
};
export default CreateCoursesPage;
