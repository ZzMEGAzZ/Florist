'use client'
import { useParams } from "next/navigation"

export default function CategoryItemPage() {
    
    const params = useParams<{ category: string, item: string }>()
    
    return (
        <>
            {params.category} - {params.item}
        </>
    )
}