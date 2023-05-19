import {
	Box,
	Button,
	Flex,
	Grid,
	GridItem,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../../../../components/teachers/Sidebar";
import { useNavigate } from "react-router-dom";

const BannerNewOffer = () => {
	const navigate = useNavigate();
	return (
		<Flex
			display="flex"
			justifyContent="center"
			align="center"
			minH="80vh"
		>
			<Grid templateColumns="repeat(2,1fr)">
				<GridItem display="flex" alignItems="center">
					<Box>
						<Heading py="5">Create your first order</Heading>
						<Text>
							The only way to sell your products is with an
							offer. Simply attach your product to an
							offer, set a price, and package it.
						</Text>
						<Flex
							justify="center"
							align="center"
							gap="10"
							py="5"
						>
							<Button
								bgColor="black"
								color="white"
								colorScheme="blackAlpha"
								onClick={() =>
									navigate("/teacher/offers/new")
								}
							>
								Get started
							</Button>
							<Button
								colorScheme="whiteAlpha"
								color="black"
								border="grey 1px solid"
							>
								Learn more
							</Button>
						</Flex>
					</Box>
				</GridItem>
				<GridItem>
					<Image
						w="70%"
						src="https://kajabi-app-assets.kajabi-cdn.com/assets/empty-illustrations/offers-636d317c9ba5d1808941b4f572a97b50c5f0247c2e28c9edf48cd837e95e525a.svg"
					/>
				</GridItem>
			</Grid>
		</Flex>
	);
};

export const BannerNewOfferPage = () => {
	return (
		<Sidebar>
			<BannerNewOffer />
		</Sidebar>
	);
};
export default BannerNewOfferPage;
