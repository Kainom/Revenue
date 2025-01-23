"use client";
import React, { ReactElement } from "react";
import { NavLink } from "./NavLink";
import Link from "next/link";
import Image from "next/image";
import UserSVG from "@/assets/user.svg";
import UserBlue from "@/assets/userBlue.svg";
import { usePathname, useRouter } from "next/navigation";


export const MinemizeHeader = (): ReactElement => {
  const path = usePathname();
  const router = useRouter();
  return (
    <React.Fragment>
      <header className="py-4 flex justify-end items-center gap-4">
        <Link
          className={`
                hover:text-primary-600 transition-all duration-300
            `}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={`
                 hover:text-primary-600 transition-all duration-300
            `}
          href={"/bag"}
        >
          Revenues
        </Link>
        <Link className="w-20" href={"/perfil"}>
          <Image
            src={path === "/perfil" ? UserBlue : UserSVG}
            alt="User icon"
          ></Image>
        </Link>
      </header>
    </React.Fragment>
  );
};
