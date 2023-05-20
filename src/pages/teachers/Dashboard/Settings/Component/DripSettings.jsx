import {
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	Input,
	Select,
	Spacer,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { FiInfo } from "react-icons/fi";
import Sidebar from "../../../../../components/teachers/Sidebar";

const DripSettings = () => {
	return (
		<>
			<Flex align="center" gap="2" my="5">
				<Text m="0" fontWeight="semibold" fontSize="30px">
					Drip Settngs
				</Text>
				<FiInfo />
				<Spacer />
				<Button bgColor="black" colorScheme="blackAlpha">
					Save
				</Button>
			</Flex>
			<Grid templateColumns="30% 68% " gap="5">
				<GridItem>
					<Text fontWeight="semibold">Drip Settings</Text>
					<Text>
						Configure what time of day Drip modules will
						become available to your customers.
					</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<FormControl>
						<FormLabel>Drip product modules at</FormLabel>
						<Flex justify="space-between" align="cen">
							<Select w="20%">
								<option>Midnight</option>
								<option>1am</option>
								<option>2am</option>
								<option>3am</option>
							</Select>
							<Select w="70%">
								<option>
									(GMT-7:00) Pacific Time (US &
									Canada)
								</option>
							</Select>
						</Flex>
						<Checkbox>
							Send an email to customers when product
							modules are dripped
						</Checkbox>
					</FormControl>
				</GridItem>
			</Grid>
		</>
	);
};
const DripSettingsPage = () => {
	return (
		<Sidebar>
			<DripSettings />
		</Sidebar>
	);
};
export default DripSettingsPage;
