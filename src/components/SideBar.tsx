"use client";
import React, { useState } from "react";
import { Calculator, PiggyBank, Plus, User, Wallet } from "lucide-react";
import { Menu } from "@/types/Menu";
import Link from "next/link";

const routes: Menu[] = [
  {
    name: "Expenses",
    icon: <Wallet />,
    subMenu: [
      {
        name: "New Expense",
        icon: <Plus width={16} />,
        subRota: "/expense/new-expense",
      },
      {
        name: "My Expenses",
        icon: <Wallet width={16} />,
        subRota: "/expense/archive",
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
    rota: "/perfil",
  },
  {
    name: "Calc",
    icon: <Calculator />,
    rota: "/calc",
  },
];

export const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
    setTimeout(() => setShowText(true), 150);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
    setShowText(false);
    setActiveSubMenu(null);
  };

  return (
    <aside
      className={`fixed z-10 h-full bg-background-secondary transition-all duration-300 ease-in-out ${
        isExpanded ? "w-64" : "w-16"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <nav className="p-2">
        <ul className="space-y-2 text-white">
          {routes.map((route) => (
            <li key={route.name}>
              {route.rota ? (
                <Link
                  href={route.rota}
                  className="flex items-center gap-4 p-2 rounded transition-all duration-200 ease-in-out hover:bg-gray-700"
                >
                  <div className="flex-shrink-0">{route.icon}</div>
                  {showText && (
                    <span className="text-sm whitespace-nowrap animate-in fade-in slide-in-from-left-2 duration-200">
                      {route.name}
                    </span>
                  )}
                </Link>
              ) : (
                <div
                  onMouseEnter={() => setActiveSubMenu(route.name)}
                  className="relative"
                >
                  <div className="flex items-center gap-4 p-2 rounded transition-all duration-200 ease-in-out hover:bg-gray-700 cursor-pointer">
                    <div className="flex-shrink-0">{route.icon}</div>
                    {showText && (
                      <span className="text-sm whitespace-nowrap animate-in fade-in slide-in-from-left-2 duration-200">
                        {route.name}
                      </span>
                    )}
                  </div>

                  {route.subMenu && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeSubMenu === route.name && isExpanded
                          ? "max-h-96 opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 -translate-y-2"
                      }`}
                    >
                      <ul className="mt-1 space-y-1 pl-2">
                        {route.subMenu.map((sub, index) => (
                          <li
                            key={sub.name}
                            className="animate-in fade-in slide-in-from-left-1 duration-200"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <Link
                              href={sub.subRota}
                              className="flex items-center gap-3 p-2 rounded transition-all duration-200 ease-in-out hover:bg-gray-700 hover:translate-x-1"
                            >
                              <div className="flex-shrink-0">{sub.icon}</div>
                              <span className="text-xs whitespace-nowrap">
                                {sub.name}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};