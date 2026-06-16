import { useCounsellorStore } from "../../store/counsellorStore";

export default function TranscriptPanel() {
  const { transcript } =
    useCounsellorStore();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
      <h2 className="text-white text-xl mb-4">
        Live Transcript
      </h2>

      <p className="text-slate-300">
        {transcript ||
          "Waiting for speech..."}
      </p>
    </div>
  );
}