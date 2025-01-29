import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { CustomLink, MinemizeHeader } from "@/components/MinemizeHeader";
import { UserSvg } from "@/components/UserSvg";
import { Footer } from "@/components/Footer";

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
        <MinemizeHeader classN="p-12 bg-background-secondary gap-8">
          <CustomLink
            href="/login"
            customClass="shadow-background-secondary shadow-sm"
          >
            Login
          </CustomLink>
          <CustomLink href="/register">Register</CustomLink>
          <CustomLink href="/calc" customClass="">
            Calc
          </CustomLink>
        </MinemizeHeader>
        <main className="my-12">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
