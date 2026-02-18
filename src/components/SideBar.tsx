"use client";

import React, { useState, useEffect } from "react";
import {
  PiggyBank,
  Plus,
  User,
  Wallet,
  ChevronRight,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "@/types/Menu";

/* -------------------- ROTAS -------------------- */

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
];

/* -------------------- HEADER MOBILE -------------------- */

const HeaderMobile = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-16 md:hidden
      bg-gradient-to-r from-zinc-900/95 to-zinc-950/95
      backdrop-blur-sm border-b border-zinc-800/50
      flex items-center justify-between px-5 shadow-lg"
    >
      <button
        onClick={toggle}
        aria-label="Toggle menu"
        className="text-zinc-400 hover:text-zinc-100 transition-colors p-1"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>

      <h1 className="text-base font-semibold tracking-wide text-zinc-100">
        Financie
      </h1>

      <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
        <User size={18} />
      </div>
    </header>
  );
};

/* -------------------- SIDEBAR -------------------- */

export const SideBar = () => {
  const pathname = usePathname();

  const [isExpanded, setIsExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* Detectar mobile */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* Fechar menu mobile ao trocar rota */
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  /* Bloquear scroll no mobile */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  /* Controlar exibição de conteúdo com delay */
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isExpanded) {
      // Pequeno delay para começar a mostrar o conteúdo após a sidebar começar a expandir
      timer = setTimeout(() => {
        setShowContent(true);
      }, 50);
    } else {
      // Esconde o conteúdo imediatamente ao começar a colapsar
      setShowContent(false);
    }

    return () => clearTimeout(timer);
  }, [isExpanded]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsExpanded(false);
      setActiveSubMenu(null);
    }
  };

  const isActiveRoute = (path: string) => pathname === path;
  const isActiveParent = (subs: { subRota: string }[]) =>
    subs.some((s) => pathname === s.subRota);

  return (
    <>
      {/* Spacer para o conteúdo mobile - empurra o conteúdo para baixo */}
      {isMobile && <div className="h-16 md:hidden" />}

      {/* Header só existe no mobile */}
      {isMobile && (
        <HeaderMobile
          isOpen={isMobileOpen}
          toggle={() => setIsMobileOpen(!isMobileOpen)}
        />
      )}

      {/* Overlay mobile */}
      {isMobile && isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          fixed z-50
          bg-gradient-to-b from-zinc-900/95 to-zinc-950/95
          backdrop-blur-sm border-r border-zinc-800/50 shadow-2xl
          transition-all duration-300 ease-in-out
          ${
            isMobile
              ? `top-16 bottom-0 ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} w-64`
              : `inset-y-0 left-0 ${isExpanded ? "w-64" : "w-16"}`
          }
        `}
      >
        <nav
          className={`
            p-3
            ${isMobile ? "pt-4" : "pt-6"}
          `}
        >
          <ul className="space-y-2">
            {routes.map((route) => (
              <li key={route.name}>
                {route.rota ? (
                  <Link
                    href={route.rota}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300
                    ${
                      isActiveRoute(route.rota)
                        ? isExpanded || isMobile
                          ? "bg-red-500/20 text-red-400"
                          : "text-red-400"
                        : "text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-100"
                    }
                    ${!isExpanded && !isMobile ? "justify-center" : ""}
                  `}
                  >
                    <span className="flex-shrink-0 transition-transform duration-300">
                      {route.icon}
                    </span>
                    <span
                      className={`text-sm whitespace-nowrap transition-all duration-300 ${
                        showContent || isMobile
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2 w-0 overflow-hidden"
                      }`}
                    >
                      {route.name}
                    </span>
                  </Link>
                ) : (
                  <>
                    <div
                      onClick={() =>
                        isMobile &&
                        setActiveSubMenu(
                          activeSubMenu === route.name ? null : route.name,
                        )
                      }
                      onMouseEnter={() =>
                        !isMobile && isExpanded && setActiveSubMenu(route.name)
                      }
                      className={`flex items-center px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-300
                                ${
                                  isActiveParent(route.subMenu || [])
                                    ? isExpanded || isMobile
                                      ? "bg-red-500/20 text-red-400"
                                      : "text-red-400"
                                    : "text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-100"
                                }
                                ${!isExpanded && !isMobile ? "justify-center" : "justify-between"}
                              `}
                    >
                      <div
                        className={`flex items-center gap-3 ${!isExpanded && !isMobile ? "" : "min-w-0"}`}
                      >
                        <span className="flex-shrink-0 transition-transform duration-300">
                          {route.icon}
                        </span>
                        <span
                          className={`text-sm whitespace-nowrap transition-all duration-300 ${
                            showContent || isMobile
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-2 w-0 overflow-hidden"
                          }`}
                        >
                          {route.name}
                        </span>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                          showContent || isMobile
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-2 w-0"
                        } ${activeSubMenu === route.name ? "rotate-90" : ""}`}
                      />
                    </div>

                    {route.subMenu && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeSubMenu === route.name &&
                          (isExpanded || isMobile)
                            ? "max-h-96 opacity-100 mt-1"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="space-y-1 pl-6">
                          {route.subMenu.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.subRota}
                                className={`flex items-center gap-2 px-2 py-2 rounded text-xs transition-colors
                                  ${
                                    isActiveRoute(sub.subRota)
                                      ? "text-red-400 bg-red-500/10"
                                      : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/40"
                                  }`}
                              >
                                <span className="flex-shrink-0">
                                  {sub.icon}
                                </span>
                                <span className="whitespace-nowrap">
                                  {sub.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Indicador visual de expansão - apenas desktop */}
        {!isMobile && (
          <div
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
              isExpanded ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-zinc-600 animate-pulse" />
              <div className="w-1 h-1 rounded-full bg-zinc-600 animate-pulse delay-75" />
              <div className="w-1 h-1 rounded-full bg-zinc-600 animate-pulse delay-150" />
            </div>
          </div>
        )}
      </aside>
    </>
  );
};
