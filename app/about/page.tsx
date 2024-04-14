import BreadCrumbCover from "@/components/interactive/breadcrumb/BreadCrumbCover"
import { BreadCrumb } from "@/components/interactive/breadcrumb/Breadcrumb"

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
        </>
    )
}