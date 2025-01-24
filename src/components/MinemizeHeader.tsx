"use client";
import React, { ReactElement } from "react";
import { NavLink } from "./NavLink";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface PropsCustomLink {
  href: string;
  customClass?: string;
  children?: React.ReactNode;
}

interface PropsMinemize {
  children?: React.ReactNode;
}

export const CustomLink: React.FC<PropsCustomLink> = ({href,customClass,children}): ReactElement => {
  const path = usePathname();
  if (!customClass) {
    customClass = `
      ${
        path === href
          ? "text-primary-600"
          : "hover:text-primary-600 transition-all duration-300"
      }
    `;
  }

  return (
    <Link className={`${customClass}`} href={href}>
      {children}
    </Link>
  );
};

export const MinemizeHeader: React.FC<PropsMinemize> = ({children}): ReactElement => {
  const path = usePathname();
  return (
    <React.Fragment>
      <header className="py-4 flex justify-end items-center gap-4 border-b-2 ">
      {children}
      </header>
    </React.Fragment>
  );
};
