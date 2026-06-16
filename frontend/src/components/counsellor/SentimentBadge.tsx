export default function SentimentBadge() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
      <h2 className="text-white text-xl">
        Sentiment
      </h2>

      <div className="mt-4 inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400">
        Positive 😊
      </div>
    </div>
  );
}