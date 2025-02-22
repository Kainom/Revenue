"use client";
import React, { useState } from "react";
import { Home, PiggyBank, Plus, User, Wallet } from "lucide-react";
import { Menu } from "@/types/Menu";
import Link from "next/link";

const routes: Menu[] = [
  {
    name: "Home",
    icon: <Home />,
    rota: "/",
  },
  {
    name: "Expenses",
    icon: <Wallet />,
    subMenu: [
      {
        name: "New Expense",
        icon: <Plus className="" width={16} />,
        subRota: "/new-expense",
      },
      {
        name: "My Expenses",
        icon: <Wallet width={16} />,
        subRota: "/archive",
      },
    ],
  },
  {
    name: "Revenues",
    icon: <PiggyBank />,
    subMenu: [
      {
        name: "Bag",
        icon: <PiggyBank width={16} />,
        subRota: "/bag",
      },
      {
        name: "New Revenue",
        icon: <Plus width={16} />,
        subRota: "/new",
      },
    ],
  },
  {
    name: "Perfil",
    icon: <User />,
    rota:"perfil"
  },
];

export const SideBar = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [subMenuOpen, setSubMenuOpen] = useState<string | false>(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setSubMenuOpen(false);
  };

  const handleSubMenuEnter = (menu: string) => {
    new Promise((resolve) => setTimeout(resolve, 60)).then(() => {
      setSubMenuOpen(menu);
    });
  };

  const handleSubMenuLeave = () => {
    new Promise((resolve) => setTimeout(resolve, 60)).then(() => {
      setSubMenuOpen(false);
    });
  };

  return (
    <div
      className={`fixed z-10 h-full transition-all duration-300 bg-background-secondary ${
        hovered || subMenuOpen ? "w-64" : "w-16"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="text-white space-y-2 p-2">
        {routes.map((route) => (
          <li
            key={route.name}
            className={`relative`}
            onMouseEnter={() => handleSubMenuEnter(route.name)}
            onMouseLeave={handleSubMenuLeave}
          >
            {route.rota && ( // if exists route.rota then don't exist the subMenu propertys.This is a way to check if the route is a link or a subMenu
              <Link
                className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 cursor-pointer transition-all duration-300"
                href={`${route.rota}`}
              >
                {route.icon}
                {hovered && <span className="text-sm">{route.name}</span>}
              </Link>
            )}

            {route.subMenu && (
              <>
                <div className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 cursor-pointer transition-all duration-300">
                  {route.icon}
                  {hovered && (
                    <span className="text-sm transition-all">{route.name}</span>
                  )}
                </div>
                {subMenuOpen === route.name && (
                  <div className="relative text-white z-10 flex justify-center">
                    <ul className="space-y-1">
                      {route.subMenu.map((sub) => {
                        return (
                          <li
                            key={sub.name}
                            className="p-2  pr-12 hover:bg-gray-700 rounded cursor-pointer transition-all duration-300"
                          >
                            <Link
                              className="flex items-center space-x-4"
                              href={`${sub.subRota}`}
                            >
                              {sub.icon}
                              <span className="text-xs">{sub.name}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
