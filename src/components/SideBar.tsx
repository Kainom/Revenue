"use client";
import React, { useState } from "react";
import { Home, PiggyBank, Wallet } from "lucide-react";

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

  const handleSubMenuEnter = (menu:string) => {
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
        {/* Home Item */}
        <li className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 cursor-pointer">
          <Home className="text-xl" />
          {hovered && <span className="text-sm">Home</span>}
        </li>

        {/* Expenses Item */}
        <li
          className="relative"
          onMouseEnter={() => handleSubMenuEnter("Expenses")}
          onMouseLeave={handleSubMenuLeave}
        >
          <div className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 cursor-pointer">
            <Wallet className="text-xl" />
            {hovered && (
              <span className="text-sm transition-all">Expenses</span>
            )}
          </div>
          {subMenuOpen === "Expenses" && (
            <div className="relative text-white z-10">
              <ul className="space-y-1">
                <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">
                  New Expense
                </li>
                <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">
                  My Expenses
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="relative"
          onMouseEnter={() => handleSubMenuEnter("Revenues")}
          onMouseLeave={handleSubMenuLeave}
        >
          <div
            className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 
          cursor-pointer"
          >
            <PiggyBank className="text-xl" />
            {hovered && (
              <span className="text-sm transition-all">Revenues</span>
            )}
          </div>
          {subMenuOpen === "Revenues" && (
            <div className="relative text-white z-10">
              <ul className="space-y-1">
                <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">
                  Bag
                </li>
                <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">
                  New Revenue
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};
