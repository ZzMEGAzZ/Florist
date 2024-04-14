import BreadCrumbCover from "@/components/interactive/breadcrumb/BreadCrumbCover"
import { BreadCrumb } from "@/components/interactive/breadcrumb/Breadcrumb"

export default function ContactPage() {
    const breadCrumb: BreadCrumb[] = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Contact",
            link: "/contact",
            current: true,
        },
    ]
    
    return (
        <>
            <BreadCrumbCover
                title="Contact"
                breadCrumb={breadCrumb}
            />
        </>
    )
}