import React from "react";
import Sidebar from "../../../../../components/teachers/Sidebar";
import {
	Box,
	Button,
	Card,
	Flex,
	Grid,
	GridItem,
	Input,
	InputGroup,
	InputLeftElement,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import { BsQuestionCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

const Offers = () => {
	const tabList = ["published", "draft", "all"];
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
			<Card p="5">
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
							<InputGroup>
								<InputLeftElement pointerEvents="none">
									<SearchIcon color="gray.300" />
								</InputLeftElement>
								<Input
									type="tel"
									placeholder="Search..."
								/>
							</InputGroup>
							<p>one!</p>
						</TabPanel>
						<TabPanel>
							<p>two!</p>
						</TabPanel>
						<TabPanel>
							<p>three!</p>
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
