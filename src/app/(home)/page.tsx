import React, { ReactElement } from "react";
import Image from "next/image";
import Logo from "@/assets/financie.svg";
import { GroupFields } from "@/components/Inputs/GroupFIeldsCredentials";

export default function Login(): ReactElement {
  return (
    <React.Fragment>
      <div className="min-h-screen flex items-center justify-center  mb-10">
        <article className="flex flex-col items-center w-full max-w-md">
          {/* Logo */}
          <div className="">
            <Image
              src={Logo}
              alt="Logo Financie"
              className="transition-transform duration-300 hover:scale-105"
              width={180}
              height={180}
              priority
            />
          </div>

          {/* Card de Login */}
          <section className="w-full max-[900px]:w-11/12 max-[541px]:w-full bg-zinc-900/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border-4 border-zinc-800/20 shadow-lg">
            {/* Título */}
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Logue no Financie
              </h1>
              <p className="text-sm text-zinc-400">
                Acesse sua conta para continuar
              </p>
            </div>

            {/* Formulário */}
            <GroupFields login={true} />

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800/30" />
              </div>
              <div className="relative px-4 bg-zinc-900/40">
                <p className="text-xs text-zinc-500">Bem vindo de volta</p>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center">
              <p className="text-xs text-zinc-600">
                © 2024 Financie. Todos os direitos reservados.
              </p>
            </div>
          </section>
        </article>
      </div>
    </React.Fragment>
  );
}