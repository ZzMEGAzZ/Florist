import React, { useRef } from 'react';
import { Product } from "@/models/product";
import { ProductItemType } from "../ProductItem";
import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import { GetProductDescriptionTts } from "@/apis/services/otherServices";
import { convertImageToPath } from "@/utils/convertImageToPath";

type Props = {
    data?: Product;
    sound: string;
}

export default function ItemDetail({ data, sound }: Props) {

        const audioRef = useRef<HTMLAudioElement | null>(null);

        const playAudio = () => {
            if (audioRef.current) {
                audioRef.current.play().catch(e => alert(`Error playing the audio: ${e.message}`));
            }
        };

    return (
        <>
            <div className="w-full h-3/4">
                <div className="flex space-x-4">
                    <h2 className="text-3xl">{data?.name}</h2>
                    <Button className="w-12 h-12" onClick={playAudio}>
                        <Volume2 className="w-6 h-6" />
                    </Button>
                    <audio ref={audioRef} src={convertImageToPath(sound)} />

                </div>
                <div className="flex flex-row items-center space-x-6">
                    <p className="text-lg text-muted-foreground">฿ {data?.price}</p>
                    {/* <p className="text-sm text-muted-foreground line-through">
                    {data.discount ? `฿ ${data.price}` : ""}
                </p> */}
                </div>
                <div className="mt-4">
                    <p className="text-base">{data?.description}</p>
                </div>
            </div>
        </>

    )
}