'use client'
import { getOrderAll } from "@/apis/services/orderServices";
import { OrderItem } from "@/models/order";
import { useCallback, useEffect, useState } from "react";

export default function AdminDashboard() {

    const [data, setData] = useState<OrderItem[]>();

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
        } , [getData])

    return (
        <>
        </>
    )
}