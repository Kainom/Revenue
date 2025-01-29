import { InputField } from "@/components/Inputs/InputField";
import React, { ReactElement } from "react";
import GitHub from "@/assets/github.svg";
import Google from "@/assets/google.svg";
import Image from "next/image";
import Email from "@/assets/email.svg";
import Lock from "@/assets/lock.svg";
import { GroupFields } from "@/components/Inputs/GroupFIeldsCredentials";

export default function Register(): ReactElement {
  return (
    <React.Fragment>
      <section className="bg-background-secondary mx-auto max-[900px]:w-8/12  max-[541px]:w-10/12  md:w-2/5  rounded-sm p-6 mt-10">
        <article className="flex items-center flex-col">
          <strong>
            <h1 className="text-2xl">Bem-vindo de volta</h1>
          </strong>
          <p className="text-foreground-secondary">
            Entre com suas credenciais para acessar sua conta
          </p>
        </article>
        <article className="mt-5">
          <GroupFields login={true}/>
          <div className="relative flex  flex-col items-center justify-center mt-4">
            <p className="text-foreground-secondary text-sm">
              Nao tem uma conta? Cadastre-se
            </p>
            <p
              className="text-foreground-secondary  mt-5
           "
            >
              Ou continue com
            </p>
          </div>
          <div className="grid grid-cols-2 max-[373px]:grid-cols-1 items-center gap-4 mx-auto max-[439px]:p-0 justify-items-center mt-4 ">
            <button className="border-sm  border-background-elevated py-1.5 w-10/12 rounded-md flex justify-center items-center gap-4 hover:bg-background-tertiary transition-all duration-300">
              <Image src={Google} alt="Google icon"></Image>
              Google
            </button>
            <button className={`border-sm  border-background-elevated py-1.5 w-10/12 rounded-md flex justify-center items-center gap-4 hover:bg-background-tertiary transition-all duration-300`}>
              <Image src={GitHub} alt="Google icon"></Image>
              GitHub
            </button>
          </div>
        </article>
      </section>
    </React.Fragment>
  );
}
