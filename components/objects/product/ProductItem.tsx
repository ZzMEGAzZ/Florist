import Quantity from "@/components/ui/quantity";
import ProductItemCarousel from "./ui/ItemCarousel";
import ItemDetail from "./ui/ItemDetail";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export interface ProductItemType {
    id: number;
    category: string;
    name: string;
    description: string;
    price: number;
    discount: number;
    img: any[];
}

type Props = {
    data: ProductItemType;
}

export default function ProductItem({ data }: Props) {

    const [quantity, setQuantity] = useState(1)

    const handleSetQuantity = (quantity: number) => {
        if (quantity < 1 || quantity === null || quantity === undefined || isNaN(quantity)) {
            setQuantity(1)
        } else {
            setQuantity(quantity)
        }
    }

    const handlerShare = (type: string) => {
        switch (type) {
            case "facebook":
                console.log("Facebook")
                break;
            case "twitter":
                console.log("Twitter")
                break;
            case "line":
                console.log("Line")
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className="max-w-[1440px] grid grid-cols-1 md:grid-cols-2 p-8 gap-4">
                <ProductItemCarousel img={data.img} />
                <div className="w-full">
                    <ItemDetail data={data} />
                    <div className="flex gap-4">
                        <Quantity quantity={quantity} setQuantity={(quantity) => handleSetQuantity(quantity)} />
                        <Button className="w-full h-14 text-lg" onClick={() => console.log("Add to cart")}>Add to cart</Button>
                    </div>
                    <div className="w-full h-0.5 bg-for my-4 bg-muted-foreground opacity-20"></div>
                    <div className="text-muted-foreground">
                        <h4 className="grid grid-cols-[100px_minmax(200px,_1fr)]">ID<span>: {data.id}</span></h4>
                        <h4 className="grid grid-cols-[100px_minmax(200px,_1fr)]">Category<span>: {data.category}</span></h4>
                        {/* <h4 className="grid grid-cols-[100px_minmax(200px,_1fr)]">Share<span>: <button className="hover:text-accent-foreground">Facebook</button> <button className="hover:text-accent-foreground">Twitter</button> <button className="hover:text-accent-foreground">Line</button></span></h4> */}
                    </div>
                </div>
            </div>
        </>
    )
}