import React, { useState } from "react";
import Sidebar from "../../../../../components/teachers/Sidebar";
import {
	Box,
	Button,
	Container,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	Radio,
	RadioGroup,
	Select,
	Stack,
	Text,
} from "@chakra-ui/react";
import { FiHelpCircle, FiLayers } from "react-icons/fi";
import { BsTicket } from "react-icons/bs";
import BackButton from "../../../../../components/Button/BackButton";
import { useNavigate } from "react-router-dom";

const NewCoupons = () => {
	const [coupon, setCoupon] = useState(true);
	const [discount, setDiscount] = useState("percent");
	const [duration, setDuration] = useState(null);
	const navigate = useNavigate();
	console.log(discount, "ni disc");
	return (
		<>
			<Container>
				<Flex gap="2" align="center" my="5">
					<Text
						fontWeight="semibold"
						fontSize="30px"
						textTransform="uppercase"
						m="0"
					>
						new coupon
					</Text>
					<FiHelpCircle />
				</Flex>
				<Box
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<Text fontWeight="semibold"> Coupon Type</Text>
					<Flex align="center" gap="5">
						<Box
							border={
								coupon === true
									? "2px solid black"
									: "1px solid #bbbcbd"
							}
							w="50%"
							p="5"
							borderRadius="10px"
							cursor="pointer"
							_hover={
								coupon === true
									? {
											border: "2px solid black",
									  }
									: {
											border: "1px solid #656769",
									  }
							}
							onClick={() => setCoupon(true)}
						>
							<BsTicket />
							<Text m="0">Single Coupon</Text>
						</Box>
						<Box
							border={
								coupon === false
									? "2px solid black"
									: "1px solid #bbbcbd"
							}
							w="50%"
							p="5"
							borderRadius="10px"
							cursor="pointer"
							_hover={
								coupon === false
									? {
											border: "2px solid black",
									  }
									: {
											border: "1px solid #656769",
									  }
							}
							onClick={() => setCoupon(false)}
						>
							<FiLayers />
							<Text m="0">Bulk Codes</Text>
						</Box>
					</Flex>
				</Box>
				<Box
					border=".0625rem solid #eceeef"
					p="5"
					my="5"
					borderRadius="10px"
				>
					<Text fontWeight="semibold"> Coupon Details</Text>
					<Text>
						<b>Note:</b> Coupon details cannot be changed once
						the coupon is created.
					</Text>
					<FormControl>
						<FormLabel>
							{coupon === true
								? "Coupon Code"
								: "Coupon Name"}
						</FormLabel>
						<Input
							placeholder={
								coupon === true
									? "Coupon Code"
									: "Coupon Name"
							}
						/>
					</FormControl>
					<Box my="5">
						<Text fontWeight="semibold"> Discount Type</Text>

						<RadioGroup onChange={(e) => setDiscount(e)}>
							<Stack>
								<Radio value="percent">
									Percent Off
								</Radio>
								<Radio value="amount">Amount Off</Radio>
							</Stack>
						</RadioGroup>
					</Box>
					<FormControl>
						{discount === "percent" ? (
							<>
								<FormLabel textTransform="capitalize">
									Percent Off
								</FormLabel>
								<Flex
									align="center"
									justify="center"
									gap="2"
								>
									<Input
										type="number"
										placeholder="Percent Off"
										w="95%"
									/>
									<Text m="0">%</Text>
								</Flex>
							</>
						) : (
							<Flex gap="2">
								<FormControl>
									<FormLabel>Amount Off</FormLabel>
									<Flex
										gap="2"
										align="center"
										justify="center"
									>
										<Input type="number" />
										<Text m="0">%</Text>
									</Flex>
								</FormControl>

								<FormControl>
									<FormLabel>
										Currency Type
									</FormLabel>
									<Select>
										<option>
											--- Please Select
											Currency ---
										</option>
									</Select>
								</FormControl>
							</Flex>
						)}
					</FormControl>
					<Box my="5">
						<Text fontWeight="semibold">Duration</Text>
						<Text>
							How many months will this coupon last once
							applied to your customer? (This affects
							subscriptions and offers set up with multiple
							payments.)
						</Text>
						<RadioGroup onChange={(e) => setDuration(e)}>
							<Stack>
								<Radio value="once">Once</Radio>
								<Radio value="repeat">Repeating</Radio>
								<Radio value="forever">Forever</Radio>
							</Stack>
						</RadioGroup>
						{duration === "repeat" ? (
							<FormControl>
								<FormLabel>Duration in Month</FormLabel>
								<Input placeholder="Duration in Month" />
							</FormControl>
						) : (
							<></>
						)}
					</Box>
					<FormControl>
						<FormLabel>Expiration Date</FormLabel>
						<Input
							placeholder="Expiration Date"
							type="date"
						/>
						<FormHelperText fontSize="12px">
							Coupon can be redeemed until selected day in
							Jakarta timezone
						</FormHelperText>
					</FormControl>
				</Box>
				<Flex align="right" justify="right" my="5">
					<BackButton />
					<Button
						bgColor="black"
						colorScheme="blackAlpha"
						mx="5"
						onClick={() =>
							navigate("/teacher/coupons/1234/edit")
						}
					>
						Continue
					</Button>
				</Flex>
			</Container>
		</>
	);
};

const NewCouponsPage = () => {
	return (
		<Sidebar>
			<NewCoupons />
		</Sidebar>
	);
};
export default NewCouponsPage;
