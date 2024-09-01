"use client";

import React, {useState} from 'react';
import ProductCard from "@/components/ui/ProductCard";
import {Pill} from "lucide-react";
import { MdOutlineHive } from "react-icons/md";
import { GiBee } from "react-icons/gi";
import {cn} from "@/lib/utils";

const Product_Details = [
    {
        icon: (<Pill size={16}/>),
        text: "Yüksek düzeyde vitamin ve mineral"
    },
    {
        icon: (<MdOutlineHive />),
        text: "Arı koloni gelişimine katkıda bulunur"
    },
    {
        icon: (<GiBee/>),
        text: "Yavru verimini gözle görülür artırır"
    }
]

const Products = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div id={"products"} className={"flex w-full"}>
            <div className={"w-full h-full flex flex-col lg:mx-24 mx-12 my-16 gap-12 items-center"}>
                <p className={"text-2xl font-medium text-center lg:text-5xl text-foreground/80"}>
                    Arılarınızın sağlığı için <span className={"text-brand"}>formülize edilen</span> ürünlerimiz
                </p>
                <div
                    className={cn("grid grid-cols-1 grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 w-full h-full gap-12", showMore && "grid-rows-8")}>
                    <ProductCard name={"Apicario"} src={"/product-1.png"} description={"Multivitamin İlacı"}
                                 details={Product_Details} price={500}/>
                    <ProductCard name={"Apicario"} src={"/product-1.png"} description={"Multivitamin İlacı"}
                                 details={Product_Details} price={500}/>
                    <ProductCard name={"Apicario"} src={"/product-1.png"} description={"Multivitamin İlacı"}
                                 details={Product_Details} price={500}/>
                    <ProductCard name={"Apicario"} src={"/product-1.png"} description={"Multivitamin İlacı"}
                                 details={Product_Details} price={500}
                                 className={cn("hidden lg:block", showMore && "block")}/>
                    <ProductCard name={"Apicario"} src={"/product-1.png"} description={"Multivitamin İlacı"}
                                 details={Product_Details} price={500}
                                 className={cn("hidden lg:block", showMore && "block")}/>
                    <ProductCard name={"Apicario"} src={"/product-1.png"} description={"Multivitamin İlacı"}
                                 details={Product_Details} price={500}
                                 className={cn("hidden lg:block", showMore && "block")}/>
                    <ProductCard name={"Apicario"} src={"/product-1.png"} description={"Multivitamin İlacı"}
                                 details={Product_Details} price={500}
                                 className={cn("hidden lg:block", showMore && "block")}/>
                    <ProductCard name={"Apicario"} src={"/product-1.png"} description={"Multivitamin İlacı"}
                                 details={Product_Details} price={500}
                                 className={cn("hidden lg:block", showMore && "block")}/>
                </div>
                <a className={cn("flex text-brand text-center lg:hidden cursor-pointer hover:underline h-max")}
                   onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Daha Az Göster" : "Daha Fazla Ürün"}
                </a>
            </div>
        </div>
    );
};

export default Products;