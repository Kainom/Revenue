"use client";
import React, { ReactElement, useEffect, useState } from "react";

export const InputDate = (): ReactElement => {
  const [data, setData] = useState("");

  useEffect(() => {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const dia = String(hoje.getDate()).padStart(2, "0");

    setData(`${ano}-${mes}-${dia}`);
  }, []);

  return (
    <input
      type="date"
      name="dataCriacao"
      value={data}
      onChange={(e) => setData(e.target.value)}
      className="border-sm border-border-light mb-4 px-4 rounded-sm text-zinc-50 bg-background-secondary focus:ring-2 focus:ring-zinc-700 w-full py-1.5 hover:bg-zinc-700 transition-all duration-300"
    />
  );
};
