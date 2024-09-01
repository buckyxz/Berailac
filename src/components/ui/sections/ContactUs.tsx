import React from 'react';
import {Button} from "@/components/ui/Button";
import {ArrowRight, Mail, Phone} from "lucide-react";
import Image from "next/image";

const ContactUs = () => {
    return (
        <div id={"contact"} className={"flex w-full bg-light/30"}>
            <div className={"w-full h-full flex flex-col lg:mx-24 mx-12 my-16 gap-12 items-center"}>
                <div className={"flex flex-col gap-4 items-center"}>
                    <p className={"text-2xl font-medium text-center lg:text-5xl text-foreground/80"}>
                        Arılarınızın sağlığı için<br/>bizimle iletişime geçin
                    </p>
                    <p className={"text-foreground/70 text-center"}>
                        Sorularınızı yanıtlamaya hazırız.
                    </p>
                    <Button variant={"default"} size={"lg"} className={"w-max p-7 text-lg font-normal gap-2 rounded-full text-primary-foreground/90"}>
                        <a className={"flex gap-2"} href={"https://wa.me/905333831653"}>
                            Fiyat Teklifi Al <ArrowRight/>
                        </a>
                    </Button>
                </div>
                <div className={"flex flex-col gap-12 items-center"}>
                    <div className={"flex flex-col lg:flex-row gap-12"}>
                        <div className={"flex flex-col pl-6 pr-36 py-6 bg-light/80 rounded-lg"}>
                            <Mail className={"text-foreground mb-6"} size={32}/>
                            <p className={"text-lg lg:text-xl font-medium"}>
                                Mail Gönder
                            </p>
                            <a href={"mailto:canvet@gmail.com"}>
                                canvet@gmail.com
                            </a>
                        </div>
                        <div className={"flex flex-col pl-6 pr-36 py-6 bg-sky-200/50 rounded-lg"}>
                            <Phone className={"text-foreground mb-6"} size={32}/>
                            <p className={"text-lg lg:text-xl font-medium"}>
                                Bizi Ara
                            </p>
                            <a href={"tel:+905333831653"}>
                                +90 (533) 383 16 53
                            </a>
                        </div>
                    </div>
                    <div className={"flex flex-col w-full items-center gap-6"}>
                        <a href={"https://maps.app.goo.gl/H4URdSF75EuH8hfG6"} className={"hidden lg:flex  justify-center"}>
                            <Image src={"/map.png"} alt={"Map Image"} width={1024} height={512} className={"w-2/3 rounded-lg"}/>
                        </a>
                        <p className={"text-center text-foreground/50"}>
                            Yazlık Mahallesi, Erkin Sk. No: 1, 54130 Serdivan/Sakarya, Türkiye
                        </p>
                        <a className={"text-brand underline"} href={"https://maps.app.goo.gl/H4URdSF75EuH8hfG6"}>
                            Yol Tarifi Al
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;