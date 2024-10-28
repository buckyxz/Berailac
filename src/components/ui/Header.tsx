"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { Menu, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [section, setSection] = useState("hero");
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const domSection = document.getElementById(section);

        if (!domSection) return;

        domSection.scrollIntoView({ behavior: "smooth" });

        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [section]);

    return (
        <div className="absolute flex w-full h-32 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 shadow-md z-10">
            <div className="mx-16 flex w-full h-full items-center justify-between">
                <a className="flex items-center" href="/">
                    <Image src="/logo.png" alt="Can-Vet Logo" width={512} height={512} className="w-20" />
                </a>
                <div className="hidden lg:flex gap-12 uppercase text-lg cursor-pointer text-gray-700">
                    <a href="/" className="hover:text-brand transition-colors duration-300">ANASAYFA</a>
                    <a onClick={() => setSection("aboutus")} className="hover:text-brand transition-colors duration-300">HAKKIMIZDA</a>
                    <a onClick={() => setSection("products")} className="hover:text-brand transition-colors duration-300">ÜRÜNLERİMİZ</a>
                    <a onClick={() => setSection("testimonials")} className="hover:text-brand transition-colors duration-300">MÜŞTERİ YORUMLARI</a>
                    <a onClick={() => setSection("contact")} className="hover:text-brand transition-colors duration-300">İLETİŞİME GEÇ</a>
                </div>
                <div className="flex lg:hidden">
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className={cn("transition-all", isMenuOpen && "rotate-90")}>
                        <Menu size={32} />
                    </Button>
                </div>
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 backdrop-blur-md border border-gray-300 shadow-lg flex flex-col items-center justify-center text-gray-800 text-xl uppercase gap-6 z-20"
                        >
                            <a href="/" className="hover:text-brand transition-all duration-200">Anasayfa</a>
                            <a onClick={() => setSection("aboutus")} className="hover:text-brand transition-all duration-200">Hakkımızda</a>
                            <a onClick={() => setSection("products")} className="hover:text-brand transition-all duration-200">Ürünlerimiz</a>
                            <a onClick={() => setSection("testimonials")} className="hover:text-brand transition-all duration-200">Müşteri Yorumları</a>
                            <a onClick={() => setSection("contact")} className="hover:text-brand transition-all duration-200">İletişime Geç</a>
                            <Button 
                                variant="ghost" 
                                size="sm" 
                                className="hover:bg-transparent absolute top-0 right-0 m-8 text-gray-600 hover:text-gray-800 transition-all" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <XCircle size={32} />
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Header;
