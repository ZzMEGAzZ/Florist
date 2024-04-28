'use client'
import Middle from "@/components/layouts/Middle";
import Span from "@/components/layouts/Span";
import { ProductCard } from "../ProductCard";
import { Button } from "@/components/ui/button";
import { PaginationComponent } from "@/components/interactive/Pagination";

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
        hot: true
    },
    {
        img: 'https://via.placeholder.com/150',
        name: 'Product 9',
        description: 'Description',
        price: 6000,
        sale: 15
    },
    {
        img: 'https://via.placeholder.com/150',
        name: 'Product 10',
        description: 'Description',
        price: 6000,
        new: true
    },
    {
        img: 'https://via.placeholder.com/150',
        name: 'Product 11',
        description: 'Description',
        price: 6000,
        sale: 5
    },
    {
        img: 'https://via.placeholder.com/150',
        name: 'Product 12',
        description: 'Description',
        price: 6000,
        sale: 10
    },
    {
        img: 'https://via.placeholder.com/150',
        name: 'Product 13',
        description: 'Description',
        price: 6000,
        sale: 20
    },
    {
        img: 'https://via.placeholder.com/150',
        name: 'Product 14',
        description: 'Description',
        price: 6000,
        sale: 25
    },
    {
        img: 'https://via.placeholder.com/150',
        name: 'Product 15',
        description: 'Description',
        price: 6000,
        sale: 30
    },
    {
        img: 'https://via.placeholder.com/150',
        name: 'Product 16',
        description: 'Description',
        price: 6000,
        sale: 35
    },
]


export default function Products() {

    const setPage = () => {
        console.log('set page')
    }

    return (
        <div className="w-full h-full">
            <div className="flex flex-col w-full h-full space-y-4 items-center">
                <Span Y className="w-full h-full space-y-4">
                    <Span X className="relative w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
                        {
                            productArray.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))
                        }
                    </Span>
                </Span>
                <PaginationComponent 
                    page={1}
                    total={100}
                    setPage={() => setPage()}
                />
            </div>
        </div>
    )
}