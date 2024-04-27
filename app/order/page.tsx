import BreadCrumbCover from "@/components/interactive/breadcrumb/BreadCrumbCover"
import { BreadCrumb } from "@/components/interactive/breadcrumb/Breadcrumb"
import Middle from "@/components/layouts/Middle"
import CartTable from "@/components/objects/cart/CartTable"
import OrderTable from "@/components/objects/order/OrderTable"

export default function orderPage() {
    const breadCrumb: BreadCrumb[] = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Order",
            link: "/order",
            current: true,
        },
    ]
    
    return (
        <>
            <BreadCrumbCover
                title="Order"
                breadCrumb={breadCrumb}
            />
            <Middle X Y className="w-full h-full">
                <OrderTable />
            </Middle>
        </>
    )
}