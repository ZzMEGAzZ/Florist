import Middle from '@/components/layouts/Middle';
import CoverCarousel from '@/components/objects/home/ui/CoverCarousel';
import HomeCover from '@/components/objects/home/HomeCover';
import React from 'react';
import HomeProductCategory from '@/components/objects/home/HomeProductCategory';
import HomeProducts from '@/components/objects/home/HomeProducts';
import { ProductCard } from '@/components/objects/ProductCard';
import { ModeToggle } from '@/components/interactive/ModeToggle';
import { Button } from '@/components/ui/button';
export default function Home() {


    return (
        <>
            <Middle X Y className="w-full h-full">
                <div className='w-full h-full'>
                    <HomeCover />
                    <div className='w-full h-full px-8 space-y-8 mt-8 flex flex-col items-center'>
                        <HomeProductCategory />
                        <HomeProducts />
                        <Button className='w-40'>Show More</Button>
                    </div>
                    <ModeToggle />
                </div>
                
            </Middle>
        </>
    );
}
