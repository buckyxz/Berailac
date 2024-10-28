"use client";

import React, { useEffect, useState } from 'react';
import ProductCard from "@/components/ui/ProductCard";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const TESTIMONIALS_DATA = [
    {
        src: "/testimonial-1.png",
        name: "Furkan Esen",
        location: "Istanbul, Turkey",
        testimonial: "Can-Vet İlaç ürünlerini kullanmaya başladığımdan beri kovanlarımın sağlığında gözle görülür bir iyileşme fark ettim.",
        product_data: {
            name: "Beraflex",
            price: 500,
            src: "/product-1.png"
        }
    },
    {
        src: "/testimonial-1.png",
        name: "Emir Ayaz",
        location: "Sakarya, Turkey",
        testimonial: "Can-Vet İlaç ürünlerini kullanmaya başlamam ile birlikte kovanlarımın sağlığındaki değişimi gözlemlemek beni çok mutlu etti.",
        product_data: {
            name: "Beraflex",
            price: 500,
            src: "/product-1.png"
        }
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="testimonials" className="flex flex-col items-center w-full py-16 bg-light-gray">
            <h2 className="text-3xl font-bold text-center text-navy lg:text-5xl mb-8">
                Müşterilerimiz <span className="text-brand">bizim</span> hakkımızda neler söylüyor?
            </h2>
            <div className="relative w-full flex flex-col lg:flex-row items-center justify-start lg:gap-12 px-4">
                <div className="w-full lg:w-3/5 flex flex-col gap-6 p-6 bg-white rounded-lg shadow-lg">
                    <div className="flex gap-1 mb-4">
                        {Array(5).fill(0).map((_, index) => (
                            <FaStar key={index} className="text-brand" size={24} />
                        ))}
                    </div>
                    <p className="text-navy font-medium text-xl lg:text-2xl italic">
                        &ldquo;{TESTIMONIALS_DATA[activeIndex].testimonial}&rdquo;
                    </p>
                    <div className="flex items-center">
                        <Image 
                            src={TESTIMONIALS_DATA[activeIndex].src} 
                            alt={`${TESTIMONIALS_DATA[activeIndex].name} testimonial image`} 
                            width={64} 
                            height={64} 
                            className="rounded-full border-2 border-brand" 
                        />
                        <div className="ml-4">
                            <p className="font-semibold text-navy">{TESTIMONIALS_DATA[activeIndex].name}</p>
                            <p className="text-foreground/60">{TESTIMONIALS_DATA[activeIndex].location}</p>
                        </div>
                    </div>
                    <Button variant="default" size="lg" className="mt-4">
                        <a href="https://maps.app.goo.gl/k9mXX3RQhSbEfo7d7">Tüm yorumları gör</a>
                    </Button>
                    <div className="flex justify-center mt-4">
                        {TESTIMONIALS_DATA.map((_, index) => (
                            <div 
                                key={index} 
                                className={cn("w-3 h-3 rounded-full mx-1", activeIndex === index ? "bg-brand" : "bg-neutral-800/50")} 
                            />
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block w-1/4">
                    <ProductCard 
                        src={TESTIMONIALS_DATA[activeIndex].product_data.src} 
                        name={TESTIMONIALS_DATA[activeIndex].product_data.name} 
                        price={TESTIMONIALS_DATA[activeIndex].product_data.price} 
                        className="shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
