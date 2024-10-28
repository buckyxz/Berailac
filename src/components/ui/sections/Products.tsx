"use client";

import React, { useState } from 'react';
import ProductCard from "@/components/ui/ProductCard";
import { Pill } from "lucide-react";
import { MdOutlineHive } from "react-icons/md";
import { GiBee } from "react-icons/gi";
import { cn } from "@/lib/utils";

const productDetails = [
    {
        icon: <Pill size={16} />,
        text: "Yüksek düzeyde vitamin ve mineral"
    },
    {
        icon: <MdOutlineHive />,
        text: "Arı koloni gelişimine katkıda bulunur"
    },
    {
        icon: <GiBee />,
        text: "Yavru verimini gözle görülür artırır"
    }
];

const productList = [
    // Ürünlerinizi buraya ekleyin
    {
        name: "Beraflex",
        src: "/product-1.png",
        description: "Takviye Edici Gıda",
        price: 500,
    },
    {
        name: "Beraflex",
        src: "/product-1.png",
        description: "Takviye Edici Gıda",
        price: 500,
    },
    {
        name: "Beraflex",
        src: "/product-1.png",
        description: "Takviye Edici Gıda",
        price: 500,
    },
    {
        name: "Beraflex",
        src: "/product-1.png",
        description: "Takviye Edici Gıda",
        price: 500,
    },
    {
        name: "Beraflex",
        src: "/product-1.png",
        description: "Takviye Edici Gıda",
        price: 500,
    },
    {
        name: "Beraflex",
        src: "/product-1.png",
        description: "Takviye Edici Gıda",
        price: 500,
    },
    {
        name: "Beraflex",
        src: "/product-1.png",
        description: "Takviye Edici Gıda",
        price: 500,
    },
    {
        name: "Beraflex",
        src: "/product-1.png",
        description: "Takviye Edici Gıda",
        price: 500,
    },
];

const Products = () => {
    const [showMore, setShowMore] = useState(false);
    const [visibleProducts, setVisibleProducts] = useState(4);

    const toggleShowMore = () => {
        if (!showMore) {
            // Daha fazla göster
            if (visibleProducts < productList.length) {
                setVisibleProducts(prev => Math.min(prev + 4, productList.length));
            }
        } else {
            // Daha az göster
            if (visibleProducts > 4) {
                setVisibleProducts(prev => Math.max(prev - 4, 4));
            }
        }
        setShowMore(!showMore);
    };

    return (
        <div id="products" className="flex w-full">
            <div className="w-full h-full flex flex-col lg:mx-24 mx-12 my-16 gap-12 items-center">
                <p className="text-2xl font-medium text-center lg:text-5xl text-foreground/80">
                    İnsan sağlığı için <span className="text-brand">formülize edilen</span> ürünlerimiz
                </p>
                <div
                    className={cn(
                        "grid grid-cols-1 lg:grid-cols-4 gap-12",
                        visibleProducts <= 4 ? "grid-rows-1" : visibleProducts <= 8 ? "grid-rows-2" : "grid-rows-3"
                    )}>
                    {productList.slice(0, visibleProducts).map((product, index) => (
                        <ProductCard 
                            key={index}
                            name={product.name}
                            src={product.src}
                            description={product.description}
                            details={productDetails}
                            price={product.price}
                        />
                    ))}
                </div>
                <a 
                    className={cn("flex text-brand text-center cursor-pointer hover:underline h-max")}
                    onClick={toggleShowMore}
                >
                    {showMore ? "Daha Az Göster" : "Daha Fazla Ürün"}
                </a>
            </div>
        </div>
    );
};

export default Products;
