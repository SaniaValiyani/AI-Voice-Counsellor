import { Mic } from "lucide-react";
import { motion } from "framer-motion";

import { useCounsellorStore } from "../../store/counsellorStore";

export default function VoiceButton() {
  const {
    setTranscript,
    addMessage,
  } = useCounsellorStore();

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech Recognition not supported"
      );

      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    recognition.lang = "en-IN";

    recognition.start();

    recognition.onresult = (
      event: any
    ) => {
      const text =
        event.results[0][0].transcript;

      setTranscript(text);

      addMessage({
        sender: "user",
        message: text,
      });

      setTimeout(() => {
        addMessage({
          sender: "ai",
          message:
            "Thank you. I understand your query.",
        });
      }, 1000);
    };
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      onClick={startListening}
      className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center"
    >
      <Mic
        size={32}
        className="text-black"
      />
    </motion.button>
  );
}