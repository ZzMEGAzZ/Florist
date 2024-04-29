import BreadCrumbCover from "@/components/interactive/breadcrumb/BreadCrumbCover"
import { BreadCrumb } from "@/components/interactive/breadcrumb/Breadcrumb"
import Middle from "@/components/layouts/Middle"
import Contact from "@/components/objects/contact/Contact"

export default function AboutPage() {
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
            <Middle X Y className="w-full h-full">
                <Contact />
            </Middle>
        </>
    )
}