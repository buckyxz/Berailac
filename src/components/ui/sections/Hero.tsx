"use client";

import React from 'react';
import {Rubik} from "next/font/google"
import Image from "next/image";
import {Button} from "@/components/ui/Button";
import {ArrowRight} from "lucide-react";

const rubik = Rubik({ subsets: ['latin'] })

const Hero = () => {
    return (
        <div id={"hero"} className={"w-full h-screen flex bg-hero overflow-x-hidden"}>
            <div className={"w-full h-full flex items-center lg:mx-20 mx-4 gap-24 3xl:gap-36"}>
                <div className={"flex flex-col gap-8 w-full"}>
                    <div className={"flex flex-col gap-4"}>
                        <h1 className={`text-3xl lg:text-5xl 3xl:text-[5rem] leading-none ${rubik.className} font-medium`}>
                            Arılarınızın sağlığı için
                            <br/>
                            uzmanların önerdiği
                            <br/>
                            etkili, güvenilir ilaçlar
                        </h1>
                        <p className={"text-foreground/70 text-sm md:text-base lg:text-xl w-3/4"}>
                            Uzmanlar tarafından hazırlanan, arılarınızın sağlığı için etkili, güvenilir ilaçlar.
                            Kovan sağlığı ve arı sağllığı için görmezden gelinemez bir ihtiyaç.
                        </p>
                    </div>
                    <Button variant={"default"} size={"lg"} className={"w-max p-7 text-lg font-normal gap-2"} onClick={() => {let section = document.getElementById("products"); if (section) {section.scrollIntoView({behavior:"smooth"})}}}>
                        Ürünlerimizi İnceleyin <ArrowRight/>
                    </Button>
                    <div className={"flex gap-4 mt-12 items-center"}>
                        <div className={"flex -space-x-4 lg:-space-x-6"}>
                            {/* TODO: add images before production */}
                            <div className={"bg-primary w-8 h-8 lg:w-12 lg:h-12 border border-white rounded-full"}>
                            </div><div className={"bg-primary w-8 h-8 lg:w-12 lg:h-12 border border-white rounded-full"}>
                            </div><div className={"bg-primary w-8 h-8 lg:w-12 lg:h-12 border border-white rounded-full"}>
                            </div><div className={"bg-primary w-8 h-8 lg:w-12 lg:h-12 border border-white rounded-full"}>
                            </div><div className={"bg-primary w-8 h-8 lg:w-12 lg:h-12 border border-white rounded-full"}>
                            </div>
                        </div>
                        <p className={"text-foreground/70 font-medium text-sm lg:text-base"}>
                            Arılarının sağlığı için <span className={"text-primary"}>200+ kişi</span> bize güvendi!
                        </p>
                    </div>
                </div>
                <Image src={"/hero-image.png"} alt={"Hero Image"} width={512} height={512} className={"hidden lg:block w-2/3"}/>
            </div>
        </div>
    );
};

export default Hero;