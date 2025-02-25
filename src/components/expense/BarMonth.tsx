"use client";

import { getAllTotalExpensesByYear } from "@/services/expense";
import { ExpenseTotalMonth, Gasto } from "@/types/Expense";
import { changeToMonth } from "@/utils/ChangeToMonth";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";



export default function BarCharMonth() {
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [topGastos, setTopGastos] = useState<string[]>([]);

  useEffect(() => {
    async function getAll() {
      const months: ExpenseTotalMonth[] = await getAllTotalExpensesByYear();
      const gastos: Gasto[] = changeToMonth(months);
      setGastos(gastos);
      console.log(gastos);
      
      const gasto: string[] = [...gastos]
        .sort((a, b) => b.total - a.total)
        .slice(0, 3)
        .map((item) => item.mes);
      setTopGastos(gasto);
    }
    getAll();

    // Cleanup function
    
    return () => {
      setGastos([]);
      setTopGastos([]);
    };


  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={gastos} barCategoryGap="95%">
        <XAxis dataKey="mes" stroke="#fafafa" />
        <YAxis stroke="#fff" tickFormatter={(value) => `R$ ${value}`} />
        <Tooltip
          cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
          contentStyle={{
            backgroundColor: "#1F1F23",
            borderColor: "#374151",
            color: "#fafafa",
          }}
          formatter={(value) => `R$ ${value}`}
        />
        <Bar dataKey="total" radius={[4, 4, 0, 0]} fill="#afa">
          {gastos.map((entry) => (
            <Cell
              key={entry.mes}
              fill={topGastos.includes(entry.mes) ? "#ef4444" : "#fff"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
