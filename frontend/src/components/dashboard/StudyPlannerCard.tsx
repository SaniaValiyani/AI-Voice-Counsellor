import { useCounsellorStore } from "../../store/counsellorStore";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function StudyPlannerCard() {
  const roadmap = useCounsellorStore(
    (s) => s.roadmap
  );

  const preview = roadmap
    ? roadmap.split("\n").slice(0, 3).join("\n")
    : "";

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h3 className="text-lg font-semibold text-white">
        📅 Today's Plan
      </h3>

      {roadmap ? (
        <>
          <pre
            className="
              mt-3
              whitespace-pre-wrap
              text-sm
              leading-6
              text-slate-300
              line-clamp-3
            "
          >
            {preview}
          </pre>

          <Dialog>
            <DialogTrigger asChild>
              <button
                className="
                  mt-4
                  text-sm
                  font-medium
                  text-indigo-400
                  transition
                  hover:text-indigo-300
                  hover:underline
                "
              >
                View Full Plan →
              </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-5xl max-h-[90vh] overflow-hidden p-0 border border-slate-700 bg-slate-900">
              <div className="bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-indigo-600/20 border-b border-slate-700">
                <DialogHeader className="px-6 py-5">
                  <DialogTitle className="text-xl font-bold text-white">
                    📅 Personalized Study Plan
                  </DialogTitle>

                  <p className="text-sm text-slate-400">
                    Your AI-generated roadmap and action plan.
                  </p>
                </DialogHeader>
              </div>

              <div className="max-h-[72vh] overflow-y-auto px-6 py-6">
                <pre
                  className="
                    whitespace-pre-wrap
                    text-sm
                    leading-7
                    text-slate-300
                  "
                >
                  {roadmap}
                </pre>
              </div>
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <div className="mt-3 animate-pulse text-sm text-slate-400">
          Generating today's plan...
        </div>
      )}
    </div>
  );
}