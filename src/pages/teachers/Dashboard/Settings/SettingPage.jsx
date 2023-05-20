import { Box, Heading, HStack, Icon, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FiAirplay, FiGlobe, FiTruck, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Sidebar from '../../../../components/teachers/Sidebar'

function SettingPage() {
	const data = [
		{ icon: FiAirplay, link: 'account-detail', title: 'Account Details', description: 'ini description' },
		{ icon: FaHome, link: 'site-detail', title: 'Site Details', description: 'ini description' },
		{ icon: FiTruck, link: 'drip-setting', title: 'Drip Settings', description: 'ini description' },
		{ icon: FiGlobe, link: 'domain', title: 'Domain', description: 'ini description yang jauh lebih panjang daripada gunung sindur' },
		{ icon: FiUser, link: 'account-users', title: 'Account Users', description: 'ini description' },

	]
	return (
		<Sidebar>
			<Box width='full'>
				<Heading>Settings</Heading>
				<SimpleGrid columns={{ base: 1, sm: 3 }}>
					{data ?
						data.map((x) => <Link to={x.link}>
							<HStack borderRadius='md' border='1px' borderColor='gray.100' m='2' p='2' >
								<Box bgColor='gray.50' p='4' borderRadius='md' alignSelf='flex-start'>
									<Icon as={x.icon} boxSize={6} />
								</Box>
								<Box>
									<Heading fontSize='sm'>{x.title}</Heading>
									<Text>{x.description}</Text>
								</Box>
							</HStack>
						</Link>)
						:
						<></>
					}

				</SimpleGrid>

			</Box >
		</Sidebar >

	)
}

export default SettingPage