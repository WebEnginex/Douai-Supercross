import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceWorkerCleanup } from "@/components/ServiceWorkerCleanup";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
  }),
  keywords: [
    "Super Enduro",
    "motorsport",
    "Paris",
    "course indoor",
    "GP Super Enduro",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${bebasNeue.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ServiceWorkerCleanup />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
