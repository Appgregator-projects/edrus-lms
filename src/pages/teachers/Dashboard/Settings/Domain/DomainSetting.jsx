import React from "react";
import Sidebar from "../../../../../components/teachers/Sidebar";
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
	Tag,
	Text,
} from "@chakra-ui/react";
import {
	FiAlertTriangle,
	FiCheckCircle,
	FiChevronRight,
	FiEdit,
	FiEdit2,
	FiInfo,
	FiMoreHorizontal,
	FiNavigation,
	FiTrash,
} from "react-icons/fi";
import { FcIdea } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const DomainSetting = () => {
	const subDomain = [
		{ name: "faizal-al-edrus.mykajabi.com", priority: true, id: 1 },
		{ name: "fitriana@importir.co", priority: false, id: 2 },
		{ name: "jieunssiu@gmail.com", priority: false, id: 3 },
	];
	const navigate = useNavigate();
	return (
		<>
			<Flex align="center" gap="2" my="5">
				<Text m="0" fontWeight="semibold" fontSize="30px">
					Domain Settings
				</Text>
				<FiInfo />
				<Spacer />
				<Button bgColor="black" colorScheme="blackAlpha">
					Save
				</Button>
			</Flex>
			<Grid templateColumns="30% 68% " gap="5">
				<GridItem>
					<Text fontWeight="semibold">Site Domain Settings</Text>
					<Text>
						This is the default subdomain connected to your
						Kajabi site — all sites get one. You can replace
						it with your own custom domain.
					</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<Flex gap="4" align="center">
						<FiCheckCircle />
						<Text fontWeight="semibold" m="0">
							www.stage.edutama.id
						</Text>
						<Text fontWeight="light" color="grey" m="0">
							is connecting...
						</Text>
						<Spacer />
						<Menu>
							<MenuButton
								as={IconButton}
								aria-label="Options"
								icon={<FiMoreHorizontal />}
								variant="ghost"
							/>
							<MenuList>
								<MenuItem
									icon={<FiTrash color="red" />}
									color="red"
								>
									Delete
								</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
					<Box
						bgColor="#FEF8E1"
						borderRadius="10px"
						p="5"
						my="5"
					>
						<Flex gap="3">
							<FiAlertTriangle color="#c56a02" />
							<Text fontWeight="semibold">
								Your domain is connecting to Kajabi{" "}
							</Text>
						</Flex>
						<Text>
							Everything on your end seems to be setup
							correctly, but things behind the scenes are
							taking a little longer to complete. Just sit
							tight, and we will email you when your domain
							is connected.
						</Text>
						<Link>View Full Setup Instruction</Link>
					</Box>
					<Box
						border=".0625rem solid #eceeef"
						borderRadius="10px"
					>
						<Text fontWeight="semibold" p="5" m="0">
							Subdomain
						</Text>
						<Divider />
						{subDomain.map((item, id) => (
							<>
								<Flex
									justify="space-between"
									align="align"
									key={id}
									p="5"
								>
									<Text m="0">{item.name}</Text>
									{item.priority ? (
										<>
											<Tag
												size="sm"
												colorScheme="blue"
											>
												Edufy Domain
											</Tag>
											<FiEdit2 cursor="pointer" />
										</>
									) : (
										<FiChevronRight
											cursor="pointer"
											onClick={() =>
												navigate(
													`/teacher/settings/dns/${item.id}`
												)
											}
										/>
									)}
								</Flex>
								{id !== subDomain.length - 1 ? (
									<Divider m="0" />
								) : (
									<></>
								)}
							</>
						))}
					</Box>
				</GridItem>
				<GridItem>
					<Text fontWeight="semibold">
						Marketing Email Domain Sending
					</Text>
					<Text>
						Sending from a Kajabi Email Domain allows you to
						take advantage of that domain’s good reputation.
						Alternatively, sending from your own Custom Email
						Domain lends more authority to your brand.
					</Text>
					<Link>Learn more...</Link>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<Box
						bgColor="#FEF8E1"
						borderRadius="10px"
						p="5"
						my="5"
					>
						<Flex gap="3">
							<FiAlertTriangle color="#c56a02" />
							<Text fontWeight="semibold">
								Upgrade your account to use this feature
							</Text>
						</Flex>
						<Text>
							By upgrading, you can leverage all the power
							of custom email domains.
						</Text>
						<Link>Upgrade Today!</Link>
					</Box>
					<Flex gap="2" bgColor="#e6f4fe" p="2" my="5">
						<FcIdea />
						<Text m="0">
							Now that your custom domain is set up, you
							can also use the same domain for your
							marketing emails.
						</Text>
					</Flex>
					<Flex gap="4" align="center" my="5">
						<FiNavigation />
						<Text fontWeight="semibold" m="0">
							www.stage.edutama.id
						</Text>
						<Text fontWeight="light" color="grey" m="0">
							is not set up for email sending.
						</Text>
					</Flex>
					<Text>
						All marketing emails will be sent using the info
						below. To edit the default reply-to information
						head to <br />
						<Link>Marketing Settings.</Link>
					</Text>
					<Box
						border=".0625rem solid #eceeef"
						borderRadius="10px"
						p="5"
					>
						<Flex gap="2">
							<Text fontWeight="bold">From:</Text>
							<Text>
								faizal al edrus&#39;s First
								Site&lt;faizal-al-edrus&commat;y.kajabimail.net&gt;
							</Text>
						</Flex>
						<Flex gap="2">
							<Text fontWeight="bold">reply-to: </Text>
							<Text>faizal.edrus@gmail.com</Text>
						</Flex>
						<Flex gap="2">
							<Text fontWeight="bold">mailed by:</Text>
							<Text>y.kajabimail.net</Text>
						</Flex>
					</Box>
				</GridItem>
			</Grid>
		</>
	);
};
const DomainSettingPage = () => {
	return (
		<Sidebar>
			<DomainSetting />
		</Sidebar>
	);
};
export default DomainSettingPage;
