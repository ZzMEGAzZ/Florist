'use client'
import { getAllCategories } from "@/apis/services/productServices"
import BreadCrumbBar from "@/components/interactive/breadcrumb/BreadCrumbBar"
import BreadCrumbCover from "@/components/interactive/breadcrumb/BreadCrumbCover"
import { BreadCrumb } from "@/components/interactive/breadcrumb/Breadcrumb"
import ProductCategory from "@/components/objects/product/ProductCategory"
import Products from "@/components/objects/product/ProductComponent"
import { Category } from "@/models/product"
import { useParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

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
                {params.category}
            </h3>
            <div className="px-12">
                <Products />
            </div>
        </>
    )
}