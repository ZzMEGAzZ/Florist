import BreadCrumbCover from "@/components/interactive/breadcrumb/BreadCrumbCover"
import { BreadCrumb } from "@/components/interactive/breadcrumb/Breadcrumb"
import Middle from "@/components/layouts/Middle"
import CartTable from "@/components/objects/cart/CartTable"

export default function CartPage() {
    const breadCrumb: BreadCrumb[] = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Cart",
            link: "/cart",
            current: true,
        },
    ]
    
    return (
        <>
            <BreadCrumbCover
                title="Cart"
                breadCrumb={breadCrumb}
            />
            <Middle X Y className="w-full h-full">
                <CartTable />
            </Middle>
        </>
    )
}