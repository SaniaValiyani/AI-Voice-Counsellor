import { FileDown } from "lucide-react";

import { exportDashboard } from "../../utils/pdfExport";
import { exportCSV } from "../../utils/exportCSV";

import { useAnalytics } from "../../hooks/useAnalytics";
import { useCounsellorStore } from "../../store/counsellorStore";

export default function ExportButtons() {

  const profile =
    useCounsellorStore(
      (state) => state.studentProfile
    );

  const analytics =
    useAnalytics(profile.email);

  return (
    <div className="flex gap-3">

      <button
        onClick={exportDashboard}
        className="
          px-4
          py-2
          rounded-xl
          bg-cyan-500
          text-black
          font-semibold
          hover:bg-cyan-400
        "
      >
        <FileDown size={18} />
        PDF
      </button>

      <button
        onClick={() =>
          exportCSV(analytics)
        }
        className="
          px-4
          py-2
          rounded-xl
          bg-green-500
          text-white
          font-semibold
          hover:bg-green-400
        "
      >
        CSV
      </button>

    </div>
  );
}