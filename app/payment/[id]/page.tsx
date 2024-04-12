'use client'
import { useParams } from "next/navigation"

export default function PaymentPage() {

    const params = useParams<{ id: string }>()

    return (
        <>
            Payment Page {params.id}
        </>
    )
}