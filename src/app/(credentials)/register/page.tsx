import { InputField } from "@/components/Inputs/InputField";
import React, { ReactElement } from "react";
import Image from "next/image";
import Google from "@/assets/google.svg";
import GitHub from "@/assets/github.svg";

import Person from "@/assets/person.svg"
import Phone from "@/assets/phone.svg";
import { GroupFields } from "@/components/Inputs/GroupFIeldsCredentials";

export default function Register(): ReactElement {
  return (
    <React.Fragment>
      <section className="bg-background-secondary mx-auto max-[900px]:w-10/12  max-[1040px]:w-2/3  w-2/5  rounded-sm p-6 mt-10">
        <article className="flex items-center flex-col">
          <strong>
            <h1 className="text-2xl">Bem-vindo </h1>
          </strong>
          <p className="text-foreground-secondary max-[333px]:hidden">
            Cadastre-se e venha investir
          </p>
        </article>
        <article className="">
          <GroupFields login={false}>
            <React.Fragment>
              <div className="w-full   mx-auto">
                <Image
                  src={Person}
                  alt="Ícone"
                  width={20} // Largura da imagem
                  height={20} // Altura da imagem
                />
              </div>
              <InputField
                properties={{
                  placeholder: "Your name",
                  type: "text",
                  width: "w-full max-[333px]:w-full",
                  classN: "mx-auto mb-4",
                }}
              ></InputField>
               <div className="w-full    mx-auto">
                <Image
                  src={Phone}
                  alt="Ícone"
                  width={20} // Largura da imagem
                  height={20} // Altura da imagem
                />
              </div>
              <InputField
                properties={{
                  placeholder: "Your phone",
                  type: "tel",
                  width: "w-full max-[333px]:w-full",
                  classN: "mx-auto mb-4",
                }}
              ></InputField>
            </React.Fragment>
          </GroupFields>
          <div className="relative flex   items-center justify-center my-6">
            <span className="absolute bg-foreground-secondary left-0 top-1/2 h-[0.011rem] w-1/4 max-[337px]:w-1/6"></span>
            <p className="text-foreground-secondary text-sm">
             Cadastre-se com
            </p>
           <span className="absolute right-0 top-1/2 w-1/4 h-[0.011rem] bg-foreground-secondary max-[337px]:w-1/6"></span>
          </div>
          <div className="grid grid-cols-2 max-[373px]:grid-cols-1 items-center gap-4 mx-auto max-[439px]:p-0 justify-items-center ">
            <button className="border-sm  border-background-elevated py-1.5 w-10/12   rounded-md flex justify-center items-center gap-4 hover:bg-background-tertiary transition-all duration-300">
              <Image src={Google} alt="Google icon"></Image>
              Google
            </button>
            <button className={`border-sm  border-background-elevated py-1.5 w-10/12 rounded-md flex justify-center items-center gap-4    hover:bg-background-tertiary transition-all duration-300`}>
              <Image src={GitHub} alt="Google icon"></Image>
              GitHub
            </button>
          </div>
        </article>
      </section>
    </React.Fragment>
  );
}
