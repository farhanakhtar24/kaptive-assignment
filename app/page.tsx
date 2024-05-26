import React from "react";
import styles from "./page.module.css";
import { Paper, styled } from "@mui/material";
import AnalyticsSection from "@/components/AnalyticsSection/AnalyticsSection";

type Props = {};

const page = (props: Props) => {
	return (
		<div className={styles["page-container"]}>
			<AnalyticsSection />
		</div>
	);
};

export default page;
