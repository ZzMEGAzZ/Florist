'use client'

import React from "react"
import Link from "next/link"
import Image from "next/image"

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

const components: { img: any, title: string; href: string; description: string }[] = [
    {
        img: 'https://via.placeholder.com/150',
        title: "Category 1",
        href: "/product/category-1",
        description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        img: 'https://via.placeholder.com/150',
        title: "Category 2",
        href: "/product/category-2",
        description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        img: 'https://via.placeholder.com/150',
        title: "Category 3",
        href: "/product/category-3",
        description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        img: 'https://via.placeholder.com/150',
        title: "Category 4",
        href: "/product/category-4",
        description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        img: 'https://via.placeholder.com/150',
        title: "Category 5",
        href: "/product/category-5",
        description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        img: 'https://via.placeholder.com/150',
        title: "Category 6",
        href: "/product/category-6",
        description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
]

export default function NavigationBar() {
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


    return (
        <nav className="w-full h-[70px] bg-white dark:bg-SubPrimary-primary backdrop-blur-xl bg-opacity-20 dark:bg-opacity-60 text-md drop-shadow-lg">
            <div className="w-full h-full grid grid-cols-3 px-8">
                <div className="flex items-center space-x-8">
                    LOGO
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
                                        <NavigationMenuLink key={component.title} className="grid grid-cols-[80px_minmax(100px,_1fr)] items-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                            <div className="w-[75px] h-[100px] rounded-lg">
                                                <Image src={component.img} alt={component.title} width={200} height={200} className="w-full h-full rounded-lg" />
                                            </div>

                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
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
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}