"use client";

import React from 'react';
import Image from "next/image";

const IMAGES = [
    {
        src: "/featured-1.png",
    },
    {
        src: "/featured-2.png",
    },
]

const Featured = () => {
    return (
        <div className={"flex flex-col items-center gap-4 justify-center py-12 w-full"}>
            <p className={"uppercase text-foreground/60 font-light"}>
                Öne Çıkarılanlar
            </p>
            <div className={"flex gap-8"}>
                {
                    IMAGES.map((image, index) => (
                        <Image key={index} src={image.src} alt={"Featured Image"} width={512} height={512} className={"w-36 md:w-48 lg:w-80 opacity-80 rounded-lg"} draggable={false}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Featured;