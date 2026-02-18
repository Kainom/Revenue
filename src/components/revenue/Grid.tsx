import { Revenue } from "@/types/Revenue";
import { BadgePercent, DollarSign, Calendar, TrendingUp, Building2 } from "lucide-react";
import Link from "next/link";
import { ButtonsToBag } from "./ButtonsToBag";

export const GridRevenues = ({ revenues }: { revenues: Revenue[] }) => {
  return (
    <div className="flex justify-center py-6">
      {revenues.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-20 h-20 rounded-full bg-zinc-800/40 flex items-center justify-center mb-4">
            <TrendingUp className="w-10 h-10 text-zinc-600" />
          </div>
          <p className="text-zinc-400 text-lg">No revenues yet</p>
          <p className="text-zinc-600 text-sm mt-1">Start by adding your first investment</p>
        </div>
      ) : (
        <ul className="flex justify-center gap-5 flex-wrap max-w-7xl">
          {revenues.map((revenue) => (
            <li
              key={revenue.id}
              className="group bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border-sm border-zinc-800/50 rounded-lg shadow-lg hover:shadow-xl hover:border-zinc-700/50 transition-all duration-300 overflow-hidden w-[320px]"
            >
              <Link href={`/bag/${revenue.slug}`} className="block">
                <div className="p-5">
                  {/* Header with badge */}
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors line-clamp-2">
                      {revenue.nome}
                    </h3>
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 border-sm border-green-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                  </div>

                  {/* Investment Value - Destacado */}
                  <div className="bg-gradient-to-r from-green-500/10 to-green-600/5 border-sm border-green-500/20 rounded-lg px-4 py-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-md bg-green-500/20 flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-xs text-zinc-400 font-medium">Investment</span>
                      </div>
                      <p className="text-xl font-bold text-green-400">
                        R$ {revenue.investimento.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="space-y-3">
                    {/* Yield Rate */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <BadgePercent className="w-4 h-4" />
                        <span>Yield Rate</span>
                      </div>
                      <p className="font-semibold text-white">
                        {revenue.indexado ? `${revenue.indexado} + ` : ""}
                        {revenue.rendimento}%
                      </p>
                    </div>

                    {/* Maturity Date */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <Calendar className="w-4 h-4" />
                        <span>Maturity</span>
                      </div>
                      <p className="font-semibold text-white">
                        {revenue.vencimento.toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </p>
                    </div>

                    {/* Institution */}
                    {revenue.instituition && (
                      <div className="flex items-center justify-between text-sm pt-2 border-t border-sm border-zinc-800/50">
                        <div className="flex items-center gap-2 text-zinc-400">
                          <Building2 className="w-4 h-4" />
                          <span>Institution</span>
                        </div>
                        <p className="font-medium text-zinc-300 truncate max-w-[150px]">
                          {revenue.instituition}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Link>

              {/* Actions Footer */}
              <div className="px-5 pb-5">
                <ButtonsToBag id={revenue.id} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};