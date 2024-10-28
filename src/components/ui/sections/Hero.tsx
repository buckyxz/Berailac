"use client";
import React from 'react';
import { Rubik } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const rubik = Rubik({ subsets: ['latin'] });

const Hero = () => {
    return (
        <div id={"hero"} className={"w-full h-screen flex bg-hero relative overflow-hidden"}>
            <div className={"w-full h-full flex items-center lg:mx-20 mx-4 gap-8"}>
                <div className={"flex flex-col gap-8 w-full lg:w-1/2"}>
                    <div className={"flex flex-col gap-4"}>
                        <h1 className={`text-3xl lg:text-5xl leading-none ${rubik.className} font-medium`}>
                            Diz ve Eklem Sağlığınız İçin
                            <br />
                            Güvenilir ve Etkili Çözümler
                        </h1>
                        <p className={"text-foreground/70 text-sm md:text-base lg:text-xl"}>
                            Diz ve eklem ağrılarınıza iyi gelecek, uzmanlar tarafından önerilen kaliteli çözümler sunuyoruz. Sağlığınız için en iyisini hedefliyoruz.
                        </p>
                    </div>
                    <Button 
                        variant={"default"} 
                        size={"lg"} 
                        className={"w-max p-7 text-lg font-normal gap-2"} 
                        onClick={() => {
                            let section = document.getElementById("products");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" })
                            }
                        }}
                    >
                        Ürünlerimizi İnceleyin <ArrowRight />
                    </Button>
                    <div className={"flex gap-4 mt-12 items-center"}>
                        <div className={"flex -space-x-4"}>
                            <div className={"bg-primary w-8 h-8 lg:w-12 lg:h-12 border border-white rounded-full"} />
                            <div className={"bg-primary w-8 h-8 lg:w-12 lg:h-12 border border-white rounded-full"} />
                            <div className={"bg-primary w-8 h-8 lg:w-12 lg:h-12 border border-white rounded-full"} />
                            <div className={"bg-primary w-8 h-8 lg:w-12 lg:h-12 border border-white rounded-full"} />
                            <div className={"bg-primary w-8 h-8 lg:w-12 lg:h-12 border border-white rounded-full"} />
                        </div>
                        <p className={"text-foreground/70 font-medium text-sm lg:text-base"}>
                            Diz ve eklem sağlığı için <span className={"text-primary"}>200+ kişi</span> bize güvendi!
                        </p>
                    </div>
                </div>

{/* Görseli sağa ve container'a tam yerleştirme */}
<div className={"hidden lg:block absolute right-0 top-0 bottom-0 flex items-center"}>
    <Image 
        src={"/hero-image.png"} 
        alt={"Hero Image"} 
        width={830} 
        height={830} 
        className={"object-contain h-full"}  // object-contain yerine object-cover kullanıyoruz
        style={{
            objectPosition: 'right center' // Sağa yaslamak için
        }}
        priority 
    />
</div>
            </div>
        </div>
    );
};

export default Hero;