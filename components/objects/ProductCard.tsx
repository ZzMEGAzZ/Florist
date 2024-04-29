'use client'
import React, { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Middle from "../layouts/Middle"
import Span from "../layouts/Span"
import { useRouter } from "next/navigation"
import { Product } from "@/models/product"
import { convertImageToPath } from "@/utils/convertImageToPath"

export interface ProductCard {
    id: number;
    img: any;
    name: string
    description: string
    price: number
    link: string
    onClick?: () => void
    new?: boolean
    hot?: boolean
    sale?: number
}

type props = {
    product: Product
}

export function ProductCard({ product }: props) {

    const [hover, setHover] = useState(false)
    const router = useRouter()

    return (
        <>
            <div className="relative">

                <Card className={`${hover ? 'opacity-100 z-20' : 'opacity-0 -z-10  animate'} absolute top-0 left-0 w-[200px] sm:w-[260px] md:w-[300px] lg:w-[300px] 2xl:w-[360px] aspect-[4:3] h-full bg-black bg-opacity-70 cursor-pointer`}
                    onMouseLeave={() => setHover(false)}
                >
                    <CardContent className="w-full h-full">
                        <Middle X Y className="w-full h-full">
                            <div className="w-full h-full flex flex-col justify-center items-center space-y-2">
                                <Button className="w-[80%] h-10 bg-primary text-white" onClick={() => router.push(`/product/${product.category_name}/${product.name}`)}>

                                    Add to cart
                                </Button>
                                {/* <Span X className="w-full gap-2">
                                    <p className="text-white">share</p>
                                    <p className="text-white">compare</p>
                                    <p className="text-white">like</p>
                                </Span> */}
                            </div>
                        </Middle>
                    </CardContent>
                </Card>

                <Card className="w-[200px] sm:w-[260px] md:w-[300px] lg:w-[300px] 2xl:w-[360px] aspect-[4:3] cursor-pointer shadow-lg"
                    onClick={() => setHover(true)}
                >
                    <div className="relative overflow-hidden">
                        <Image src={convertImageToPath(product.product_image)} alt="Project" width={480} height={480} className="rounded-t-sm hover:scale-110 animate h-[240px] sm:h-[300px] md:h-[340px] lg:h-[340px] 2xl:h-[400px] aspect-[4:3]" />
                        <div className="z-10">
                            {/* {
                                product.new && (
                                    <Middle X Y className="absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full">
                                        New
                                    </Middle>
                                )
                            }
                            {
                                product.hot && (
                                    <Middle X Y className="absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full">
                                        hot
                                    </Middle>
                                )
                            }
                            {
                                product.sale && (
                                    <Middle X Y className="absolute top-4 right-4 bg-primary text-md text-white w-10 h-10 rounded-full">
                                        - {product.sale}%
                                    </Middle>
                                )
                            } */}
                        </div>
                    </div>
                    <CardHeader
                        onMouseEnter={() => setHover(true)}
                    >
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Label className="flex gap-4 items-center">
                            {/* <p className="text-md">฿ {product.price - (product.price * (product.sale ? product.sale / 100 : 0))}</p>
                            {
                                product.sale && (
                                    <p className="text-sm line-through text-muted-foreground">฿ {product.price}</p>
                                )
                            } */}
                            <p className="text-md">฿ {product.price}</p>
                        </Label>
                    </CardFooter>
                </Card>
            </div>

        </>

    )
}
