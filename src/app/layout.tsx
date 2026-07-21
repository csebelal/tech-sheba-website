import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Sheba — Reliable IT Solutions for Growing Businesses",
  description: "From office networks to cybersecurity, Tech Sheba handles the technology behind your business — so you can focus on running it. IT services, network setup, CCTV, PBX, and more in Dhaka, Bangladesh.",
  keywords: ["Tech Sheba", "IT Solutions", "Bangladesh", "Network Setup", "CCTV", "PBX", "IT Support", "Dhaka", "Cybersecurity", "Data Backup"],
  authors: [{ name: "Tech Sheba" }],
  icons: {
    icon: "https://techsheba.net/favicon.ico",
  },
  openGraph: {
    title: "Tech Sheba — Reliable IT Solutions for Growing Businesses",
    description: "From office networks to cybersecurity, Tech Sheba handles the technology behind your business.",
    url: "https://techsheba.net",
    siteName: "Tech Sheba",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Sheba — Reliable IT Solutions",
    description: "IT services, network setup, CCTV, PBX, and more in Dhaka, Bangladesh.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
