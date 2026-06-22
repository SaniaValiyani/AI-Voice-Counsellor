interface Props {
  title: string;
  items: string[];
}

export default function RecommendationCard({
  title,
  items,
}: Props) {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-lg
      rounded-2xl
      p-4
      "
    >
      <h3 className="font-bold text-white mb-3">
        {title}
      </h3>

      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item}>
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}