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
  classN?: string;
}

export const CustomLink: React.FC<PropsCustomLink> = ({
  href,
  customClass,
  children,
}): ReactElement => {
  const path = usePathname();
  customClass += ` 
      ${
        path === href
          ? "bg-background-secondary px-6  py-2  rounded"
          : "hover:bg-background-secondary transition-all duration-300 py-2 px-4 rounded flex justify-center"
      }
    `;

  console.log(customClass);

  return (
    <Link className={`${customClass}`} href={href}>
      {children}
    </Link>
  );
};

export const MinemizeHeader: React.FC<PropsMinemize> = ({
  children,
  classN,
}): ReactElement => {
  const path = usePathname();
  let classDefault = "flex  justify-end items-center gap-4 ";
  classDefault += classN;
  return (
    <React.Fragment>
      <header className={`${classDefault}`}>{children}</header>
    </React.Fragment>
  );
};
