import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = [
  "#06b6d4",
  "#8b5cf6",
  "#22c55e",
  "#f97316",
];

const data = [
  {
    name: "English",
    value: 35,
  },
  {
    name: "Hindi",
    value: 30,
  },
  {
    name: "Gujarati",
    value: 20,
  },
  {
    name: "Marathi",
    value: 15,
  },
];

export default function LanguageChart() {
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
        Language Usage
      </h2>

      <div className="h-72 min-w-0">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}