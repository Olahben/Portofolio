import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dotenv from "dotenv";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ContextProvider from "./ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ola Hagen Bendixen Portfolio",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  dotenv.config();
  return (
    <html data-theme="" lang="en">
      <ContextProvider>
        <body className={inter.className}>{children}</body>
      </ContextProvider>
    </html>
  );
}
