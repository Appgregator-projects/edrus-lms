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
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../../../../components/teachers/Sidebar";
import { BsCalendarEvent, BsCoin } from "react-icons/bs";
import { useState } from "react";
import { AiFillInfoCircle, AiOutlineStop } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const NewOffer = () => {
	const [stage, setStage] = useState(false);
	const [paid, setPaid] = useState(null);
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
								Selling has never be easier. We'll help
								you price and sell your ofeer in a
								couple easy steps.
							</Text>

							<Box>
								<FormControl>
									<FormLabel>Offer title</FormLabel>
									<Input placeholder="(required)" />
								</FormControl>
								<FormControl>
									<FormLabel>
										Product(s) in this offer
									</FormLabel>
									<Select>
										<option>product 1</option>
										<option>product 2</option>
									</Select>
								</FormControl>
								<Card p="5" my="5">
									<Flex
										align="center"
										justify="space-between"
									>
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
												<Text
													fontWeight="semibold"
													m="0"
												>
													product 1
												</Text>
												<Text m="0">
													Coaching
												</Text>
											</Box>
										</Flex>
										<CloseButton />
									</Flex>
								</Card>
								<Button
									my="5"
									w="100%"
									bgColor="black"
									color="white"
									colorScheme="blackAlpha"
									onClick={() => setStage(true)}
								>
									Continue
								</Button>
							</Box>
						</>
					) : (
						<>
							<Text fontWeight="semibold" fontSize="25px">
								Price your offer
							</Text>
							<Text color="#8D939A">
								Choose whether this Course is paid or
								free. If it's paid, set its price and
								payment preferences.
							</Text>
							<Flex align="center" gap="5">
								<Box
									border={
										paid === true
											? "2px solid black"
											: "1px solid #bbbcbd"
									}
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
									border={
										paid === false
											? "2px solid black"
											: "1px solid #bbbcbd"
									}
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
										<Text
											m="0"
											fontWeight="semibold"
										>
											Getting paid
										</Text>
										<Text my="2">
											Kajabi collects no fees
											on any payments! To
											charge and receive
											payments you will need to
											connect to Stripe or
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
											onClick={() =>
												navigate(
													"/teacher/settings/payment"
												)
											}
										>
											Connect a payment
											provider
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
									onClick={() =>
										navigate(
											"/teacher/offers/1234/edit"
										)
									}
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
