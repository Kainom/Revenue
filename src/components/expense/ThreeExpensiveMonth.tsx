"use client";

import { getThreeMonthMostExpensive } from "@/services/expense";
import { ExpenseTotalMonth } from "@/types/Expense";
import { getNamedMonthOfDate } from "@/utils/sequenceTime";
import { TrendingUp, Crown } from "lucide-react";
import React, { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const currentYear: number = new Date().getFullYear();

const getPodiumColors = (index: number) => {
  const colors = [
    {
      gradient: "from-amber-500/20 to-amber-600/10",
      border: "border-amber-500/30",
      text: "text-amber-400",
      glow: "shadow-amber-500/20",
      icon: <Crown className="w-4 h-4" />,
    },
    {
      gradient: "from-zinc-400/20 to-zinc-500/10",
      border: "border-zinc-400/30",
      text: "text-zinc-300",
      glow: "shadow-zinc-500/20",
      icon: <TrendingUp className="w-4 h-4" />,
    },
    {
      gradient: "from-orange-600/20 to-orange-700/10",
      border: "border-orange-600/30",
      text: "text-orange-400",
      glow: "shadow-orange-500/20",
      icon: <TrendingUp className="w-4 h-4" />,
    },
  ];
  return colors[index] || colors[2];
};

export const ThreeExpensiveMonth = (): ReactElement => {
  const [threeMostExpensive, setThreeMostExpensive] = useState<ExpenseTotalMonth[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getThreeMonthMostExpensive(currentYear);
        setThreeMostExpensive(data);
      } catch (error) {
        console.error("Error fetching expensive months:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleMonthClick = (monthId: string) => {
    const monthName = getNamedMonthOfDate(monthId);
    router.push(`/expense/archive/${monthName}`);
  };

  if (loading) {
    return (
      <React.Fragment>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border-sm border-zinc-800/50 rounded-sm p-5 shadow-lg animate-pulse"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-6 bg-zinc-700/50 rounded" />
              <div className="w-20 h-6 bg-zinc-700/50 rounded-full" />
            </div>
            <div className="space-y-2">
              <div className="w-32 h-8 bg-zinc-700/50 rounded" />
              <div className="w-24 h-4 bg-zinc-700/50 rounded" />
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {threeMostExpensive.map((month, index) => {
        const style = getPodiumColors(index);
        
        return (
          <button
            key={month.id}
            onClick={() => handleMonthClick(month.id)}
            className={`
              group
              bg-gradient-to-br ${style.gradient}
              backdrop-blur-sm
              border-sm ${style.border}
              rounded-sm
              p-5
              shadow-lg ${style.glow}
              transition-all
              duration-300
              hover:shadow-xl
              hover:-translate-y-1
              hover:scale-[1.02]
              active:scale-[0.98]
              cursor-pointer
              w-full
              text-left
            `}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className={`${style.text} font-bold text-lg transition-transform group-hover:scale-110`}>
                  #{index + 1}
                </span>
                <span className={`${style.text} transition-transform group-hover:scale-110`}>
                  {style.icon}
                </span>
              </div>
              <span className={`text-xs ${style.text} font-medium px-2 py-1 rounded-full bg-black/20 transition-colors group-hover:bg-black/30`}>
                Top Expense
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-3xl font-bold text-white">
                R$ {month.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
              <div className="flex items-center gap-2">
                <p className="text-sm text-zinc-400">
                  {getNamedMonthOfDate(month.id)}
                </p>
                <span className="text-xs text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  → View details
                </span>
              </div>
            </div>
          </button>
        );
      })}
    </React.Fragment>
  );
};