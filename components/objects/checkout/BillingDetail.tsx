'use client';
import { useState } from "react";
import Span from "@/components/layouts/Span";
import PlaceOrder from "./PlaceOrder";
// import { Payment } from "../cart/CartTable";
import Address from "./Address";
import { useQRCode } from 'next-qrcode';
import { qrPayment } from "@/utils/qrPayment";
import Image from "next/image";

import ThaiQr from '@/assets/images/ThaiQR.jpg';
import Qrheader from '@/assets/images/QrHeader.png';
import ThaiQRLogo from '@/assets/images/ThaiQRLogo.png';

import { floatingSep } from "@/utils/floatingSep";
import Middle from "@/components/layouts/Middle";
import CheckoutSubmit from "./CheckoutSubmit";
import { useDispatch, useSelector } from "react-redux";
import { checkoutSelector, clearItems } from "@/redux/modules/checkout/checkoutSlice";
import { addOrder } from "@/apis/services/orderServices";
import { AuthProvider } from "@/utils/clientAuthProvider";
import { AddAddress } from "@/apis/dto/addressDto";
import { closeDialog, openDialog } from "@/redux/modules/dialogModal/dialogModalSlice";
import { useRouter } from "next/navigation";
import moment from "moment";

export default function BillingDetail() {

    const [checkOutStep, setCheckOutStep] = useState(0);
    const [address, setAddress] = useState<number>(0);
    const { Canvas } = useQRCode();
    const checkoutItem = useSelector(checkoutSelector);
    console.log(checkoutItem);
    const total = checkoutItem.Items.reduce((acc, item) => acc + (item.quantity * item.price_per_unit), 0);
    const router = useRouter();
    const dispatch = useDispatch();


    const generateQRCode = async () => {
        try {
            const payload = await qrPayment(total);
            return (
                <Canvas
                    text={payload}
                    options={{
                        errorCorrectionLevel: 'M',
                        margin: 3,
                        scale: 4,
                        width: 300,
                    }}
                />
            );
        } catch (error) {
            console.error("Error generating QR code:", error);
            return null;
        }
    };

    const checkout = async () => {
        try {
            const res = await addOrder({
                address_id: address,
                order_items: checkoutItem.Items.map((item) => ({
                    product_id: item.product_id,
                    quantity: item.quantity,
                    price_per_unit: item.price_per_unit,
                })) ,
                order_date: moment().format('YYYY-MM-DD HH:mm:ss'),
                status: 'paid',
                total_price: total,
                user_id: parseInt(AuthProvider.getUserID() ?? '0'),
            });
            if (res.status === 201) {
                dispatch(openDialog({
                    open: true,
                    title: "Success",
                    content: "Order has been placed successfully",
                    status: "success",
                    confirmText: "OK",
                    onConfirm: () => dispatch(closeDialog()),
                }))
                dispatch(clearItems())
                router.push('/order');
            }
        } catch (error) {
            dispatch(openDialog({
                open: true,
                title: "Error",
                content: "Failed to place order",
                status: "error",
                confirmText: "OK",
                onConfirm: () => dispatch(closeDialog()),
            }))
        }
    }
        

    return (
        <>
            {
                checkOutStep === 0 ? (
                    <Span Y className="w-full h-full p-8">
                        <h3 className="text-2xl font-semibold">Billing Details</h3>
                        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 p-4 items-start">
                            <Address setCheckoutAddress={(address) => setAddress(address)}/>
                            <div className="sticky top-36">
                            <PlaceOrder checkOut={() => setCheckOutStep(1)} items={checkoutItem.Items.map((item) => ({ id: item.product_id.toString(), name: item.name, price: item.price_per_unit * item.quantity, quantity: item.quantity }))} total={total} />
                            </div>
                            
                        </div>
                    </Span>
                ) : (
                    <Span Y className="w-full h-full p-8">
                        <h3 className="text-2xl font-semibold">Billing Details</h3>
                        <div className="w-full h-full flex flex-col justify-center items-center p-2 m-auto text-center">
                            <div className="relative w-[400px] h-[580px] z-0 border rounded-2xl">
                                <div className="h-20 w-full bg-[#1A3761] rounded-t-2xl">
                                    <Image
                                        src={ThaiQr}
                                        alt="QRCode"
                                        width={200}
                                        height={80}
                                        style={{
                                            objectFit: 'contain',
                                        }}
                                        className="absolute top-4 left-1/2 transform -translate-x-1/2"
                                    />
                                </div>
                                <div className="flex flex-row justify-center px-10 bg-white">
                                    <Image
                                        src={Qrheader}
                                        alt="QRCode"
                                        width={200}
                                        height={50}
                                        style={{
                                            maxWidth: '100%',
                                            height: 'auto',
                                            objectFit: 'contain',
                                        }}
                                        className=""
                                    />
                                </div>
                                <div className='px-12 bg-white'>
                                    <div className="relative ">
                                        <div className="absolute w-[50px] h-[50px] top-[42%] right-[44%]">
                                            <Image
                                                src={ThaiQRLogo}
                                                alt="QRCode"
                                                fill
                                                sizes="100vw"
                                                style={{
                                                    objectFit: 'contain',
                                                }}
                                            />
                                        </div>
                                        {generateQRCode()}
                                    </div>
                                </div>
                                <div className="w-full px-10 mt-5 flex flex-col space-y-1 ">
                                    <div className="w-full flex flex-row justify-between items-center">
                                        <h1 className="text-xl font-semibold">Florist Store</h1>
                                        <h1 className="text-base font-semibold">{floatingSep(checkoutItem.Items.reduce((acc, item) => acc + item.price_per_unit * item.quantity, 0))}</h1>
                                    </div>
                                    <div className="w-full flex flex-row justify-between items-center">
                                        <h1 className="text-md font-light">ชื่อบัญชี: บริษัท ฟลอริสท์ จำกัด</h1>
                                        <h1 className="text-md font-light">บาท(BAHT)</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Middle X Y className="w-full">
                            <div className="w-[400px]">
                            <PlaceOrder checkOut={() => checkout()} items={checkoutItem.Items.map((item) => ({ id: item.product_id.toString(), name: item.name, price: item.price_per_unit * item.quantity, quantity: item.quantity }))} total={total} />
                            </div>
                        </Middle>

                    </Span>
                )
            }
        </>
    )
}
