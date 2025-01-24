import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { MainHeader } from "@/components/MainHeader";
import { CustomLink, MinemizeHeader } from "@/components/MinemizeHeader";
import Image from "next/image";
import UserSVG from "@/assets/user.svg";
import { UserSvg } from "@/components/UserSvg";

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
        <div>
          <MinemizeHeader>
            <CustomLink href="/bag">Revenues</CustomLink>
            <CustomLink href="/calc">Calc</CustomLink>
            <CustomLink href="/perfil" customClass="w-20">
            <UserSvg/>
            </CustomLink>
          </MinemizeHeader>
          {children}
        </div>
      </body>
    </html>
  );
}
