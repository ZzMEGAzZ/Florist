'use client'
import { Pagination } from "@/apis/dto/@type"
import { GetProducts } from "@/apis/dto/productDto"
import { getAllCategories, getProductByName, getProducts } from "@/apis/services/productServices"
import BreadCrumbBar from "@/components/interactive/breadcrumb/BreadCrumbBar"
import { BreadCrumb } from "@/components/interactive/breadcrumb/Breadcrumb"
import Middle from "@/components/layouts/Middle"
import { ProductCard } from "@/components/objects/ProductCard"
import ProductItem from "@/components/objects/product/ProductItem"
import RelatedProduct from "@/components/objects/product/ui/RelatedProduct"
import { Button } from "@/components/ui/button"
import { PaginationData } from "@/models/@types"
import { Category, Product } from "@/models/product"
import { useParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

export default function CategoryItemPage() {

    const params = useParams<{ category: string, item: string }>()

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
        },
        {
            name: params.item,
            link: `/product/${params.category}/${params.item}`,
            current: true,
        }
    ]
    const [data, setData] = useState<Product>();
    const [categoryData, setCategoryData] = useState<Category[]>();
    const [relatedData, setRelatedData] = useState<Product[]>();

    const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 4 })
    const [paginationData, setPaginationData] = useState<PaginationData>()

    const getData = useCallback(
        async () => {
            try {
                const response: any = await getProductByName({
                    product_name: params.item
                });
                if (response.status === 200) {
                    setData(response.data)
                }
            } catch (error) {
                console.log(error);
            }
        }, [])

    useEffect(() => {
        getData()
    } , [getData])

    const getRelatedData = useCallback(
        async (getProduct: GetProducts) => {
            try {
                const response: any = await getProducts({
                    category_id: getProduct.category_id,
                    page: pagination.page,
                    limit: pagination.limit
                });
                if (response.status === 200) {
                    setPaginationData(response.data)
                }
            } catch (error) {
                console.log(error);
            }
        }, [])


    useEffect(() => {
        if (paginationData) {
            setRelatedData(paginationData.items)
        }
    }, [paginationData])

    const getCategoryData = useCallback(
        async () => {
            try {
                const response:any = await getAllCategories();
                if (response.status === 200) {
                    setCategoryData(response.data)
                }
            } catch (error) {
                console.log(error);
            }
        }, [])

    useEffect(() => {
        getCategoryData()
    }, [getCategoryData])

    useEffect(() => {
        const findCategory = categoryData?.find((item) => item.name === params.category)
        getRelatedData(params.category ? {category_id: findCategory?.category_id} : {}) 
    }, [getData,pagination,categoryData,params.category])

    return (
        <>
            <BreadCrumbBar breadCrumb={breadCrumb} />
            <Middle X Y className="w-full h-full flex-col space-y-4">
                <ProductItem
                    data={data}
                />

                <RelatedProduct
                    productArray={relatedData}
                />
                <Button className="w-1/3 h-12 text-lg">
                    <a href={`/product/${params.category}`} className="hover:text-accent-foreground">Show More</a>
                </Button>

            </Middle>
        </>
    )
}