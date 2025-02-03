import React from "react";

const Bar = ({ title, percentage,color = "bg-green-500"}: { title: string; percentage: number,color?:string }) => {
  return (
    <>
      <div className="flex justify-between  text-xs text-foreground-secondary font-semibold mb-1">
        <span>{title}</span>
        <span>{percentage.toFixed(1)}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </>
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
  console.log(percentage);
  console.log(title);
  const color: string = (title === "Essenciais" && percentage > 50 || title === "Não Essenciais" && percentage > 20)
      ? "bg-red-500"  
      : " bg-green-500";

  console.log(color);
  return (
    <>
      <div className="w-full   pt-4 rounded-lg">
        <Bar title={title} percentage={percentage} color={color} />
      </div>
    </>
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

  return (
    <div className="w-full   pt-4 rounded-lg">
      <Bar title={title} percentage={percentage} />
      <div className="flex justify-between text-xs text-foreground-secondary mt-2">
        <span>
          {meta ? "Atual:" : ""} R$ {current}
        </span>
        {meta ? <span>Meta: R$ {goal}</span> : ""}
      </div>
    </div>
  );
};
