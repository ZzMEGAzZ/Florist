'use client'
import { editOrderStatus, getOrderAll } from "@/apis/services/orderServices";
import Span from "@/components/layouts/Span";
import { OrderItem } from "@/models/order";
import { useCallback, useEffect, useState } from "react";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Cross, MoreHorizontal, Trash, X } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import DataTable, { objectData } from "@/components/interactive/Table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Modal from "@/components/layouts/Modal";
import { Selector } from "@/components/interactive/Selector";
import { closeDialog, openDialog } from "@/redux/modules/dialogModal/dialogModalSlice";
import { useDispatch } from "react-redux";

export type TableItem = {
    id: string;
    date: string
    order_number: string
    user_id: string;
    order_detail: string
    price: number
    status: 'paid' | 'shiping' | 'delivered' | 'canceled'
}

interface Status {
    status: 'paid' | 'shiping' | 'delivered' | 'canceled'
}

export default function AdminOrder() {
    const [data, setData] = useState<OrderItem[]>();
    const [tableData, setTableData] = useState<TableItem[]>([]);
    const [openMenu, setOpenMenu] = useState(false);
    const [orderId, setOrderId] = useState<string>("");
    const dispatch = useDispatch();

    const updateStatus = async (status: 'paid' | 'shiping' | 'delivered' | 'canceled') => {
        try {
            const response: any = await editOrderStatus({
                order_id: parseInt(orderId),
                status: status
            });
            if (response.status === 200) {
                dispatch(openDialog({
                    open: true,
                    title: "update status",
                    content: "update status success",
                    status: "success",
                    confirmText: "OK",
                    onConfirm: () => dispatch(closeDialog()),
                }))
                setOpenMenu(!openMenu);
                getData();
                
            }
        } catch {
            dispatch(openDialog({
                open: true,
                title: "update status",
                content: "update status failed",
                status: "error",
                confirmText: "OK",
                onConfirm: () => dispatch(closeDialog()),
            }))
        }
    }

    const getData = useCallback(
        async () => {
            try {
                const response: any = await getOrderAll();
                if (response.status === 200) {
                    setData(response.data); 
                }
            } catch (error) {
                console.log(error);
            }
        }, [])

    useEffect(() => {
        getData()
    }, [getData])

    useEffect(() => {
        if (data) {
            setTableData(data.map((d) => {
                return {
                    id: d.order_id.toString(),
                    user_id: d.user_id.toString(),
                    date: d.order_date,
                    order_number: d.order_id.toString(),
                    order_detail: d.order_items.map((item) => item.product_details.name).join(", "),
                    price: d.total_price,
                    status: d.status
                }
            }));
        }
    }, [data]);

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
            accessorKey: "user_id",
            header: "User ID",
            cell: ({ row }) => <div className="lowercase">{row.getValue("user_id")}</div>,
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
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => {
                return (
                    <Span X className={`
                        text-center
                        inline-block
                        px-2
                        py-1
                        rounded-full
                        text-xs
                        ${row.getValue("status") === "paid" ? "bg-SubPrimary-light text-white" : ""}
                        ${row.getValue("status") === "shiping" ? "bg-Warning-light text-white" : ""}
                        ${row.getValue("status") === "delivered" ? "bg-Success-light text-white" : ""}
                        ${row.getValue("status") === "canceled" ? "bg-Danger-light text-white" : ""}
                    `}>
                        {row.getValue("status")}
                    </Span>
                )
            },
        },
        {
            accessorKey: "action",
            header: "Action",
            cell: ({ row }) => {
                const id = row.original.id;
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="ghost">
                                <MoreHorizontal />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Action</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => {setOpenMenu(!openMenu),setOrderId(id)}}>
                                UpdateStatus
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            }
        }

    ]

    return (
        <>
            <div className="w-full gap-8 p-8">
                {
                    openMenu && (
                        //update status
                        <Modal isOpen={openMenu}>
                            <Card>
                                <CardHeader className="flex flex-row justify-between gap-4 items-center">
                                    <CardTitle>Update Status</CardTitle>
                                    <Button variant="ghost" onClick={() => setOpenMenu(!openMenu)}>
                                        <X className="w-5 h-5" />
                                    </Button>
                                </CardHeader>
                                <CardContent>
                                    <h3 className="">Status</h3>
                                    <Selector
                                        label="Status"
                                        options={
                                            [
                                                { id: "paid", name: "Paid" },
                                                { id: "shipping", name: "Shipping" },
                                                { id: "delivered", name: "Delivered" },
                                                { id: "canceled", name: "Canceled" },
                                            ]
                                        }
                                        selected={(value) => updateStatus(value as ('paid' | 'shiping' | 'delivered' | 'canceled'))}
                                    />
                                </CardContent>
                            </Card>
                        </Modal>
                    )
                }
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
        </>
    )
}