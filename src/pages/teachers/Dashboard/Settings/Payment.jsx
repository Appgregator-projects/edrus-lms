import {
	Box,
	Button,
	Divider,
	Flex,
	Grid,
	GridItem,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../../../components/teachers/Sidebar";

const Payment = () => {
	return (
		<>
			<Heading>Payment</Heading>

			<Grid templateColumns="35% 60%" gap="8" my="5">
				<GridItem>
					<Text fontWeight="semibold">Payment Integrations</Text>
					<Text>
						Collect payments on the Offers you sell in Kajabi.
						We offer a variety of ways your customers will be
						able to pay for your products.
					</Text>
				</GridItem>
				<GridItem borderRadius="10px" border="1px solid grey">
					<Flex align="center" justify="center" p="5">
						<Box>
							<Flex align="center" gap="2">
								<Image src="https://kajabi-app-assets.kajabi-cdn.com/assets/integrations/stripe-6748d065c4e40c9d686617fc32ec0cba587d8d09b782db5e0de505328e858580.svg" />
								<Text
									m="0"
									fontWeight="medium"
									fontSize="25px"
								>
									Stripe
								</Text>
							</Flex>
							<Text>
								Kajabi with Stripe to provide you with
								the easiest way to accept credit cards
								from your customers.
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
							>
								Learn More
							</Text>
						</Box>
						<Button bgColor="white" border="1px grey solid">
							Connect
						</Button>
					</Flex>
					<Divider />
					<Flex align="center" justify="center" p="5">
						<Box>
							<Flex align="center" gap="2">
								<Image src="https://kajabi-app-assets.kajabi-cdn.com/assets/integrations/paypal-e4127649700f252dda9f8a5aca3b838b4f6b5062885698c261fbcfbe2ed49127.svg" />
								<Text
									m="0"
									fontWeight="medium"
									fontSize="25px"
								>
									PayPal
								</Text>
							</Flex>
							<Text>
								Connect your account to Kajabi to let
								customers check out with PayPal.
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
							>
								Learn More
							</Text>
						</Box>
						<Button bgColor="white" border="1px grey solid">
							Connect PayPal
						</Button>
					</Flex>
				</GridItem>
			</Grid>
		</>
	);
};
const PaymentPage = () => {
	return (
		<Sidebar>
			<Payment />
		</Sidebar>
	);
};
export default PaymentPage;
