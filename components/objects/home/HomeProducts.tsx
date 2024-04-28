'use client';
import Middle from "@/components/layouts/Middle";
import Span from "@/components/layouts/Span";
import { ProductCard } from "../ProductCard";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import { Category, Product } from "@/models/product";
import { getProducts } from "@/apis/services/productServices";
import { Pagination } from "@/apis/dto/@type";
import { PaginationData } from "@/models/@types";
import { useRouter } from "next/navigation";
import { convertImageToPath } from "@/utils/convertImageToPath";

const productArray: ProductCard[] = []

export default function HomeProducts() {
    const [data, setData] = useState<Product[]>();
    const router = useRouter()

    const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 8 })
    const [paginationData, setPaginationData] = useState<PaginationData>()

    const getData = useCallback(
        async () => {
            try {
                const response: any = await getProducts(pagination);
                if (response.status === 200) {
                    setPaginationData(response.data)
                    response.data.items.map((product: Product) => {
                        productArray.push({
                            id: product.product_id,
                            name: product.name,
                            img: convertImageToPath(product.product_image),
                            price: product.price,
                            onClick: () => router.push(`/product/${product.category_id}/${product.product_id}`),
                            description: product.description,
                            link: `/product/${product.category_id}/${product.product_id}`
                        })
                    })
                }
            } catch (error) {
                console.log(error);
            }
        }, [])

    useEffect(() => {
        getData()
    }, [getData])

    useEffect(() => {
        if (paginationData) {
            setData(paginationData.items)
        }
    }, [paginationData])


    return (
        <div className="w-full h-full">
            <div className="flex flex-col w-full h-full space-y-4 items-center">
                <Span Y className="w-full h-full space-y-4">
                    <Span Y className="w-full h-full justify-center items-center">
                        <h2 className="text-2xl font-bold">
                            Our Products
                        </h2>
                    </Span>
                    <Span X className="relative w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
                        {
                            productArray.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))
                        }
                    </Span>
                </Span>

                <Button className="w-1/3 h-12 text-lg">
                    <a href={`/product`} className="hover:text-accent-foreground">Show More</a>
                </Button>
            </div>
        </div>
    )
}