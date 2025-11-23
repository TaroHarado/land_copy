"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

interface CircularProgressProps {
  progress: number;
  value: string;
  label: string;
}

export const CircularProgress = ({
  progress,
  value,
  label,
}: CircularProgressProps) => {
  const data = [
    { name: "progress", value: progress },
    { name: "remaining", value: 100 - progress },
  ];

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-[140px] w-[140px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={60}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
              cornerRadius={8}
            >
              <Cell key="progress" fill="var(--color-blue)" />
              <Cell key="remaining" fill="var(--color-grey-17)" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute top-0 left-0 flex h-full w-full items-center justify-center">
          <span className="font-inter text-grey-18 text-[15px]">{value}</span>
        </div>
      </div>
      <p className="font-inter text-grey-18 text-center text-[15px]">{label}</p>
    </div>
  );
};
