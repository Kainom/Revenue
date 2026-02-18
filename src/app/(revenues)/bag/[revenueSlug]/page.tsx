import { getRevenue } from "@/services/api";
import { Revenue } from "@/types/Revenue";
import React, { ReactElement } from "react";
import Link from "next/link";
import { DollarSign, Calendar as CalendarIcon, Building2, Clock, Percent, FileText, Edit, ArrowLeft, TrendingUp } from "lucide-react";
import { notFound } from "next/navigation";

type Slug = {
  params: Promise<{ revenueSlug: string }>;
};

export default async function RevenuePage({
  params,
}: Slug): Promise<ReactElement> {
  const zero = (day: number): string => {
    return `${day > 10 ? day : "0" + day}`;
  };

  const { revenueSlug } = await params;
  const slug = revenueSlug.replace("%20", " ");
  const revenue: Revenue | null = await getRevenue(slug);
  if (!revenue) notFound();

  const dayCreation = revenue.dataCriacao.getDate();
  const dayMaturity = revenue.vencimento.getDate();
  const dayCarency = revenue.carencia.getDate();

  const monthCreation = revenue.dataCriacao.getMonth() + 1;
  const monthMaturity = revenue.vencimento.getMonth() + 1;
  const monthCarency = revenue.carencia.getMonth() + 1;

  const dateCreation = `${zero(dayCreation)}/${zero(monthCreation)}/${revenue.dataCriacao.getFullYear()}`;
  const dateMaturity = `${zero(dayMaturity)}/${zero(monthMaturity)}/${revenue.vencimento.getFullYear()}`;
  const dateCarency = `${zero(dayCarency)}/${zero(monthCarency)}/${revenue.carencia.getFullYear()}`;

  return (
    <React.Fragment>
      <main className="min-h-screen py-8 px-4">
        {/* Back Button */}
        <div className="w-2/3 mx-auto mb-6">
          <Link
            href="/bag"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Header */}
        <div className="w-2/3 mx-auto mb-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/10 border-4 border-green-500/30 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">{revenue.nome}</h1>
              <p className="text-sm text-zinc-400">Investment Details & Performance</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border-sm border-border-dark w-2/3 mx-auto rounded-lg shadow-2xl overflow-hidden">
          
          {/* Cards Grid */}
          <div className="p-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
            
            {/* Values Card */}
            <div className="bg-zinc-900/40 border-sm border-zinc-800/50 rounded-lg p-5 hover:border-zinc-700/50 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="font-semibold text-zinc-100">Financial Details</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <p className="text-zinc-400">Investment:</p>
                  <p className="font-semibold text-white">R$ {revenue.investimento.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-zinc-400">Yield Rate:</p>
                  <p className="font-semibold text-green-400">{revenue.rendimento}%</p>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-zinc-800/50">
                  <p className="text-zinc-400">Final Value:</p>
                  <p className="font-bold text-white">
                    {revenue.finalInvestimento === 0
                      ? "Not Informed"
                      : `R$ ${revenue.finalInvestimento.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                  </p>
                </div>
              </div>
            </div>

            {/* Dates Card */}
            <div className="bg-zinc-900/40 border-sm border-zinc-800/50 rounded-lg p-5 hover:border-zinc-700/50 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-md bg-purple-500/20 flex items-center justify-center">
                  <CalendarIcon className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="font-semibold text-zinc-100">Important Dates</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <p className="text-zinc-400">Created:</p>
                  <p className="font-semibold text-white">{dateCreation}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-zinc-400">Maturity:</p>
                  <p className="font-semibold text-white">{dateMaturity}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-zinc-400">Grace Period:</p>
                  <p className="font-semibold text-white">{dateCarency}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Details Row */}
          <div className="px-6 py-5 border-t border-b border-zinc-800/50 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-zinc-400" />
              </div>
              <div>
                <p className="text-xs text-zinc-500">Institution</p>
                <h3 className="font-semibold text-zinc-100">{revenue.instituition}</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center">
                <Clock className="w-5 h-5 text-zinc-400" />
              </div>
              <div>
                <p className="text-xs text-zinc-500">Liquidity</p>
                <h3 className="font-semibold text-zinc-100">{revenue.liquidez}</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center">
                <Percent className="w-5 h-5 text-zinc-400" />
              </div>
              <div>
                <p className="text-xs text-zinc-500">Index</p>
                <h3 className="font-semibold text-zinc-100">
                  {revenue.indexado ? revenue.indexado : "Not indexed"}
                </h3>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-md bg-zinc-800/50 flex items-center justify-center">
                <FileText className="w-4 h-4 text-zinc-400" />
              </div>
              <h3 className="font-semibold text-zinc-100">Description</h3>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {revenue.description}
            </p>
          </div>

          {/* Actions */}
          <div className="px-6 pb-6 flex gap-3">
            <Link
              className="flex items-center gap-2 px-5 py-2.5 text-sm bg-zinc-50 text-zinc-900 font-semibold rounded-lg hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              href={"/edit"}
            >
              <Edit className="w-4 h-4" />
              Edit Investment
            </Link>
            <Link
              className="flex items-center gap-2 px-5 py-2.5 text-sm border-sm border-zinc-700 text-zinc-100 font-medium rounded-lg hover:bg-zinc-800/50 transition-all duration-300"
              href={"/bag"}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}