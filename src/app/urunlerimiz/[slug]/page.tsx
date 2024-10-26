"use client";

import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/Button";

type Product = {
    name: string;
    price: number;
    src: string;
}

const PRODUCTS = [
    {
        name: "Beraflex",
        href: "beraflex",
        description: `
            Osteoartit tarafından etkilenen dizdeki ağrı ve hareketin iyileşmesine yardımcı olabilir
Chondroitin Sulfate:Eklemin basınca direncini sağlayan glikozamonoglikan yapıda bir maddedir
Chondroitin sulfate bağ dokusunua daha fazla besin geçmesine,suyun kıkırdaktan geçmesine ve bağ dokusunun sağlamlığını,esnekliğini arttırarak onarıma yardımcı olabilir
Hyaluronic Asit: Eklem kıkırdağının temel yapı taşlarından biridir
Vücutta kollajen liflerin oluşumda ve korunmasında faydalıdır
        `,
        price: 100,
        src: "/product-1.png"
    }
]

const ProductPage = ({ params }: {params: {slug: string}}) => {
    const router = useRouter();
    const [product, setProduct] = useState(PRODUCTS.find(producteach => producteach.href === params.slug));

    useEffect(() => {
        if (!product) {
            router.push("/404");
        }
    }, []);

    return (
        <div className={"w-full h-screen flex overflow-hidden justify-center items-center"}>
            <div className={"w-full h-full flex mx-10 lg:mx-48 gap-36"}>
                <div className={"w-full h-full flex flex-col items-start justify-center gap-3"}>
                    <p className={"text-5xl lg:text-7xl text-brand font-medium"}>
                        {product?.name}
                    </p>
                    <p className={"text-base lg:text-lg text-foreground/70"}>
                        {product?.description}
                    </p>
                    <p className={"text-2xl mt-6 font-medium lg:text-4xl text-primary"}>
                        {product?.price}₺
                    </p>
                    <Button variant={"default"} size={"lg"} className={"w-max p-7 text-lg gap-2 bg-brand mt-2 font-medium text-primary-foreground/80 rounded-lg"}>
                        <a href={"/"}>
                            Geri Dön
                        </a>
                    </Button>
                </div>
                <div className={"w-full h-full justify-center items-center hidden lg:flex"}>
                    <img src={product?.src} alt={product?.name} className={"w-full rounded-2xl"}/>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;