import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import {SideBar}  from "@/components/SideBar";
import { Home, Settings, User } from "lucide-react";
import { CustomLink, MinemizeHeader } from "@/components/MinemizeHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Revenue",
  description: "Your app of revenues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MinemizeHeader classN="px-12 py-4 pt-10 ">
          <CustomLink
            href="/login"
            customClass="shadow-sm "
          >
            Login
          </CustomLink>
          <CustomLink
            href="/register"
            customClass="shadow-sm "
          >
            Register
          </CustomLink>
          <CustomLink
            href="/calc"
            customClass="shadow-sm "
          >
            Calc
          </CustomLink>
        </MinemizeHeader>
        {children}
      </body>
    </html>
  );
}
