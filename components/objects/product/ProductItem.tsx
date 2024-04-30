import Quantity from "@/components/ui/quantity";
import ProductItemCarousel from "./ui/ItemCarousel";
import ItemDetail from "./ui/ItemDetail";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Product } from "@/models/product";
import { addToCart } from "@/apis/services/cartServices";
import { AuthProvider } from "@/utils/clientAuthProvider";
import { useDispatch } from "react-redux";
import { closeDialog, openDialog } from "@/redux/modules/dialogModal/dialogModalSlice"
import { useRouter } from "next/navigation";
import { convertImageToPath } from "@/utils/convertImageToPath";

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
    data?: Product;
    sound: string;
}

export default function ProductItem({ data, sound }: Props) {

    const [quantity, setQuantity] = useState(1)
    const user_id = AuthProvider.getUserID()
    const dispatch = useDispatch()
    const router = useRouter()

    const handleSetQuantity = (quantity: number) => {
        if (quantity < 1 || quantity === null || quantity === undefined || isNaN(quantity)) {
            setQuantity(1)
        } else {
            setQuantity(quantity)
        }
    }

    const handleAddToCart = async () => {
        if (AuthProvider.getAccessToken()) {
        try {
            const response = await addToCart({
                user_id: parseInt(user_id ?? "0"),
                items: [{ product_id: data?.product_id ?? 0, quantity: quantity }]
            })
            if (response.status === 201) {
                dispatch(openDialog({
                    open: true,
                    title: "Add to cart",
                    content: "Item added to cart",
                    status: "success",
                    confirmText: "OK",
                    onConfirm: () => dispatch(closeDialog()),
                }))
                router.push("/cart")
            }
        } catch (error) {
            console.log(error)
            dispatch(openDialog({
                open: true,
                title: "Add to cart",
                content: "Item failed to add to cart",
                status: "error",
                confirmText: "OK",
                onConfirm: () => dispatch(closeDialog()),
            }))
        }
    } else {
        router.push("/login")
    }
}

    return (
        <div>
            <div className="max-w-[1440px] h-full grid grid-cols-1 md:grid-cols-2 p-8 gap-4">
                <ProductItemCarousel img={[convertImageToPath(data?.product_image ?? ''),'https://via.placeholder.com/500',convertImageToPath(data?.product_image ?? ''),'https://via.placeholder.com/500',convertImageToPath(data?.product_image ?? ''),'https://via.placeholder.com/500',convertImageToPath(data?.product_image ?? ''),'https://via.placeholder.com/500']} />
                <div className="w-full h-full">
                    <ItemDetail sound={sound} data={data} />
                    <div className="flex gap-4">
                        <Quantity quantity={quantity} setQuantity={(quantity) => handleSetQuantity(quantity)} />
                        <Button className="w-full h-14 text-lg" onClick={() => handleAddToCart()}>Add to cart</Button>
                    </div>
                    <div className="w-full h-0.5 bg-for my-4 bg-muted-foreground opacity-20"></div>
                    <div className="text-muted-foreground">
                        <h4 className="grid grid-cols-[100px_minmax(200px,_1fr)]">ID<span>: {data?.product_id}</span></h4>
                        <h4 className="grid grid-cols-[100px_minmax(200px,_1fr)]">Category<span>: {data?.category_name}</span></h4>
                        {/* <h4 className="grid grid-cols-[100px_minmax(200px,_1fr)]">Share<span>: <button className="hover:text-accent-foreground">Facebook</button> <button className="hover:text-accent-foreground">Twitter</button> <button className="hover:text-accent-foreground">Line</button></span></h4> */}
                    </div>
                </div>
            </div>
        </div>
    )
}