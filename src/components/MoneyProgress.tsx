import React from "react";

const Bar = ({ 
  title, 
  percentage, 
  color = "bg-emerald-500",
  showGlow = false 
}: { 
  title: string; 
  percentage: number;
  color?: string;
  showGlow?: boolean;
}) => {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-baseline">
        <span className="text-xs sm:text-sm font-medium text-zinc-300">{title}</span>
        <span className="text-xs font-semibold text-zinc-400">{percentage.toFixed(1)}%</span>
      </div>
      <div className="relative w-full bg-zinc-800/40 rounded-full h-1.5 overflow-hidden border border-zinc-800/15">
        {/* Barra de progresso */}
        <div
          className={`h-full ${color} transition-all duration-700 ease-out relative`}
          style={{ width: `${percentage}%` }}
        >
          {/* Efeito de brilho */}
          {showGlow && percentage > 5 && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          )}
        </div>
      </div>
    </div>
  );
};

export const ExpensesDivision = ({
  value,
  total,
  title,
}: {
  value: number;
  total: number;
  title: string;
}) => {
  const percentage: number = Math.min((value / total) * 100, 100);
  
  let color: string;
  let showGlow = false;
  
  if (title === "Essenciais") {
    if (percentage > 70) {
      color = "bg-red-500";
    } else if (percentage > 50) {
      color = "bg-orange-500";
    } else {
      color = "bg-emerald-500";
      showGlow = true;
    }
  } else if (title === "Não Essenciais") {
    if (percentage > 30) {
      color = "bg-red-500";
    } else if (percentage > 20) {
      color = "bg-orange-500";
    } else {
      color = "bg-emerald-500";
      showGlow = true;
    }
  } else if (title === "Investimentos") {
    if (percentage >= 20) {
      color = "bg-emerald-500";
      showGlow = true;
    } else if (percentage >= 10) {
      color = "bg-blue-500";
    } else {
      color = "bg-orange-500";
    }
  } else {
    color = "bg-emerald-500";
  }

  return (
    <div className="py-2.5 sm:py-3">
      <Bar title={title} percentage={percentage} color={color} showGlow={showGlow} />
      <div className="flex justify-between mt-1.5">
        <span className="text-xs text-zinc-500">R$ {value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
        <span className="text-xs text-zinc-500">Total: R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
      </div>
    </div>
  );
};

export const MoneyProgress = ({
  current,
  goal,
  title,
  meta = false,
}: {
  current: number;
  goal: number;
  title: string;
  meta?: boolean;
}) => {
  const percentage: number = Math.min((current / goal) * 100, 100);
  const isNearGoal = percentage >= 80;
  
  const color = percentage >= 100 
    ? "bg-emerald-500" 
    : percentage >= 75 
    ? "bg-blue-500" 
    : percentage >= 50 
    ? "bg-cyan-500" 
    : "bg-indigo-500";

  return (
    <div className="py-2.5 sm:py-3">
      <Bar title={title} percentage={percentage} color={color} showGlow={isNearGoal} />
      {meta && (
        <div className="flex justify-between mt-1.5 gap-2">
          <span className="text-xs text-zinc-500 truncate">
            Atual: R$ {current.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
          <span className="text-xs text-zinc-500 shrink-0">
            Meta: R$ {goal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
        </div>
      )}
    </div>
  );
};