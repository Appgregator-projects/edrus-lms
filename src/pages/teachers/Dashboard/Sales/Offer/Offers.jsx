import React from "react";
import Sidebar from "../../../../../components/teachers/Sidebar";
import {
	Box,
	Button,
	Card,
	Flex,
	Grid,
	GridItem,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverFooter,
	PopoverTrigger,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Table,
	TableContainer,
	Tabs,
	Tag,
	TagLabel,
	TagLeftIcon,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tooltip,
	Tr,
	VStack,
} from "@chakra-ui/react";
import { BsQuestionCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import {
	FiBarChart,
	FiCopy,
	FiDelete,
	FiEye,
	FiMoreHorizontal,
	FiXCircle,
} from "react-icons/fi";

const Offers = () => {
	const tabList = ["published", "draft", "all"];
	const navigate = useNavigate();
	const data = [
		{
			id: 1,
			img: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
			title: "offer 1",
			products: 1,
			price: "free",
			qtySold: 0,
			netRevenue: 0.0,
			status: "published",
		},
		{
			id: 2,
			img: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
			title: "offer 2",
			products: 1,
			price: "free",
			qtySold: 0,
			netRevenue: 0.0,
			status: "published",
		},
		{
			id: 3,
			img: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
			title: "offer 3",
			products: 1,
			price: "free",
			qtySold: 0,
			netRevenue: 0.0,
			status: "draft",
		},
	];
	return (
		<>
			<Flex justify="space-between" align="center" mb="5">
				<Flex gap="2" align="center">
					<Text m="0">Offers</Text>
					<BsQuestionCircle fontSize="13px" m="0" />
				</Flex>
				<Link to="/teacher/courses/create">
					<Button colorScheme="green">Add New Offer</Button>
				</Link>
			</Flex>
			<Card p="5" my="5">
				<Grid
					textTransform="capitalize"
					templateColumns="repeat(3,1fr)"
				>
					<GridItem
						alignItems="center"
						justifyContent="center"
						display="flex"
						textAlign="center"
					>
						<Box>
							<Text m="0"> Purchases</Text>
							<Text>Last 30 Days</Text>
							<Text
								fontWeight="bold"
								fontSize="18px"
								m={0}
							>
								6
							</Text>
						</Box>
					</GridItem>
					<GridItem
						alignItems="center"
						justifyContent="center"
						display="flex"
						textAlign="center"
					>
						<Box>
							<Text m="0">Next Revenue</Text>
							<Text>Last 30 days</Text>
							<Text
								fontWeight="bold"
								fontSize="18px"
								m={0}
							>
								$1,982
							</Text>
						</Box>
					</GridItem>
					<GridItem
						alignItems="center"
						justifyContent="center"
						display="flex"
						textAlign="center"
					>
						<Box>
							<Text m="0">Net revenue</Text>
							<Text>all time</Text>
							<Text
								m={0}
								fontWeight="bold"
								fontSize="18px"
							>
								$1,982
							</Text>
						</Box>
					</GridItem>
				</Grid>
			</Card>
			<Card>
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
									<InputGroup>
										<InputLeftElement pointerEvents="none">
											<SearchIcon color="gray.300" />
										</InputLeftElement>
										<Input
											type="tel"
											placeholder="Search..."
										/>
									</InputGroup>
									<TableContainer>
										<Table>
											<Thead>
												<Tr>
													<Th></Th>
													<Th>
														Offer
														Title
													</Th>
													<Th>
														Products
													</Th>
													<Th>Price</Th>
													<Th>
														QTY Sold
													</Th>
													<Th>
														Net
														Revenue
													</Th>
													<Th>
														{" "}
														Status
													</Th>
													<Th></Th>
												</Tr>
											</Thead>
											<Tbody>
												{data.map(
													(item, id) =>
														item.status ===
														"published" ? (
															<Tr
																key={
																	id
																}
															>
																<Td>
																	<Image
																		src={
																			item.img
																		}
																		w="100px"
																		h="70px"
																		objectFit="contain"
																	/>
																</Td>
																<Td>
																	<Text
																		cursor="pointer"
																		onClick={() =>
																			navigate(
																				"/teacher/offers/1234/edit"
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
																		item.products
																	}
																</Td>
																<Td>
																	{
																		item.price
																	}
																</Td>
																<Td>
																	{
																		item.qtySold
																	}
																</Td>

																<Td>
																	{" "}
																	$
																	{
																		item.netRevenue
																	}{" "}
																	USD
																</Td>
																<Td>
																	<Tag>
																		<TagLabel>
																			{
																				item.status
																			}
																		</TagLabel>
																	</Tag>
																</Td>
																<Td>
																	<Flex gap="5">
																		<FiEye />
																		<FiBarChart />
																		<Popover placement="left">
																			<PopoverTrigger>
																				<Text cursor="pointer">
																					<FiMoreHorizontal />
																				</Text>
																			</PopoverTrigger>
																			<PopoverContent w="fit-content">
																				<PopoverBody>
																					<VStack
																						align="left"
																						justify="left"
																					>
																						<Button
																							leftIcon={
																								<FiEye />
																							}
																							variant="ghost"
																						>
																							Preview
																						</Button>
																						<Button
																							leftIcon={
																								<FiCopy />
																							}
																							variant="ghost"
																						>
																							Duplicate
																						</Button>
																						<Button
																							leftIcon={
																								<FiBarChart />
																							}
																							variant="ghost"
																						>
																							Stats
																						</Button>
																					</VStack>
																				</PopoverBody>
																				<PopoverFooter>
																					<Button
																						leftIcon={
																							<FiXCircle />
																						}
																						variant="ghost"
																						colorScheme="red"
																					>
																						Delete
																					</Button>
																				</PopoverFooter>
																			</PopoverContent>
																		</Popover>
																	</Flex>
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
								<>
									<Text>No offer</Text>
								</>
							)}
						</TabPanel>
						<TabPanel>
							{data.length !== 0 ? (
								<>
									<InputGroup>
										<InputLeftElement pointerEvents="none">
											<SearchIcon color="gray.300" />
										</InputLeftElement>
										<Input
											type="tel"
											placeholder="Search..."
										/>
									</InputGroup>
									<TableContainer>
										<Table>
											<Thead>
												<Tr>
													<Th></Th>
													<Th>
														Offer
														Title
													</Th>
													<Th>
														Products
													</Th>
													<Th>Price</Th>
													<Th>
														QTY Sold
													</Th>
													<Th>
														Net
														Revenue
													</Th>
													<Th>
														{" "}
														Status
													</Th>
													<Th></Th>
												</Tr>
											</Thead>
											<Tbody>
												{data.map(
													(item, id) =>
														item.status ===
														"draft" ? (
															<Tr
																key={
																	id
																}
															>
																<Td>
																	<Image
																		src={
																			item.img
																		}
																		w="100px"
																		h="70px"
																		objectFit="contain"
																	/>
																</Td>
																<Td>
																	<Text
																		cursor="pointer"
																		onClick={() =>
																			navigate(
																				"/teacher/offers/1234/edit"
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
																		item.products
																	}
																</Td>
																<Td>
																	{
																		item.price
																	}
																</Td>
																<Td>
																	{
																		item.qtySold
																	}
																</Td>

																<Td>
																	{" "}
																	$
																	{
																		item.netRevenue
																	}{" "}
																	USD
																</Td>
																<Td>
																	<Tag>
																		<TagLabel>
																			{
																				item.status
																			}
																		</TagLabel>
																	</Tag>
																</Td>
																<Td>
																	<Flex gap="5">
																		<FiEye />
																		<FiBarChart />
																		<Popover placement="left">
																			<PopoverTrigger>
																				<Text cursor="pointer">
																					<FiMoreHorizontal />
																				</Text>
																			</PopoverTrigger>
																			<PopoverContent w="fit-content">
																				<PopoverBody>
																					<VStack
																						align="left"
																						justify="left"
																					>
																						<Button
																							leftIcon={
																								<FiEye />
																							}
																							variant="ghost"
																						>
																							Preview
																						</Button>
																						<Button
																							leftIcon={
																								<FiCopy />
																							}
																							variant="ghost"
																						>
																							Duplicate
																						</Button>
																						<Button
																							leftIcon={
																								<FiBarChart />
																							}
																							variant="ghost"
																						>
																							Stats
																						</Button>
																					</VStack>
																				</PopoverBody>
																				<PopoverFooter>
																					<Button
																						leftIcon={
																							<FiXCircle />
																						}
																						variant="ghost"
																						colorScheme="red"
																					>
																						Delete
																					</Button>
																				</PopoverFooter>
																			</PopoverContent>
																		</Popover>
																	</Flex>
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
									<InputGroup>
										<InputLeftElement pointerEvents="none">
											<SearchIcon color="gray.300" />
										</InputLeftElement>
										<Input
											type="tel"
											placeholder="Search..."
										/>
									</InputGroup>
									<TableContainer>
										<Table>
											<Thead>
												<Tr>
													<Th></Th>
													<Th>
														Offer
														Title
													</Th>
													<Th>
														Products
													</Th>
													<Th>Price</Th>
													<Th>
														QTY Sold
													</Th>
													<Th>
														Net
														Revenue
													</Th>
													<Th>
														{" "}
														Status
													</Th>
													<Th></Th>
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
																<Image
																	src={
																		item.img
																	}
																	w="100px"
																	h="70px"
																	objectFit="contain"
																/>
															</Td>
															<Td>
																<Text
																	cursor="pointer"
																	onClick={() =>
																		navigate(
																			"/teacher/offers/1234/edit"
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
																	item.products
																}
															</Td>
															<Td>
																{
																	item.price
																}
															</Td>
															<Td>
																{
																	item.qtySold
																}
															</Td>

															<Td>
																{" "}
																$
																{
																	item.netRevenue
																}{" "}
																USD
															</Td>
															<Td>
																<Tag>
																	<TagLabel>
																		{
																			item.status
																		}
																	</TagLabel>
																</Tag>
															</Td>
															<Td>
																<Flex gap="5">
																	<FiEye />
																	<FiBarChart />
																	<Popover placement="left">
																		<PopoverTrigger>
																			<Text cursor="pointer">
																				<FiMoreHorizontal />
																			</Text>
																		</PopoverTrigger>
																		<PopoverContent w="fit-content">
																			<PopoverBody>
																				<VStack
																					align="left"
																					justify="left"
																				>
																					<Button
																						leftIcon={
																							<FiEye />
																						}
																						variant="ghost"
																					>
																						Preview
																					</Button>
																					<Button
																						leftIcon={
																							<FiCopy />
																						}
																						variant="ghost"
																					>
																						Duplicate
																					</Button>
																					<Button
																						leftIcon={
																							<FiBarChart />
																						}
																						variant="ghost"
																					>
																						Stats
																					</Button>
																				</VStack>
																			</PopoverBody>
																			<PopoverFooter>
																				<Button
																					leftIcon={
																						<FiXCircle />
																					}
																					variant="ghost"
																					colorScheme="red"
																				>
																					Delete
																				</Button>
																			</PopoverFooter>
																		</PopoverContent>
																	</Popover>
																</Flex>
															</Td>
														</Tr>
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
			</Card>
		</>
	);
};

const OffersPage = () => {
	return (
		<Sidebar>
			<Offers />
		</Sidebar>
	);
};
export default OffersPage;
