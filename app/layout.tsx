import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | MKD Cars",
    default: "MKD Cars | Quality Used Cars in Bristol",
  },
  description: "Find your next reliable used car in Bristol. Simple, fast, and trust-focused service. All vehicles are HPI checked with a clear history.",
  keywords: ["used cars", "Bristol", "car dealership", "buy used car", "reliable vehicles", "second hand cars Bristol", "MKD Cars"],
  authors: [{ name: "MKD Cars" }],
  creator: "MKD Cars",
  metadataBase: new URL("https://mkd-car-website.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "MKD Cars",
    title: "MKD Cars | Quality Used Cars in Bristol",
    description: "Find your next reliable used car in Bristol. Simple, fast, and trust-focused service.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "MKD Cars Forecourt Bristol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MKD Cars | Quality Used Cars in Bristol",
    description: "Find your next reliable used car in Bristol.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col text-[#171717] bg-white`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
