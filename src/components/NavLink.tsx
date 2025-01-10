"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavLink = () => {
  const path: string = usePathname();

  return (
    <React.Fragment>
      <li className="list-none w-11/12 shadow-border-light">
        <ul className="flex p-10 gap-10 bg-background-secondary text-foreground-primary">
          <Link className={`${path === "/" ? "text-primary-600" : "hover:text-primary-600"}`} href={"/"}>
            Home
          </Link>
          <Link
            className={`${path === "/bag" ? "text-primary-600" : "hover:text-primary-600"}`}
            href={"/bag"}
          >
            Revenues
          </Link>
          <Link
            className={`${path === "/new" ? "text-primary-600" : "hover:text-primary-600"}`}
            href={"/new"}
          >
            New Revenue
          </Link>
          <Link
            className={`${path === "/calc" ? "text-primary-600" : "hover:text-primary-600"}`}
            href={"/calc"}
          >
            Calculator
          </Link>
        </ul>
      </li>
    </React.Fragment>
  );
};
