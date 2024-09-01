"use client";

import React, {useEffect, useState} from 'react';
import ProductCard from "@/components/ui/ProductCard";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import {Button} from "@/components/ui/Button";
import {cn} from "@/lib/utils";

const TESTIMONIALS_DATA = [
    {
        src: "/testimonial-1.png",
        name: "Furkan Esen",
        location: "Istanbul, Turkey",
        testimonial: "Can-Vet İlaç ürünlerini kullanmaya başladığımdan beri kovanlarımın sağlığında gözle görülür bir iyileşme fark ettim.",
        product_data: {
            name: "Apicario",
            price: 100,
            src: "/product-1.png"
        }
    },
    {
        src: "/testimonial-1.png",
        name: "Emir Ayaz",
        location: "Sakarya, Turkey",
        testimonial: "Can-Vet İlaç ürünlerini kullanmaya başlamam ile birlikte kovanlarımın sağlığındaki değişimi gözlemlemek beni çok mutlu etti.",
        product_data: {
            name: "Apicario",
            price: 100,
            src: "/product-1.png"
        }
    }
]

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div id={"testimonials"} className={"flex w-full"}>
            <div className={"w-full h-full flex flex-col lg:mx-24 mx-12 my-16 gap-12 items-center"}>
                <p className={"text-2xl font-medium text-center lg:text-5xl text-foreground/80"}>
                    Müşterilerimiz <span className={"text-brand"}>bizim</span> hakkımızda neler söylüyor?
                </p>
                <div className={"w-full h-full flex lg:gap-x-12 3xl:gap-x-48 py-12"}>
                    <div className={"relative w-full flex gap-4"}>
                        <div className={"absolute w-[32rem] 3xl:w-[36rem] hidden lg:block h-full bg-light/30"}></div>
                        <div className={"z-10 flex flex-col w-full h-full lg:mx-24 justify-center gap-4 lg:gap-8"}>
                            <div className={"flex gap-1"}>
                                {
                                    Array(5).fill(5).map((_, index) => (
                                        <FaStar key={index} className={"text-brand"} size={24}/>
                                    ))
                                }
                            </div>
                            <p className={"text-navy font-medium text-2xl lg:text-4xl"}>
                                {TESTIMONIALS_DATA[activeIndex].testimonial}
                            </p>
                            <div className={"flex gap-4 items-center"}>
                                <Image src={TESTIMONIALS_DATA[activeIndex].src} alt={"Testimonial Image"} width={64} height={64} className={"rounded-full"}/>
                                <div className={"flex flex-col"}>
                                    <p>
                                        {TESTIMONIALS_DATA[activeIndex].name}
                                    </p>
                                    <p className={"text-foreground/60"}>
                                        {TESTIMONIALS_DATA[activeIndex].location}
                                    </p>
                                </div>
                            </div>
                            <Button variant={"default"} size={"lg"} className={"w-max p-7 text-lg gap-2 bg-navy mt-2 font-medium text-primary-foreground/80 rounded-lg"}>
                                <a href={"https://maps.app.goo.gl/k9mXX3RQhSbEfo7d7"}>
                                    Tüm yorumları gör
                                </a>
                            </Button>
                            <div className={"flex gap-1"}>
                                {
                                    TESTIMONIALS_DATA.map((_, index) => (
                                        <div key={index} className={cn("w-3 h-3 rounded-full", activeIndex === index ? "bg-navy/80" : "bg-neutral-800/50")}></div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                    <ProductCard src={TESTIMONIALS_DATA[activeIndex].product_data.src} name={TESTIMONIALS_DATA[activeIndex].product_data.name} price={TESTIMONIALS_DATA[activeIndex].product_data.price} className={"hidden lg:block"}/>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;