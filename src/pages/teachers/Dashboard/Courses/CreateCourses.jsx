import {
	Box,
	Button,
	Heading,
	Input,
	SimpleGrid,
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
	Checkbox,
	Select,
	Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Sidebar from "../../../../components/teachers/Sidebar";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { UseAuthState } from "../../../../context/Context";

const CreateCourses = () => {
	const navigate = useNavigate();
	const [course, setCourse] = useState({});
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [courseType, setCourseType] = useState();
	const [offerList, setOfferList] = useState([]);
	const { user: { uid }, project_id } = UseAuthState();

	const [coursePaid, setCoursePaid] = useState('');
	const [loading, setLoading] = useState(false);

	const PROJECT_ID = 'rifqyganteng';
	const authentication = { uid, project_id: PROJECT_ID };

	const getOfferData = async () => {
		try {
			const col = collection(db, "offers");
			const q = query(col, where("project_id", "==", PROJECT_ID));
			const querySnapshot = await getDocs(q);
			const dataArr = querySnapshot.docs.map((doc) => ({
				...doc.data(),
				course_id: doc.id,
			}));
			setOfferList(dataArr);
		} catch (error) {
			console.log(error, 'ini error');
		}
	};

	useEffect(() => {
		getOfferData();
		return () => { };
	}, []);

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

	const handleAddCourse = async () => {
		try {
			setLoading(true);
			const selectedOffers = offerList
				.filter((_, index) => course[`offer_${index}`])
				.map((offer) => ({
					...offer,
					offer_active: true,
				}));

			const newObj = {
				...course,
				offer_active: selectedOffers,
				...authentication,
				dateAdded: new Date(),
				lastUpdated: new Date(),
			};

			// Menghapus semua properti offer_X
			for (let i = 0; i < offerList.length; i++) {
				delete newObj[`offer_${i}`];
			}


			const docRef = await addDoc(collection(db, "courses"), newObj);
			console.log("Document written with ID: ", docRef.id);
			onClose();
			setLoading(false);
			navigate(`/teacher/courses/${docRef.id}`);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	return (
		<>
			<SimpleGrid columns="3">
				{product.map((x, i) => (
					<Box key={i} p="2" borderRadius="md" shadow="base" m="2">
						<Heading>{x.icon}</Heading>
						<Heading fontSize="sm">{x.title}</Heading>
						<Text>{x.description}</Text>
						<Button onClick={() => handleModal(i)} colorScheme="green">
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
							<>
								{`${product[courseType].icon} ${product[courseType].title}`}
							</>
						) : (
							<></>
						)}
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

						<Select onChange={(e) => setCoursePaid(e.target.value)}>
							<option value="free">Free</option>
							<option value="paid">Paid</option>
						</Select>

						<Input
							type="file"
							onChange={(e) =>
								setCourse({
									...course,
									image: e.target.files[0],
								})
							}
						/>
						{coursePaid === "paid" && (
							<Stack>
								<Heading size="md" mt={4}>
									Offer List
								</Heading>
								{offerList.map((offer, index) => (
									<Checkbox
										key={index}
										value={offer.label}
										onChange={(e) =>
											setCourse({
												...course,
												[`offer_${index}`]: e.target.checked,
											})
										}
									>
										{offer.label}
									</Checkbox>
								))}
							</Stack>
						)}
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
							<Button colorScheme="green" onClick={() => handleAddCourse()}>
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