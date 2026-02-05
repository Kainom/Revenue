import React, { ReactElement } from "react";
import Image from "next/image";
import Logo from "@/assets/financie.svg"; // <-- IMPORTA A LOGO
import { GroupFields } from "@/components/Inputs/GroupFIeldsCredentials";

export default function Login(): ReactElement {
  return (
    <React.Fragment>
   <article className="flex flex-col justify-center items-center">
          <Image
            src={Logo}
            alt="Logo Financie"
            className="mb-3"
            width={200}
            height={200}
          />
      <section className="bg-background-secondary max-[900px]:w-8/12 max-[541px]:w-10/12 md:w-[26rem] rounded-sm p-4 py-6 mx-auto border-sm border-zinc-800 shadow-sm">
        <article className="flex items-center flex-col">
                 

          <strong>
            <h1 className="text-2xl">Logue no Financie</h1>
          </strong>

        </article>

        <article className="mt-1">
          <GroupFields login={true} />
          
          <div className="relative flex items-center justify-center mt-2 before: gap-2">
            <span className="bg-foreground-secondary absolute left-0 top-1/2 h-[0.011rem] max-[362px]:w-1/6 w-1/4"></span>
            <p className="text-foreground-secondary">Bem vindo</p>
            <span className="bg-foreground-secondary absolute right-0 top-1/2 h-[0.011rem] max-[362px]:w-1/6 w-1/4"></span>
          </div>

          <div className="grid grid-cols-2 max-[373px]:grid-cols-1 items-center gap-4 mx-auto max-[439px]:p-0 justify-items-center mt-6 ">
          </div>

        </article>
      </section>
   </article>
    </React.Fragment>
  );
}
