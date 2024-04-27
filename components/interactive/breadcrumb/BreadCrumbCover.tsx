'use client'
import Image from 'next/image';
import BreadcrumbCover from '@/assets/images/breadcrumbCover.jpg';
import Breadcrumb, { BreadCrumb } from './Breadcrumb';

type Props = {
    title: string;
    breadCrumb: BreadCrumb[];
    className?: string;
}

export default function BreadCrumbCover({ title, breadCrumb, className }: Props) {
    return (
        <div className={`h-[300px]  ${className}`}>
            <div className={`absolute w-full h-[300px]`}>
            <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center'>
                <h3 className='text-4xl font-bold'>{title}</h3>
                <Breadcrumb breadCrumb={breadCrumb} />
            </div>
            <Image src={BreadcrumbCover}
                className='absolute -z-[1] w-full h-[300px] object-cover opacity-50 blur-[2px] brightness-110'
                objectPosition='center'
                alt="breadcrumb cover" />
            <div className='absolute bottom-2 left-10'>
                <Breadcrumb breadCrumb={breadCrumb} />
            </div>
        </div>
        </div>
        
    )
}