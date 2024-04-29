'use client';

import Span from "@/components/layouts/Span";
import { Input } from "@/components/ui/input";
import { useCallback, useEffect, useState } from "react";
import ComboBoxProvince from "../../interactive/ComboBoxProvince";
import { Selector } from "@/components/interactive/Selector";
import { Button } from "@/components/ui/button";
import { FloatingInput, FloatingLabel, FloatingLabelInput } from "@/components/ui/floatingInput";
import { AddAddress } from "@/apis/dto/addressDto";
import { closeDialog, openDialog } from "@/redux/modules/dialogModal/dialogModalSlice"
import { useDispatch } from "react-redux";
import { addAddress, getAddress, setCurrentAddressByAddressId } from "@/apis/services/addressServices";
import { AuthProvider } from "@/utils/clientAuthProvider";

type Prosps = {
    setCheckoutAddress: (address: number) => void;
}

export default function Address({ setCheckoutAddress }: Prosps) {

    const dispatch = useDispatch();

    const [isAddAddress, setIsAddAddress] = useState(false);
    const [address, setAddress] = useState<AddAddress>({
        address: "",
        city: "",
        country: "",
        state: "",
        zip_code: "",
        is_current: true,
        user_id: 0
    });
    const [userAddress, setUserAddress] = useState<AddAddress[]>([]);

    const addAddressHandler = async () => {
        if (!address?.address || !address?.city || !address?.state || !address?.zip_code) {
            switch (true) {
                case !address?.address:
                    dispatch(openDialog({
                        open: true,
                        title: "please fill the address",
                        content: "Address is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispatch(closeDialog()),
                    }))
                    break
                case !address?.country:
                    dispatch(openDialog({
                        open: true,
                        title: "please fill the Province",
                        content: "Province is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispatch(closeDialog()),
                    }))
                    break
                case !address?.city:
                    dispatch(openDialog({
                        open: true,
                        title: "please fill the Districrt",
                        content: "Districrt is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispatch(closeDialog()),
                    }))
                    break

                case !address?.state:
                    dispatch(openDialog({
                        open: true,
                        title: "please fill the Sub-Districrt",
                        content: "Sub-Districrt is required",
                        status: "error",
                        confirmText: "OK",
                        onConfirm: () => dispatch(closeDialog()),
                    }))
                    break
                case !address?.zip_code:
                    dispatch(openDialog({
                        open: true,
                        title: "please fill the zip code",
                        content: "Zip code is required",
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
                const res = await addAddress({
                    user_id: parseInt(AuthProvider.getUserID() ?? '0'),
                    address: address.address,
                    city: address.city,
                    country: address.country,
                    state: address.state,
                    zip_code: address.zip_code,
                    is_current: true
                })

                if (res.status === 201) {
                    dispatch(openDialog({
                        open: true,
                        title: "Success",
                        content: "Address has been added successfully",
                        status: "success",
                        confirmText: "OK",
                        onConfirm: () => dispatch(closeDialog()),
                    }))
                    setIsAddAddress(!isAddAddress)
                }

            } catch {
                dispatch(openDialog({
                    open: true,
                    title: "Error",
                    content: "An error occurred while adding items to the cart. Please try again later.",
                    status: "error",
                    confirmText: "OK",
                    onConfirm: () => dispatch(closeDialog()),
                }))
            }
        }
    }

    const getData = useCallback(
        async () => {
            try {
                const response: any = await getAddress({user_id: parseInt(AuthProvider.getUserID() ?? '0')})
                if (response.status === 200) {
                    setUserAddress(response.data)
                }
            } catch (error) {
                console.log(error);
            }
        }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    const setCurrentAddress = async (id: number) => {
        try {
            const response = await setCurrentAddressByAddressId({ address_id: id });

            if (response.status === 200) {
                dispatch(openDialog({
                    open: true,
                    title: "Success",
                    content: "updated successfully",
                    status: "success",
                    confirmText: "OK",
                    onConfirm: () => dispatch(closeDialog()),
                }))
            }

        } catch {
            dispatch(openDialog({
                open: true,
                title: "Error",
                content: "An error occurred while adding items to the cart. Please try again later.",
                status: "error",
                confirmText: "OK",
                onConfirm: () => dispatch(closeDialog()),
            }))
        }
    }

    return (
        <>
            {
                isAddAddress ? (
                    <Span Y className="w-full h-full space-y-2">
                        <div className="w-full flex flex-col space-y-2 px-2">
                            <label htmlFor="address">Address</label>
                            <FloatingLabelInput
                                label="Address"
                                id="address"
                                type="text"
                                required
                                value={address.address}
                                placeholder="Address"
                                onChange={
                                    (e) => setAddress({
                                        ...address,
                                        address: e.target.value
                                    })
                                }

                            />
                        </div>
                        <div className="w-full flex flex-col space-y-2 px-2">
                            <label htmlFor="province">Province</label>
                            <FloatingLabelInput
                                label="Province"
                                id="province"
                                type="text"
                                placeholder="Province"
                                value={address.country}
                                onChange={
                                    (e) => setAddress(address && {
                                        ...address,
                                        country: e.target.value
                                    })
                                }

                            />
                        </div>
                        <div className="w-full h-full grid grid-cols-2 gap-4 px-2">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="district">District</label>
                                <FloatingLabelInput
                                    label="District"
                                    id="district"
                                    type="text"
                                    placeholder="District"
                                    value={address.city}
                                    onChange={
                                        (e) => setAddress(address && {
                                            ...address,
                                            city: e.target.value
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="sub_district">Sub District</label>
                                <FloatingLabelInput
                                    label="Sub District"
                                    id="sub_district"
                                    type="text"
                                    placeholder="Sub District"
                                    value={address.state}
                                    onChange={
                                        (e) => setAddress(address && {
                                            ...address,
                                            state: e.target.value
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col space-y-2 px-2">
                            <label htmlFor="zipcode">Zipcode</label>
                            <FloatingLabelInput
                                label="Zipcode"
                                id="zipcode"
                                type="text"
                                placeholder="Zipcode"
                                value={address.zip_code}
                                onChange={
                                    (e) => setAddress(address && {
                                        ...address,
                                        zip_code: e.target.value
                                    })
                                }
                            />
                        </div>
                        <Button className="w-full p-4" onClick={() => addAddressHandler()}>Save Address</Button>
                        <Button className="w-full p-4" onClick={() => setIsAddAddress(!isAddAddress)}>{isAddAddress ? "Cancel" : "Add Address"}</Button>
                    </Span>
                ) : (
                    <>
                        <div className="space-y-4">
                            <label htmlFor="address">Address</label>
                            <Selector
                                label="Address"
                                options={userAddress.map((address) => ({ id: String(address.address_id), name: address.address }))}
                                selected={(id) => {setCurrentAddress(parseInt(id)), setCheckoutAddress(parseInt(id))}}
                            />
                            <Button className="w-full p-4" onClick={() => setIsAddAddress(!isAddAddress)}>{isAddAddress ? "Cancel" : "Add Address"}</Button>
                        </div>
                    </>
                )
            }
        </>
    )
}