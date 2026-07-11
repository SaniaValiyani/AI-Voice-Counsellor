export default function SentimentCard() {
  return (
    <div className="bg-slate-900
border
border-slate-800
hover:border-cyan-500/40
hover:shadow-lg
hover:shadow-cyan-500/10
transition-all
duration-300 rounded-2xl p-6">
      <h2 className="text-white text-xl">
        Sentiment
      </h2>

      <div className="mt-8">
        <div className="text-green-400 text-5xl font-bold">
          82%
        </div>

        <p className="text-slate-400 mt-3">
          Positive Conversations
        </p>
      </div>
    </div>
  );
}