import { Box, Button, Flex, Heading, HStack, Image, Spacer, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Select } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../../../components/teachers/Sidebar'

function CustomersSinglePage() {
	return (
		<Sidebar>
			<HStack>
				<Heading>Customers</Heading>
				<Spacer />
				<Button colorScheme='green'>Add Contacts</Button>
			</HStack>

			<Flex>
				<Box width='70%'>
					<HStack p='2' m='2' shadow='base'>
						<Image width='100px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
						<Box>
							<Text m='0'>Name here</Text>
							<Text m='0'>Faizal.edrus@gmail.com</Text>
							<Text m='0'>Name here</Text>
							<Text m='0'>Not a customer yet</Text>
						</Box>
					</HStack>
					<Box p='2' m='2' shadow='base'>
						<Tabs>
							<TabList>
								<Tab>Lifecycle</Tab>
								<Tab>Info</Tab>
								<Tab>Purchases</Tab>
								<Tab>Products</Tab>
								<Tab>Notes</Tab>
							</TabList>

							<TabPanels>
								<TabPanel>
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
					</Box>
				</Box>
				<Box width='30%'>
					<Box p='2' m='2' shadow='base'>
						<HStack>
							<Text m='0'>Tags</Text>
							<Spacer />
							<Link to='/teacher/customers/tags'>
								<Button colorScheme='blue'>View All Tags</Button>
							</Link>
						</HStack>
						<Select mt='2'>
							<option>tag#1</option>
						</Select>
					</Box>
				</Box>


			</Flex>
		</Sidebar>
	)
}

export default CustomersSinglePage