"use client";
import { Paper, styled } from "@mui/material";
import React from "react";
import TopButtons from "./TopButtons";
import CashFlow from "./CashFlow";

type Props = {};

const AnalyticsContainer = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(2),
	display: "flex",
	flexDirection: "column",
	gap: 30,
	minHeight: "100%",
	width: "100%",
}));

const AnalyticsSection = (props: Props) => {
	return (
		<AnalyticsContainer elevation={4}>
			<TopButtons />
			<CashFlow />
		</AnalyticsContainer>
	);
};

export default AnalyticsSection;
