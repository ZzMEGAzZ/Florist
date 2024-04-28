'use client'

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FloatingLabelInput } from "@/components/ui/floatingInput"
import { useDispatch } from "react-redux"
import { AuthRegisterDto } from "@/apis/dto/authDto"
import { useState } from "react"
import { closeDialog, openDialog } from "@/redux/modules/dialogModal/dialogModalSlice"
import { register } from "@/apis/services/authServices"

export function SignUpForm() {

    const dispastch = useDispatch()

    const [body, setBody] = useState<AuthRegisterDto>({
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "0000000000",
    })

    const [confirmPassword, setConfirmPassword] = useState("")

    const signUpHandler = async () => {
        if (!body.username || !body.password || !body.email || !body.first_name || !body.last_name || !confirmPassword) {
            switch (true) {
                case !body.first_name:
                    dispastch(openDialog({
                        open: true,
                        title: "Sign Up Failed",
                        content: "First name is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispastch(closeDialog()),
                        countDown: 3000,
                    }))
                    break
                case !body.last_name:
                    dispastch(openDialog({
                        open: true,
                        title: "Sign Up Failed",
                        content: "Last name is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispastch(closeDialog()),
                        countDown: 3000,
                    }))
                    break
                case !body.username:
                    dispastch(openDialog({
                        open: true,
                        title: "Sign Up Failed",
                        content: "Username is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispastch(closeDialog()),
                        countDown: 3000,
                    }))
                    break
                case !body.email:
                    dispastch(openDialog({
                        open: true,
                        title: "Sign Up Failed",
                        content: "Email is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispastch(closeDialog()),
                        countDown: 3000,
                    }))
                    break
                case !body.password:
                    dispastch(openDialog({
                        open: true,
                        title: "Sign Up Failed",
                        content: "Password is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispastch(closeDialog()),
                        countDown: 3000,
                    }))
                    break
                case !confirmPassword:
                    dispastch(openDialog({
                        open: true,
                        title: "Sign Up Failed",
                        content: "Confirm password is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispastch(closeDialog()),
                        countDown: 3000,
                    }))
                    break
                default:
                    break
            }
        } else {
            if (body.password !== confirmPassword) {
                dispastch(openDialog({
                    open: true,
                    title: "Sign Up Failed",
                    content: "Password does not match",
                    status: "error",
                    confirmText: "OK",
                    onConfirm: () => dispastch(closeDialog()),
                    countDown: 3000,
                }))
            } else {
                try {
                    const res = await register(body)
                    if (res.status === 200) {
                        dispastch(openDialog({
                            open: true,
                            title: "Sign Up Success",
                            content: "You have successfully signed up",
                            status: "success",
                            confirmText: "OK",
                            onConfirm: () => dispastch(closeDialog()),
                            countDown: 3000,
                        }))
                    } else {
                        dispastch(openDialog({
                            open: true,
                            title: "Sign Up Failed",
                            content: "Invalid username or password",
                            status: "error",
                            confirmText: "OK",
                            onConfirm: () => dispastch(closeDialog()),
                            countDown: 3000,
                        }))
                    }
                } catch (error) {
                    dispastch(openDialog({
                        open: true,
                        title: "Sign Up Failed",
                        content: "Invalid username or password",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispastch(closeDialog()),
                        countDown: 3000,
                    }))
                }
            }
        }
    }

    return (
        <Card className="w-full mx-auto max-w-md h-max">
            <CardHeader>
                <CardTitle className="text-xl">Sign Up</CardTitle>
                <CardDescription>
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="first-name">First name</Label>
                            <FloatingLabelInput
                                label="First name"
                                id="first-name"
                                type="text"
                                required
                                value={body.first_name}
                                onChange={(e) =>
                                    setBody({ ...body, first_name: e.target.value })
                                }
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <FloatingLabelInput
                                label="Last name"
                                id="last-name"
                                type="text"
                                required
                                value={body.last_name}
                                onChange={(e) =>
                                    setBody({ ...body, last_name: e.target.value })
                                }
                            />
                        </div>
                    </div>
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
                        <Label htmlFor="email">Email</Label>
                        <FloatingLabelInput
                            label="Email"
                            id="email"
                            type="email"
                            required
                            value={body.email}
                            onChange={(e) =>
                                setBody({ ...body, email: e.target.value })
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
                    <div className="grid gap-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <FloatingLabelInput
                            label="Confirm Password"
                            id="confirm-password"
                            type="password"
                            required
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                        />
                    </div>
                    <Button className="w-full" onClick={signUpHandler}>
                        Create an account
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/login" className="underline">
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
