import { useCounsellorStore }
from "../../store/counsellorStore";

export default function SentimentBadge() {
  const { sentiment } =
    useCounsellorStore();

  const styles = {
    Positive:
      "bg-green-500/20 text-green-400",
    Neutral:
      "bg-yellow-500/20 text-yellow-400",
    Negative:
      "bg-red-500/20 text-red-400",
  };

  const emoji = {
    Positive: "😊",
    Neutral: "😐",
    Negative: "😟",
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
      <h2 className="text-white text-xl">
        Sentiment
      </h2>

      <div
        className={`mt-4 inline-block px-4 py-2 rounded-full ${
          styles[
            sentiment as keyof typeof styles
          ]
        }`}
      >
        {sentiment}
        {" "}
        {
          emoji[
            sentiment as keyof typeof emoji
          ]
        }
      </div>
    </div>
  );
}