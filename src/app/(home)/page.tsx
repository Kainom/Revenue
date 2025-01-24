import { MainHeader } from "@/components/MainHeader";
import Image from "next/image";
import React, { ReactElement } from "react";
import LupePng from "@/assets/lupe-coin.jpeg";
export default function Home(): ReactElement {
  return (
    <React.Fragment>
      <main className=" p-2 mt-16 ">
        <section className="grid grid-cols-1  md:grid-cols-2 min-[950px]:px-10 ">
          <article className="flex items-center justify-center p-2">
            <div className=" p-10 py-18   ">
              <h1 className="text-4xl mb-5">
                Invista e planeje seu dinheiro  com inteligência{" "}
              </h1>
              <p className="mb-6">
                Acompanhe seus investimentos, analise e controle seu gastos.
              </p>
              <button className="py-2.5 px-6 bg-primary-600 transition-all duration-300 hover:bg-primary-700 rounded-md 
              
              
              ">Start Now {">"} </button>
              <button className="py-2.5 px-3 ml-3 bg-background-primary shadow-sm shadow-background-secondary transition-all duration-300 hover:bg-foreground-tertiary rounded-md 
              
              
              ">Saiba Mais {">"} </button>
            </div>
            
          </article>
          <article className="min-[990px]:p-5 ">
            <Image
              className="rounded-lg aspect-video"
              src={LupePng}
              alt="Home Image"
            ></Image>
          </article>
        </section>
      </main>
    </React.Fragment>
  );
}
