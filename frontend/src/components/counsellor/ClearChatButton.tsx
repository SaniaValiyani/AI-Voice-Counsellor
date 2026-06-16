import { Trash2 } from "lucide-react";

import { useCounsellorStore }
from "../../store/counsellorStore";

export default function ClearChatButton() {
  const { clearMessages } =
    useCounsellorStore();

  return (
    <button
      onClick={clearMessages}
      className="flex items-center gap-2 px-4 py-2 bg-red-500 rounded-xl text-white"
    >
      <Trash2 size={18} />
      Clear Chat
    </button>
  );
}