"use client";
import React, { ReactElement } from "react";
import { NavLink } from "./NavLink";
import Link from "next/link";
import Image from "next/image";
import UserSVG from "@/assets/user.svg";
import UserBlue from "@/assets/userBlue.svg";
import { usePathname } from "next/navigation";
import { UserSvg } from "./UserSvg";

export const MainHeader = (): ReactElement => {
  const path = usePathname();
  return (
    <React.Fragment>
      <header className=" bg-background-secondary flex items-center justify-between">
        <NavLink></NavLink>
        <Link className="w-12" href={"/perfil"}>
         <UserSvg w="30" h="30"/>
        </Link>
      </header>
    </React.Fragment>
  );
};
