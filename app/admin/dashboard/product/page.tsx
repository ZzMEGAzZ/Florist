'use client'
import { AddProduct } from "@/apis/dto/productDto";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floatingInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeDialog, openDialog } from "@/redux/modules/dialogModal/dialogModalSlice"
import { addProduct, addProductImage } from "@/apis/services/productServices";

export default function DashboardProductPage() {

    const dispatch = useDispatch()

    const [body, setBody] = useState<AddProduct>({
        category_id: 0,
        name: "",
        description: "",
        price: 100,
        stock_quantity: 99,
        product_image: "",
    })

    const [file, setFile] = useState<File>()

    const addProductHandler = async () => {
        if (!body.category_id || !body.name || !body.description || !body.price || !body.stock_quantity) {
            switch (true) {
                case !body.category_id:
                    dispatch(openDialog({
                        open: true,
                        title: "Add Product Failed",
                        content: "category_id is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispatch(closeDialog()),
                        countDown: 3000,
                    }))
                    break
                case !body.name:
                    dispatch(openDialog({
                        open: true,
                        title: "Add Product Failed",
                        content: "name is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispatch(closeDialog()),
                        countDown: 3000,
                    }))
                    break
                case !body.description:
                    dispatch(openDialog({
                        open: true,
                        title: "Add Product Failed",
                        content: "description is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispatch(closeDialog()),
                        countDown: 3000,
                    }))
                    break
                case !body.price:
                    dispatch(openDialog({
                        open: true,
                        title: "Add Product Failed",
                        content: "price is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispatch(closeDialog()),
                        countDown: 3000,
                    }))
                    break
                case !body.stock_quantity:
                    dispatch(openDialog({
                        open: true,
                        title: "Add Product Failed",
                        content: "stock_quantity is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispatch(closeDialog()),
                        countDown: 3000,
                    }))
                    break
                case !body.product_image:
                    dispatch(openDialog({
                        open: true,
                        title: "Add Product Failed",
                        content: "product_image is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispatch(closeDialog()),
                        countDown: 3000,
                    }))
                    break
                default:
                    break
            }
        } else {
            try {
                const res = await addProduct(body)
                if (res.status === 201) {
                    const productId = res.data.product_id
                    try {
                        const resImg: any = await addProductImage({ product_id: productId, file: file })
                        if (resImg.status === 200) {
                            dispatch(openDialog({
                                open: true,
                                title: "Add Product Success",
                                content: "You have successfully added product",
                                status: "success",
                                confirmText: "OK",
                                onConfirm: () => dispatch(closeDialog()),
                                countDown: 3000,
                            }))
                        } else {
                            dispatch(openDialog({
                                open: true,
                                title: "Add Product Failed",
                                content: "Failed to add product",
                                status: "error",
                                confirmText: "OK",
                                onConfirm: () => dispatch(closeDialog()),
                                countDown: 3000,
                            }))
                        }
                    } catch {
                        dispatch(openDialog({
                            open: true,
                            title: "Add Product Failed",
                            content: "Failed to add product",
                            status: "error",
                            confirmText: "OK",
                            onConfirm: () => dispatch(closeDialog()),
                            countDown: 3000,
                        }))
                    }
                } else {
                    dispatch(openDialog({
                        open: true,
                        title: "Add Product Failed",
                        content: "Failed to add product",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispatch(closeDialog()),
                        countDown: 3000,
                    })
                    )
                }
            } catch (error) {
                dispatch(openDialog({
                    open: true,
                    title: "Add Product Failed",
                    content: "Failed to add product",
                    status: "error",
                    confirmText: "OK",
                    onConfirm: () => dispatch(closeDialog()),
                    countDown: 3000,
                })
                )
            }
        }
    }

    return (
        <div className="w-full h-full bg-Danger-light p-8">
            <div className="space-y-4">
                <FloatingLabelInput
                    label="categoryID"
                    placeholder="categoryID"
                    onChange={(e) => setBody({ ...body, category_id: parseInt(e.target.value) })} />
                <FloatingLabelInput
                    label="name"
                    placeholder="name"
                    onChange={(e) => setBody({ ...body, name: e.target.value })} />
                <FloatingLabelInput
                    label="desc"
                    placeholder="desc"
                    onChange={(e) => setBody({ ...body, description: e.target.value })} />
                <input type="file" accept="image/*"
                    onChange={(e) => {
                        if (e.target.files === null) return
                        const file = e.target.files[0] as File
                        const reader = new FileReader()
                        reader.onloadend = () => {
                            setFile(file)
                        }
                        reader.readAsDataURL(file)
                    }
                    } />
            </div>
            <Button onClick={addProductHandler}>Add Product</Button>
        </div>
    )
}