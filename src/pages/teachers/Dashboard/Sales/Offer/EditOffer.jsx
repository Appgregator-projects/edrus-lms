import {
	AspectRatio,
	Box,
	Button,
	ButtonGroup,
	Checkbox,
	CloseButton,
	Divider,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	Image,
	Input,
	Radio,
	Select,
	Spacer,
	Switch,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Tag,
	TagLabel,
	TagLeftIcon,
	Text,
	Textarea,
	VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiInfo, FiMoreHorizontal } from "react-icons/fi";
import Sidebar from "../../../../../components/teachers/Sidebar";
import { AddIcon, EmailIcon } from "@chakra-ui/icons";
import {
	AiOutlineInfoCircle,
	AiOutlineQuestionCircle,
	AiOutlineStop,
	AiOutlineFile,
	AiOutlineCheck,
	AiOutlineLink,
	AiOutlineFlag,
} from "react-icons/ai";
import { BsPalette, BsPencil } from "react-icons/bs";
import RichTextEditor from "../../../../../components/teachers/Summernote";
import DropDrag from "../../../../../components/teachers/DropDrag";
import { Link, useNavigate } from "react-router-dom";

const EditOffer = () => {
	const navigate = useNavigate();
	const [addProduct, setAddProduct] = useState(false);
	const [productAccess, setProductAccess] = useState({
		date: false,
		day: false,
	});
	const [postPurchase, setPostPurchase] = useState("");
	const [postPurchaseEmail, setPostPurcahseEmail] = useState(false);
	const [notification, setNotification] = useState({
		thirdParty: false,
		purchase: false,
		cart: false,
		affiliate: false,
	});
	console.log(notification, "ni notif");
	return (
		<>
			<Flex align="center">
				<Heading>test-offer</Heading>
				<Spacer />
				<ButtonGroup spacing="4">
					<Button variant="ghost">
						<FiMoreHorizontal />
					</Button>
					<Button
						bgColor="white"
						border="1px solid grey"
						color="black"
					>
						Edit checkout
					</Button>
					<Button
						bgColor="black"
						color="white"
						colorScheme="blackAlpha"
						onClick={() => navigate("/teacher/offers")}
					>
						Save
					</Button>
				</ButtonGroup>
			</Flex>
			<Tabs>
				<TabList>
					<Tab>Details</Tab>
					<Tab>Pricing</Tab>
					<Tab>Upsells (0)</Tab>
					<Tab>Settings</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<Grid templateColumns="68% 30%" gap="5">
							<GridItem>
								<Box
									border=".0625rem solid #eceeef"
									borderRadius="10px"
									p="5"
								>
									<Text fontWeight="semibold" m="0">
										Products in this Offer
									</Text>
									<Text>
										Choose the Products you'd like
										to sell in this Offer.
									</Text>
									<Flex
										border=".0625rem solid #eceeef"
										p="5"
										borderRadius="10px"
									>
										<Image
											src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
											w="100px"
											h="70px"
											objectFit="contain"
										/>

										<Text mx="5">
											Nama produk
										</Text>
										<Spacer />
										<CloseButton />
									</Flex>
									{addProduct ? (
										<Flex
											gap="2"
											my="5"
											cursor="pointer"
											onClick={() =>
												setAddProduct(true)
											}
										>
											<AddIcon />
											<Text m="0">
												Add Product
											</Text>
										</Flex>
									) : (
										<Select
											my="5"
											placeholder="Choose Product"
										>
											<option>
												product 2
											</option>
											<option>
												product 3
											</option>
										</Select>
									)}

									<Divider />
									<Box>
										<Flex
											justify="space-between"
											align="center"
										>
											<Text
												fontWeight="semibold"
												m="0"
											>
												Product Access
											</Text>
											<AiOutlineInfoCircle />
										</Flex>
										<Text>
											Set limits for members
											who purchase this Offer.
										</Text>
										<VStack align="left">
											<Checkbox
												onChange={(e) =>
													setProductAccess(
														{
															...productAccess,
															date: e
																.target
																.checked,
														}
													)
												}
											>
												Begin access at a
												specific date
											</Checkbox>
											{productAccess.date ? (
												<FormControl>
													<FormLabel>
														Date to
														begin
														access
													</FormLabel>
													<Input type="date" />
													<FormHelperText fontSize="12px">
														Members
														will be
														given
														access to
														published
														content at
														and drip
														categories
														will be
														made
														available
														each
														following
														day at{" "}
														<b>
															{" "}
															10am
															Pacific
															Time
															(US &
															Canada).
														</b>
													</FormHelperText>
												</FormControl>
											) : (
												<></>
											)}
											<Checkbox
												onChange={(e) =>
													setProductAccess(
														{
															...productAccess,
															day: e
																.target
																.checked,
														}
													)
												}
											>
												Restrict access to a
												specific amount of
												days
											</Checkbox>
											{productAccess.day ? (
												<FormControl>
													<FormLabel>
														Available
														for
													</FormLabel>
													<Flex
														align="center"
														justify="space-between"
													>
														<Input
															type="number"
															w="93%"
															min="1"
														/>

														<Text m="0">
															days
														</Text>
													</Flex>
													<FormHelperText fontSize="12px">
														Members
														will have
														access
														until the
														number of
														days
														specified
														after the
														effective
														member
														start
														date.
													</FormHelperText>
												</FormControl>
											) : (
												<></>
											)}
										</VStack>
									</Box>
								</Box>
								<Box
									border=".0625rem solid #eceeef"
									borderRadius="10px"
									p="5"
									my="5"
								>
									<Text fontWeight="semibold" m="0">
										Post-purchase
									</Text>
									<Text>
										Choose where to send members
										after their Offer purchase.
									</Text>
									<Text fontWeight="semibold" m="0">
										Post-purchase
									</Text>
									<Select
										onChange={(e) =>
											setPostPurchase(
												e.target.value
											)
										}
									>
										<option value="library">
											Member's Product Library
										</option>
										<option value="LandingPage">
											Existing Landing Page
										</option>
										<option value="ThankyouPage">
											Custom Thank You Page
										</option>
									</Select>
									{postPurchase === "LandingPage" ? (
										<>
											<FormControl my="5">
												<FormLabel>
													Landing Page
												</FormLabel>
												<Select>
													<option></option>
												</Select>
											</FormControl>
										</>
									) : postPurchase ===
									  "ThankyouPage" ? (
										<RichTextEditor />
									) : (
										<></>
									)}
									<Divider />
									<Text fontWeight="semibold" m="0">
										Post-purchase email
									</Text>
									<Text>
										Choose a communication
										preference for members who
										make an Offer purchase.
									</Text>
									<ButtonGroup>
										<Button
											variant="outline"
											leftIcon={<EmailIcon />}
											onClick={() =>
												setPostPurcahseEmail(
													false
												)
											}
										>
											Default email
										</Button>
										<Button
											leftIcon={<BsPalette />}
											variant="outline"
											onClick={() =>
												setPostPurcahseEmail(
													true
												)
											}
										>
											Custom email
										</Button>
										<Button
											leftIcon={
												<AiOutlineStop />
											}
											variant="outline"
											onClick={() =>
												setPostPurcahseEmail(
													false
												)
											}
										>
											None
										</Button>
									</ButtonGroup>
									{postPurchaseEmail ? (
										<Box
											border=".0625rem solid #eceeef"
											borderRadius="10px"
											p="5"
											my="5"
										>
											<FormControl>
												<FormLabel>
													Email subject
												</FormLabel>
												<Input
													type="email"
													placeholder="Email subject"
												/>
											</FormControl>
											<FormControl>
												<FormLabel>
													Email content
												</FormLabel>
												<Textarea />
												<FormHelperText>
													<Text>
														The
														following
														liquid
														objects
														are
														available:member
														, offer ,
														site and
														site_login_url,
														. Only
														html tags
														are
														allowed.
														Please no
														images,
														divs, etc.
														| liquid
														markup
														reference{" "}
													</Text>
												</FormHelperText>
											</FormControl>
										</Box>
									) : (
										<></>
									)}
								</Box>
								<Box
									border=".0625rem solid #eceeef"
									borderRadius="10px"
									p="5"
									my="5"
								>
									<Flex align="center" gap="2">
										<Text
											fontWeight="semibold"
											m="0"
										>
											Automations
										</Text>
										<AiOutlineQuestionCircle />
									</Flex>
									<Text>
										Automations help you set up
										repeating tasks and streamline
										your workflow with just a few
										clicks.
									</Text>
									<Flex align="center" gap="2">
										<AddIcon />
										<Text m="0">
											Add Automation
										</Text>
									</Flex>
								</Box>
							</GridItem>
							<GridItem>
								<Box
									border=".0625rem solid #eceeef"
									borderRadius="10px"
									p="5"
								>
									<Text fontWeight="semibold" m="0">
										Offer Status
									</Text>
									<VStack align="left" my="3">
										<Radio>
											<Tag>
												<TagLeftIcon
													as={
														AiOutlineFile
													}
												/>
												<TagLabel>
													Draft
												</TagLabel>
											</Tag>
										</Radio>
										<Radio>
											<Tag colorScheme="green">
												<TagLeftIcon
													as={
														AiOutlineCheck
													}
												/>
												<TagLabel>
													Published
												</TagLabel>
											</Tag>
										</Radio>
									</VStack>
									<Flex
										gap="2"
										align="center"
										my="5"
									>
										<AiOutlineLink />
										<Text
											m="0"
											fontWeight="medium"
										>
											Get Link
										</Text>
									</Flex>
								</Box>
								<Box
									border=".0625rem solid #eceeef"
									borderRadius="10px"
									p="5"
									my="5"
								>
									<Text fontWeight="semibold">
										Offer Pricing
									</Text>
									<Text
										fontWeight="medium"
										fontSize="20px"
									>
										Free
									</Text>
									<Tag>Unlimited</Tag>
									<Image
										src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
										w="500px"
										h="200px"
										objectFit="contain"
									/>
									<Flex gap="2" align="center">
										<BsPencil />
										<Text
											fontWeight="semibold"
											m="0"
										>
											Edit
										</Text>
									</Flex>
								</Box>
							</GridItem>
						</Grid>
					</TabPanel>
					<TabPanel>
						<Grid templateColumns="30% 68% " gap="5">
							<GridItem>
								<Text fontWeight="semibold" m="0">
									Description
								</Text>
								<Text>
									Give your Offer a fun or catchy
									title, add a description, and
									upload an image.
								</Text>
							</GridItem>
							<GridItem
								border=".0625rem solid #eceeef"
								p="5"
								borderRadius="10px"
							>
								<FormControl>
									<FormLabel>Title</FormLabel>
									<Input />
									<FormHelperText>
										0/100 Character
									</FormHelperText>
								</FormControl>
								<FormControl>
									<FormLabel>
										Internal Title (optional)
									</FormLabel>
									<Input placeholder="Internal Title (optional)" />
								</FormControl>
								<FormControl>
									<FormLabel>Description</FormLabel>
									<RichTextEditor />
								</FormControl>
								<DropDrag />
							</GridItem>
						</Grid>
						<Divider />
						<Grid templateColumns="30% 68% " gap="5">
							<GridItem>
								<Text fontWeight="semibold" m="0">
									Price Details
								</Text>
								<Text>
									Set this Offer's price and payment
									structure.
								</Text>
							</GridItem>
							<GridItem
								border=".0625rem solid #eceeef"
								p="5"
								borderRadius="10px"
							>
								<FormControl>
									<FormLabel>Payment type</FormLabel>
									<Select>
										<option>Free</option>
									</Select>
								</FormControl>

								<Flex
									bgColor="#e6f4fe"
									p="5"
									my="5"
									borderRadius="10px"
								>
									<Box w="5%" mt="1">
										<AiOutlineFlag color="#0072ef" />
									</Box>
									<Box w="95%">
										<Text
											fontWeight="semibold"
											m="0"
										>
											You need a Payment
											Provider
										</Text>
										<Text>
											In order to collect
											payments on your Offers,
											you need to set up a
											payment provider. You can
											still set up a Free
											Offer.
										</Text>
										<Link>Take me there</Link>
									</Box>
								</Flex>
							</GridItem>
						</Grid>
						<Divider />
						<Grid templateColumns="30% 68% " gap="5">
							<GridItem>
								<Text fontWeight="semibold" m="0">
									Limit Offer
								</Text>
								<Text>
									Set a limit of the quantity or time
									that this Offer is available for
									purchase.
								</Text>
							</GridItem>
							<GridItem
								border=".0625rem solid #eceeef"
								p="5"
								borderRadius="10px"
							>
								<Flex
									align="center"
									justify="space-between"
								>
									<Text fontWeight="medium">
										Set a limit for this Offer's
										availability
									</Text>
									<FiInfo />
								</Flex>
								<Text>
									Limit how many Offers to sell or
									how long an Offer is available for
									purchase.
								</Text>
								<VStack align="left">
									<Checkbox>Quantity limit</Checkbox>
									<Checkbox>Time limit</Checkbox>
								</VStack>
							</GridItem>
						</Grid>
					</TabPanel>
					<TabPanel>
						<p>three!</p>
					</TabPanel>
					<TabPanel>
						<Grid templateColumns="30% 68% " gap="5">
							<GridItem>
								<Text fontWeight="semibold" m="0">
									Notifications
								</Text>
								<Text>
									Manage communication options for
									you and your team, and members that
									have purchased Offers.
								</Text>
							</GridItem>
							<GridItem
								border=".0625rem solid #eceeef"
								p="5"
								borderRadius="10px"
							>
								<Box
									border=".0625rem solid #eceeef"
									p="5"
									borderRadius="10px"
								>
									<Flex
										align="center"
										justify="space-between"
									>
										<Box w="90%">
											<Text fontWeight="bold">
												Send customers to
												third-party email
												provider
											</Text>
											<Text>
												Send contact
												information to
												third-party
												platforms
												(Mailchimp, Aweber,
												Drip, etc.) when a
												customer purchases
												an Offer.
											</Text>
										</Box>
										<Switch
											onChange={(e) =>
												setNotification({
													...notification,
													thirdParty:
														e.target
															.checked,
												})
											}
										/>
									</Flex>
									{notification.thirdParty ? (
										<Flex
											justify="space-between"
											bgColor="#ECEEEF"
											p="5"
											gap="2"
										>
											<Box mt="1">
												<FiInfo />
											</Box>
											<Text w="95%">
												Connect your email
												marketing tools on
												the
												<b>
													third-party
													integrations
												</b>
												page to use these
												settings.
											</Text>
										</Flex>
									) : (
										<></>
									)}
								</Box>
								<Box
									border=".0625rem solid #eceeef"
									p="5"
									borderRadius="10px"
									justify="space-between"
									my="5"
								>
									<Flex
										justify="space-between"
										gap="2"
									>
										<Box w="90%">
											<Text fontWeight="bold">
												Get notified when a
												purchase has been
												made
											</Text>
											<Text>
												Set up email
												notifications for
												you or your team
												after every
												purchase.
											</Text>
										</Box>
										<Switch
											onChange={(e) =>
												setNotification({
													...notification,
													purchase:
														e.target
															.checked,
												})
											}
										/>
									</Flex>
									{notification.purchase ? (
										<FormControl>
											<FormLabel>
												Add email(s)
											</FormLabel>
											<Input
												type="email"
												placeholder="Add email(s)"
											/>
											<FormHelperText>
												Use the ENTER or TAB
												key on your keyboard
												to add each email
												address.
											</FormHelperText>
										</FormControl>
									) : (
										<></>
									)}
								</Box>
								<Box
									border=".0625rem solid #eceeef"
									p="5"
									borderRadius="10px"
									justify="space-between"
									my="5"
								>
									<Flex
										gap="2"
										justify="space-between"
									>
										<Box w="90%">
											<Text fontWeight="bold">
												Send cart
												abandonment emails
											</Text>
											<Text>
												Send customers an
												email reminder to
												complete their
												orders.
											</Text>
										</Box>
										<Switch
											onChange={(e) =>
												setNotification({
													...notification,
													cart: e.target
														.checked,
												})
											}
										/>
									</Flex>
									{notification.cart ? (
										<FormControl>
											<FormLabel>
												Send an email
												reminder
											</FormLabel>
											<Select>
												<option></option>
												<option>
													Never
												</option>
												<option>
													1 hour later
												</option>
												<option>
													6 hour later
												</option>
												<option>
													10 hour later
												</option>
												<option>
													24 hour later
												</option>
											</Select>
											<FormHelperText>
												If the customer
												abandons their
												checkout, send them
												an email reminder to
												complete their
												order.
											</FormHelperText>
											<Text>
												Edit reminder email
												template
											</Text>
										</FormControl>
									) : (
										<></>
									)}
								</Box>
							</GridItem>
						</Grid>

						<Grid templateColumns="30% 68% " gap="5">
							<GridItem>
								<Text fontWeight="semibold" m="0">
									Affiliate Commission
								</Text>
								<Text>
									Enable set affiliate commissions on
									your Offers and set the percentage
									amount.
								</Text>
							</GridItem>
							<GridItem
								border=".0625rem solid #eceeef"
								p="5"
								borderRadius="10px"
							>
								<Box
									border=".0625rem solid #eceeef"
									p="5"
									borderRadius="10px"
									align="center"
									justify="space-between"
								>
									<Flex
										gap="2"
										justify="space-between"
									>
										<Box w="90%">
											<Text fontWeight="bold">
												Activate Affiliate
												commissions for this
												Offer
											</Text>
											<Text>
												Give an Affiliate
												commission for your
												Offer to credit the
												transaction to your
												Affiliate users.
											</Text>
										</Box>
										<Switch
											onChange={(e) =>
												setNotification({
													...notification,
													affiliate:
														e.target
															.checked,
												})
											}
										/>
									</Flex>
									{notification.affiliate ? (
										<FormControl>
											<FormLabel>
												Affiliate percentage
											</FormLabel>
											<Flex justify="space-between">
												<Input
													type="number"
													placeholder="Affiliate precentage"
													w="95%"
												/>
												<Text m="0">%</Text>
											</Flex>
										</FormControl>
									) : (
										<></>
									)}
								</Box>
							</GridItem>
						</Grid>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	);
};
const EditOfferPage = () => {
	return (
		<Sidebar>
			<EditOffer />
		</Sidebar>
	);
};
export default EditOfferPage;
