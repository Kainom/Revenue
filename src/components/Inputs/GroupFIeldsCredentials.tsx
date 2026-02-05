import { InputField } from "@/components/Inputs/InputField";
import React, { FC, ReactElement } from "react";
import GitHub from "@/assets/github.svg";
import Google from "@/assets/google.svg";
import Image from "next/image";
import Email from "@/assets/email.svg";
import Lock from "@/assets/lock.svg";
import { Interface } from "readline";

interface Group {
  login: boolean;
  children?: ReactElement;
}

export const GroupFields: FC<Group> = ({ login, children }): ReactElement => {
  return (
    <React.Fragment>
      <form className="grid  gap-2 items-center px-2 py-4 " action="#">
        {children}
        <div className="w-full  mx-auto">
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
            width: "w-full" ,
            classN: "mx-auto border-border-lightest",
          }}
        ></InputField>
        <div className="w-full mt-4  mx-auto">
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
            width: "w-full max-[333px]:w-full",
            classN: "mx-auto border-border-lightest",
          }}
        ></InputField>
        {login && (
          <p className="text-xs my-5 text-primary-600 cursor-pointer hover:text-primary-700 transition-all duration-300 w-full mx-auto  text-end">
            Esqueceu sua Senha?
          </p>
        )}

        <button
          className={`${
            login ? "" : " mt-10 "
          }bg-primary-600 py-1.5 rounded-sm hover:bg-primary-700 transition-all duration-300 w-full mx-auto`}
        >
          {login ? "Entrar" : "Cadastrar"}
        </button>
      </form>
    </React.Fragment>
  );
};
