import theme from "@/app/theme";
import { Box, Button, Stack, styled } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import React from "react";

type Props = {};

const StyledButton = styled(Button)(({ theme }) => ({
	textTransform: "none",
	backgroundColor: "white",
	color: "black",
	boxShadow: shadows[1],
	fontSize: "0.7rem",
	flex: 1,
}));

const TopButtons = (props: Props) => {
	return (
		<Box sx={{ display: "flex", justifyContent: "space-between" }}>
			<Stack spacing={1} direction="row" sx={{ width: "50%" }}>
				{["Summary", "Balance Sheet", "Incorrect Statement"].map(
					(item, idx) => {
						return <StyledButton key={idx}>{item}</StyledButton>;
					}
				)}
				<StyledButton
					sx={{
						color: theme.palette.secondary.main,
						backgroundColor: theme.palette.secondary.main + "2D",
					}}>
					Cashflow
				</StyledButton>
				<StyledButton sx={{ flex: 0, fontSize: "1rem" }}>
					+
				</StyledButton>
			</Stack>
		</Box>
	);
};

export default TopButtons;
