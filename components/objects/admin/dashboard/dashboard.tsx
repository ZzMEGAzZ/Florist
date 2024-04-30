'use client'
import { getOrderAll } from "@/apis/services/orderServices";
import { BarChartData, LineChartData, LineChartDataset } from "@/components/chart/@types";
import BarChart from "@/components/chart/BarChart";
import Span from "@/components/layouts/Span";
import { OrderItem } from "@/models/order";
import { useCallback, useEffect, useState } from "react";

export default function AdminDashboard() {

    const [data, setData] = useState<OrderItem[]>();

    const [lineChartIncome, setLineChartIncome] = useState<LineChartData[]>([])
    const [barChartIncomePerMonth, setBarChartIncomePerMonth] = useState<BarChartData>({
        indexBy: '',
        keys: [],
        datasets: [],
        label: '',
        axis: '',
        colorBy: 'id'
    })

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
            const incomeByMonth: { [key: string]: number } = {};

            // Iterate over each order
            data.forEach((order: OrderItem) => {
                // Extract year and month from order_date
                const orderDate = new Date(order.order_date);
                const year = orderDate.getFullYear();
                const month = orderDate.getMonth() + 1; // January is 0, so add 1 to get correct month

                // Create a unique key for the month
                const monthKey = `${year}-${month < 10 ? '0' + month : month}`;

                // If the month key doesn't exist in the incomeByMonth object, initialize it as zero
                if (!incomeByMonth[monthKey]) {
                    incomeByMonth[monthKey] = 0;
                }

                // Add the total_price of the order to the corresponding month
                incomeByMonth[monthKey] += order.total_price;
            });

            // Convert incomeByMonth object into an array of objects
            const incomeData: { month: string; income: number }[] = Object.keys(incomeByMonth).map((monthKey: string) => ({
                month: monthKey,
                income: incomeByMonth[monthKey],
                color: 'hsl(323.89 100.00% 77.84%)'
            }));
            

            setBarChartIncomePerMonth({
                indexBy: 'month',
                keys: ['income'],
                datasets: incomeData,
                label: 'Income',
                axis: 'Income',
                colorBy: 'id',
            });



        }
    }, [data])

    return (
        <>
            <Span Y className="w-full h-full">
                <h2 className="text-2xl font-bold text-primary-foreground">Dashboard</h2>
                <div className="w-full h-[500px] border rounded-2xl p-4 bg-white">
                    <BarChart data={barChartIncomePerMonth} />
                </div>
            </Span>
        </>
    )
}