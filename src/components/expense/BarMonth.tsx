"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from "recharts";

import { getAllTotalExpensesByYearOrUntilCurrentMonth } from "@/services/expense";
import { ExpenseTotalMonth, Gasto } from "@/types/Expense";
import { ordene } from "@/utils/MonthLogics";

// Tooltip customizado
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 shadow-xl">
        <p className="text-zinc-400 text-xs font-medium mb-1">
          {payload[0].payload.mes}
        </p>
        <p className="text-white text-lg font-bold">
          R$ {payload[0].value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </p>
      </div>
    );
  }
  return null;
};

export default function BarChartMonth() {
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const now = new Date();

        const months: ExpenseTotalMonth[] =
          await getAllTotalExpensesByYearOrUntilCurrentMonth(
            now.getFullYear(),
            now.getMonth() + 1
          );

        const ordered = ordene(months);

        if (isMounted) {
          setGastos(ordered);
        }
      } catch (error) {
        console.error("Erro ao buscar gastos:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const topGastos = useMemo(() => {
    return [...gastos]
      .sort((a, b) => b.total - a.total)
      .slice(0, 3)
      .map((item) => item.mes);
  }, [gastos]);

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border-sm border-border-dark rounded-sm backdrop-blur-sm shadow-xl flex items-center justify-center h-[300px]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-zinc-700 border-t-zinc-400 rounded-full animate-spin" />
          <p className="text-sm text-zinc-400">Carregando gráfico...</p>
        </div>
      </div>
    );
  }

  if (!gastos.length) {
    return (
      <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border-sm border-border-dark rounded-sm backdrop-blur-sm shadow-xl flex items-center justify-center h-[300px]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-zinc-800/40 flex items-center justify-center">
            <span className="text-3xl">📊</span>
          </div>
          <p className="text-sm text-zinc-400">Sem dados para exibir</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border-sm border-border-dark rounded-sm p-6 backdrop-blur-sm shadow-xl">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart 
          data={gastos} 
          margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorTop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ef4444" stopOpacity={1} />
              <stop offset="100%" stopColor="#dc2626" stopOpacity={0.9} />
            </linearGradient>
            <linearGradient id="colorNormal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#71717a" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#52525b" stopOpacity={0.6} />
            </linearGradient>
          </defs>
          
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#27272a" 
            vertical={false}
          />
          
          <XAxis 
            dataKey="mes" 
            stroke="#71717a"
            tick={{ fill: '#a1a1aa', fontSize: 12 }}
            axisLine={{ stroke: '#3f3f46' }}
            tickLine={false}
          />
          
          <YAxis
            stroke="#71717a"
            tick={{ fill: '#a1a1aa', fontSize: 12 }}
            axisLine={{ stroke: '#3f3f46' }}
            tickLine={false}
            tickFormatter={(value) => 
              value >= 1000 
                ? `R$ ${(value / 1000).toFixed(1)}k` 
                : `R$ ${value}`
            }
          />
          
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(113, 113, 122, 0.1)" }}
          />
          
          <Bar 
            dataKey="total" 
            radius={[8, 8, 0, 0]}
            animationDuration={800}
            animationBegin={0}
          >
            {gastos.map((entry) => (
              <Cell
                key={entry.mes}
                fill={topGastos.includes(entry.mes) ? "url(#colorTop)" : "url(#colorNormal)"}
                className="transition-opacity hover:opacity-80"
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}