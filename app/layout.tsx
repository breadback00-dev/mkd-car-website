import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | Bristol Used Cars",
    default: "Bristol Used Cars | Reliable & Verified Used Vehicles",
  },
  description: "Find your next reliable used car in Bristol. Simple, fast, and trust-focused service. All vehicles are heavily inspected with a clear history.",
  keywords: ["used cars", "Bristol", "car dealership", "buy used car", "reliable vehicles", "second hand cars Bristol"],
  authors: [{ name: "Bristol Used Cars" }],
  creator: "Bristol Used Cars",
  metadataBase: new URL("https://mkdcarwebsite.test"), // Replace with actual production URL
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Bristol Used Cars",
    title: "Bristol Used Cars | Reliable & Verified Used Vehicles",
    description: "Find your next reliable used car in Bristol. Simple, fast, and trust-focused service.",
    images: [
      {
        url: "/og-image.jpg", // Needs placeholder in public folder when deployed
        width: 1200,
        height: 630,
        alt: "Bristol Used Cars Showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bristol Used Cars | Reliable & Verified",
    description: "Find your next reliable used car in Bristol.",
    creator: "@bristolusedcars",
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
