import {
  FileText,
  FileJson,
  File
} from "lucide-react";

import {
  exportAsPDF,
  exportAsTXT,
  exportAsJSON,
} from "../../services/exportService";

import { useCounsellorStore }
from "../../store/counsellorStore";

export default function ExportButtons() {
  const { messages } =
    useCounsellorStore();

  return (
    <div className="flex gap-3 flex-wrap">

      <button
        onClick={() =>
          exportAsPDF(messages)
        }
        className="
        px-4 py-2
        rounded-xl
        bg-red-500
        text-white
        flex items-center gap-2
        "
      >
        <FileText size={18}/>
        PDF
      </button>

      <button
        onClick={() =>
          exportAsTXT(messages)
        }
        className="
        px-4 py-2
        rounded-xl
        bg-blue-500
        text-white
        flex items-center gap-2
        "
      >
        <File size={18}/>
        TXT
      </button>

      <button
        onClick={() =>
          exportAsJSON(messages)
        }
        className="
        px-4 py-2
        rounded-xl
        bg-green-500
        text-white
        flex items-center gap-2
        "
      >
        <FileJson size={18}/>
        JSON
      </button>

    </div>
  );
}