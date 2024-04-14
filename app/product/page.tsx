'use client'
import BreadCrumbBar from "@/components/interactive/breadcrumb/BreadCrumbBar";
import BreadCrumbCover from "@/components/interactive/breadcrumb/BreadCrumbCover";
import { BreadCrumb } from "@/components/interactive/breadcrumb/Breadcrumb";
import HomeProductCategory from "@/components/objects/home/HomeProductCategory";
import ProductCategory from "@/components/objects/product/ProductCategory";
import Products from "@/components/objects/product/ProductComponent";

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
            <h3 className="text-foreground text-2xl font-bold px-12 my-6">
                All Products
            </h3>
            <div className="px-12">
                <Products />
            </div>
        </>
    )
}