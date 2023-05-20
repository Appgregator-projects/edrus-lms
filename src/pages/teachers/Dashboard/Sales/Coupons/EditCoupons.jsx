import { Box, Button, Container, Flex, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiHelpCircle, FiTrash } from "react-icons/fi";
import Sidebar from "../../../../../components/teachers/Sidebar";
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const EditCoupons = () => {
	const [offer, setOffer] = useState(false);
	const navigate = useNavigate();
	return (
		<>
			<Container>
				<Flex gap="2" align="center" my="5">
					<Text
						fontWeight="semibold"
						textTransform="uppercase"
						fontSize="30px"
						m="0"
					>
						test-discount
					</Text>
					<FiHelpCircle />
				</Flex>
				<Box
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<Text fontWeight="semibold">
						Single Coupon Discount
					</Text>
					<Flex justify="space-between">
						<Text fontWeight="semibold">Coupon Type</Text>
						<Text>Single Coupon</Text>
					</Flex>
					<Flex justify="space-between">
						<Text fontWeight="semibold">Coupon Code</Text>
						<Text>PULU</Text>
					</Flex>
					<Flex justify="space-between">
						<Text fontWeight="semibold">Discount Type</Text>
						<Text>Amount off</Text>
					</Flex>
					<Flex justify="space-between">
						<Text fontWeight="semibold">Amount Off</Text>
						<Text>$12.00 USD off</Text>
					</Flex>
					<Flex justify="space-between">
						<Text fontWeight="semibold">Duration</Text>
						<Text>Once</Text>
					</Flex>
					<Flex justify="space-between">
						<Text fontWeight="semibold">Expiration Date</Text>
						<Text>May 21, 2023 11:59PM</Text>
					</Flex>
					<Flex justify="space-between">
						<Flex gap="2" align="center">
							<Text fontWeight="semibold" m="0">
								Codes Created via Automations
							</Text>
							<FiHelpCircle />
						</Flex>
						<Text>0</Text>
					</Flex>
				</Box>
				<Box
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
					my="5"
				>
					<Text fontWeight="semibold">Included Offers</Text>
					<Text>
						Select the offer(s) you would like this coupon to
						be active for.
					</Text>
					{!offer ? (
						<Flex
							gap="2"
							align="center"
							cursor="pointer"
							onClick={() => setOffer(true)}
						>
							<AddIcon />
							Add Offer
						</Flex>
					) : (
						<Select>
							<option></option>
						</Select>
					)}
				</Box>
				<Flex justify="space-between" align="center">
					<Button
						colorScheme="red"
						variant="ghost"
						leftIcon={<FiTrash />}
					>
						Delete Coupon
					</Button>
					<Button
						bgColor="black"
						colorScheme="blackAlpha"
						mx="5"
						onClick={() => navigate("/teacher/coupons")}
					>
						Done
					</Button>
				</Flex>
			</Container>
		</>
	);
};

const EditCouponsPage = () => {
	return (
		<Sidebar>
			<EditCoupons />
		</Sidebar>
	);
};
export default EditCouponsPage;
