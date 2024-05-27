import React from "react";
import styles from "./page.module.css";
import { Paper, styled } from "@mui/material";
import AnalyticsSection from "@/components/AnalyticsSection/AnalyticsSection";

type Props = {};

const page = async (props: Props) => {
	const res = await fetch(
		"https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_j7KYQHQGgObGHTuIKnyUG8NSqP1vQakCVoY4x7SJ&currencies=EUR%2CGBP"
	);
	const json = await res.json();

	return (
		<div className={styles["page-container"]}>
			<AnalyticsSection conversionObject={{ ...json.data, USD: 1 }} />
		</div>
	);
};

export default page;
