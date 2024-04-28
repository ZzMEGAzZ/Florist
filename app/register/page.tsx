
import Middle from "@/components/layouts/Middle"
import { SignUpForm } from "@/components/objects/auth/SignUp"

export default function RegisterPage() {
    return (
        <Middle X Y className="w-full h-screen">
            <SignUpForm />
        </Middle>
    )
}