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
        <div className="flex p-4 gap-10  text-foreground-primary items-center max-[500px]:hidden">

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
        <div className="min-[500px]:hidden text-2xl">
          !!!
        </div>
      </nav>
    </React.Fragment>
  );
};
