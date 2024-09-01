import React from 'react';

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/Accordion";

const Faq = () => {
    return (
        <div className={"flex w-full"}>
            <div className={"w-full h-full flex flex-col lg:mx-24 mx-auto my-16 gap-12 items-center"}>
                <p className={"text-2xl font-medium text-center lg:text-5xl text-foreground/80"}>
                    Siz sordunuz - biz de <span className={"text-brand"}>cevapladık</span>. Merak edilenler.
                </p>
                <div className={"flex flex-col w-96 lg:w-[52rem] gap-4"}>
                    <Accordion type={"single"}>
                        <AccordionItem value={"item-1"} className={"mt-4 px-4 border rounded-lg border-navy/20"}>
                            <AccordionTrigger className={"lg:text-xl"}>Kullanım sırasında herhangi bir yan etki ya da olası riskler var mı?</AccordionTrigger>
                            <AccordionContent className={"lg:text-lg"}>
                                Can-Vet İlaç ürünleri, arı sağlığını korumak amacıyla özenle formüle edilmiştir ve doğru kullanım koşullarında genellikle yan etki oluşturmaz. Ancak, tüm ilaçlarda olduğu gibi, doz aşımından veya yanlış kullanımdan kaynaklanabilecek olası riskler bulunmaktadır. Ürün etiketinde belirtilen talimatlara uygun hareket edilmesi önemlidir. Eğer arılarda beklenmedik bir durum gözlemlerseniz, derhal bir uzmana başvurmanız önerilir.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"item-2"} className={"mt-4 px-4 border rounded-lg border-navy/20"}>
                            <AccordionTrigger className={"lg:text-xl"}>Ürünlerinizi nasıl ve nereden temin edebilirim?</AccordionTrigger>
                            <AccordionContent className={"lg:text-lg"}>
                                Can-Vet İlaç ürünlerini yetkili bayilerimizden, veteriner kliniklerinden veya internet sitemiz üzerinden kolayca temin edebilirsiniz. Ayrıca, size en yakın bayiyi bulmak veya doğrudan sipariş vermek için müşteri hizmetlerimizle iletişime geçebilirsiniz. Siparişleriniz, hızlı ve güvenli bir şekilde adresinize teslim edilir.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"item-3"} className={"mt-4 px-4 border rounded-lg border-navy/20"}>
                            <AccordionTrigger className={"lg:text-xl"}>Can-Vet İlaç ürünleri doğal ve çevre dostu mudur?</AccordionTrigger>
                            <AccordionContent className={"lg:text-lg"}>
                                Evet, Can-Vet İlaç olarak, arıların ve çevrenin sağlığını ön planda tutuyoruz. Ürünlerimizin formülasyonunda doğaya ve arılara zarar vermeyecek bileşenler kullanmaya özen gösteriyoruz. Ayrıca, üretim süreçlerimizde çevre dostu uygulamalara ve sürdürülebilirliğe büyük önem veriyoruz. Bu sayede, arıların doğal yaşam döngüsüne uyumlu, güvenli ve etkili ürünler sunuyoruz.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"item-4"} className={"mt-4 px-4 border rounded-lg border-navy/20"}>
                            <AccordionTrigger className={"lg:text-xl"}>Müşteri desteği sağlıyor musunuz? Nasıl ulaşabilirim?</AccordionTrigger>
                            <AccordionContent className={"lg:text-lg"}>
                                Evet, Can-Vet İlaç olarak müşterilerimize her zaman destek sağlıyoruz. Ürünlerimizle ilgili herhangi bir sorunuz, öneriniz veya teknik desteğe ihtiyacınız olduğunda, müşteri hizmetlerimize ulaşabilirsiniz. Bize telefon, e-posta veya internet sitemiz üzerindeki iletişim formu aracılığıyla kolayca ulaşabilirsiniz. Destek ekibimiz, size en kısa sürede yardımcı olmak için hazırdır.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value={"item-5"} className={"mt-4 px-4 border rounded-lg border-navy/20"}>
                            <AccordionTrigger className={"lg:text-xl"}>Arıcılık malzemeleri için toplu alımlarda indirim yapıyor musunuz?</AccordionTrigger>
                            <AccordionContent className={"lg:text-lg"}>
                                Evet, Can-Vet İlaç olarak toplu alımlarda özel indirimler sunuyoruz. Eğer arıcılık malzemelerimizi büyük miktarlarda satın almayı düşünüyorsanız, size özel fiyat teklifleri hazırlayabiliriz. İndirim oranları ve detaylar için satış ekibimizle iletişime geçebilir ve ihtiyaçlarınıza en uygun çözümü bulabilirsiniz.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;