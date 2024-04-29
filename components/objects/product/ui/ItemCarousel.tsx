'use client'
import { type CarouselApi } from "@/components/ui/carousel"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"
import Middle from "@/components/layouts/Middle"
import Image from 'next/image'
import { convertImageToPath } from "@/utils/convertImageToPath"

type Props = {
    img: any[];
}

export default function ProductItemCarousel({ img }: Props) {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>()

    //get mouse enter and leave event
    const [mouse, setMouse] = useState(false)
    const [current, setCurrent] = useState(0)
    const [total, setTotal] = useState(0)
    const handleMouseEnter = () => { setMouse(true) }
    const handleMouseLeave = () => { setMouse(false) }

    useEffect(() => {
        if (carouselApi) {
            setTotal(carouselApi.scrollSnapList().length)
            carouselApi.on("select", () => {
                setCurrent(carouselApi.selectedScrollSnap())
            })
        }
    }, [carouselApi])

    return (
        <>
            <Middle X Y className="w-full h-full p-2">
                <div className="flex items-center w-full h-full gap-2">
                    <div className="w-1/4">
                        <Carousel className="w-full h-full"
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            orientation="vertical"
                            plugins={[Autoplay({
                                delay: 500,
                                stop: mouse,
                                reset: !mouse,
                            })]}
                            setApi={setCarouselApi}
                        >
                            <CarouselContent className="-mt-1 h-[240px] sm:h-[420px] w-full" >
                                {Array.from({ length: img.length }).map((_, index) => (
                                    <CarouselItem key={index} className="pt-1 flex flex-col justify-center items-center basis-1/2 sm:basis-1/4"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Image
                                            src={convertImageToPath(img[index])}
                                            alt={`product item ${index}`}
                                            className="w-[100px] h-[100px] object-cover rounded-lg cursor-pointer"
                                            width={100}
                                            height={100}
                                            onClick={() => {
                                                setCurrent(index)
                                            }}
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>

                    </div>
                    <div className="w-3/4 max-w-[350px] max-h-[500px]">
                        <Image
                            src={convertImageToPath(img[current])}
                            alt={`product item ${current}`}
                            className="w-full h-full object-cover rounded-2xl aspect-[3/4]"
                            width={600}
                            height={600}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>
                </div>
            </Middle>

        </>
    )
}