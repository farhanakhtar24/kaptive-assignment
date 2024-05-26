"use client";
import * as React from "react";
import CustomTable from "@/components/Table/Table";
import { Box, Stack, Typography } from "@mui/material";
import DecimalSelector from "./DecimalSelector";
import CurrenySelector from "./CurrenySelector";

type Props = {};

const CashFlow = (props: Props) => {
	const [decimals, setDecimals] = React.useState<string>("0");
	const [curreny, setCurrency] = React.useState<string>("USD");

	return (
		<Stack spacing={5}>
			<Stack
				justifyContent={"space-between"}
				direction={"row"}
				sx={{
					alignItems: "center",
				}}>
				<Typography>CashFlow Summary</Typography>
				<Box
					sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
					<Stack direction={"row"} alignItems={"center"} spacing={2}>
						<Typography>Decimals</Typography>
						<DecimalSelector
							decimals={decimals}
							setDecimals={setDecimals}
						/>
					</Stack>
					<CurrenySelector
						curreny={curreny}
						setCurrency={setCurrency}
					/>
				</Box>
			</Stack>
			<Stack justifyContent={"space-between"} direction={"row"}>
				<CustomTable decimals={decimals} />
			</Stack>
		</Stack>
	);
};

export default CashFlow;
