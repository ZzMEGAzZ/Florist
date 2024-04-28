
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Middle from "@/components/layouts/Middle"
import { FloatingInput, FloatingLabel, FloatingLabelInput } from "@/components/ui/floatingInput"

export default function LoginPage() {
    return (
        <Middle X Y className="w-full h-screen">
            <Card className="mx-auto w-full max-w-xl">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <FloatingLabelInput label="Username" placeholder="Username" required type="text" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <FloatingLabelInput label="Password" placeholder="Password" required type="password" />
                        </div>
                        <Button className="w-full">Sign in</Button>
                    </div>
                </CardContent>
            </Card>
        </Middle>
    )
}