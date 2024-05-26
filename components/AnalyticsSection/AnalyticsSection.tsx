"use client";
import { Paper, styled } from "@mui/material";
import React from "react";

type Props = {};

const AnalyticsContainer = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(2),
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	minHeight: "100%",
	width: "100%",
}));

const AnalyticsSection = (props: Props) => {
	return (
		<AnalyticsContainer elevation={4}>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
			<div>fanklfnakls</div>
		</AnalyticsContainer>
	);
};

export default AnalyticsSection;
