import Image from "next/image";
import React, { ReactElement } from "react";
import LupePng from "@/assets/lupe-coin.jpeg";
import Calc from "@/assets/calc.svg";
import Book from "@/assets/book.svg";
import Chart from "@/assets/chart.svg";
import { Footer } from "@/components/Footer";
export default function Home(): ReactElement {
  return (
    <React.Fragment>
      <main className=" mt-16 ">
        <section className="grid grid-cols-1  md:grid-cols-2 min-[950px]:px-12 mb-16">
          <article className="flex items-center justify-center p-2">
            <div className=" p-10 py-18 gap-4  ">
              <h1 className="text-4xl mb-5 max-[376px]:hidden">
                Invista e planeje seu dinheiro com inteligência{" "}
              </h1>
              <p className="mb-6">
                Acompanhe seus investimentos, analise e controle seu gastos.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button
                  className="py-2.5 px-6 bg-primary-600 transition-all duration-300 hover:bg-primary-700 rounded-md 
              max-[375px]:w-full
              
              "
                >
                  Start Now {">"}{" "}
                </button>
                <button
                  className="py-2.5 px-3  bg-background-primary shadow-sm shadow-background-secondary transition-all duration-300 hover:bg-foreground-tertiary rounded-md 
                 max-[375px]:w-full
              "
                >
                  Saiba Mais {">"}{" "}
                </button>
              </div>
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
        <section className="bg-background-secondary pt-14 pb-8  ">
          <article className="flex items-center justify-center flex-col mb-6">
            <h2 className="text-center text-3xl font-bold mb-2">
              Tudo que você precisa em um só lugar
            </h2>
            <p>Ferramentas e recursos para otimizar seus investimentos</p>
          </article>
          <article className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 ">
            <div className="bg-background-tertiary rounded-md p-6">
              <Image src={Chart} width={50} alt="calc" className="mb-2"></Image>
              <h3 className="text-xl text-primary-600">Análise de Carteira</h3>
              Visualize a distribuição dos seus investimentos e analise a
              diversificação
            </div>
            <div className="bg-background-tertiary rounded-md p-6 ">
              <Image src={Calc} width={50} alt="calc" className="mb-2"></Image>
              <h3 className="text-xl text-primary-600">
                Calculadora de Investimentos
              </h3>
              <p>Simule rendimentos e planeje seus objetivos financeiros</p>
            </div>
            <div className="bg-background-tertiary rounded-md p-6">
              <Image src={Book} width={50} alt="calc" className="mb-2"></Image>
              <h3 className="text-xl text-primary-600"> Conteúdo Educativo</h3>
              Aprenda sobre diferentes tipos de investimentos e estratégias
            </div>
          </article>
        </section>
        <section className="bg-background-elevated p-10">
          <article className="flex items-center justify-center flex-col mb-6">
            <div className="mb-8 mt-5">
              <h2 className="text-center text-3xl font-bold mb-4 max-[374px]:hidden">
                Comece sua jornada de investimentos hoje
              </h2>
              <p>
              Junte-se a milhares de investidores que já estão transformando sua vida financeira 
                <span className="block text-primary-600  text-center">nossa plataforma.</span>
              </p>
            </div>

            <a
              href=""
              className="bg-primary-600 hover:bg-primary-700 transition-all duration-300 px-10 py-3.5 rounded-md"
            >
              Criar Conta Gratuita
            </a>
          </article>
        </section >
        <Footer/>
      </main>
    </React.Fragment>
  );
}
