import Middle from "@/components/layouts/Middle";
import Span from "@/components/layouts/Span";
import CategorySlide, { CategoryCard } from "./ui/CategorySlide";

const categoryArray: CategoryCard[] = [
    {
        img: 'https://via.placeholder.com/150',
        title: 'Category 1',
        link: '/product/category-1'
    },
    {
        img: 'https://via.placeholder.com/150',
        title: 'Category 2',
        link: '/product/category-2'
    },
    {
        img: 'https://via.placeholder.com/150',
        title: 'Category 3',
        link: '/product/category-3'
    },
    {
        img: 'https://via.placeholder.com/150',
        title: 'Category 4',
        link: '/product/category-4'
    },
    {
        img: 'https://via.placeholder.com/150',
        title: 'Category 5',
        link: '/product/category-5'
    },
    {
        img: 'https://via.placeholder.com/150',
        title: 'Category 6',
        link: '/product/category-6'
    },
]

export default function HomeProductCategory() {
    return (
        <>
            <Middle X Y className="w-full h-full">
                <Span Y className="w-full h-full">
                    <Span Y className="w-full h-full justify-center items-center">
                        <h2 className="text-2xl font-bold">
                            Product Category
                        </h2>
                        <h3 className="text-md text-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h3>
                    </Span>
                    <CategorySlide category={categoryArray} />
                </Span>
            </Middle>
        </>
    )
}