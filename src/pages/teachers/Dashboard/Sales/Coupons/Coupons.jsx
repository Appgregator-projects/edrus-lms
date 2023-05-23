import React from "react";
import Sidebar from "../../../../../components/teachers/Sidebar";
import {
	Box,
	Button,
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Table,
	TableContainer,
	Tabs,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tooltip,
	Tr,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { BsTicket } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Coupons = () => {
	const tabList = ["All", "Single Coupons", "Bulk Codes"];
	const navigate = useNavigate();
	const data = [
		{
			id: 1,
			title: "pulu",
			offers: "0",
			amount: 12,
			duration: "once",
			expirate: "May 21, 2023 11:59PM",
			type: "single",
		},
		{
			id: 1,
			title: "pulu",
			offers: "0",
			amount: 12,
			duration: "once",
			expirate: "May 21, 2023 11:59PM",
			type: "single",
		},
		{
			id: 1,
			title: "pulu",
			offers: "0",
			amount: 12,
			duration: "once",
			type: "bulk",
			expirate: "May 21, 2023 11:59PM",
		},
	];
	return (
		<>
			<Flex align="center" justify="space-between">
				<Text fontWeight="semibold" fontSize="30px">
					Coupons
				</Text>
				<Button
					leftIcon={<AddIcon />}
					bgColor="black"
					colorScheme="blackAlpha"
					onClick={() => navigate("/teacher/coupons/new/banner")}
				>
					New Coupon
				</Button>
			</Flex>
			<Box border=".0625rem solid #eceeef" p="5" borderRadius="10px">
				<Tabs>
					<TabList>
						{tabList.map((data, id) => (
							<Tab key={id} textTransform="capitalize">
								{data}
							</Tab>
						))}
					</TabList>

					<TabPanels>
						<TabPanel>
							{data.length !== 0 ? (
								<>
									<TableContainer>
										<Table>
											<Thead>
												<Tr>
													<Th></Th>
													<Th>
														Coupons
													</Th>
													<Th>
														Number of
														Offers
													</Th>
													<Th>
														Amount Off
													</Th>
													<Th>
														Duration
													</Th>
													<Th>
														Expiration
														Date
													</Th>
												</Tr>
											</Thead>
											<Tbody>
												{data.map(
													(item, id) => (
														<Tr
															key={
																id
															}
														>
															<Td>
																<BsTicket />
															</Td>
															<Td>
																<Text
																	textTransform="uppercase"
																	cursor="pointer"
																	onClick={() =>
																		navigate(
																			"/teacher/coupons/1234/edit"
																		)
																	}
																>
																	<Tooltip label="Edit details">
																		{
																			item.title
																		}
																	</Tooltip>
																</Text>
															</Td>
															<Td>
																{
																	item.offers
																}
															</Td>
															<Td>
																${" "}
																{
																	item.amount
																}{" "}
																USD
																off
															</Td>
															<Td>
																{
																	item.duration
																}
															</Td>

															<Td>
																{" "}
																{
																	item.expirate
																}{" "}
															</Td>
														</Tr>
													)
												)}
											</Tbody>
										</Table>
									</TableContainer>
								</>
							) : (
								<>
									<Text>No offer</Text>
								</>
							)}
						</TabPanel>
						<TabPanel>
							{data.length !== 0 ? (
								<>
									<TableContainer>
										<Table>
											<Thead>
												<Tr>
													<Th></Th>
													<Th>
														Coupons
													</Th>
													<Th>
														Number of
														Offers
													</Th>
													<Th>
														Amount Off
													</Th>
													<Th>
														Duration
													</Th>
													<Th>
														Expiration
														Date
													</Th>
												</Tr>
											</Thead>
											<Tbody>
												{data.map(
													(item, id) =>
														item.type ===
														"single" ? (
															<Tr
																key={
																	id
																}
															>
																<Td>
																	<BsTicket />
																</Td>
																<Td>
																	<Text
																		textTransform="uppercase"
																		cursor="pointer"
																		onClick={() =>
																			navigate(
																				"/teacher/coupons/1234/edit"
																			)
																		}
																	>
																		<Tooltip label="Edit details">
																			{
																				item.title
																			}
																		</Tooltip>
																	</Text>
																</Td>
																<Td>
																	{
																		item.offers
																	}
																</Td>
																<Td>
																	${" "}
																	{
																		item.amount
																	}{" "}
																	USD
																	off
																</Td>
																<Td>
																	{
																		item.duration
																	}
																</Td>

																<Td>
																	{" "}
																	{
																		item.expirate
																	}{" "}
																</Td>
															</Tr>
														) : (
															<></>
														)
												)}
											</Tbody>
										</Table>
									</TableContainer>
								</>
							) : (
								<Text>No offer</Text>
							)}
						</TabPanel>
						<TabPanel>
							{data.length !== 0 ? (
								<>
									<TableContainer>
										<Table>
											<Thead>
												<Tr>
													<Th></Th>
													<Th>
														Coupons
													</Th>
													<Th>
														Number of
														Offers
													</Th>
													<Th>
														Amount Off
													</Th>
													<Th>
														Duration
													</Th>
													<Th>
														Expiration
														Date
													</Th>
												</Tr>
											</Thead>
											<Tbody>
												{data.map(
													(item, id) =>
														item.type ===
														"bulk" ? (
															<Tr
																key={
																	id
																}
															>
																<Td>
																	<BsTicket />
																</Td>
																<Td>
																	<Text
																		textTransform="uppercase"
																		cursor="pointer"
																		onClick={() =>
																			navigate(
																				"/teacher/coupons/1234/edit"
																			)
																		}
																	>
																		<Tooltip label="Edit details">
																			{
																				item.title
																			}
																		</Tooltip>
																	</Text>
																</Td>
																<Td>
																	{
																		item.offers
																	}
																</Td>
																<Td>
																	${" "}
																	{
																		item.amount
																	}{" "}
																	USD
																	off
																</Td>
																<Td>
																	{
																		item.duration
																	}
																</Td>

																<Td>
																	{" "}
																	{
																		item.expirate
																	}{" "}
																</Td>
															</Tr>
														) : (
															<></>
														)
												)}
											</Tbody>
										</Table>
									</TableContainer>
								</>
							) : (
								<Text>No offer</Text>
							)}
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
			<Flex justify="space-between" align="center" my="5">
				<Text>
					<b>1</b> Coupons
				</Text>

				<Flex gap="5" align="center">
					<FiChevronLeft fontSize="20px" cursor="pointer" />
					<Link>3</Link>
					<FiChevronRight fontSize="20px" cursor="pointer" />
				</Flex>
			</Flex>
		</>
	);
};

const CouponsPage = () => {
	return (
		<Sidebar>
			<Coupons />
		</Sidebar>
	);
};
export default CouponsPage;
