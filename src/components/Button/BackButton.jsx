import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
	const navigate = useNavigate();
	return (
		<Button variant="ghost" onClick={() => navigate(-1)}>
			Back
		</Button>
	);
};

export default BackButton;
