"use client";
import React from "react";
import styles from "./Navbar.module.css";
import Stack from "@mui/material/Stack";
import { Box, Button, styled } from "@mui/material";

type Props = {};

const navLinks: {
	name: string;
	link: string;
}[] = [
	{
		name: "Charts",
		link: "/",
	},
	{
		name: "Tables",
		link: "/tables",
	},
	{
		name: "Reports",
		link: "/reports",
	},
	{
		name: "Forecast",
		link: "/forecast",
	},
];

const NavItem = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const NavContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	// padding in y to 5, in x to 2
	paddingTop: theme.spacing(5),
	paddingBottom: theme.spacing(5),
	paddingRight: theme.spacing(2),
	paddingLeft: theme.spacing(2),
	height: "100%",
}));

const Navbar = (props: Props) => {
	return (
		<div className={styles["nav-container"]}>
			<NavContainer>
				<Stack spacing={2}>
					<NavItem>Item 1</NavItem>
					<NavItem>Item 2</NavItem>
					<NavItem>Item 3</NavItem>
				</Stack>
			</NavContainer>
		</div>
	);
};

export default Navbar;
