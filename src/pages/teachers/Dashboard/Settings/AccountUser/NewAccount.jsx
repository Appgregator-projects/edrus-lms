import React from "react";
import Sidebar from "../../../../../components/teachers/Sidebar";
import {
	Box,
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	Input,
	Radio,
	RadioGroup,
	Select,
	Text,
	VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NewAccount = () => {
	return (
		<>
			<Text fontWeight="semibold" fontSize="30px">
				New User
			</Text>
			<Grid templateColumns="30% 68% " gap="5">
				<GridItem>
					<Text fontWeight="semibold">User Details</Text>
					<Text>Users can help run your sites with you.</Text>
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
					<FormControl>
						<FormLabel>Password</FormLabel>
						<Input type="password" />
					</FormControl>
					<FormControl>
						<FormLabel>Password Confirmation</FormLabel>
						<Input type="password" />
					</FormControl>
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
					<Text fontWeight="semibold">Role</Text>
					<Text>Role controls how much access the user has</Text>
					<Link>Learn More</Link>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<RadioGroup>
						<VStack align="right">
							<Radio m="0" value="1">
								<Text m="0">Administrator</Text>
								<Text>
									Administrators have the same
									permission as owners, with the
									exception of Stripe Connections
								</Text>
							</Radio>
							<Radio value="2">
								<Text m="0">Assistant</Text>
								<Text>
									Assistants are able to delete and
									modify site content, but cannot see
									financial report data
								</Text>
							</Radio>
							<Radio value="3">
								<Text m="0">Support Specialist</Text>
								<Text>
									Support Specialists can moderate
									comments and manage people
								</Text>
							</Radio>
						</VStack>
					</RadioGroup>
				</GridItem>
				<GridItem>
					<Text fontWeight="semibold">Sites</Text>
					<Text>
						Which sites should this user have access to?
					</Text>
				</GridItem>
				<GridItem>
					<Flex
						align="center"
						border=".0625rem solid #eceeef"
						p="5"
						borderRadius="10px"
					>
						<Checkbox>faizal al edrus's First Site</Checkbox>
					</Flex>
				</GridItem>
			</Grid>
			<Flex my="5" justify="right">
				<Button bgColor="black" colorScheme="blackAlpha">
					Save
				</Button>
			</Flex>
		</>
	);
};
const NewAccountPages = () => {
	return (
		<Sidebar>
			<NewAccount />
		</Sidebar>
	);
};
export default NewAccountPages;
