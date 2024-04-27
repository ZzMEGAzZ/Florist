import BreadCrumbCover from "@/components/interactive/breadcrumb/BreadCrumbCover"
import { BreadCrumb } from "@/components/interactive/breadcrumb/Breadcrumb"
import Middle from "@/components/layouts/Middle"
import BillingDetail from "@/components/objects/checkout/BillingDetail"

export default function Checkout() {
    const breadCrumb: BreadCrumb[] = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Checkout",
            link: "/checkout",
            current: true,
        },
    ]

    return (
        <>
            <BreadCrumbCover
                title="Checkout"
                breadCrumb={breadCrumb}
            />
            <Middle X Y className="w-full h-full">
                <BillingDetail />
            </Middle>
        </>
    )
}