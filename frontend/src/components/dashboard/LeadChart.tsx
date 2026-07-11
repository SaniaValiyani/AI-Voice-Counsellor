import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Hot",
    value: 24,
  },
  {
    name: "Warm",
    value: 41,
  },
  {
    name: "Cold",
    value: 15,
  },
];

export default function LeadChart() {
  return (
    <div className="bg-slate-900
      border
      border-slate-800
      hover:border-cyan-500/40
      hover:shadow-lg
      hover:shadow-cyan-500/10
      transition-all
      duration-300 rounded-2xl p-6">
      <h2 className="text-white text-xl mb-5">
        Lead Analytics
      </h2>

      <div className="h-72 min-w-0">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}