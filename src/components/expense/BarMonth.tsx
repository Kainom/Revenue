'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

type Gasto = { mes: string; gastos: number };

const data: Gasto[] = [
  { mes: 'Jan', gastos: 1200 },
  { mes: 'Fev', gastos: 900 },
  { mes: 'Mar', gastos: 760 },
  { mes: 'Apr', gastos: 0 },
  { mes: 'May', gastos: 0 },
  { mes: 'Jun', gastos: 0 },
  { mes: 'Jul', gastos: 1123 },
  { mes: 'Aug', gastos: 0 },
  { mes: 'Set', gastos: 1150 },
  { mes: 'Oct', gastos: 0 },
  { mes: 'Nov', gastos: 0 },
  { mes: 'Dez', gastos: 0 },

];

export default function BarCharMonth() {
    const topGastos = [...data].sort((a, b) => b.gastos - a.gastos).slice(0, 3).map(item => item.mes);

  return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} barCategoryGap="95%">
              <XAxis dataKey="mes" stroke="#fafafa" />
              <YAxis stroke="#fff" tickFormatter={(value) => `R$ ${value}`} />
              <Tooltip 
                cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }} 
                contentStyle={{ backgroundColor: '#1F1F23', borderColor: '#374151', color: '#fafafa' }} 
                formatter={(value) => `R$ ${value}`} 
              />
              <Bar dataKey="gastos" radius={[4, 4, 0, 0]} fill='#afa'>
                {data.map((entry) => (
                  <Cell key={entry.mes} fill={topGastos.includes(entry.mes) ? '#ef4444' : '#fff'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
  );
}


