import { Box, Button, Heading, HStack, Input, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { FiDelete, FiEdit2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Sidebar from '../../../../components/teachers/Sidebar'

function CustomersTagsPage() {
	return (
		<Sidebar>
			<HStack>
				<Heading>Tags</Heading>
				<Spacer />
				<Button colorScheme='green'>Add Tags</Button>
			</HStack>
			<HStack p='2'>
				<Link to='/teacher/customers'>
					<Text m='0' >All Customers</Text>
				</Link>
				<Text m='0' as='u' fontWeight='bold'>Manage Tags</Text>
			</HStack>
			<Box p='5' border='1px' borderRadius='md' borderColor='gray.50'>
				<Input type='text' placeholder='Search Tags' />
				<Text fontSize='xs' p='5'>Displaying 1 tag</Text>
				<TableContainer>
					<Table variant='simple'>
						<Thead>
							<Tr>
								<Th>Name</Th>
								<Th>Contacts</Th>
								<Th></Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>
									<Text>Name here</Text>
								</Td>
								<Td>3</Td>
								<Td>
									<HStack>
										<FiEdit2 />
										<FiDelete />
									</HStack>
								</Td>

							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
			</Box>
		</Sidebar>
	)
}

export default CustomersTagsPage