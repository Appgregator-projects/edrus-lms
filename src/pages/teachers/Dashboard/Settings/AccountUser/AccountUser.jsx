import React from "react";
import Sidebar from "../../../../../components/teachers/Sidebar";
import {
	Box,
	Button,
	Flex,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tooltip,
	Tr,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FiEdit2 } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const AccountUser = () => {
	const navigate = useNavigate();
	const user = [
		{
			name: "ayas ayas",
			email: "ayas@nft.co.id",
			id: 1,
		},
		{ name: "fitri fitri", email: "fitriana@importir.co", id: 2 },
	];
	return (
		<>
			<Flex align="center" gap="2" my="5" justify="space-between">
				<Text m="0" fontWeight="semibold" fontSize="30px">
					Users
				</Text>
				<Button
					leftIcon={<AddIcon />}
					bgColor="black"
					colorScheme="blackAlpha"
					onClick={() =>
						navigate("/teacher/settings/account-users/new")
					}
				>
					New User
				</Button>
			</Flex>

			<Box border=".0625rem solid #eceeef" borderRadius="10px">
				<TableContainer>
					<Table variant="unstyled">
						<Thead borderBottom=".0625rem solid #eceeef">
							<Tr>
								<Th>Name</Th>
								<Th>Email</Th>
								<Th></Th>
							</Tr>
						</Thead>
						<Tbody>
							{user.map((item, id) => (
								<Tr key={id}>
									<Td>{item.name}</Td>
									<Td>{item.email}</Td>
									<Td>
										<Tooltip
											label="Edit"
											hasArrow
											placement="bottom"
										>
											<Button
												variant="ghost"
												textAlign="center"
												m="0"
												align="center"
												justify="center"
												onClick={() =>
													navigate(
														"/teacher/settings/account-users/new"
													)
												}
											>
												<FiEdit2 />
											</Button>
										</Tooltip>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>
			</Box>
		</>
	);
};
const AccountUserPages = () => {
	return (
		<Sidebar>
			<AccountUser />
		</Sidebar>
	);
};
export default AccountUserPages;
