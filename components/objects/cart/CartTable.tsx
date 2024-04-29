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
import CartSummary from "./CartSummary";
import { useCallback, useEffect, useState } from "react";
import { Pagination } from "@/apis/dto/@type";
import { PaginationData } from "@/models/@types";
import { getCart } from "@/apis/services/cartServices";
import { AuthProvider } from "@/utils/clientAuthProvider";
import { Cart, CartItem } from "@/models/cart";
import { useDispatch } from "react-redux";
import { addItems, clearItems, removeItem } from "@/redux/modules/checkout/checkoutSlice";
import { Item } from "@/redux/modules/checkout/@types";
import { useRouter } from "next/navigation";
import { closeDialog, openDialog } from "@/redux/modules/dialogModal/dialogModalSlice"

export type TableItem = {
    id: string;
    name: string
    price: number
    quantity: number
    total: number
}

export default function CartTable() {

    const [selected, setSelected] = useState<string[]>([]);
    const [data, setData] = useState<Cart[]>([]);
    const [tableData, setTableData] = useState<TableItem[]>([]);
    const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 12 });
    const [paginationData, setPaginationData] = useState<PaginationData>();
    const dispatch = useDispatch();
    const router = useRouter();

    const checkoutHandler = () => {
        if (selected.length !== 0) {
            dispatch(clearItems());
            try {
                dispatch(
                    addItems({
                        Items: selected.map((s) => {
                            const selectedItem = data.find((d) => d.product.product_id.toString() === s);
                            return {
                                product_id: selectedItem?.product.product_id ?? 0,
                                quantity: selectedItem?.quantity ?? 0,
                                price_per_unit: selectedItem?.product.price ?? 0,
                                name: selectedItem?.product.name ?? "",
                            };
                        }) as Item[]
                    })
                );
                router.push("/checkout");
            } catch (error) {
                dispatch(openDialog({
                    open: true,
                    title: "Error",
                    content: "An error occurred while adding items to the cart. Please try again later.",
                    status: "error",
                    confirmText: "OK",
                    onConfirm: () => dispatch(closeDialog()),
                    
                }))
            }

        };
    };

    const columns: ColumnDef<TableItem>[] = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => {
                        table.toggleAllPageRowsSelected(!!value);
                        setSelected(value === true ? (tableData.map((d) => d.id.toString())) : [])
                    }}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => { row.toggleSelected(!!value), console.log(row.original.id), setSelected(value === true ? [...selected, row.original.id.toString()] : selected.filter((s) => s !== row.original.id.toString())) }}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "name",
            header: "name",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("name")}</div>
            ),
        },
        {
            accessorKey: "quantity",
            header: "Quantity",
            cell: ({ row }) => <div className="lowercase">{row.getValue("quantity")}</div>,
        },
        {
            accessorKey: "price",
            header: "Price",
            cell: ({ row }) => <div className="lowercase">{row.getValue("price")}</div>,
        },
        {
            accessorKey: "total",
            header: "Total",
            cell: ({ row }) => <div className="lowercase">{row.getValue("total")}</div>,
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const data = row.original

                return (
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <Trash className="text-Danger w-5 h-5" />
                        <p>Delete</p>
                    </div>
                )
            },
        },
    ]

    const getData = useCallback(
        async () => {
            try {
                const response: any = await getCart({
                    user_id: parseInt(AuthProvider.getUserID() ?? '0'),
                    limit: pagination.limit,
                    page: pagination.page
                });
                if (response.status === 200) {
                    setPaginationData(response.data)
                }
            } catch (error) {
                console.log(error);
            }
        }, [pagination]);

        localStorage.setItem('cart', JSON.stringify(data));
        localStorage.getItem('cart');

    useEffect(() => {
        getData();
    }, [getData]);

    useEffect(() => {
        if (paginationData) {
            setData(paginationData.items);
        }
    }, [paginationData]);

    useEffect(() => {
        if (data) {
            setTableData(data.map((d) => ({
                id: String(d.product?.product_id ?? ''), // Null check added
                name: d.product?.name ?? '',
                price: parseFloat(d.product?.price ?? '0'), // Null check added
                quantity: d.quantity,
                total: parseFloat(d.product?.price ?? '0') * d.quantity // Null check added
            })));
        }
    }, [data]);


    return (
        <div className="w-full h-full">
            <div className="grid grid-cols-1 md:grid-cols-[auto_300px] gap-8 p-8">
                <DataTable
                    data={tableData}
                    columns={columns as ColumnDef<objectData>[]}
                    filterItem={{
                        id: "name",
                        label: "Name",
                        value: "",
                    }}
                />
                <CartSummary
                    items={
                        selected.map((s) => data?.find((d) => d.product?.product_id?.toString() === s)).map((d) => ({
                            id: String(d?.product?.product_id ?? ""),
                            name: d?.product?.name ?? "",
                            price: parseFloat(d?.product?.price ?? '0'),
                            quantity: d?.quantity ?? 0,
                        }))
                    }
                    total={selected.reduce((acc, curr) => {
                        const item = data.find((d) => d.product?.product_id?.toString() === curr); // Null check added
                        return acc + (parseFloat(item?.product?.price ?? '0') * (item?.quantity ?? 0)); // Null check added for item.quantity
                    }, 0)}
                    checkOut={() => checkoutHandler()}
                />
            </div>
        </div>
    );
}