interface Props {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <p className="text-slate-400">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-white mt-3">
        {value}
      </h2>
    </div>
  );
}