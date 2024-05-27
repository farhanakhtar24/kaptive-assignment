import React, { useEffect, useMemo, useRef, useState } from "react";
import { Columns } from "../../types/types";
import { SheetData } from "@/constants/data";
import {
	useMaterialReactTable,
	type MRT_ColumnDef,
	type MRT_Row,
	type MRT_RowVirtualizer,
	MRT_SortingState,
	MaterialReactTable,
} from "material-react-table";
import { roundOff } from "@/utils/RoundOff";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

type Props = {
	decimals: string;
	conversionObject: { [key: string]: number };
	currency: string;
};

const CustomTable = ({ decimals, conversionObject, currency }: Props) => {
	console.log("decimals", decimals);
	console.log("conversionObject", conversionObject[currency]);
	console.log("currency", currency);

	const columns = useMemo<MRT_ColumnDef<Columns>[]>(
		() => [
			{
				id: "Overhead",
				header: "Overhead",
				accessorKey: "Overhead",
				Cell: ({ row }) => <div>{row.original.Overhead}</div>,
			},
			{
				id: "Jan",
				header: "Jan",
				accessorKey: "Jan",
				Cell: ({ row }) => (
					<div>
						{roundOff(
							row.original.Jan,
							decimals,
							conversionObject,
							currency
						)}
					</div>
				),
			},
			{
				id: "Feb",
				header: "Feb",
				accessorKey: "Feb",
				Cell: ({ row }) => (
					<div>
						{roundOff(
							row.original.Feb,
							decimals,
							conversionObject,
							currency
						)}
					</div>
				),
			},
			{
				id: "March",
				header: "March",
				accessorKey: "March",
				Cell: ({ row }) => (
					<div>
						{roundOff(
							row.original.March,
							decimals,
							conversionObject,
							currency
						)}
					</div>
				),
			},
			{
				id: "April",
				header: "April",
				accessorKey: "April",
				Cell: ({ row }) => (
					<div>
						{roundOff(
							row.original.April,
							decimals,
							conversionObject,
							currency
						)}
					</div>
				),
			},
			{
				id: "May",
				header: "May",
				accessorKey: "May",
				Cell: ({ row }) => (
					<div>
						{roundOff(
							row.original.May,
							decimals,
							conversionObject,
							currency
						)}
					</div>
				),
			},
			{
				id: "June",
				header: "June",
				accessorKey: "June",
				Cell: ({ row }) => (
					<div>
						{roundOff(
							row.original.June,
							decimals,
							conversionObject,
							currency
						)}
					</div>
				),
			},
			{
				id: "July",
				header: "July",
				accessorKey: "July",
				Cell: ({ row }) => (
					<div>
						{roundOff(
							row.original.July,
							decimals,
							conversionObject,
							currency
						)}
					</div>
				),
			},
			{
				id: "August",
				header: "August",
				accessorKey: "August",
				Cell: ({ row }) => (
					<div>
						{roundOff(
							row.original.August,
							decimals,
							conversionObject,
							currency
						)}
					</div>
				),
			},
			{
				id: "September",
				header: "September",
				accessorKey: "September",
				Cell: ({ row }) => (
					<div>
						{roundOff(
							row.original.September,
							decimals,
							conversionObject,
							currency
						)}
					</div>
				),
			},
			{
				id: "October",
				header: "October",
				accessorKey: "October",
				Cell: ({ row }) => (
					<div>
						{roundOff(
							row.original.October,
							decimals,
							conversionObject,
							currency
						)}
					</div>
				),
			},
			{
				id: "November",
				header: "November",
				accessorKey: "November",
				Cell: ({ row }) => (
					<div>
						{roundOff(
							row.original.November,
							decimals,
							conversionObject,
							currency
						)}
					</div>
				),
			},
			{
				id: "December",
				header: "December",
				accessorKey: "December",
				Cell: ({ row }) => (
					<div>
						{roundOff(
							row.original.December,
							decimals,
							conversionObject,
							currency
						)}
					</div>
				),
			},
		],
		[decimals, currency, conversionObject]
	);

	const rowVirtualizerInstanceRef = useRef<MRT_RowVirtualizer>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [sorting, setSorting] = useState<MRT_SortingState>([]);

	const [data, setData] = useState<Columns[]>(SheetData.Sheet1);

	const table = useMaterialReactTable({
		columns,
		data,
		enablePagination: false,
		enableRowNumbers: true,
		enableRowVirtualization: true,
		enableRowOrdering: true,
		enableRowSelection: true,
		onSortingChange: setSorting,
		state: {
			isLoading,
			sorting,
		},
		rowVirtualizerInstanceRef, //optional
		rowVirtualizerOptions: { overscan: 5 },
		muiTableContainerProps: { sx: { maxHeight: "600px" } },
		muiRowDragHandleProps: ({ table }) => ({
			onDragEnd: () => {
				const { draggingRow, hoveredRow } = table.getState();
				if (hoveredRow && draggingRow) {
					data.splice(
						(hoveredRow as MRT_Row<Columns>).index,
						0,
						data.splice(draggingRow.index, 1)[0]
					);
					setData([...data]);
				}
			},
		}),
		renderTopToolbarCustomActions: ({ table }) => (
			<Box
				sx={{
					display: "flex",
					gap: "16px",
					padding: "8px",
					flexWrap: "wrap",
				}}>
				<Button
					disabled={
						table.getPrePaginationRowModel().rows.length === 0
					}
					//export all rows, including from the next page, (still respects filtering and sorting)
					onClick={() =>
						handleExportRows(table.getPrePaginationRowModel().rows)
					}
					startIcon={<FileDownloadIcon />}>
					Export All Rows
				</Button>
				<Button
					disabled={table.getRowModel().rows.length === 0}
					//export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
					onClick={() => handleExportRows(table.getRowModel().rows)}
					startIcon={<FileDownloadIcon />}>
					Export Page Rows
				</Button>
				<Button
					disabled={
						!table.getIsSomeRowsSelected() &&
						!table.getIsAllRowsSelected()
					}
					//only export selected rows
					onClick={() =>
						handleExportRows(table.getSelectedRowModel().rows)
					}
					startIcon={<FileDownloadIcon />}>
					Export Selected Rows
				</Button>
			</Box>
		),
	});

	const handleExportRows = (rows: MRT_Row<Columns>[]) => {
		const doc = new jsPDF({
			orientation: "l",
			unit: "mm",
			format: "a4",
			putOnlyUsedFonts: true,
			floatPrecision: 16,
		});
		const formatter = Intl.NumberFormat("en", { notation: "compact" });
		const tableData = rows.map((row) =>
			Object.values(row.original).map((v) =>
				typeof v === "number"
					? formatter.format(v * conversionObject[currency])
					: v
			)
		);
		const tableHeaders = columns.map((c) => c.header);

		autoTable(doc, {
			head: [tableHeaders],
			body: tableData,
		});

		doc.save("mrt-pdf-example.pdf");
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		//scroll to the top of the table when the sorting changes
		try {
			rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
		} catch (error) {
			console.error(error);
		}
	}, [sorting]);

	useEffect(() => {
		console.log("re-render");
	});

	return <MaterialReactTable table={table} />;
};

export default CustomTable;
