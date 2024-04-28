'use client'
import Middle from "@/components/layouts/Middle"
import { LoginForm } from "@/components/objects/auth/SignIn"


export default function LoginPage() {
    return (
        <>
            <Middle X Y className="w-full h-screen">
                <LoginForm />
            </Middle>
        </>

    )
}