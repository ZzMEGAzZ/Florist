import BreadCrumbBar from "@/components/breadcrumb/BreadCrumbBar";
import BreadCrumbCover from "@/components/breadcrumb/BreadCrumbCover";
import { BreadCrumb } from "@/components/breadcrumb/Breadcrumb";
import HomeProductCategory from "@/components/objects/home/HomeProductCategory";
import ProductCategory from "@/components/objects/product/ProductCategory";

export default function ProductPage() {

    const breadCrumb: BreadCrumb[] = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Product",
            link: "/product",
            current: true
        }
    ]

    return (
        <>
            <BreadCrumbCover
                title="Product"
                breadCrumb={breadCrumb}
                className="hidden md:block"
            />
            <BreadCrumbBar breadCrumb={breadCrumb} className="md:hidden" />
            <ProductCategory />
            <h3 className="text-foreground text-2xl font-bold px-12 mt-4">
                All Products
            </h3>
        </>
    )
}