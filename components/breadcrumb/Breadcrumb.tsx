import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react";

export interface BreadCrumb {
    name: string;
    link: string;
    current?: boolean;
    subPage?: BreadCrumb[];
}

export default function BreadcrumbComponent({ breadCrumb }: { breadCrumb: BreadCrumb[] }) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadCrumb.map((item, index) => (
                    <BreadcrumbItem key={index}>
                        {index > 0 && <BreadcrumbSeparator />}
                        <BreadcrumbLink href
                            ={item.link}
                            className={item.current ? "text-card-foreground cursor-default" : ""}
                        >{item.name}</BreadcrumbLink>
                        {item.subPage && (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <ChevronDownIcon className="w-4 h-4" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {item.subPage.map((subItem, subIndex) => (
                                        <DropdownMenuItem key={subIndex}>
                                            <BreadcrumbLink href={subItem.link}>{subItem.name}</BreadcrumbLink>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

