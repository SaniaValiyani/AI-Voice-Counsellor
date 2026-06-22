interface Props {
  roadmap: string;
}

export default function CareerRoadmap({
  roadmap,
}: Props) {
  if (!roadmap) return null;

  return (
    <div
      className="
      bg-white/5
      backdrop-blur-lg
      rounded-2xl
      p-5
      mt-5
      "
    >
      <h2 className="text-2xl font-bold text-white mb-4">
        🚀 Career Roadmap
      </h2>

      <div
        className="
        whitespace-pre-wrap
        text-slate-200
        leading-8
        "
      >
        {roadmap}
      </div>
    </div>
  );
}