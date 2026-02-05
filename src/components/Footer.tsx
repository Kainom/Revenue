"use client";
import React, { ReactElement } from "react";

export const Footer = (): ReactElement => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-background-secondary border-t border-zinc-800">

      {/* Onda */}
      <div className="absolute -top-[59px] left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[68px]"
          preserveAspectRatio="none"
        >
          <path fill="rgb(24 24 37)">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
              M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,165.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L0,320Z;
              M0,128L80,138.7C160,149,320,171,480,170.7C640,171,800,149,960,133.3C1120,117,1280,107,1360,101.3L1440,96L1440,320L0,320Z;
              M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,165.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L0,320Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Conteúdo */}
      <div className="py-6">
        <p className="text-center text-xs">
          Copyright © 2024 Kainom. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
