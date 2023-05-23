import React from "react";
import Sidebar from "../../../../../components/teachers/Sidebar";
import {
	Avatar,
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	Link,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Select,
	Table,
	TableContainer,
	Tag,
	TagLabel,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { IoLogoWhatsapp } from "react-icons/io";
import {
	FiChevronLeft,
	FiChevronRight,
	FiMoreHorizontal,
	FiTag,
} from "react-icons/fi";

const Payment = () => {
	const course = [
		{ name: "course 1", id: 1 },
		{ name: "course 2", id: 2 },
		{ name: "course 3", id: 3 },
	];
	const payments = [
		{
			id: 1,
			name: "Fitriana",
			email: "fitriana0116@gmail.com",
			eMarket: "fitriana@importir.co",
			idPayment: 1235642,
			price: 123,
			whatsapp: 6285775033279,
			status: "completed",
			statusPayment: "paid",
			type: "Course",
			date: "22-05-2023",
			paidAt: "29-05-2023",
			completedAt: "29-05-2023",
			paymentMethod: "Transfer",
		},
		{
			id: 2,
			name: "Arzak",
			email: "arzaktyasanto@gmail.com",
			eMarket: "arzak@importir.co",
			idPayment: 1235642423121,
			price: 123,
			whatsapp: 6285775033279,
			status: "pending",
			statusPayment: "paid",
			typr: "Course",
			date: "22-05-2023",
			paidAt: "29-05-2023",
			completedAt: "29-05-2023",
			paymentMethod: "Transfer",
		},
	];
	return (
		<>
			<Text fontWeight="semibold" fontSize="30px">
				Payments
			</Text>
			<Flex justify="space-between" gap="5">
				<Select w="30%">
					{course.map((item, id) => (
						<option key={id}>{item.name}</option>
					))}
				</Select>
				<InputGroup>
					<Input pr="4.5rem" placeholder="Search..." />
					<InputRightElement width="fit-content">
						<Button variant="ghost">Search</Button>
					</InputRightElement>
				</InputGroup>
			</Flex>
			<Flex justify="right" gap="5">
				<FormControl w="fit-content">
					<FormLabel>Sort by</FormLabel>
					<Select>
						<option>date</option>
						<option>name</option>
					</Select>
				</FormControl>
				<FormControl w="fit-content">
					<FormLabel>Sort</FormLabel>
					<Select w="fit-content">
						<option>A-Z</option>
						<option>Z-A</option>
					</Select>
				</FormControl>
			</Flex>
			<TableContainer>
				<Table>
					<Thead>
						<Tr>
							<Th>Id </Th>
							<Th>Name</Th>
							<Th>Email</Th>
							<Th>Email Marketing</Th>
							<Th>Type</Th>
							<Th>Status</Th>
							<Th>Status Payment</Th>
							<Th>Date</Th>
							<Th>Completed At</Th>
							<Th>Paid At</Th>
							<Th>Gross Revenue</Th>
							<Th>Payment Method </Th>
							<Th>Follow-Up</Th>
							<Th>Action</Th>
						</Tr>
					</Thead>
					<Tbody>
						{payments.map((item, id) => (
							<Tr key={id}>
								<Td>
									<HStack>
										<Checkbox />
										<Text>{item.idPayment}</Text>
									</HStack>
								</Td>
								<Td>
									<HStack>
										<Avatar size="sm" />
										<Text>{item.name}</Text>
									</HStack>
								</Td>
								<Td>{item.email}</Td>
								<Td>{item.eMarket}</Td>
								<Td>{item.type}</Td>
								<Td>
									<Tag
										colorScheme={
											item.status ===
											"completed"
												? "green"
												: "yellow"
										}
									>
										<TagLabel>
											{item.status}
										</TagLabel>
									</Tag>
								</Td>
								<Td>
									<Tag
										colorScheme={
											item.status === "paid"
												? "green"
												: "red"
										}
									>
										<TagLabel>
											{item.statusPayment}
										</TagLabel>
									</Tag>
								</Td>
								<Td>{item.date}</Td>
								<Td>{item.completedAt}</Td>
								<Td>{item.paidAt}</Td>
								<Td>{item.price}</Td>
								<Td>{item.paymentMethod}</Td>
								<Td>
									<HStack>
										<Link
											href={`https://api.whatsapp.com/send?phone=${item.whatsapp}`}
											isExternal
										>
											<IoLogoWhatsapp />
										</Link>
										<Link
											href={`https://api.whatsapp.com/send?phone=${item.whatsapp}`}
											isExternal
										>
											<IoLogoWhatsapp />
										</Link>
										<Link
											href={`https://api.whatsapp.com/send?phone=${item.whatsapp}`}
											isExternal
										>
											<IoLogoWhatsapp />
										</Link>
										<Link
											href={`https://api.whatsapp.com/send?phone=${item.whatsapp}`}
											isExternal
										>
											<IoLogoWhatsapp />
										</Link>
									</HStack>
								</Td>
								<Td>
									<Menu>
										<MenuButton
											as={IconButton}
											icon={
												<FiMoreHorizontal />
											}
											variant="ghost"
										/>
										<MenuList>
											<MenuItem>
												Mark as Pending
											</MenuItem>
											<MenuItem>
												Mark as Complete
											</MenuItem>
											<MenuItem>
												Mark as Refund
											</MenuItem>
											<MenuItem>
												Mark as Cancel
											</MenuItem>
											<MenuDivider />
											<MenuItem>
												Mark as Paid
											</MenuItem>
											<MenuItem>
												Mark as Unpaid
											</MenuItem>
										</MenuList>
									</Menu>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
			<Flex justify="space-between" align="center" my="5">
				<Text>
					<b>2</b> Payments
				</Text>

				<Flex gap="5" align="center">
					<FiChevronLeft fontSize="20px" cursor="pointer" />
					<Link>1</Link>
					<FiChevronRight fontSize="20px" cursor="pointer" />
				</Flex>
			</Flex>
		</>
	);
};
const PaymentPages = () => {
	return (
		<Sidebar>
			<Payment />
		</Sidebar>
	);
};
export default PaymentPages;
