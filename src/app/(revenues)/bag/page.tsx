import React from "react";
import { Revenue } from "@/types/Revenue";
import { getRevenues } from "@/services/api";
import { GridRevenues } from "@/components/revenue/Grid";
import { TrendingUp, Wallet } from "lucide-react";

export default async function Revenues() {
  const revenues: Revenue[] = await getRevenues();
 
  const total = revenues
    .map((e) => e.investimento)
    .reduce((total, revenue) => total + revenue, 0);

  return (
    <React.Fragment>
      <main className="min-h-screen pb-32 relative">
        {/* Header */}
        <div className="w-10/12 mx-auto pt-8 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-green-400" />
            </div>
            <h1 className="text-3xl font-bold text-white">My Revenues</h1>
          </div>
          <p className="text-sm text-zinc-400 ml-13">
            Track and manage your investment portfolio
          </p>
        </div>

        {/* Grid */}
        <GridRevenues revenues={revenues} />

        {/* Total Card - Fixed Bottom */}
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-transparent pt-8 pb-6 backdrop-blur-sm z-10 mt-4">
          <div className="w-8/12 mx-auto">
            <div className="bg-gradient-to-r from-green-500/10 to-green-600/5 border-sm border-green-500/30 rounded-lg px-6 py-4 shadow-xl shadow-green-500/10 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-medium mb-0.5">
                      Total Invested
                    </p>
                    <p className="text-2xl font-bold text-green-400">
                      R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-xs text-zinc-500">Total Assets</p>
                  <p className="text-lg font-semibold text-zinc-300">{revenues.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}