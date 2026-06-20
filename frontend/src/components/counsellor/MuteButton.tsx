import { VolumeX }
from "lucide-react";

import {
  stopSpeaking,
}
from "../../services/speechService";

export default function MuteButton() {
  return (
    <button
      onClick={stopSpeaking}
      className="
      bg-red-500
      rounded-xl
      px-4
      py-2
      "
    >
      <VolumeX />
    </button>
  );
}