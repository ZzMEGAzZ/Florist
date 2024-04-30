'use client';

import DataTable, { objectData } from "@/components/interactive/Table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Trash } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCallback, useEffect, useState } from "react";
import { getOrderByUserId } from "@/apis/services/orderServices";
import { setDate } from "date-fns";
import { AuthProvider } from "@/utils/clientAuthProvider";
import { OrderItem } from "@/models/order";

export type TableItem = {
    id: string;
    date: string
    order_number: string
    order_detail: string
    price: number
}



export default function OrderTable() {

    const [selected, setSelected] = useState<string[]>([]);
    const [tableData, setTableData] = useState<TableItem[]>([]);

    const [data, setData] = useState<OrderItem[]>([]);

    const columns: ColumnDef<TableItem>[] = [
        {
            accessorKey: "date",
            header: ({ column }) => {
                return (
                    <Button
                      variant="ghost"
                      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                      Date
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  )
                },
            cell: ({ row }) => <div className="lowercase">{row.getValue("date")}</div>,
        },
        {
            accessorKey: "order_number",
            header: ({ column }) => {
                return (
                    <Button
                      variant="ghost"
                      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                      Order Number
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  )
                },
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("order_number")}</div>
            ),
        },
        {
            accessorKey: "order_detail",
            header: "Order Detail",
            cell: ({ row }) => (
                <>
                    {(row.getValue("order_detail") as string).split(", ").map((item: string) => {
                        return <div>{item}</div>
                    })}
                </>
            )
        },
        {
            accessorKey: "price",
            header: ({ column }) => {
                return (
                    <Button
                      variant="ghost"
                      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                      Price
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  )
                },
            cell: ({ row }) => <div className="lowercase">{row.getValue("price")}</div>,
        },

    ]

    const getData = useCallback(
        async () => {
            try {
                const response: any = await getOrderByUserId({
                    user_id: parseInt(AuthProvider.getUserID() ?? '0')
                });
                if (response.status === 200) {
                    setData(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    useEffect(() => {
        if (data) {
            setTableData(data.map((d) => {
                return {
                    id: d.order_id.toString(),
                    date: d.order_date,
                    order_number: d.order_id.toString(),
                    order_detail: d.order_items.map((item) => item.product_details.name).join(", "),
                    price: d.total_price
                }
            }));
        }
    }, [data]);

    return (
        <div className="w-full h-full">
            <div className="w-full gap-8 p-8">
                <DataTable
                    data={tableData}
                    columns={columns as ColumnDef<objectData>[]}
                    filterItem={{
                        id: "order_number",
                        label: "Order_number",
                        value: "",
                    }}
                />
            </div>
        </div>
    );
}