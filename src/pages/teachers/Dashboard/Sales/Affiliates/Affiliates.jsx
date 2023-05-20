import {
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import React, { createElement } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import Sidebar from "../../../../../components/teachers/Sidebar";
import Exports from "./Component/Exports";
import Outline from "./Component/Outline";
import Users from "./Component/Users";
import CommisionSetup from "./Component/CommisionSetup";
import ShareLinks from "./Component/ShareLinks";
import Transaction from "./Component/Transaction";
import Announcement from "./Component/Announcement";
import Settings from "./Component/Settings";

const Affiliates = () => {
	const tabs = [
		{ id: 1, title: "Outline", component: "Outline" },
		{ id: 2, title: "Users", component: "Users" },
		{ id: 3, title: "Commision Setup", component: "CommisionSetup" },
		{ id: 4, title: "Share Links", component: "ShareLinks" },
		{ id: 5, title: "Transaction", component: "Transaction" },
		{ id: 6, title: "Announcement", component: "Announcement" },
		{ id: 7, title: "Exports", component: "Exports" },
		{ id: 8, title: "Settings", component: "Settings" },
	];
	const components = {
		Outline,
		Users,
		CommisionSetup,
		ShareLinks,
		Transaction,
		Announcement,
		Exports,
		Settings,
	};
	return (
		<>
			<Flex gap="2" align="center">
				<Text m="0" fontWeight="semibold" fontSize="30px">
					Affiliates
				</Text>
				<BsQuestionCircle fontSize="13px" m="0" />
			</Flex>
			<Tabs>
				<TabList>
					{tabs.map((item, id) => (
						<Tab key={id}>{item.title}</Tab>
					))}
				</TabList>

				<TabPanels>
					{tabs.map((item, id) => (
						<TabPanel key={id}>
							{createElement(components[item.component])}
						</TabPanel>
					))}
				</TabPanels>
			</Tabs>
		</>
	);
};
const AffiliatesPage = () => {
	return (
		<Sidebar>
			<Affiliates />
		</Sidebar>
	);
};
export default AffiliatesPage;
