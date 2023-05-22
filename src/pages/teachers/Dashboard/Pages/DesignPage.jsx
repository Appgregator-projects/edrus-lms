import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../../../components/teachers/Sidebar'

function DesignPage() {
	const navigate = useNavigate()
	return (
		<Sidebar>
			<div>DesignPage</div>
			<HStack>
				<Box color="#2c698d" fontSize="14px" onClick={() => navigate(-1)}>
					<ChevronLeftIcon />
					Back
				</Box>
				<Heading>
					{/* {dataBase ? dataBase.title : <Center><Spinner></Spinner></Center>} */}
				</Heading>
			</HStack>
		</Sidebar>
	)
}

export default DesignPage