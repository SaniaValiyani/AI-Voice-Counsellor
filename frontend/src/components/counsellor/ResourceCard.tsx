interface Props {
  title: string;
  url: string;
}

export default function ResourceCard({
  title,
  url,
}: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="
      block
      bg-white/5
      backdrop-blur-lg
      rounded-2xl
      p-4
      hover:bg-white/10
      transition
      border
      border-white/10
      "
    >
      <h3
        className="
        text-white
        font-semibold
        "
      >
        {title}
      </h3>

      <p
        className="
        text-cyan-400
        text-sm
        mt-2
        "
      >
        Open Resource ↗
      </p>
    </a>
  );
}