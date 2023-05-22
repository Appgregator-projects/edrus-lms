import {
	Box,
	Button,
	Flex,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Switch,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiTag } from "react-icons/fi";

const CommisionSetup = () => {
	const data = [
		{
			id: 1,
			title: "test-offer",
			price: "free",
			commision: 0,
			img: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
		},
		{
			id: 2,
			title: "test-offer",
			price: "free",
			commision: 0,
			img: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
		},
		{
			id: 3,
			title: "test-offer",
			price: "free",
			commision: 0,
			img: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
		},
	];
	return (
		<>
			<Text fontWeight="bold">Available Offers</Text>
			<Box border=".0625rem solid #eceeef" borderRadius="10px" p="5">
				{data.map((item, id) => (
					<Flex
						gap="5"
						border=".0625rem solid #eceeef"
						borderRadius="10px"
						p="5"
						my="5"
						justify="space-between"
					>
						<Image
							src={item.img}
							w="100px"
							h="70px"
							objectFit="contain"
						/>
						<Box w="20%">
							<Text m="0">{item.title}</Text>
							<Flex gap="2" align="center">
								<FiTag />{" "}
								<Text m="0">{item.price}</Text>
							</Flex>
						</Box>
						<Switch />
						<InputGroup>
							<Input />
							<InputRightElement w="10%">
								<Button>Save</Button>
							</InputRightElement>
						</InputGroup>
					</Flex>
				))}
			</Box>
		</>
	);
};

export default CommisionSetup;
