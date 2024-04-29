'use client'

import React, { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation';

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/interactive/ModeToggle"
import { CategoryCard } from "../../home/ui/CategorySlide";
import { Category } from "@/models/product";
import { getAllCategories } from "@/apis/services/productServices";
import Dendrobium from "@/assets/images/Dendrobium.jpg";
import Lies from "@/assets/images/Lies.jpg";
import Mokara from "@/assets/images/Mokara.jpg";
import Vanda from "@/assets/images/Vanda.jpg";
import { AuthProvider } from "@/utils/clientAuthProvider";
import { Box, LogOut, ShoppingCart, Store } from "lucide-react";

const components: CategoryCard[] = []

export default function NavigationBar() {

    const [data, setData] = useState<Category[]>();

    const getData = useCallback(
        async () => {
            try {
                const response: any = await getAllCategories();
                if (response.status === 200) {
                    setData(response.data)
                    response.data.map((category: Category) => {
                        components.push({
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

    const ListItem = React.forwardRef<
        React.ElementRef<"a">,
        React.ComponentPropsWithoutRef<"a">
    >(({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "",
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        )
    })
    ListItem.displayName = "ListItem"

    const logOut = () => {
        AuthProvider.logout();
        window.location.href = "/";
    }

    const pathName = usePathname();
    const path = pathName.split('/').filter((x) => x !== '');
    const disablePath = path.includes("admin") || path.includes("login") || path.includes("register");

    return (
        <>
            {
                disablePath ? null :
                    <nav className={`fixed z-[999] mb-[70px] w-full h-[70px] bg-white dark:bg-SubPrimary-primary backdrop-blur-xl bg-opacity-20 dark:bg-opacity-60 text-md drop-shadow-lg`}>
                        <div className="w-full h-full grid grid-cols-3 px-8">
                            <div className="flex items-center space-x-4">
                                <Store className="w-5 h-5" />
                                <h1>Florist</h1>
                            </div>
                            <NavigationMenu className="w-full h-full">
                                <NavigationMenuList className="w-full h-full space-x-8">
                                    <NavigationMenuItem className="w-full text-center text-card-foreground">
                                        <a href="/">
                                            <NavigationMenuLink className="hover:text-accent-foreground">Home</NavigationMenuLink>
                                        </a>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem className="w-full text-center text-card-foreground">
                                        <NavigationMenuTrigger className="w-full">
                                            <NavigationMenuLink>
                                                <a href="/product">
                                                    Product
                                                </a>
                                            </NavigationMenuLink>
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                {components.map((component) => (
                                                    <NavigationMenuLink key={component.id} className="grid grid-cols-[80px_minmax(100px,_1fr)] items-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                        <div className="w-[75px] h-[100px] rounded-lg">
                                                            <Image src={component.img} alt={component.img} width={200} height={200} className="w-full h-full rounded-lg" />
                                                        </div>

                                                        <ListItem
                                                            key={component.id}
                                                            title={component.name}
                                                            href={component.link}
                                                        >
                                                            {component.name}
                                                        </ListItem>
                                                    </NavigationMenuLink>

                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem className="w-full text-center text-card-foreground">
                                        <a href="/about">
                                            <NavigationMenuLink className="hover:text-accent-foreground">About</NavigationMenuLink>
                                        </a>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem className="w-full text-center text-card-foreground">
                                        <a href="/contact">
                                            <NavigationMenuLink className="hover:text-accent-foreground">Contact</NavigationMenuLink>
                                        </a>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                            <div className="w-full flex items-center justify-end space-x-8">
                                {
                                    AuthProvider.getAccessToken() ? (
                                        <>
                                            <div className="text-card-foreground">
                                                <a href="/cart">
                                                    <ShoppingCart className="w-5 h-5 hover:text-accent-foreground" />
                                                </a>
                                            </div>
                                            <div className="text-card-foreground">
                                                <a href="/order">
                                                    <Box className="w-5 h-5 hover:text-accent-foreground" />
                                                </a>
                                            </div>
                                            <div className="text-card-foreground cursor-pointer" onClick={logOut}>
                                                <div>
                                                    <LogOut className="w-5 h-5 hover:text-accent-foreground" />
                                                </div>
                                            </div>

                                        </>)

                                        :
                                        (
                                            <>
                                                <div className="text-card-foreground">
                                                    <a href="/login">
                                                        Login
                                                    </a>
                                                </div>
                                                <div className="text-card-foreground">
                                                    <a href="/register">
                                                        Register
                                                    </a>
                                                </div>
                                            </>
                                        )
                                }
                                <ModeToggle />
                            </div>
                        </div>
                    </nav>
            }
        </>
    );
}