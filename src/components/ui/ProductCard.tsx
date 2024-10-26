import React from 'react';
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/Card";
import Image from "next/image";
import {Button} from "@/components/ui/Button";
import {className} from "postcss-selector-parser";

type ProductCardProps = {
    src: string;
    name: string;
    description?: string;
    details?: {icon: React.ReactNode, text: string}[];
    price?: number;
    className?: string;
}

const ProductCard = ({src, name, description, details, price, className}: ProductCardProps) => {
    return (
        <div className={className}>
            <Card>
                <CardHeader>
                    <Image src={src} alt={"Product Image"} width={512} height={512} className={"w-full rounded-lg"} draggable={false}/>
                </CardHeader>
                <CardContent>
                    <p className={"text-2xl font-medium"}>
                        {name}
                    </p>
                    <p className={"text-foreground/70 text-lg"}>
                        {description}
                    </p>
                    <div className={"mt-4 flex flex-col"}>
                        {
                            details?.map((detail, index) => (
                                <div key={index} className={"inline-flex gap-2 items-center text-foreground/50"}>
                                    {detail.icon}
                                    <p className={"text-foreground/70"}>
                                        {detail.text}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </CardContent>
                <CardFooter>
                    <div className={"flex justify-between items-center w-full"}>
                        <p className={"text-xl"}>
                            {price}₺
                        </p>
                        <a href={`/urunlerimiz/${name.toLowerCase()}`} className={"text-lg text-right text-brand"}>
                            Detayları öğren
                        </a>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ProductCard;