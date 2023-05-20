import {
	Box,
	Flex,
	Grid,
	Select,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	VStack,
	GridItem,
	Card,
	CardHeader,
	Link,
	CardBody,
	Image,
	HStack,
	Button,
	Spacer,
	SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../../../components/teachers/Sidebar';

const Dashboard = () => {
	const option = [
		{ image: 'https://kajabi-app-assets.kajabi-cdn.com/assets/dashboard/get_more/sage_community-981f79367e8d0be6c4f28a53babdf6caf4d82cf4f9048daab03cbb214c500dbc.svg', title: 'Kajabi group', description: 'Join us on Facebook to get advice and guidance from fellow entrepreneurs.' },
		{ image: 'https://kajabi-app-assets.kajabi-cdn.com/assets/dashboard/get_more/sage_community-981f79367e8d0be6c4f28a53babdf6caf4d82cf4f9048daab03cbb214c500dbc.svg', title: 'Kajabi group', description: 'Join us on Facebook to get advice and guidance from fellow entrepreneurs.' },
		{ image: 'https://kajabi-app-assets.kajabi-cdn.com/assets/dashboard/get_more/sage_community-981f79367e8d0be6c4f28a53babdf6caf4d82cf4f9048daab03cbb214c500dbc.svg', title: 'Kajabi group', description: 'Join us on Facebook to get advice and guidance from fellow entrepreneurs.' },
	]
	return (
		<Box>

			<Box p='5' m='5' borderRadius='md' border='1px' borderColor='gray'>
				<HStack>
					<Image src='https://kajabi-app-assets.kajabi-cdn.com/assets/dashboard/welcome/puzzle-a588c1d46b82b9d2817a92c95b5c8eca2b3eeec935ac4a23ff55d31d03405c1c.svg' alt='advice' />
					<Box>
						<Text>Session</Text>
						<Text>Need advice? Talk to our team for free</Text>
						<Text>We want to help your business grow. Book a free, 30-minute call with our team and get set up for success</Text>
						<Button>Book 30 minute call</Button>
					</Box>
				</HStack>
				{/* <Text>{x.description}</Text> */}
			</Box>
			<SimpleGrid columns={3} m='5' gap='3'>
				{option.map((x) =>
					<Box p='2' borderRadius='md' border='1px' borderColor='gray'>
						<Image src={x.image} alt={x.title} />
						<Text>{x.title}</Text>
						<Text>{x.description}</Text>
					</Box>
				)}
			</SimpleGrid>
		</Box>

	);
};

const DashboardPage = () => {
	return (
		<Sidebar>
			<Dashboard />
		</Sidebar>
	);
};

export default DashboardPage;
