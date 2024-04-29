import { Product } from "@/models/product";
import { ProductItemType } from "../ProductItem";

type Props = {
    data?: Product;
}

export default function ItemDetail({ data }: Props) {
    return (
        <div className="w-full h-3/4">
            <h2 className="text-3xl">{data?.name}</h2>
            <div className="flex flex-row items-center space-x-6">
                <p className="text-lg text-muted-foreground">฿ {data?.price}</p>
                {/* <p className="text-sm text-muted-foreground line-through">
                    {data.discount ? `฿ ${data.price}` : ""}
                </p> */}
            </div>
            <div className="mt-4">
                <p className="text-base">{data?.description}</p>
            </div>
        </div>
    )
}