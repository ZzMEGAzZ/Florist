import Middle from "@/components/layouts/Middle";
import Span from "@/components/layouts/Span";
import Image from "next/image";
import Link from "next/link";

export type CategoryCard = {
    img: any;
    title: string;
    link: string;
}

type Props = {
    category: CategoryCard[];
}

export default function CategorySlide({ category }: Props) {
    return (
        <>
            <Middle X Y className="w-full h-full">
                <Span X className="w-[90dvw] py-6 overflow-x-auto scroll-smooth">
                    {
                        Array.from({ length: category.length }).map((_, index) => (
                            <div key={index} className="w-24 h-40 mr-4 cursor-pointer drop-shadow-lg">
                                <Link href={category[index].link}>
                                    <div className="w-24 h-32 rounded-lg">

                                        <Image src={category[index].img} alt={category[index].title}
                                            width={240} height={240}
                                            className="w-full h-full object-cover rounded-lg"
                                        />

                                    </div>
                                    <h3 className="text-md text-foreground font-bold text-center mt-2">
                                        {category[index].title}
                                    </h3>
                                </Link>
                            </div>
                        ))
                    }
                </Span>

            </Middle>
        </>
    )
}