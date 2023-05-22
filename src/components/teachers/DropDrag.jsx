import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const DropDrag = () => {
	const [file, setFile] = useState(null);
	const handleChange = (file) => {
		setFile(file);
	};
	const fileTypes = ["JPG", "JPEG", "PNG"];
	return (
		<>
			<Box my="5">
				<FileUploader
					multiple={true}
					handleChange={handleChange}
					name="file"
					types={fileTypes}
				/>
			</Box>
			<Text fontSize="12px">
				{file
					? `File name: ${file[0].name}`
					: "no files uploaded yet"}
			</Text>
		</>
	);
};

export default DropDrag;
