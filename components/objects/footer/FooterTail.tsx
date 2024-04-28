'use client'
import Middle from '@/components/layouts/Middle'
import { usePathname } from 'next/navigation';

export default function Footertail() {
    const pathName = usePathname();
    const path = pathName.split('/').filter((x) => x !== '');
    const disablePath = path.includes("admin") || path.includes("login") || path.includes("register");
    return (
        <>
            {
                disablePath ? null :
                    <Middle Y className="relative w-full h-[50px] bg-card text-md px-16">
                        <span className="text-card-foreground">2024 MBO All rights reverved</span>
                    </Middle>
            }
        </>
    );
}
