"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ExpensePNG from "@/assets/expense.png"

export const NavLink = () => {
  const path: string = usePathname();

  return (
    <React.Fragment>
      <nav className="list-none w-11/12 shadow-border-light">
        <div className="flex p-10 gap-10 bg-background-secondary text-foreground-primary items-center">
        <Link
            href={"/bag/image"}
          >
            <Image className="mb-3" src={ExpensePNG} width={50} alt="revenue">

            </Image>
          </Link>

          <Link
            className={`${
              path === "/"
                ? "text-primary-600"
                : "hover:text-primary-600 transition-all duration-300"
            }`}
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={`${
              path === "/bag"
                ? "text-primary-600"
                : "hover:text-primary-600 transition-all duration-300"
            }`}
            href={"/bag"}
          >
            Revenues
          </Link>
          <Link
            className={`${
              path === "/new"
                ? "text-primary-600"
                : "hover:text-primary-600 transition-all duration-300"
            }`}
            href={"/new"}
          >
            New Revenue
          </Link>
          <Link
            className={`${
              path === "/calc"
                ? "text-primary-600"
                : "hover:text-primary-600 transition-all duration-300"
            }`}
            href={"/calc"}
          >
            Calculator
          </Link>
          <Link
            className={`${
              path.startsWith("/archive")
                ? "text-primary-600"
                : "hover:text-primary-600 transition-all duration-300"
            }`}
            href={"/archive"}
          >
            Expenses
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};
