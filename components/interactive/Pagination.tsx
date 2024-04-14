'use client'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useEffect, useState } from "react"

type Props = {
    total: number
    page: number
    setPage: (page: number) => void
}

export function PaginationComponent({ total, page, setPage }: Props) {

    const [currentPage, setCurrentPage] = useState(1);
    const [visiblePages, setVisiblePages] = useState<number[]>([]);

    useEffect(() => {
        const windowSize = 5; // Number of pages to show at a time
        const startIndex = Math.max(Math.ceil(currentPage - windowSize / 2), 1);
        const endIndex = Math.min(startIndex + windowSize - 1, total);

        setVisiblePages([...Array(endIndex - startIndex + 1)].map((_, i) => startIndex + i));
    }, [currentPage, total]); // Update visiblePages on currentPage or totalPages change

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < total) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <Pagination>
                <PaginationContent>

                    <PaginationLink className="cursor-pointer" onClick={() => setCurrentPage(1)}>
                        First
                    </PaginationLink>

                    <PaginationPrevious className="cursor-pointer" onClick={() => handlePrevious()} />

                    {visiblePages.map((pageNumber) => (
                        <PaginationItem key={pageNumber} className={`${pageNumber === currentPage ? 'bg-primary text-destructive-foreground rounded-md' : ''} cursor-pointer`} >
                            <PaginationLink onClick={() => handlePageClick(pageNumber)}>
                                {pageNumber}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    <PaginationNext className="cursor-pointer" onClick={() => handleNext()} />

                    <PaginationLink className="cursor-pointer" onClick={() => setCurrentPage(total)}>
                        Last
                    </PaginationLink>


                </PaginationContent>
            </Pagination>

            <div className="text-sm">
                <p>
                    {currentPage} / {total}
                </p>
            </div>
        </div>

    );

}
