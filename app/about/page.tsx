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
            name: "About",
            link: "/about",
            current: true,
        },
    ]

    return (
        <>
            <BreadCrumbCover
                title="About"
                breadCrumb={breadCrumb}
            />
            <Middle X Y className="w-full h-full">
                <Contact />
            </Middle>
        </>
    )
}