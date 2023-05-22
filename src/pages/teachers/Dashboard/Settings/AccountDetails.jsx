import React, { useEffect, useState } from "react";
import Sidebar from "../../../../components/teachers/Sidebar";
import {
	Box,
	Text,
	Grid,
	GridItem,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	Spacer,
	Button,
	Flex,
	InputRightElement,
	Select,
	FormHelperText,
	Textarea,
	Switch,
	HStack,
	Avatar,
	VStack,
	useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiCopy } from "react-icons/fi";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { authFirebase, db, storage } from "../../../../config/firebase";
import { UseAuthState } from "../../../../context/Context";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
const AccountDetails = () => {
	// get data, use efffect, onchange
	// const { uid } = UseAuthState();
	const [data, setData] = useState({});
	const [avatarUpdated, setAvatarUpdated] = useState(false);
	const currentUser = authFirebase?.currentUser;

	const getData = async () => {
		if (currentUser) {
			try {
				const docRef = doc(db, "users", currentUser?.uid);
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					console.log("Document data:", docSnap.data());
					const user = docSnap.data();
					console.log(user);
					setData(user);
				} else {
					// docSnap.data() will be undefined in this case
					console.log("No such document!");
				}
				setAvatarUpdated(false);
			} catch (error) {
				console.log(error);
			}
		}
	};
	const toast = useToast();
	const updateData = () => {
		const path = `/user/${currentUser?.uid}/profile-pict/${data?.image?.name}`;

		const storageRef = ref(storage, path);
		const uploadTask = uploadBytesResumable(storageRef, data?.image);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) *
					100;
				console.log("Upload is " + progress + "% done");
				// if (progress !== 100) setLoading(progress);
				// else {
				// 	setLoading(false);
				// }
			},
			(error) => {
				console.log(error.message);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref)
					.then((downloadURL) => {
						console.log("File available at", downloadURL);

						setData({
							...data,
							image: downloadURL,
						});
						return downloadURL;
					})
					.then((downloadURL) => {
						setData({
							...data,
							updatedAt: new Date(),
						});
						data.image = downloadURL;
						// update data
						const ref = doc(db, "users", currentUser?.uid);
						setDoc(ref, data, { merge: true });
						setAvatarUpdated(true);
						toast({
							title: "Profile Saved",
							description: "Your profile has been saved!",
							status: "success",
							duration: 9000,
							isClosable: true,
						});
						// setData({});
						console.log(data, "ni data");
					});
			}
		);
	};

	useEffect(() => {
		getData();
	}, [data.image]);
	return (
		<>
			<Flex align="center" gap="2" my="5" justify="space-between">
				<Text m="0" fontWeight="semibold" fontSize="30px">
					Account Details
				</Text>
				{/* <Button
					bgColor="black"
					colorScheme="blackAlpha"
					onClick={() => console.log(data)}
				>
					consle
				</Button> */}
				<Button bgColor="black" colorScheme="blackAlpha">
					Save
				</Button>
			</Flex>
			<Grid templateColumns="30% 68% " gap="5">
				<GridItem>
					<Text fontWeight="semibold">Details</Text>
					<Text>Edit your account information, here.</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<FormControl>
						<FormLabel>First Name</FormLabel>
						<Input
							type="text"
							onChange={(e) =>
								setData({
									...data,
									name: e.target.value,
								})
							}
							value={data.name}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Last Name</FormLabel>
						<Input
							type="text"
							onChange={(e) =>
								setData({
									...data,
									lName: e.target.value,
								})
							}
							value={data.lName}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Account ID</FormLabel>
						<Input
							type="text"
							isDisabled
							value={currentUser?.uid}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input
							isDisabled
							type="email"
							onChange={(e) =>
								setData({
									...data,
									email: e.target.value,
								})
							}
							value={data?.email}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Phone Number</FormLabel>
						<Input
							type="text"
							onChange={(e) =>
								setData({
									...data,
									phone: e.target.value,
								})
							}
							value={data.phone}
						/>
					</FormControl>

					<Box
						border=".0625rem solid #eceeef"
						p="5"
						borderRadius="10px"
						my="5"
					>
						<Text fontWeight="semibold">Avatar</Text>
						<HStack gap="3">
							<Avatar size="lg" src={data.image} />
							<VStack align="left">
								<Text m="0">
									Recommeended dimension{" "}
									<b>100x100</b>
								</Text>
								<Input
									type="file"
									onChange={(e) =>
										setData({
											...data,
											image: e.target.files[0],
										})
									}
									variant="unstyled"
									accept="image/*"
								/>
							</VStack>
						</HStack>
					</Box>
				</GridItem>

				<GridItem>
					<Text fontWeight="semibold">Social Profile</Text>
					<Text>
						Edit information displayed publicly in
						communities.
					</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<FormControl>
						<FormLabel>Bio</FormLabel>
						<Textarea
							h="150px"
							placeholder="Public bio"
							onChange={(e) =>
								setData({
									...data,
									bio: e.target.value,
								})
							}
							value={data.bio}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Pronoun</FormLabel>
						<Select>
							<option></option>
						</Select>
					</FormControl>
					<FormControl>
						<FormLabel>Location</FormLabel>
						<Input
							type="text"
							placeholder="Public Location"
							onChange={(e) =>
								setData({
									...data,
									location: e.target.value,
								})
							}
							value={data.location}
						/>
					</FormControl>
				</GridItem>
				<GridItem>
					<Text fontWeight="semibold">API Credentials</Text>
					<Text>The API credentials for this account.</Text>
				</GridItem>
				<GridItem
					border=".0625rem solid #eceeef"
					p="5"
					borderRadius="10px"
				>
					<FormControl>
						<FormLabel>Api Key</FormLabel>
						<Flex
							justify="space-between"
							cursor="pointer"
							align="center"
						>
							<Input type="text" w="95%" disabled />
							<FiCopy />
						</Flex>
					</FormControl>
					<FormControl>
						<FormLabel>Api Secret</FormLabel>
						<Flex
							justify="space-between"
							cursor="pointer"
							align="center"
						>
							<Input type="text" w="95%" disabled />
							<FiCopy />
						</Flex>
					</FormControl>
				</GridItem>
			</Grid>
			<Flex gap="2" my="5" justify="right">
				<Button
					bgColor="black"
					colorScheme="blackAlpha"
					onClick={() => updateData()}
				>
					Save
				</Button>
			</Flex>
		</>
	);
};

const AccountDetailsPages = () => {
	return (
		<Sidebar>
			<AccountDetails />
		</Sidebar>
	);
};
export default AccountDetailsPages;
