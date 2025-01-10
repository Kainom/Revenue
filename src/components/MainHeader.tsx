"use client";
import React, { ReactElement } from "react";
import { NavLink } from "./NavLink";
import Link from "next/link";
import Image from "next/image";
import UserSVG from "@/assets/user.svg";
import UserBlue from "@/assets/userBlue.svg";
import { usePathname } from "next/navigation";

export const MainHeader = (): ReactElement => {
  const path = usePathname();
  return (
    <React.Fragment>
      <header className=" bg-background-secondary flex items-center justify-between">
        <NavLink></NavLink>
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
