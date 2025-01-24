"use client";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";

type PropsUser = {
  w?: string;
  h?: string;
  className?: string;
  src?: string;
  alt?: string;
};
export const UserSvg = ({
  w = "24",
  h = "24",
  className,
  src,
  alt,
}: PropsUser): ReactElement => {
  const path = usePathname();
  if (!w || w === "") {
    w = "24";
  }
  if (!h || h === "") {
    h = "24";
  }
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${w}`}
        height={`${h}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`feather feather-user ${
          path === "/perfil"
            ? "stroke-primary-600"
            : "hover:stroke-primary-600 transition-all duration-300"
        }`}
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </React.Fragment>
  );
};
