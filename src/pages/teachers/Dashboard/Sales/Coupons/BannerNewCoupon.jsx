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

const BannerNewCoupon = () => {
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
						<Heading py="5">Create your first coupon</Heading>
						<Text>
							Entice members who might be interested in
							your offers by creating a single coupon or
							bulk codes.
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
									navigate("/teacher/coupons/new")
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
						src="https://kajabi-app-assets.kajabi-cdn.com/assets/coupons/coupons-null-img-485002b337d90fb2349e3c3f573c9fa32245e73a803f35c2ecf1b92fbda2ac86.png"
					/>
				</GridItem>
			</Grid>
		</Flex>
	);
};

export const BannerNewCouponPage = () => {
	return (
		<Sidebar>
			<BannerNewCoupon />
		</Sidebar>
	);
};
export default BannerNewCouponPage;
