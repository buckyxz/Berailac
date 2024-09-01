import React from 'react';
import {Button} from "@/components/ui/Button";
import Hero from "@/components/ui/sections/Hero";
import Featured from "@/components/ui/sections/Featured";
import AboutUs from "@/components/ui/sections/AboutUs";
import Products from "@/components/ui/sections/Products";
import Testimonials from "@/components/ui/sections/Testimonials";
import Faq from "@/components/ui/sections/Faq";
import ContactUs from "@/components/ui/sections/ContactUs";
import Footer from "@/components/ui/Footer";

const Home = () => {
    return (
        <div className={"w-full flex flex-col"}>
            <Hero/>
            <Featured/>
            <AboutUs/>
            <Products/>
            <Testimonials/>
            <Faq/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;