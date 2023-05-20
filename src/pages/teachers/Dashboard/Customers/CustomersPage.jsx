import { SearchIcon } from '@chakra-ui/icons'
import {
	Flex, Input, InputGroup, InputLeftElement, Button, Select, Tag, Text, HStack, Heading, Spacer, Box, Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Avatar,
	Checkbox,
	Center,
} from '@chakra-ui/react'
import React from 'react'
import { FiArrowLeft, FiArrowRight, FiMoreHorizontal } from 'react-icons/fi'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Sidebar from '../../../../components/teachers/Sidebar'

function CustomersPage() {
	return (
		<Sidebar>
			<HStack>
				<Heading>Customers</Heading>
				<Spacer />
				<Button colorScheme='green'>Add Contacts</Button>
			</HStack>
			<HStack m='2'>
				<Text m='0' as='u' fontWeight='bold'>All Customers</Text>
				<Link to='tags'>
					<Text m='0'>Manage Tags</Text>
				</Link>
			</HStack>
			<Box p='5' border='1px' borderRadius='md' borderColor='gray.100'>
				<HStack m='2'>
					<Select maxWidth='2xs'>
						<option>kodok</option>
					</Select>
					<Input type='text' placeholder='Search Customers' />
					<Button>Filter</Button>
				</HStack>
				<HStack m='2'>
					<HStack>
						<Checkbox />
						<Text>Displaying 1-1 on customers</Text>
					</HStack>

					<Spacer />
					<Button>Left</Button>
					<Button>right</Button>
					<Select maxWidth='2xs'>
						<option>kodok</option>
					</Select>
					<Select maxWidth='2xs'>
						<option>Sort</option>
					</Select>
				</HStack>

				<TableContainer>
					<Table variant='simple'>
						<Thead>
							<Tr>
								<Th>Name</Th>
								<Th>Email</Th>
								<Th>Email Marketing</Th>
								<Th>Date Added</Th>
								<Th>Last Activity</Th>
								<Th>Follow up</Th>
								<Th></Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>
									<Link to='id-here'>
										<HStack>
											<Checkbox />
											<Avatar size='sm' />
											<Text>Name here</Text>
										</HStack>
									</Link>
								</Td>
								<Td>xxx</Td>
								<Td>yyy</Td>
								<Td>xxx</Td>
								<Td>yyy</Td>
								<Td>
									<HStack>
										<IoLogoWhatsapp />
										<IoLogoWhatsapp />
										<IoLogoWhatsapp />
										<IoLogoWhatsapp />
										<IoLogoWhatsapp />
										<IoLogoWhatsapp />
									</HStack>
								</Td>
								<Td><FiMoreHorizontal /></Td>
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
			</Box>

			<Center m='3'>
				<HStack>
					<FiArrowLeft />
					<Text>1</Text>
					<FiArrowRight />

				</HStack>
			</Center>


		</Sidebar>
	)
}

export default CustomersPage