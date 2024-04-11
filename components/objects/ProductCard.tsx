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

export interface ProductCard {
    img: any;
    name: string
    description: string
    price: number
    onClick?: () => void
    new?: boolean
    hot?: boolean
    sale?: number
}

type props = {
    product: ProductCard
}

export function ProductCard({ product }: props) {

    const [hover, setHover] = useState(false)

    return (
        <>
            <div className="relative">

                <Card className={`${hover ? 'opacity-100 z-20' : 'opacity-0 -z-10  animate'} absolute top-0 left-0 w-[240px] h-full bg-black bg-opacity-70 cursor-pointer`}
                    onMouseLeave={() => setHover(false)}
                >
                    <CardContent className="w-full h-full">
                        <Middle X Y className="w-full h-full">
                            <div className="w-full h-full flex flex-col justify-center items-center space-y-2">
                                <Button className="w-[80%] h-10 bg-primary text-white">
                                    Add to cart
                                </Button>
                                <Span X className="w-full gap-2">
                                    <p className="text-white">share</p>
                                    <p className="text-white">compare</p>
                                    <p className="text-white">like</p>
                                </Span>
                            </div>
                        </Middle>
                    </CardContent>
                </Card>

                <Card className="w-[240px] cursor-pointer shadow-lg"
                    onClick={() => setHover(true)}
                >
                    <div className="relative overflow-hidden">
                        <Image src="https://via.placeholder.com/150" alt="Project" width={240} height={240} className="rounded-t-sm hover:scale-110 animate" />
                        <div className="z-10">
                            {
                                product.new && (
                                    <Middle X Y className="absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full">
                                        New
                                    </Middle>
                                )
                            }
                            {
                                product.hot && (
                                    <Middle X Y className="absolute top-2 right-2 bg-primary text-white w-10 h-10 rounded-full">
                                        hot
                                    </Middle>
                                )
                            }
                            {
                                product.sale && (
                                    <Middle X Y className="absolute top-2 right-2 bg-primary text-md text-white w-10 h-10 rounded-full">
                                        - {product.sale}%
                                    </Middle>
                                )
                            }
                        </div>
                    </div>
                    <CardHeader
                        onMouseEnter={() => setHover(true)}
                    >
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Label className="flex gap-4 items-center">
                            <p className="text-md">฿ {product.price - (product.price * (product.sale ? product.sale / 100 : 0))}</p>
                            {
                                product.sale && (
                                    <p className="text-sm line-through text-muted-foreground">฿ {product.price}</p>
                                )
                            }
                        </Label>
                    </CardFooter>
                </Card>
            </div>

        </>

    )
}
