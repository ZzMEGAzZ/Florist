
import Middle from "@/components/layouts/Middle"
import { AdminLoginForm } from "@/components/objects/admin/login/AdminLogin"

export default function LoginPage() {
    return (
        <Middle X Y className="w-full h-screen">
            <AdminLoginForm />
        </Middle>
    )
}