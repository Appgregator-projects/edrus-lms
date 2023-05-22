import {
	Box,
	Flex,
	FormControl,
	FormLabel,
	Input,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { FiCopy, FiInfo } from "react-icons/fi";

const Outline = () => {
	const stats = [
		{ id: 1, title: "Clicks", total: 0 },
		{ id: 2, title: "Form Submission", total: 0 },
		{ id: 3, title: "Conversions", total: 0 },
		{ id: 4, title: "Conversion Rate", total: "0%" },
	];
	return (
		<>
			<SimpleGrid columns="4" gap="5">
				{stats.map((item, id) => (
					<Box
						key={id}
						border={"1px solid #bbbcbd"}
						p="5"
						borderRadius="10px"
					>
						<Text fontWeight="medium" color="#60666c">
							{item.title}
						</Text>
						<Text fontWeight="bold" fontSize="20px" m="0">
							{item.total}
						</Text>
					</Box>
				))}
			</SimpleGrid>

			<Box
				p="5"
				borderRadius="10px"
				border=".0625rem solid #eceeef"
				my="5"
			>
				<Flex bgColor="#ECEEEF" p="3" gap="3">
					<Box w="2%" mt="1">
						<FiInfo />
					</Box>
					<Box w="98%">
						<Text m="0">
							This site currently has new affiliate user
							registrations disabled. You can enable them
							in settings.
						</Text>
					</Box>
				</Flex>
				<Box my="5">
					<FormControl>
						<FormLabel>Affiliate Signup Link</FormLabel>
						<Flex
							justify="space-between"
							align="center"
							cursor="pointer"
						>
							<Input
								value="https://faizal-al-edrus.mykajabi.com/affiliate_users/sign_up"
								w="97%"
							/>
							<FiCopy />
						</Flex>
					</FormControl>
					<FormControl mt="5">
						<FormLabel>Affiliate Login Link</FormLabel>
						<Flex
							justify="space-between"
							align="center"
							cursor="pointer"
						>
							<Input
								value="https://faizal-al-edrus.mykajabi.com/affiliate_users/sign_in"
								w="97%"
							/>
							<FiCopy />
						</Flex>
					</FormControl>
				</Box>
			</Box>
			<Flex
				p="3"
				borderRadius="50px"
				border=".0625rem solid #eceeef"
				my="5"
				w="30%"
				justify="center"
				align="center"
			>
				<FiInfo color="#2e91fc" />
				<Text m="0" mx="3">
					Learn more about <b>Affiliates</b>
				</Text>
			</Flex>
		</>
	);
};

export default Outline;
