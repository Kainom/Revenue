import { InputField } from "@/components/Inputs/InputField";
import React, { ReactElement } from "react";
import GitHub from "@/assets/github.svg";
import Google from "@/assets/google.svg";
import Image from "next/image";
import Email from "@/assets/email.svg";
import Lock from "@/assets/lock.svg";

export default function Register(): ReactElement {
  return (
    <React.Fragment>
      <section className="bg-background-secondary mx-auto  w-2/5 rounded-sm p-6 ">
        <article className="flex items-center flex-col">
          <strong>
            <h1 className="text-2xl">Bem-vindo de volta</h1>
          </strong>
          <p className="text-foreground-secondary">
            Entre com suas credenciais para acessar sua conta
          </p>
        </article>
        <article className="mt-5">
          <form className="grid  gap-2 items-center px-2 py-4" action="#">
            <div className="w-11/12   mx-auto">
              <Image
                src={Email}
                alt="Ícone"
                width={20} // Largura da imagem
                height={20} // Altura da imagem
              />
            </div>
            <InputField
              properties={{
                placeholder: "E-mail",
                type: "email",
                width: "w-11/12",
                classN: "mx-auto ",
              }}
            ></InputField>
            <div className="w-11/12 mt-2  mx-auto">
              <Image
                src={Lock}
                alt="Ícone"
                width={20} // Largura da imagem
                height={20} // Altura da imagem
              />
            </div>
            <InputField
              properties={{
                placeholder: "Password",
                type: "password",
                width: "w-11/12",
                classN: "mx-auto",
              }}
            ></InputField>
            <p className="text-xs text-primary-600 cursor-pointer hover:text-primary-700 transition-all duration-300 w-11/12 mx-auto  text-end my-3">
              Esqueceu sua Senha?
            </p>
            <button className="bg-primary-600 py-1.5 rounded-sm hover:bg-primary-700 transition-all duration-300 w-11/12 mx-auto">
              Entrar {"->"}
            </button>
          </form>
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
          <div className="grid grid-cols-2   items-center gap-4 mx-auto p-4 justify-items-center ">
            <button className="border-sm  border-background-elevated py-1.5 w-10/12 rounded-md flex justify-center items-center gap-4 hover:bg-background-tertiary transition-all duration-300">
              <Image src={Google} alt="Google icon"></Image>
              Google
            </button>
            <button className="border-sm  border-background-elevated py-1.5 w-10/12 rounded-md flex justify-center items-center gap-4 hover:bg-background-tertiary transition-all duration-300">
              <Image src={GitHub} alt="Google icon"></Image>
              GitHub
            </button>
          </div>
        </article>
      </section>
    </React.Fragment>
  );
}
