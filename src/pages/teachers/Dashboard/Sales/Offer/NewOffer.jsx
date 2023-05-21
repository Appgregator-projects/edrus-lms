import {
	Box,
	Text,
	FormControl,
	FormLabel,
	Input,
	Select,
	Grid,
	GridItem,
	Image,
	Button,
	Card,
	Flex,
	Square,
	CloseButton,
	useToast,
	Spinner,
	Stack,
	Checkbox,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Sidebar from "../../../../../components/teachers/Sidebar";
import { BsCalendarEvent, BsCoin } from "react-icons/bs";
import { AiFillInfoCircle, AiOutlineStop } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { db } from "../../../../../config/firebase";
import {
	addDoc,
	collection,
	getDocs,
	query,
	where,
	updateDoc,
	doc,
} from "firebase/firestore";

const NewOffer = () => {
	const [loading, setLoading] = useState(false);
	const [stage, setStage] = useState(false);
	const [paid, setPaid] = useState(null);
	const toast = useToast();
	const PROJECT_ID = "rifqyganteng";
	const [titleOffer, setTitleOffer] = useState("");
	const [descriptionOffer, setDescriptionOffer] = useState("");
	const [typeOffer, setTypeOffer] = useState("");
	const [amountOffer, setAmountOffer] = useState(0);
	const [scheduleOffer, setScheduleOffer] = useState("");
	const [coursesList, setCoursesList] = useState([]);
	const [productActive, setProductActive] = useState([]);

	const handleAddOffer = async () => {
		setLoading(true);

		const dataObject = {
			project_id: PROJECT_ID,
			product_type: typeOffer,
			product_schedule: typeOffer === "product" ? "UNLIMITED" : scheduleOffer,
			label: titleOffer,
			description: descriptionOffer,
			price: Number(amountOffer),
			created_at: new Date(),
			status: "all",
			product_active: productActive,
		};

		console.log(dataObject, 'xxx')

		try {
			const docRef = await addDoc(collection(db, "offers"), dataObject);
			console.log("Added document with ID: ", docRef.id);
			if (docRef.id) {
				toast({
					title: "Rifqy Ganteng",
					description: "Success add offers.",
					status: "success",
				});
			}
			setLoading(false);
		} catch (error) {
			console.log(error, "ini error");
			setLoading(false);
		}
	};

	const getProducts = async () => {
		try {
			const col = collection(db, "courses");
			const q = query(col, where("project_id", "==", PROJECT_ID));
			const querySnapshot = await getDocs(q);
			const dataArr = querySnapshot.docs.map((doc) => ({
				ID: doc.id,
				...doc.data(),
			}));
			setCoursesList(dataArr);
			console.log(dataArr, "ini data");
		} catch (error) {
			console.log(error, "ini error");
		}
	};

	useEffect(() => {
		getProducts();
		return () => { };
	}, []);

	const handleAddProductActive = (selectedCourse) => {
		setProductActive((prevProducts) => [...prevProducts, selectedCourse]);
	};

	const handleRemoveProductActive = (selectedCourse) => {
		setProductActive((prevProducts) =>
			prevProducts.filter((product) => product.ID !== selectedCourse.ID)
		);
	};

	const navigate = useNavigate();

	return (
		<>
			<Grid templateColumns="40% 60%">
				<GridItem>
					{!stage ? (
						<>
							<Text fontWeight="semibold" fontSize="25px">
								What product(s) are you selling?
							</Text>
							<Text color="#8D939A">
								Selling has never be easier. We'll help you price and sell your
								offer in a couple easy steps.
							</Text>

							<Box>
								<FormControl>
									<FormLabel>Offer Title</FormLabel>
									<Input
										placeholder="(required)"
										onChange={(e) => setTitleOffer(e.target.value)}
									/>
								</FormControl>

								<FormControl>
									<FormLabel>Offer Description</FormLabel>
									<Input
										placeholder="(required)"
										onChange={(e) => setDescriptionOffer(e.target.value)}
									/>
								</FormControl>

								<FormControl>
									<FormLabel>Offer Type</FormLabel>
									<Select
										onChange={(e) => setTypeOffer(e.target.value)}
										placeholder="Type"
									>
										<option value="subscription">Subscription</option>
										<option value="product">One-time</option>
									</Select>
								</FormControl>

								{typeOffer === "subscription" && (
									<FormControl>
										<FormLabel>Offer Schedule</FormLabel>
										<Select
											onChange={(e) => setScheduleOffer(e.target.value)}
											accessibilityLabel="schedule"
											placeholder="schedule"
										>
											<option value="WEEK">1 Week</option>
											<option value="MONTH">1 Month</option>
										</Select>
									</FormControl>
								)}

								<FormControl>
									<FormLabel>Offer Price (Rp.)</FormLabel>
									<Input
										type="number"
										placeholder="(required)"
										onChange={(e) => setAmountOffer(e.target.value)}
									/>
								</FormControl>

								<FormControl>
									<FormLabel>List Product Active</FormLabel>
									<Select
									accessibilityLabel="set Product Active"
									placeholder="set Product Active"
										onChange={(e) => {
											const selectedCourse = coursesList.find(
												(course) => course.ID === e.target.value
											);
											handleAddProductActive(selectedCourse);
										}}
									>
										{coursesList.map((course) => (
											<option key={course.ID} value={course.ID}>
												{course.title}
											</option>
										))}
									</Select>
								</FormControl>

								{productActive.map((course) => (
									<Card p="5" my="5" key={course.ID}>
										<Flex align="center" justify="space-between">
											<Flex gap="5">
												<Square
													bgColor="#abe9ff"
													borderRadius="10px"
													w="50px"
													h="50px"
												>
													<BsCalendarEvent
														color="#000080"
														fontSize="25px"
													/>
												</Square>
												<Box>
													<Text fontWeight="semibold" m="0">
														{course.title}
													</Text>
													<Text m="0">{course.category}</Text>
												</Box>
											</Flex>
											<CloseButton
												onClick={() => handleRemoveProductActive(course)}
											/>
										</Flex>
									</Card>
								))}

								{loading ? (
									<Stack alignItems={"center"} justifyContent="center">
										<Spinner />
									</Stack>
								) : (
									<Button
										my="5"
										w="100%"
										bgColor="black"
										color="white"
										colorScheme="blackAlpha"
										onClick={() => handleAddOffer()}
									>
										Continue
									</Button>
								)}
							</Box>
						</>
					) : (
						<>
							<Text fontWeight="semibold" fontSize="25px">
								Price your offer
							</Text>
							<Text color="#8D939A">
								Choose whether this Course is paid or free. If it's paid, set
								its price and payment preferences.
							</Text>
							<Flex align="center" gap="5">
								<Box
									border={paid === true ? "2px solid black" : "1px solid #bbbcbd"}
									w="50%"
									p="5"
									borderRadius="10px"
									cursor="pointer"
									_hover={
										paid === true
											? {
												border: "2px solid black",
											}
											: {
												border: "1px solid #656769",
											}
									}
									onClick={() => setPaid(true)}
								>
									<BsCoin />
									<Text m="0">Paid</Text>
								</Box>
								<Box
									border={paid === false ? "2px solid black" : "1px solid #bbbcbd"}
									w="50%"
									p="5"
									borderRadius="10px"
									cursor="pointer"
									_hover={
										paid === false
											? {
												border: "2px solid black",
											}
											: {
												border: "1px solid #656769",
											}
									}
									onClick={() => setPaid(false)}
								>
									<AiOutlineStop />
									<Text m="0">Free</Text>
								</Box>
							</Flex>
							{paid ? (
								<Flex
									bgColor="#e6f4fe"
									p="5"
									gap="3"
									my="5"
									borderRadius="10px"
								>
									<Box w="5%" mt="1">
										<AiFillInfoCircle color="#0072ef" />
									</Box>
									<Box w="95%">
										<Text m="0" fontWeight="semibold">
											Getting paid
										</Text>
										<Text my="2">
											Kajabi collects no fees on any payments! To charge and
											receive payments you will need to connect to Stripe or
											Paypal.
										</Text>
										<Text
											textDecor="underline"
											color="#0072ef"
											fontWeight="semibold"
											_hover={{
												textDecor: "none",
											}}
											m="0"
											cursor="pointer"
											onClick={() => navigate("/teacher/settings/payment")}
										>
											Connect a payment provider
										</Text>
									</Box>
								</Flex>
							) : (
								<></>
							)}

							<Flex gap={5} my="5">
								<Button
									bgColor="white"
									color="black"
									colorScheme="whiteAlpha"
									border="gray 1px solid"
									onClick={() => setStage(false)}
								>
									Go Back
								</Button>
								<Button
									bgColor="black"
									colorScheme="blackAlpha"
									color="white"
									w="100%"
									onClick={() => navigate("/teacher/offers/1234/edit")}
								>
									Save and Finish
								</Button>
							</Flex>
						</>
					)}
				</GridItem>
				<GridItem>
					<Image
						ml="5"
						src="https://lh3.googleusercontent.com/sNv7UHmWevyUEDE4D6cEFYv-M1yx2YLki5uHV-RjZ8pPMp0ePgq8yKS1SLJah7k8SnSKm5wqYijLEAemKUGW9HPhbWGOxvRxmiydtJMw"
						borderRadius="5px"
						w="90%"
					/>
				</GridItem>
			</Grid>
		</>
	);
};

const NewOfferPage = () => {
	return (
		<Sidebar>
			<NewOffer />
		</Sidebar>
	);
};

export default NewOfferPage;