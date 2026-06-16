interface Props {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:scale-105 transition duration-300 cursor-pointer">
      <p className="text-slate-400">
        {title}
      </p>

      <h2 className="text-4xl font-bold text-white mt-3">
        {value}
      </h2>

      <div className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mt-5 rounded-full" />
    </div>
  );
}