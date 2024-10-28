
import React from 'react';
import { TbError404 } from "react-icons/tb";
import {Button} from "@/components/ui/Button";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className={"w-full h-screen flex"}>
            <div className={"flex flex-col gap-4 justify-center items-center w-full h-full"}>
                <TbError404 size={96}/>
                <div className={"flex flex-col items-center"}>
                    <h1 className={"text-4xl"}>
                        Üzgünüz!
                    </h1>
                    <p>
                        Aradığın sayfayı bulamadık.
                    </p>
                </div>
                <Button variant={"default"}>
                    <Link href={"/"}>
                        Anasayfaya Dön
                    </Link>
                </Button>
                <p className={"bottom-0 absolute py-16 text-foreground/60"}>
                    berailac.com sitesi <a href={"https://instagram.com/bakidobur"} className={"font-medium underline underline-offset-1"}>Baki Dobur</a> tarafından tasarlanmış ve geliştirilmiştir. &#169; Tüm hakları saklıdır. {new Date().getFullYear()} Bera İlaç
                </p>
            </div>
        </div>
    );
};

export default NotFound;
