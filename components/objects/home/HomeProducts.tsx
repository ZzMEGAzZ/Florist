import Middle from "@/components/layouts/Middle";
import Span from "@/components/layouts/Span";
import { ProductCard } from "../ProductCard";
import { Button } from "@/components/ui/button";

const productArray: ProductCard[] = [
    {
        img: 'https://via.placeholder.com/150',
        name: 'Product 1',
        description: 'Description',
        price: 1000,
    },
    {
        img: 'https://via.placeholder.com/150',
        name: 'Product 2',
        description: 'Description',
        price: 2000,
    },
    {
        img: 'https://via.placeholder.com/150',
        name: 'Product 3',
        description: 'Description',
        price: 3000,
    },
    {
        img: 'https://via.placeholder.com/150',
        name: 'Product 4',
        description: 'Description',
        price: 4000,
    },
    {
        img: 'https://via.placeholder.com/150',
        name: 'Product 5',
        description: 'Description',
        price: 5000,
    },
    {
        img: 'https://via.placeholder.com/150',
        name: 'Product 6',
        description: 'Description',
        price: 6000,
        hot: true
    },
    {
        img: 'https://via.placeholder.com/150',
        name: 'Product 7',
        description: 'Description',
        price: 6000,
        new: true
    },
    {
        img: 'https://via.placeholder.com/150',
        name: 'Product 8',
        description: 'Description',
        price: 6000,
        sale: 15
    },
]


export default function HomeProducts() {
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
                <Button className='w-40'>Show More</Button>
            </div>
        </div>
    )
}