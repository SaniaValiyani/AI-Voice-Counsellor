import { useCounsellorStore } from "../../store/counsellorStore";

export default function TopicInsights() {
  const { messages } = useCounsellorStore();

  const allText = messages
    .map((msg) => msg.message)
    .join(" ")
    .toLowerCase();

  const topics = [
    {
      name: "AI",
      keyword: "ai",
      emoji: "🤖",
    },
    {
      name: "Web Development",
      keyword: "web",
      emoji: "🌐",
    },
    {
      name: "Cybersecurity",
      keyword: "cyber",
      emoji: "🔒",
    },
    {
      name: "Cloud",
      keyword: "cloud",
      emoji: "☁️",
    },
    {
      name: "Data Science",
      keyword: "data",
      emoji: "📊",
    },
  ];

  let topTopic = {
    name: "General",
    emoji: "📚",
    count: 0,
  };

  topics.forEach((topic) => {
    const matches =
      allText.split(topic.keyword).length - 1;

    if (matches > topTopic.count) {
      topTopic = {
        name: topic.name,
        emoji: topic.emoji,
        count: matches,
      };
    }
  });

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
        Top Interest
      </h2>

      <div className="mt-4">
        <p className="text-3xl">
          {topTopic.emoji}
        </p>

        <p className="text-white mt-2">
          {topTopic.name}
        </p>
      </div>
    </div>
  );
}