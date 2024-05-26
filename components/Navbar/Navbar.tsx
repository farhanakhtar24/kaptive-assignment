"use client";
import React from "react";
import styles from "./Navbar.module.css";
import Stack from "@mui/material/Stack";
import {
	Avatar,
	Box,
	Button,
	Paper,
	Typography,
	colors,
	styled,
} from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SummarizeIcon from "@mui/icons-material/Summarize";
import LogoutIcon from "@mui/icons-material/Logout";

type Props = {};

const navLinks: {
	name: string;
	link: string;
	icon?: JSX.Element;
}[] = [
	{
		name: "Charts",
		link: "/",
		icon: <BarChartIcon />,
	},
	{
		name: "Tables",
		link: "/tables",
		icon: <DashboardIcon />,
	},
	{
		name: "Reports",
		link: "/reports",
		icon: <SummarizeIcon />,
	},
];

const NavContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	paddingTop: theme.spacing(3),
	paddingBottom: theme.spacing(3),
	paddingRight: theme.spacing(2),
	paddingLeft: theme.spacing(2),
	height: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
}));

const NavItem = styled(Button)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(2),
	color: colors.common.white,
	textTransform: "none",
	display: "flex",
	justifyContent: "flex-start",
	":hover": {
		backgroundColor: "rgba(255, 255, 255, 0.3)",
	},
	fontSize: "0.7rem",
}));

const UserDetail = styled(Paper)(({ theme }) => ({
	display: "flex",
	backgroundColor: "rgba(255, 255, 255, 0.3)",
	alignItems: "center",
	justifyContent: "center",
	padding: theme.spacing(2),
	gap: theme.spacing(2),
}));

const Navbar = (props: Props) => {
	return (
		<div className={styles["nav-container"]}>
			<NavContainer>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
					}}>
					<Typography
						variant="h4"
						gutterBottom
						sx={{
							fontWeight: 900,
							paddingX: "10px",
							color: "white",
						}}>
						PLSE
					</Typography>
					<Stack>
						{navLinks.map((link) => (
							<NavItem key={link.name} startIcon={link.icon}>
								{link.name}
							</NavItem>
						))}
					</Stack>
				</Box>
				<Stack
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "10px",
					}}>
					<UserDetail>
						<Avatar sx={{ color: "black", fontSize: "0.9rem" }}>
							AL
						</Avatar>
						<Stack sx={{ color: "white" }}>
							<Typography fontSize={10}>
								Abhishek Lohia
							</Typography>
							<Typography fontSize={10}>User</Typography>
						</Stack>
					</UserDetail>
					<NavItem
						startIcon={<LogoutIcon />}
						sx={{
							backgroundColor: "rgba(255, 255, 255, 0.3)",
						}}>
						Logout
					</NavItem>
				</Stack>
			</NavContainer>
		</div>
	);
};

export default Navbar;
