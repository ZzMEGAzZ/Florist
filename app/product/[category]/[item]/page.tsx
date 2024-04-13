'use client'
import { useParams } from "next/navigation"

export default function CategoryItemPage() {
    
    const params = useParams<{ category: string, item: string }>()
    
    return (
        <>
            <h1>{params.category}</h1>
            <h2>{params.item}</h2>
        </>
    )
}