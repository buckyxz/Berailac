import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import {Inter} from "next/font/google";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Bera İlaç | Bera İlaçları",
  description: "Bera İlaç olarak ek gıda ilaçları üretimi yapmaktayız. Ürünlerimiz hakkında detaylı bilgi almak için sitemizi ziyaret edin.",
};

const helvetica = localFont({
    src: [
        { path: "./fonts/HelveticaNeueRoman.otf", weight: "400" },
        { path: "./fonts/HelveticaNeueBold.otf", weight: "700" },
        { path: "./fonts/HelveticaNeueMedium.otf", weight: "500" },
        { path: "./fonts/HelveticaNeueLight.otf", weight: "300" }
    ],
    variable: '--font-helvetica'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helvetica.className} bg-secondary overflow-x-hidden`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
