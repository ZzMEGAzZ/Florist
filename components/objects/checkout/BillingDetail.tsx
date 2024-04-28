'use client';
import { useState } from "react";
import Span from "@/components/layouts/Span";
import PlaceOrder from "./PlaceOrder";
import { Payment } from "../cart/CartTable";
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

const data: Payment[] = [
    {
        id: "m5gr84i9",
        amount: 316,
        status: "success",
        email: "ken99@yahoo.com",
    },
    {
        id: "3u1reuv4",
        amount: 242,
        status: "success",
        email: "Abe45@gmail.com",
    },
    {
        id: "derv1ws0",
        amount: 837,
        status: "processing",
        email: "Monserrat44@gmail.com",
    },
    {
        id: "5kma53ae",
        amount: 874,
        status: "success",
        email: "Silas22@gmail.com",
    },
    {
        id: "bhqecj4p",
        amount: 721,
        status: "failed",
        email: "carmella@hotmail.com",
    },
]

export default function BillingDetail() {

    const [checkOutStep, setCheckOutStep] = useState(0);
    const { Canvas } = useQRCode();
    const total = data.reduce((acc, item) => acc + item.amount, 0);

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

    return (
        <>
            {
                checkOutStep === 0 ? (
                    <Span Y className="w-full h-full p-8">
                        <h3 className="text-2xl font-semibold">Billing Details</h3>
                        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 p-4 items-start">
                            <Address />
                            <div className="sticky top-36">
                            <PlaceOrder checkOut={() => setCheckOutStep(1)} items={data.map((item) => ({ id: item.id, name: item.id, price: item.amount, quantity: 1 }))} total={data.reduce((acc, item) => acc + item.amount, 0)} />
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
                                        src={QrHeader}
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
                                        <h1 className="text-base font-semibold">{floatingSep(data.reduce((acc, item) => acc + item.amount, 0))}</h1>
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
                                <CheckoutSubmit attachSlip={() => {}} submit={() => setCheckOutStep(1)} items={data.map((item) => ({ id: item.id, name: item.id, price: item.amount, quantity: 1 }))} total={data.reduce((acc, item) => acc + item.amount, 0)} />
                            </div>
                        </Middle>

                    </Span>
                )
            }
        </>
    )
}