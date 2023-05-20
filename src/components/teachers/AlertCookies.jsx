import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FiInfo, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
const AlertCookies = () => {
	return (
		<>
			<Flex
				justify="space-between"
				align="center"
				bgColor="#ECEEEF"
				p="5"
			>
				<Flex gap="2" align="center">
					<FiInfo />
					<Text m="0">
						If you haven't already, don't forget to configure
						your Privacy & cookies settings.
					</Text>
				</Flex>
				<Flex gap="2" align="center">
					<Link>Learn more</Link>
					<FiX cursor="pointer" />
				</Flex>
			</Flex>
		</>
	);
};

export default AlertCookies;
