import React from "react";
import Sidebar from "../../../../components/teachers/Sidebar";
import {
	Box,
	Text,
	Grid,
	GridItem,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	Spacer,
	Button,
	Flex,
	InputRightElement,
	Select,
	FormHelperText,
	Textarea,
	Switch,
	HStack,
	Avatar,
	VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiCopy } from "react-icons/fi";
const AccountDetails = () => {
	return (
		<>
			<Flex align="center" gap="2" my="5" justify="space-between">
				<Text m="0" fontWeight="semibold" fontSize="30px">
					Account Details
				</Text>
				<Button bgColor="black" colorScheme="blackAlpha">
					Save
				</Button>
			</Flex>
			<Grid templateColumns="30% 68% " gap="5">
				<GridItem>
					<Text fontWeight="semibold">Details</Text>
					<Text>Edit your account information, here.</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<FormControl>
						<FormLabel>First Name</FormLabel>
						<Input type="text" />
					</FormControl>
					<FormControl>
						<FormLabel>Last Name</FormLabel>
						<Input type="text" />
					</FormControl>
					<FormControl>
						<FormLabel>Account ID</FormLabel>
						<Input type="number" isDisabled />
					</FormControl>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input type="email" />
					</FormControl>
					<FormControl>
						<FormLabel>Phone Number</FormLabel>
						<Input type="text" />
					</FormControl>
					<FormControl>
						<FormLabel>Time Zone</FormLabel>
						<Select>
							<option>(GMT+07:00) Jakarta</option>
						</Select>
					</FormControl>
					<Box
						border=".0625rem solid #eceeef"
						p="5"
						borderRadius="10px"
						my="5"
					>
						<Text fontWeight="semibold">Avatar</Text>
						<HStack gap="3">
							<Avatar size="lg" />
							<VStack align="left">
								<Text m="0">
									Recommeended dimension{" "}
									<b>100x100</b>
								</Text>
								<Link>Change Avatar</Link>
							</VStack>
						</HStack>
					</Box>
				</GridItem>

				<GridItem>
					<Text fontWeight="semibold">Social Profile</Text>
					<Text>
						Edit information displayed publicly in
						communities.
					</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<FormControl>
						<FormLabel>Bio</FormLabel>
						<Textarea h="150px" placeholder="Public bio" />
					</FormControl>
					<FormControl>
						<FormLabel>Pronoun</FormLabel>
						<Select>
							<option></option>
						</Select>
					</FormControl>
					<FormControl>
						<FormLabel>Location</FormLabel>
						<Input
							type="text"
							placeholder="Public Location"
						/>
					</FormControl>
				</GridItem>
				<GridItem>
					<Text fontWeight="semibold">API Credentials</Text>
					<Text>The API credentials for this account.</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<FormControl>
						<FormLabel>Api Key</FormLabel>
						<Flex
							justify="space-between"
							cursor="pointer"
							align="center"
						>
							<Input type="text" w="95%" />
							<FiCopy />
						</Flex>
					</FormControl>
					<FormControl>
						<FormLabel>Api Secret</FormLabel>
						<Flex
							justify="space-between"
							cursor="pointer"
							align="center"
						>
							<Input type="text" w="95%" />
							<FiCopy />
						</Flex>
					</FormControl>
				</GridItem>
			</Grid>
			<Flex gap="2" my="5" justify="right">
				<Button bgColor="black" colorScheme="blackAlpha">
					Save
				</Button>
			</Flex>
		</>
	);
};

const AccountDetailsPages = () => {
	return (
		<Sidebar>
			<AccountDetails />
		</Sidebar>
	);
};
export default AccountDetailsPages;
