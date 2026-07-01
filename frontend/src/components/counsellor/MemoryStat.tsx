interface Props {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export default function MemoryStat({
  icon,
  title,
  value,
}: Props) {
  return (
    <div
      className="
      rounded-2xl
      bg-slate-800/60
      border
      border-slate-700
      p-4
      transition-all
      duration-300
      hover:border-cyan-400
      hover:shadow-lg
      hover:shadow-cyan-500/10
      "
    >
      <div className="flex items-center gap-2 text-cyan-400 mb-2">
        {icon}
        <span className="text-sm font-medium">
          {title}
        </span>
      </div>

      <p className="text-white wrap-break-words">
        {value}
      </p>
    </div>
  );
}