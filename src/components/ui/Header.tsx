"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {Menu, XCircle} from "lucide-react";
import {Button} from "@/components/ui/Button";
import {cn} from "@/lib/utils";
import {AnimatePresence} from "framer-motion";
import {usePathname} from "next/navigation";
import {useRouter} from "next/navigation";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [section, setSection] = useState("hero");
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const domSection = document.getElementById(section);

        if (!domSection) return;

        domSection.scrollIntoView({behavior: "smooth"});

        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [section]);

    return (
        <div className={"absolute flex w-full h-32"}>
            <div className={"mx-16 flex w-full h-full items-center justify-between"}>
                <a className={"flex items-center"} href={"/"}>
                    <Image src={"/logo.png"} alt={"Can-Vet Logo"} width={512} height={512} className={"w-20"}/>
                </a>
                <div className={"hidden lg:flex gap-12 uppercase text-lg cursor-pointer"}>
                    <a href={"/"}>
                        anasayfa
                    </a>
                    <a onClick={() => setSection("aboutus")}>
                        hakkımızda
                    </a>
                    <a onClick={() => setSection("products")}>
                        ürünlerimiz
                    </a>
                    <a onClick={() => setSection("testimonials")}>
                        müşteri yorumları
                    </a>
                    <a onClick={() => setSection("contact")}>
                        iletişime geç
                    </a>
                </div>
                <div className={"flex lg:hidden"}>
                    <Button variant={"ghost"} size={"icon"} onClick={() => setIsMenuOpen(!isMenuOpen)} className={cn("transition-all",isMenuOpen && "rotate-90")}>
                        <Menu size={32}/>
                    </Button>
                </div>
                <AnimatePresence>
                {
                    isMenuOpen && (
                        <div className={"fixed top-0 left-0 w-full h-screen bg-neutral-800/60 backdrop-blur-md flex flex-col items-center justify-center text-white/80 text-xl uppercase gap-4"}>
                            <a href={"/"}>
                                anasayfa
                            </a>
                            <a onClick={() => setSection("aboutus")}>
                                hakkımızda
                            </a>
                            <a onClick={() => setSection("products")}>
                                ürünlerimiz
                            </a>
                            <a onClick={() => setSection("testimonials")}>
                                müşteri yorumları
                            </a>
                            <a onClick={() => setSection("contact")}>
                                iletişime geç
                            </a>
                            <Button variant={"ghost"} size={"sm"} className={"hover:bg-transparent absolute top-0 right-0 m-12"} onClick={() => setIsMenuOpen(false)}>
                                <XCircle size={32}/>
                            </Button>
                        </div>
                    )
                }
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Header;