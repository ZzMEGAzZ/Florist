'use client';

import Span from "@/components/layouts/Span";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ComboBoxProvince from "../../interactive/ComboBoxProvince";
import { Selector } from "@/components/interactive/Selector";
import { Button } from "@/components/ui/button";
import { FloatingInput, FloatingLabel, FloatingLabelInput } from "@/components/ui/floatingInput";

export default function Address() {

    const [isAddAddress, setIsAddAddress] = useState(false);

    return (
        <>
            {
                isAddAddress ? (
                    <Span Y className="w-full h-full space-y-2">
                        {/* <div className="w-full h-full grid grid-cols-2 gap-4 px-2">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="firstname">First Name</label>
                                <FloatingLabelInput label="First Name" placeholder="First Name" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="lastname">Last Name</label>
                                <FloatingLabelInput label="Last Name" placeholder="Last Name" />
                            </div>
                        </div> */}
                        {/* <div className="w-full flex flex-col space-y-2 px-2">
                            <label htmlFor="company_name">Company Name (Optional)</label>
                            <FloatingLabelInput label="Company Name" placeholder="Company Name" />
                        </div> */}
                        <div className="w-full flex flex-col space-y-2 px-2">
                            <label htmlFor="address">Address</label>
                            <FloatingLabelInput label="Address" placeholder="Address" />
                        </div>
                        <div className="w-full flex flex-col space-y-2 px-2">
                            <label htmlFor="province">Province</label>
                            <FloatingLabelInput label="Province" placeholder="Province" />
                            {/* <ComboBoxProvince /> */}
                        </div>

                        <div className="w-full h-full grid grid-cols-2 gap-4 px-2">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="district">District</label>
                                <FloatingLabelInput label="District" placeholder="District" />
                                {/* <ComboBoxProvince /> */}
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="sub_district">Sub District</label>
                                <FloatingLabelInput label="Sub District" placeholder="Sub District" />
                                {/* <ComboBoxProvince /> */}
                            </div>
                        </div>
                        <div className="w-full flex flex-col space-y-2 px-2">
                            <label htmlFor="zipcode">Zipcode</label>
                            <FloatingLabelInput label="Zipcode" placeholder="Zipcode" />
                        </div>
                        {/* <div className="w-full flex flex-col space-y-2 px-2">
                            <label htmlFor="phone">Phone</label>
                            <FloatingLabelInput label="Phone" placeholder="Phone" />
                        </div>
                        <div className="w-full flex flex-col space-y-2 px-2">
                            <label htmlFor="email">Email</label>
                            <FloatingLabelInput label="Email" placeholder="Email" />
                        </div>
                        <div className="w-full flex flex-col space-y-2 px-2">
                            <label htmlFor="addtional">Addtional</label>
                            <FloatingLabelInput label="Addtional" placeholder="Addtional" />
                        </div> */}
                        <Button className="w-full p-4" onClick={() => setIsAddAddress(!isAddAddress)}>Save Address</Button>
                        <Button className="w-full p-4" onClick={() => setIsAddAddress(!isAddAddress)}>{isAddAddress ? "Cancel" : "Add Address"}</Button>
                    </Span>
                ) : (
                    <>
                        <div className="space-y-4">
                            <label htmlFor="address">Address</label>
                            <Selector
                                label="Address"
                                options={[
                                    {
                                        id: "home",
                                        name: "Home",
                                    },
                                    {
                                        id: "office",
                                        name: "Office",
                                    },
                                    {
                                        id: "other",
                                        name: "Other",
                                    },
                                ]}
                                selected={(id) => console.log(id)}
                            />
                            <Button className="w-full p-4" onClick={() => setIsAddAddress(!isAddAddress)}>{isAddAddress ? "Cancel" : "Add Address"}</Button>
                        </div>

                    </>
                )
            }
        </>
    )
}