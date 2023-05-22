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

const BannerNewPayment = () => {
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
						<Heading py="5">
							Connect a payment provider
						</Heading>
						<Text>
							You'll find your payments here once you start
							making sales.
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
									navigate(
										"/teacher/settings/payment"
									)
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
						src="https://kajabi-app-assets.kajabi-cdn.com/assets/transactions/payments-null-img-928dfeb5c7485bee86731e0b9036e9ec79e566ad744ea58ec7205899b44bd515.png"
					/>
				</GridItem>
			</Grid>
		</Flex>
	);
};

export const BannerNewPaymentPage = () => {
	return (
		<Sidebar>
			<BannerNewPayment />
		</Sidebar>
	);
};
export default BannerNewPaymentPage;
