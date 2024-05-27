"use client";
import { Paper, styled } from "@mui/material";
import React from "react";
import TopButtons from "./TopButtons";
import CashFlow from "./CashFlow";

type Props = {
	conversionObject: { [key: string]: number };
};

const AnalyticsContainer = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(2),
	display: "flex",
	flexDirection: "column",
	gap: 30,
	minHeight: "100%",
	width: "100%",
}));

const AnalyticsSection = ({ conversionObject }: Props) => {
	return (
		<AnalyticsContainer elevation={4}>
			<TopButtons />
			<CashFlow conversionObject={conversionObject} />
		</AnalyticsContainer>
	);
};

export default AnalyticsSection;
