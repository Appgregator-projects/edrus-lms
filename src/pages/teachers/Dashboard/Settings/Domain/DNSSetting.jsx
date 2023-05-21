import React from "react";
import Sidebar from "../../../../../components/teachers/Sidebar";
import { AddIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Divider,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Select,
	Spacer,
	Table,
	TableContainer,
	Tag,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import {
	FiAlertTriangle,
	FiInfo,
	FiLock,
	FiMoreHorizontal,
	FiNavigation,
	FiTrash,
} from "react-icons/fi";
import { FcIdea } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const DNSSetting = () => {
	const ARecord = [
		{ name: "*.edutama.id", points: "172.67.156.254", id: 1 },
		{ name: "*.edutama.id", points: "104.21.48.238", id: 2 },
		{ name: "www.edutama.id", points: "104.21.48.238", id: 3 },
	];
	const CName = [
		{ name: "edutama.id", target: "endpoint.mykajabi.com", id: 1 },
		{
			name: "www.stage.edutama.id",
			target: "endpoint.mykajabi.com",
			id: 2,
		},
	];
	const MXRecord = [
		{ name: "edutama.id", mail: "mx.yandex.net", priority: 10, id: 1 },
	];
	const TXTRecord = [
		{
			name: "edutama.id",
			record: "yandex-verification: 8634a33fe6fffca9",
			id: 1,
		},
		{
			name: "mail._domainkey.edutama.id",
			id: 2,
			record: "v=DKIM1; k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDYCkPHuGc3c5kWl7jMx6pULvK5OJwGuI7Vs7X3oZWzVxuyb7oZdjOpttptLsLv1RITgtJ3WuQqRboVURl38sTxZ",
		},
	];
	const SRV = [{ name: "", id: 1 }];
	return (
		<>
			<Flex align="center" gap="2" my="5">
				<Text m="0" fontWeight="semibold" fontSize="30px">
					DNS Settings
				</Text>
				<FiInfo />
				<Spacer />
				<Button
					leftIcon={<AddIcon />}
					bgColor="black"
					colorScheme="blackAlpha"
				>
					Custom Record
				</Button>
			</Flex>
			<Grid templateColumns="30% 68% " gap="5">
				<GridItem>
					<Text fontWeight="semibold">Advanced Settings</Text>
					<Text>
						Custom records can provide additional
						functionality for your domain or alter its
						behavior. Most commonly, they are used to point
						your domain at a web host or configure the email
						delivery for your domain.
					</Text>
					<Text>
						We don’t recommend editing or removing your custom
						records.
					</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<Text fontWeight="semibold" fontSize="18px">
						DNS Records
					</Text>
					<Box>
						<Text fontWeight="semibold">A Record</Text>

						<Box
							border=".0625rem solid #eceeef"
							borderRadius="10px"
						>
							<TableContainer>
								<Table variant="unstyled">
									<Thead borderBottom=".0625rem solid #eceeef">
										<Tr>
											<Th>Name</Th>
											<Th>Target</Th>
											<Th></Th>
										</Tr>
									</Thead>
									<Tbody>
										{ARecord.map((item, id) => (
											<Tr key={id}>
												<Td>{item.name}</Td>
												<Td>
													{item.points}
												</Td>
												<Td>
													<Menu>
														<MenuButton
															as={
																IconButton
															}
															aria-label="Options"
															icon={
																<FiMoreHorizontal />
															}
															variant="ghost"
														/>
														<MenuList>
															<MenuItem>
																Remove
															</MenuItem>
														</MenuList>
													</Menu>
												</Td>
											</Tr>
										))}
									</Tbody>
								</Table>
							</TableContainer>
						</Box>
					</Box>
					<Box my="5">
						<Text fontWeight="semibold">CName Record</Text>

						<Box
							border=".0625rem solid #eceeef"
							borderRadius="10px"
						>
							<TableContainer>
								<Table variant="unstyled">
									<Thead borderBottom=".0625rem solid #eceeef">
										<Tr>
											<Th>Name</Th>
											<Th>Points to</Th>
											<Th></Th>
										</Tr>
									</Thead>
									<Tbody>
										{CName.map((item, id) => (
											<Tr key={id}>
												<Td>{item.name}</Td>
												<Td>
													{item.target}
												</Td>
												<Td>
													<FiLock />
												</Td>
											</Tr>
										))}
									</Tbody>
								</Table>
							</TableContainer>
						</Box>
					</Box>
					<Box my="5">
						<Text fontWeight="semibold">MX Record</Text>

						<Box
							border=".0625rem solid #eceeef"
							borderRadius="10px"
						>
							<TableContainer>
								<Table variant="unstyled">
									<Thead borderBottom=".0625rem solid #eceeef">
										<Tr>
											<Th>Name</Th>
											<Th>Mail Server</Th>
											<Th>Priority</Th>
											<Th></Th>
										</Tr>
									</Thead>
									<Tbody>
										{MXRecord.map((item, id) => (
											<Tr key={id}>
												<Td>{item.name}</Td>
												<Td>{item.mail}</Td>
												<Td>
													{item.priority}
												</Td>
												<Td>
													<Menu>
														<MenuButton
															as={
																IconButton
															}
															aria-label="Options"
															icon={
																<FiMoreHorizontal />
															}
															variant="ghost"
														/>
														<MenuList>
															<MenuItem>
																Remove
															</MenuItem>
														</MenuList>
													</Menu>
												</Td>
											</Tr>
										))}
									</Tbody>
								</Table>
							</TableContainer>
						</Box>
					</Box>
					<Box my="5">
						<Text fontWeight="semibold">TXT Record</Text>

						<Box
							border=".0625rem solid #eceeef"
							borderRadius="10px"
						>
							<TableContainer>
								<Table variant="unstyled">
									<Thead borderBottom=".0625rem solid #eceeef">
										<Tr>
											<Th>Name</Th>
											<Th>TXT Record</Th>
											<Th></Th>
										</Tr>
									</Thead>
									<Tbody>
										{TXTRecord.map((item, id) => (
											<Tr key={id}>
												<Td>{item.name}</Td>
												<Td>
													<Text
														whiteSpace="nowrap"
														overflow="hidden"
														textOverflow="ellipsis"
														w="200px"
													>
														{
															item.record
														}
													</Text>
												</Td>
												<Td>
													<Menu>
														<MenuButton
															as={
																IconButton
															}
															aria-label="Options"
															icon={
																<FiMoreHorizontal />
															}
															variant="ghost"
														/>
														<MenuList>
															<MenuItem>
																Remove
															</MenuItem>
														</MenuList>
													</Menu>
												</Td>
											</Tr>
										))}
									</Tbody>
								</Table>
							</TableContainer>
						</Box>
						<Box my="5">
							<Text fontWeight="semibold">SRV Record</Text>

							<Box
								border=".0625rem solid #eceeef"
								borderRadius="10px"
							>
								<TableContainer>
									<Table variant="unstyled">
										<Thead borderBottom=".0625rem solid #eceeef">
											<Tr>
												<Th>Name</Th>

												<Th></Th>
											</Tr>
										</Thead>
										<Tbody>
											{SRV.map((item, id) => (
												<Tr key={id}>
													<Td>
														{
															item.name
														}
													</Td>

													<Td>
														<Menu>
															<MenuButton
																as={
																	IconButton
																}
																aria-label="Options"
																icon={
																	<FiMoreHorizontal />
																}
																variant="ghost"
															/>
															<MenuList>
																<MenuItem>
																	Remove
																</MenuItem>
															</MenuList>
														</Menu>
													</Td>
												</Tr>
											))}
										</Tbody>
									</Table>
								</TableContainer>
							</Box>
						</Box>
					</Box>
				</GridItem>
				<GridItem>
					<Text fontWeight="semibold">Nameservers</Text>
					<Text>
						Nameservers let your browser know where your
						website is located. Your site and email won’t work
						correctly without them.
					</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<Text fontWeight="semibold">Edrufy Nameservers</Text>
					<Text>
						You are using Kajabi default nameservers. This
						setting cannot be changed for your domain.
					</Text>
				</GridItem>
			</Grid>
		</>
	);
};
const DNSSettingPages = () => {
	return (
		<Sidebar>
			<DNSSetting />
		</Sidebar>
	);
};
export default DNSSettingPages;
