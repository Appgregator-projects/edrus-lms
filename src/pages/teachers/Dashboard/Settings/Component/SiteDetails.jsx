import React from "react";
import Sidebar from "../../../../../components/teachers/Sidebar";
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
} from "@chakra-ui/react";
import AlertCookies from "../../../../../components/teachers/AlertCookies";
import DropDrag from "../../../../../components/teachers/DropDrag";
import { FiInfo } from "react-icons/fi";
const SiteDetails = () => {
	return (
		<>
			<AlertCookies />
			<Flex align="center" gap="2" my="5">
				<Text m="0" fontWeight="semibold" fontSize="30px">
					Site Details
				</Text>
				<FiInfo />
				<Spacer />
				<Button bgColor="black" colorScheme="blackAlpha">
					Save
				</Button>
			</Flex>
			<Grid templateColumns="30% 68% " gap="5">
				<GridItem>
					<Text fontWeight="semibold">General</Text>
					<Text>Manage the main elements of your site.</Text>
					<Text>
						Your site name is used wherever the title of your
						site appears, including browser tabs, search
						engine results, and links.
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
					</FormControl>
					<FormControl>
						<FormLabel>Sub Domain</FormLabel>
						<InputGroup>
							<Input />
							<InputRightElement w="fit-content">
								<Button variant="ghost">
									Manage Domain
								</Button>
							</InputRightElement>
						</InputGroup>
					</FormControl>
					<FormControl>
						<FormLabel>Support email</FormLabel>
						<Input />
					</FormControl>
					<FormControl>
						<FormLabel>Support phone number</FormLabel>
						<Input />
					</FormControl>
					<FormControl>
						<FormLabel>Language</FormLabel>
						<Select>
							<option>en - English</option>
						</Select>
					</FormControl>
					<FormControl>
						<FormLabel>Text direction</FormLabel>
						<Select>
							<option>
								--- Please select text direction ---
							</option>
						</Select>
					</FormControl>
					<FormControl>
						<FormLabel>Default Currency</FormLabel>
						<Select>
							<option></option>
						</Select>
						<FormHelperText fontSize="12px">
							The default currency will be used for
							formatting and calculation purposes within
							the admin system. Generally speaking, you
							will want to set the default currency to the
							currency that the majority of your offers are
							in.
						</FormHelperText>
					</FormControl>
				</GridItem>
				<GridItem>
					<Text fontWeight="semibold">Homepage</Text>
					<Text>
						Select which page you want to use as the homepage
						of your website.
					</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<FormControl>
						<FormLabel>Homepage</FormLabel>
						<Select>
							<option>Show the Template Home Page</option>
						</Select>
					</FormControl>
				</GridItem>
				<GridItem>
					<Text fontWeight="semibold">Branding</Text>
					<Text>
						Upload a logo and favicon to distinguish your
						site.
					</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<FormControl>
						<FormLabel>Logo</FormLabel>
						<DropDrag />
					</FormControl>
					<FormControl>
						<FormLabel>Favicon</FormLabel>
						<DropDrag />
					</FormControl>
				</GridItem>
				<GridItem>
					<Text fontWeight="semibold">Colors</Text>
					<Text>
						Choose the default color palette you want to show
						in all color pickers across Kajabi.
					</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<FormControl>
						<FormLabel>Logo</FormLabel>
						<DropDrag />
					</FormControl>
				</GridItem>
				<GridItem>
					<Text fontWeight="semibold">Instructor</Text>
					<Text>
						The default instructor information for all
						products.
					</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<FormControl>
						<FormLabel>Headshot</FormLabel>
						<DropDrag />
					</FormControl>
					<FormControl>
						<FormLabel>Name</FormLabel>
						<Input type="text" placeholder="Name" />
					</FormControl>
					<FormControl>
						<FormLabel>Title</FormLabel>
						<Input type="text" placeholder="Title" />
					</FormControl>
				</GridItem>
				<GridItem>
					<Text fontWeight="semibold">Page scripts</Text>
					<Text>
						Add custom javascript to be placed on all site
						Pages. The code will be placed in the <b>head</b>{" "}
						section of every page.
					</Text>
					<Text>
						You can also add a <b>Privacy and cookies</b>{" "}
						banner script. This informs visitors of cookies
						being used on your site and can collect their
						consent. For assistance, visit our Help Guide
					</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<FormControl>
						<FormLabel>Header Page Scripts</FormLabel>
						<Textarea h="150px" />
						<FormHelperText fontSize="12px">
							This code will be placed in the <b>head</b>{" "}
							section of every page.
						</FormHelperText>
					</FormControl>
				</GridItem>
				<GridItem>
					<Text fontWeight="semibold">
						SEO and social sharing
					</Text>
					<Text>
						Search engine optimization (SEO) can improve your
						ranking in search results, making it easier for
						people to find your Page.
					</Text>
					<Text>
						The title and description are displayed in search
						engine results and social media shares. Social
						networks (like Facebook or Twitter) may also show
						the social image when your URL is shared.
					</Text>
					<Text>
						If you leave these fields blank, we'll use your
						Page name as the Page title.
					</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<FormControl>
						<FormLabel>Page title</FormLabel>
						<Input
							type="text"
							placeholder="PageDeskription"
						/>
						<FormHelperText fontSize="12px">
							Give the Page a clear and accurate title in
							60 characters or less.
						</FormHelperText>
					</FormControl>
					<FormControl>
						<FormLabel>Page description</FormLabel>
						<Textarea
							h="150px"
							placeholder="Page description"
						/>
						<FormHelperText fontSize="12px">
							Describe the Page’s content in 160 characters
							or less.
						</FormHelperText>
						<DropDrag />
					</FormControl>
				</GridItem>
				<GridItem>
					<Text fontWeight="semibold">Kajabi branding</Text>
					<Text>
						Control whether or not “Powered by Kajabi” links
						display in the footer of your site and products.
					</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<Switch /> Display "Powered by Edufy"
				</GridItem>
			</Grid>
			<Flex gap="2" my="5" justify="right">
				<Button colorScheme="red">Delete Site</Button>
				<Button bgColor="black" colorScheme="blackAlpha">
					Save
				</Button>
			</Flex>
		</>
	);
};
const SiteDetailsPage = () => {
	return (
		<Sidebar>
			<SiteDetails />
		</Sidebar>
	);
};
export default SiteDetailsPage;
