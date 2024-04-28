'use client'
import Middle from "@/components/layouts/Middle";
import Span from "@/components/layouts/Span";
import CategorySlide, { CategoryCard } from "./ui/CategorySlide";
import { useCallback, useEffect, useState } from "react";
import { Category } from "@/models/product";
import { getAllCategories } from "@/apis/services/productServices";
import Dendrobium from "@/assets/images/Dendrobium.jpg";
import Lies from "@/assets/images/Lies.jpg";
import Mokara from "@/assets/images/Mokara.jpg";
import Vanda from "@/assets/images/Vanda.jpg"

const categoryArray: CategoryCard[] = []

export default function ProductCategory() {
    const [data, setData] = useState<Category[]>();

    const getData = useCallback(
        async () => {
            try {
                const response:any = await getAllCategories();
                if (response.status === 200) {
                    setData(response.data)
                    response.data.map((category: Category) => {
                        categoryArray.push({
                            id: category.category_id,
                            name: category.name,
                            link: `/product/${category.name.toLowerCase()}`,
                            img: category.name === 'Dendrobium' ? Dendrobium : category.name === 'Lies' ? Lies : category.name === 'Mokara' ? Mokara : Vanda
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
    
    return (
        <>
            <Middle X Y className="w-full h-full">
                <Span Y className="w-full h-full">
                    <CategorySlide category={categoryArray} />
                </Span>
            </Middle>
        </>
    )
}