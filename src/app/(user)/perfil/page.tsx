import Image from "next/image";
import React, { ReactElement } from "react";
import Goblin from "@/assets/goblin.png";
import Email from "@/assets/email.svg";
import Local from "@/assets/local.svg";
import Cel from "@/assets/phone.svg";
import Work from "@/assets/work.svg";
import PenEdit from "@/assets/pen-edit.svg";

export default function Perfil(): ReactElement {
  return (
    <React.Fragment>
      <section className="bg-background-tertiary flex flex-col items-center mt-0 p-3  pt-10">
        <article className="w-8/12 p-4 relative ">
          <div className="bg-background-secondary rounded-t-md h-32 flex items-center relative px-4">
            <div className="absolute -bottom-12 left-4  border-4 border-white rounded-full overflow-hidden">
              <Image
                src={Goblin}
                width={120}
                height={120}
                alt="goblin"
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-background-elevated rounded-b-md pt-12 pb-4 text-start h-20">
            <span className="absolute top-28 left-44 ml-4">
              <span className="flex gap-1 mb-1 items-center">
                <h1 className="text-xl font-semibold ">Goblin Choroso</h1>
                <span className="hover:bg-background-elevated px-1.5 py-1 rounded-sm cursor-pointer transition-all duration-300">
                  <Image src={PenEdit} alt="edit icon" />
                </span>
              </span>
              <p className="text-base">Desenvolvedor Full Stack</p>
              <span className="flex items-center gap-2 absolute  w-full mt-1">
                <Image src={Work} alt="Enterprise icon" />
                <p className="text-sm">Perfil Moderado</p>
              </span>
            </span>
          </div>
        </article>
        <article className="w-8/12 p-4 relative  grid md:grid-cols-2  grid-cols-1 gap-6 ">
          <div className="bg-background-secondary p-6 rounded-md pb-20">
            <h1 className="text-lg mb-3">
              <strong>Informações Pessoais </strong>
            </h1>
            <label className="text-sm text-foreground-secondary">Email</label>
            <span className="flex gap-2 items-center mt-1 mb-4">
              <Image src={Email} width={16} color="" alt="email icon" />
              <p className="text-base">example@gmail.com</p>
            </span>
            <label className="text-sm text-foreground-secondary">
              {" "}
              Telefone
            </label>
            <span className="flex gap-2 items-center mt-1 mb-4  ">
              <Image src={Cel} width={16} color="" alt="phone icon" />
              <p className="text-base">+55 11 9999-9999</p>
            </span>
            <label className="text-sm text-foreground-secondary">
              Localização
            </label>
            <span className="flex gap-2 items-center mt-1">
              <Image src={Local} width={16} color="" alt="location icon" />
              <p className="text-base">São Paulo,SP</p>
            </span>
          </div>
          <div className="bg-background-secondary p-6 rounded-md pb-20">
            <h1 className="text-lg mb-3">
              <strong>Informações Pessoais </strong>
            </h1>
            <label className="text-sm text-foreground-secondary">Email</label>
            <span className="flex gap-2 items-center mt-1 mb-4">
              <Image src={Email} width={16} color="" alt="email icon" />
              <p className="text-base">example@gmail.com</p>
            </span>
            <label className="text-sm text-foreground-secondary">
              {" "}
              Telefone
            </label>
            <span className="flex gap-2 items-center mt-1 mb-4  ">
              <Image src={Cel} width={16} color="" alt="phone icon" />
              <p className="text-base">+55 11 9999-9999</p>
            </span>
            <label className="text-sm text-foreground-secondary">
              Localização
            </label>
            <span className="flex gap-2 items-center mt-1">
              <Image src={Local} width={16} color="" alt="location icon" />
              <p className="text-base">São Paulo,SP</p>
            </span>
          </div>
          <div></div>
        </article>
        <article className=" w-8/12 p-4 relative  gap-6">
          <div className="bg-background-elevated rounded-md p-6">
            <h1 className="text-primary-600 mb-2 text-lg">
              <strong>Sobre</strong>
            </h1>
            <p>
              Investidor há 3 anos, focado em construir um patrimônio sólido
              através de uma estratégia diversificada. Busco equilibrar
              investimentos em renda fixa e variável, sempre priorizando o longo
              prazo e a consistência.
            </p>
          </div>
        </article>
      </section>
    </React.Fragment>
  );
}
