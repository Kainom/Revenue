"use client";
import React, { ReactElement, use, useEffect, useState } from "react";

export const InputDate = (): ReactElement => {
    const [data, setData] = useState('');

    useEffect(() => {
      const hoje = new Date();
      const ano = hoje.getFullYear();
      const mes = (hoje.getMonth() + 1).toString().padStart(2, '0'); // Sempre dois dígitos no mês
      const dia = hoje.getDate().toString().padStart(2, '0'); // Dois dígitos no dia
  
      setData(`${ano}-${mes}-${dia}`); // Define a data inicial como hoje
    }, []);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setData(e.target.value);
    };
  
    // Obtendo limites
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = (hoje.getMonth() + 1).toString().padStart(2, '0'); // Sempre dois dígitos
    const ultimoDiaMes = new Date(ano, hoje.getMonth() + 1, 0).getDate(); // Último dia do mês atual
    const minData = `${ano}-${mes}-01`; // Primeiro dia do mês atual
    const maxData = `${ano}-${mes}-${ultimoDiaMes}`; // Último dia do mês atual
  
  return (
    <React.Fragment>
      <input
        type="date"
        value={data}
        onChange={handleChange}
        className="border-sm border-border-light mb-4     px-4 rounded-sm text-zinc-50 bg-background-secondary focus:ring-2 focus:ring-zinc-700 w-full py-1.5 hover:bg-zinc-700 transition-all duration-300"
        min={minData} // Impede meses anteriores
        max={maxData} // Permite qualquer dia do mês atual
      />
    </React.Fragment>
  );
};
