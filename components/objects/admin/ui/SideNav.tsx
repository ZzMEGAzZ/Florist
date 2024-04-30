'use client';
import { usePathname } from 'next/navigation';
import Link from "next/link"
import {
    Bell,
    Home,
    LineChart,
    LogOut,
    Package,
    Package2,
    ShoppingCart,
    Store,
    Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/interactive/ModeToggle"
import { AuthProvider } from '@/utils/clientAuthProvider';

export default function SideNav() {
    const pathName = usePathname();
    const path = pathName.split('/').filter((x) => x !== '');
    const currentPath = path[path.length - 1];

    const logout = () => {
        AuthProvider.logout();
        window.location.href = "/admin/login";
    }

    return (
        <div className="grid min-h-screen w-full">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
                            <Store className="h-6 w-6" />
                            <span className="">Florist</span>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <Link
                                href="/admin/dashboard"
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${currentPath === 'dashboard' ? 'bg-muted bg-opacity-10 text-primary' : 'text-muted-foreground'}`}
                            >
                                <Home className="h-4 w-4" />
                                Dashboard
                            </Link>
                            <Link
                                href="/admin/dashboard/order"
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${currentPath === 'order' ? 'bg-muted bg-opacity-10 text-primary' : 'text-muted-foreground'}`}
                            >
                                <ShoppingCart className="h-4 w-4" />
                                Orders
                            </Link>
                            {/* <Link
                                href="/admin/dashboard/product"
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${currentPath === 'product' ? 'bg-muted bg-opacity-10 text-primary' : 'text-muted-foreground'}`}
                            >
                                <Package className="h-4 w-4" />
                                Products
                            </Link> */}
                        </nav>
                    </div>
                    <div>
                        <ModeToggle />
                        <div
                            onClick={logout}
                            className="flex items-center gap-3 cursou-pointer rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <LogOut className="h-4 w-4" />
                            Logout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
