import { Bar, BarChart, Cell, ResponsiveContainer } from "recharts";
import styles from "./DailyProfitChart.module.css";

interface DailyProfitChartProps {
  data: number[];
}

export const DailyProfitChart = ({ data }: DailyProfitChartProps) => {
  const chartData = data.map((value, index) => ({
    day: index + 1,
    value: Math.abs(value),
    isPositive: value >= 0,
  }));

  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width="100%" height={40}>
        <BarChart
          data={chartData}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <Bar
            dataKey="value"
            radius={[2, 2, 0, 0]}
            isAnimationActive={false}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.isPositive
                    ? "var(--color-green-4)"
                    : "var(--color-pink-1)"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
