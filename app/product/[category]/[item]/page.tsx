'use client'
import BreadCrumbBar from "@/components/interactive/breadcrumb/BreadCrumbBar"
import { BreadCrumb } from "@/components/interactive/breadcrumb/Breadcrumb"
import Middle from "@/components/layouts/Middle"
import { ProductCard } from "@/components/objects/ProductCard"
import ProductItem from "@/components/objects/product/ProductItem"
import RelatedProduct from "@/components/objects/product/ui/RelatedProduct"
import { Button } from "@/components/ui/button"
import { useParams } from "next/navigation"

export default function CategoryItemPage() {

    const params = useParams<{ category: string, item: string }>()

    const breadCrumb: BreadCrumb[] = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Product",
            link: "/product",
        },
        {
            name: params.category,
            link: `/product/${params.category}`,
            current: true,
            subPage: [
                {
                    name: "category 1",
                    link: `/product/category-1`,
                },
                {
                    name: "category 2",
                    link: `/product/category-2`,
                },
                {
                    name: "category 3",
                    link: `/product/category-3`,
                },
                {
                    name: "category 4",
                    link: `/product/category-4`,
                },
                {
                    name: "category 5",
                    link: `/product/category-5`,
                },
                {
                    name: "category 6",
                    link: `/product/category-6`,
                },
            ]
        },
        {
            name: params.item,
            link: `/product/${params.category}/${params.item}`,
            current: true,
        }
    ]

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
    ]

    return (
        <>
            <BreadCrumbBar breadCrumb={breadCrumb} />
            <Middle X Y className="w-full h-full flex-col space-y-4">
                <ProductItem
                    data={
                        {
                            id: 1,
                            category: "Category",
                            name: "Product Name",
                            description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
                            price: 100,
                            discount: 10,
                            img: [
                                "https://via.placeholder.com/100",
                                "https://via.placeholder.com/150",
                                "https://via.placeholder.com/200",
                                "https://via.placeholder.com/250",
                                "https://via.placeholder.com/300",
                                "https://via.placeholder.com/350",
                            ]
                        }
                    }
                />

                <RelatedProduct
                    productArray={productArray}
                />
                <Button className="w-1/3 h-12 text-lg">
                    <a href={`/product/${params.category}`} className="hover:text-accent-foreground">Show More</a>
                </Button>

            </Middle>
        </>
    )
}