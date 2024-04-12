'use client'
import { useParams } from "next/navigation"

export default function CategoryPage() {
    
    const params = useParams<{ category: string }>()
    
    return (
        <>
            {params.category}
        </>
    )
}