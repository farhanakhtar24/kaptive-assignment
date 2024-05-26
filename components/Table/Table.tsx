import React, { useEffect, useMemo, useRef, useState } from "react";
import { Columns } from "../../types/types";
import { SheetData } from "@/constants/data";
import {
	useMaterialReactTable,
	type MRT_ColumnDef,
	type MRT_Row,
	type MRT_RowVirtualizer,
	MRT_TableContainer,
	MRT_SortingState,
} from "material-react-table";

type Props = {};

const CustomTable = (props: Props) => {
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
				Cell: ({ row }) => <div>{row.original.Jan}</div>,
			},
			{
				id: "Feb",
				header: "Feb",
				accessorKey: "Feb",
				Cell: ({ row }) => <div>{row.original.Feb}</div>,
			},
			{
				id: "March",
				header: "March",
				accessorKey: "March",
				Cell: ({ row }) => <div>{row.original.March}</div>,
			},
			{
				id: "April",
				header: "April",
				accessorKey: "April",
				Cell: ({ row }) => <div>{row.original.April}</div>,
			},
			{
				id: "May",
				header: "May",
				accessorKey: "May",
				Cell: ({ row }) => <div>{row.original.May}</div>,
			},
			{
				id: "June",
				header: "June",
				accessorKey: "June",
				Cell: ({ row }) => <div>{row.original.June}</div>,
			},
			{
				id: "July",
				header: "July",
				accessorKey: "July",
				Cell: ({ row }) => <div>{row.original.July}</div>,
			},
			{
				id: "August",
				header: "August",
				accessorKey: "August",
				Cell: ({ row }) => <div>{row.original.August}</div>,
			},
			{
				id: "September",
				header: "September",
				accessorKey: "September",
				Cell: ({ row }) => <div>{row.original.September}</div>,
			},
			{
				id: "October",
				header: "October",
				accessorKey: "October",
				Cell: ({ row }) => <div>{row.original.October}</div>,
			},
			{
				id: "November",
				header: "November",
				accessorKey: "November",
				Cell: ({ row }) => <div>{row.original.November}</div>,
			},
			{
				id: "December",
				header: "December",
				accessorKey: "December",
				Cell: ({ row }) => <div>{row.original.December}</div>,
			},
		],
		[]
	);

	const rowVirtualizerInstanceRef = useRef<MRT_RowVirtualizer>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [sorting, setSorting] = useState<MRT_SortingState>([]);

	const [data, setData] = useState<Columns[]>(SheetData.Sheet1);

	const table = useMaterialReactTable({
		autoResetPageIndex: false,
		columns,
		data,
		enableBottomToolbar: false,
		enableGlobalFilterModes: true,
		enablePagination: false,
		enableRowNumbers: true,
		enableRowVirtualization: true,
		enableRowOrdering: true,
		onSortingChange: setSorting,
		state: { isLoading, sorting },
		rowVirtualizerInstanceRef, //optional
		rowVirtualizerOptions: { overscan: 5 },
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
	});

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

	return <MRT_TableContainer table={table} />;
};

export default CustomTable;
