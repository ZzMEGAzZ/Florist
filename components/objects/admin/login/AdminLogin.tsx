'use client'

import { AuthLoginDto } from "@/apis/dto/authDto"
import { login } from "@/apis/services/authServices"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FloatingLabelInput } from "@/components/ui/floatingInput"
import { Label } from "@/components/ui/label"
import { closeDialog, openDialog } from "@/redux/modules/dialogModal/dialogModalSlice"
import { AuthProvider } from "@/utils/clientAuthProvider"
import Link from "next/link"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from 'next/navigation'

export function AdminLoginForm() {

    const dispatch = useDispatch()
    const router = useRouter()

    const [body, setBody] = useState<AuthLoginDto>({
        username: "",
        password: "",
    })

    const loginHandler = async () => {
        if (!body.username || !body.password) {
            switch (true) {
                case !body.username:
                    dispatch(openDialog({
                        open: true,
                        title: "Login Failed",
                        content: "Username is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispatch(closeDialog()),
                    }))
                    break
                case !body.password:
                    dispatch(openDialog({
                        open: true,
                        title: "Login Failed",
                        content: "Password is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispatch(closeDialog()),
                        
                    }))
                    break
                default:
                    break
            }
        } else {
            try {
                const res = await login(body)
                if (res.status === 200) {
                    AuthProvider.login(res.data.access_token,res.data.user_id)
                    router.push('/admin/dashboard')
                    dispatch(openDialog({
                        open: true,
                        title: "Login Success",
                        content: "You have successfully logged in",
                        status: "success",
                        confirmText: "OK",
                        onConfirm: () => dispatch(closeDialog()),
                        
                    }))
                    
                } else {
                    dispatch(openDialog({
                        open: true,
                        title: "Login Failed",
                        content: "Invalid username or password",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispatch(closeDialog()),
                        
                    })) 
                }
            } catch (error) {
                dispatch(openDialog({
                    open: true,
                    title: "Login Failed",
                    content: "Invalid username or password",
                    status: "error",
                    confirmText: "OK",
                    onConfirm: () => dispatch(closeDialog()),
                    
                }))
            }
        }
    }

    return (
        <Card className="w-full mx-auto max-w-md h-max">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your username and password to login
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="username">Username</Label>
                        <FloatingLabelInput
                            label="Username"
                            id="username"
                            type="text"
                            required
                            value={body.username}
                            onChange={(e) =>
                                setBody({ ...body, username: e.target.value })
                            }
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <FloatingLabelInput
                            label="Password"
                            id="password"
                            type="password"
                            required
                            value={body.password}
                            onChange={(e) =>
                                setBody({ ...body, password: e.target.value })
                            }
                        />
                    </div>
                    <Button className="w-full" onClick={loginHandler}>
                        Login
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
