import { useCounsellorStore } from "../../store/counsellorStore";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  report: any;
}

export default function MonthlyReportCard({
  report,
}: Props) {
  const { studentProfile } = useCounsellorStore();

  const reportText =
    report?.report || "Generating your AI report...";

  const preview =
    report?.report
      ? report.report.split("\n").slice(0, 2).join("\n")
      : "Generating your AI report...";

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h3 className="text-lg font-semibold text-white">
        📄 Progress Report
      </h3>

      <div className="mt-3 space-y-3">
        <p className="whitespace-pre-wrap text-sm leading-6 text-slate-300 line-clamp-3">
          {preview}
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <button className="text-sm font-medium text-indigo-400 transition hover:text-indigo-300 hover:underline">
              View Full Report →
            </button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 p-0 shadow-2xl">

            {/* Header */}
            <div className="sticky top-0 z-10 border-b border-slate-700 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur">
              <DialogHeader className="px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <DialogTitle className="text-2xl font-bold text-white">
                      📄 AI Progress Report
                    </DialogTitle>

                    <p className="mt-2 text-sm text-slate-300">
                      Personalized insights based on your learning journey.
                    </p>
                  </div>

                  <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-500/30">
                    AI Generated
                  </span>
                </div>
              </DialogHeader>
            </div>

            {/* Body */}
            <div className="max-h-[72vh] overflow-y-auto px-8 py-6">

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Goal
                  </p>
                  <p className="mt-2 font-semibold text-white">
                    {studentProfile.careerGoal || "Not Set"}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Skills
                  </p>
                  <p className="mt-2 text-2xl font-bold text-white">
                    {studentProfile.skills.length}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Streak
                  </p>
                  <p className="mt-2 text-2xl font-bold text-orange-400">
                    🔥 {studentProfile.learningStreak}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Progress
                  </p>
                  <p className="mt-2 text-2xl font-bold text-emerald-400">
                    {Math.min(studentProfile.skills.length * 10, 100)}%
                  </p>
                </div>

              </div>

              {/* Report */}
              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Report Details
                </h3>

                <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-6">
                  <pre className="whitespace-pre-wrap text-sm leading-7 text-slate-300">
                    {reportText}
                  </pre>
                </div>
              </div>

            </div>

          </DialogContent>
        </Dialog>

        <div className="border-t border-slate-800 pt-3 text-sm space-y-1 text-slate-300">
          <p>
            🎯 Goal: {studentProfile.careerGoal || "Not Set"}
          </p>

          <p>
            📚 Skills: {studentProfile.skills.length}
          </p>

          <p>
            🔥 Streak: {studentProfile.learningStreak} days
          </p>

          <p>
            📈 Progress:{" "}
            {Math.min(
              studentProfile.skills.length * 10,
              100
            )}
            %
          </p>
        </div>
      </div>
    </div>
  );
}