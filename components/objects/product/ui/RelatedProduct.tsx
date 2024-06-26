import Span from "@/components/layouts/Span";
import { ProductCard } from "../../ProductCard";
import Middle from "@/components/layouts/Middle";
import { Product } from "@/models/product";

type Props = {
    productArray?: Product[];
}

export default function RelatedProduct({ productArray }: Props) {
    return (
        <>
            <div className="w-full h-full px-8">
                <Span Y className="w-full h-full space-y-4">
                    <Middle X Y className="w-full h-full">
                        <h2 className="text-2xl">Related Products</h2>
                    </Middle>
                    <Span X className="relative w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
                        {
                            productArray && productArray.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))
                        }
                    </Span>
                </Span>
            </div>
        </>
    )
}