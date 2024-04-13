'use client'
import BreadCrumbBar from "@/components/breadcrumb/BreadCrumbBar"
import BreadCrumbCover from "@/components/breadcrumb/BreadCrumbCover"
import { BreadCrumb } from "@/components/breadcrumb/Breadcrumb"
import ProductCategory from "@/components/objects/product/ProductCategory"
import { useParams } from "next/navigation"

export default function CategoryPage() {
    
    const params = useParams<{ category: string }>()
    
        const breadCrumb: BreadCrumb[] = [
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Product",
                link: "/product",
            },
            {
                name: params.category,
                link: `/product/${params.category}`,
                current: true,
                subPage: [
                    {
                        name: "category 1",
                        link: `/product/category-1`,
                    },
                    {
                        name: "category 2",
                        link: `/product/category-2`,
                    },
                    {
                        name: "category 3",
                        link: `/product/category-3`,
                    },
                    {
                        name: "category 4",
                        link: `/product/category-4`,
                    },
                    {
                        name: "category 5",
                        link: `/product/category-5`,
                    },
                    {
                        name: "category 6",
                        link: `/product/category-6`,
                    },
                ]
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
                    {params.category}
                </h3>
                
            </>
        )
}