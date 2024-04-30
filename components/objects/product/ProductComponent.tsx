'use client'
import Middle from "@/components/layouts/Middle";
import Span from "@/components/layouts/Span";
import { ProductCard } from "../ProductCard";
import { Button } from "@/components/ui/button";
import { PaginationComponent } from "@/components/interactive/Pagination";
import { useCallback, useEffect, useState } from "react";
import { Category, Product } from "@/models/product";
import { PaginationData } from "@/models/@types";
import { Pagination } from "@/apis/dto/@type";
import { getAllCategories, getProducts } from "@/apis/services/productServices";
import { GetProducts } from "@/apis/dto/productDto";

// const productArray: ProductCard[] = []


export default function Products({category}: {category?: string}) {

    const [categoryData, setCategoryData] = useState<Category[]>();
    const [data, setData] = useState<Product[]>();

    const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 12 })
    const [paginationData, setPaginationData] = useState<PaginationData>()

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

    const getData = useCallback(
        async (getProduct: GetProducts) => {
            try {
                const response: any = await getProducts({
                    category_id: getProduct.category_id,
                    limit: pagination.limit,
                    page: pagination.page
                });
                if (response.status === 200) {
                    setPaginationData(response.data)
                }
            } catch (error) {
                console.log(error);
            }
        }, [pagination])

    useEffect(() => {
        const findCategory = categoryData?.find((item) => item.name.toLowerCase() === category)
        getData(category ? {category_id: findCategory?.category_id} : {}) 
    }, [getData,pagination,categoryData,category])

    useEffect(() => {
        if (paginationData) {
            setData(paginationData.items)
        }
    }, [paginationData])

    return (
        <div className="w-full h-full">
            <div className="flex flex-col w-full h-full space-y-4 items-center">
                <Span Y className="w-full h-full space-y-4">
                    <Span X className="relative w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
                        {
                            data && data.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))
                        }
                    </Span>
                </Span>
                <PaginationComponent
                    page={paginationData?.current_page || 0}
                    total={paginationData?.total_pages || 0}
                    setPage={(page) => {
                        setPagination({ ...pagination, page: page })
                    }}
                />
            </div>
        </div>
    )
}