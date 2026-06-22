import { useCounsellorStore } from "../../store/counsellorStore";

export default function CareerInterestMeter() {
  const { messages } = useCounsellorStore();

  const text = messages
    .map((m) => m.message)
    .join(" ")
    .toLowerCase();

  const interests = [
    {
      name: "AI",
      emoji: "🤖",
      keyword: "ai",
    },
    {
      name: "Web",
      emoji: "🌐",
      keyword: "web",
    },
    {
      name: "Cyber",
      emoji: "🔒",
      keyword: "cyber",
    },
    {
      name: "Cloud",
      emoji: "☁️",
      keyword: "cloud",
    },
    {
      name: "Data",
      emoji: "📊",
      keyword: "data",
    },
  ];

  const counts = interests.map(
    (interest) => {
      const count =
        text.split(
          interest.keyword
        ).length - 1;

      return {
        ...interest,
        count,
      };
    }
  );

  const total =
    counts.reduce(
      (sum, item) =>
        sum + item.count,
      0
    ) || 1;

  return (
    <div
      className="
      bg-white/5
      backdrop-blur-lg
      rounded-2xl
      p-5
      "
    >
      <h2 className="text-white text-xl">
        Career Interest Meter
      </h2>

      <div className="space-y-4 mt-4">
        {counts.map((item) => {
          const percentage =
            Math.round(
              (item.count /
                total) *
                100
            );

          return (
            <div
              key={item.name}
            >
              <div className="flex justify-between">
                <span>
                  {item.emoji}{" "}
                  {item.name}
                </span>

                <span>
                  {percentage}%
                </span>
              </div>

              <div className="w-full h-2 bg-slate-700 rounded-full mt-1">
                <div
                  className="h-2 bg-cyan-400 rounded-full"
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}