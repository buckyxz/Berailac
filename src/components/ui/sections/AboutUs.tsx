import React from 'react';
import Image from "next/image";

const AboutUs = () => {
    return (
        <div id={"aboutus"} className={"flex w-full"}>
            <div className={"flex lg:flex-row items-center lg:gap-24 3xl:gap-64 w-full h-full lg:mx-24 mx-12 my-16"}>
                <div className={"flex flex-col w-full gap-8 text-foreground/80"}>
                    <div className={"flex flex-col gap-5"}>
                        <h2 className={"text-3xl font-medium lg:text-5xl"}>
                            İnsan sağlığı <span className={"text-brand"}>bizim</span> elimizde
                        </h2>
                        <p className={"lg:text-xl text-foreground/60"}>
                            Uzman hekimler tarafından hazırlanmış, yılların akademik çalışmaları sonucu kataloğa eklenmiş, etkili, pratik ve güvenilir ilaçlarla arılarınızın sağlığını koruyun.
                        </p>
                    </div>
                    <div className={"w-full flex flex-col lg:flex-row justify-center-center gap-12"}>
                        <div className={"w-full flex flex-col gap-4"}>
                            <Image src={"icons/diagnose.svg"} alt={"Diagnose Icon"} width={64} height={64}
                                   className={"w-8 h-8 lg:w-12 lg:h-12 3xl:w-16 3xl:h-16"}/>
                            <div className={"flex-flex gap-1 "}>
                                <p className={"text-foreground"}>
                                    Uzman hekim onaylı
                                </p>
                                <p className={"text-sm 3xl:text-base text-foreground/60"}>
                                    Ürün listemizdeki tüm ürünler
                                    uzmanlar tarafından
                                    onaylanmıştır
                                </p>
                            </div>
                        </div>
                        <div className={"w-full flex flex-col gap-4"}>
                            <Image src={"icons/medicine.svg"} alt={"Diagnose Icon"} width={64} height={64}
                                   className={"w-8 h-8 lg:w-12 lg:h-12 3xl:w-16 3xl:h-16"}/>
                            <div className={"flex-flex gap-1 "}>
                                <p className={"text-foreground"}>
                                    Etkili, çalışan ilaçlar
                                </p>
                                <p className={"text-sm 3xl:text-base text-foreground/60"}>
                                    Ürün listemizdeki tüm ürünler
                                    uzmanlar tarafından
                                    onaylanmıştır
                                </p>
                            </div>
                        </div>
                        <div className={"w-full flex flex-col gap-4"}>
                            <Image src={"icons/docs.svg"} alt={"Diagnose Icon"} width={64} height={64}
                                   className={"w-8 h-8 lg:w-12 lg:h-12 3xl:w-16 3xl:h-16"}/>
                            <div className={"flex-flex gap-1 "}>
                                <p className={"text-foreground"}>
                                    Bilimsel çalışma destekli
                                </p>
                                <p className={"text-sm 3xl:text-base text-foreground/60"}>
                                    Ürün listemizdeki tüm ürünler
                                    veteriner hekimler tarafından
                                    onaylanmıştır
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src={"/aboutus.png"} alt={"About Us Image"} width={512} height={512}
                       className={"w-max rounded-lg hidden lg:flex"} draggable={false}/>
            </div>
        </div>
    );
};

export default AboutUs;