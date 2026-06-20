import { Mic } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguageStore } from "../../store/languageStore";
import { useCounsellorStore } from "../../store/counsellorStore";
import { sendChat } from "../../services/chatService";
import VoiceWave from "./VoiceWave";

export default function VoiceButton() {
  const {
    setTranscript,
    addMessage,
    setListening,
    setThinking,
    isListening,
    messages,
    setSentiment,
  } = useCounsellorStore();

  const { language } = useLanguageStore();

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    if (language === "English") recognition.lang = "en-IN";
    if (language === "Hindi") recognition.lang = "hi-IN";
    if (language === "Gujarati") recognition.lang = "gu-IN";
    if (language === "Marathi") recognition.lang = "mr-IN";

    recognition.start();
    setListening(true);

    recognition.onresult = async (event: any) => {
      const text = event.results[0][0].transcript;

      setTranscript(text);
      setListening(false);
      setThinking(true);

      addMessage({
        sender: "user",
        message: text,
        timestamp: new Date().toLocaleTimeString(),
      });

      const data = await sendChat(text, messages);

      setSentiment(data.sentiment);

      addMessage({
        sender: "ai",
        message: data.reply,
        timestamp: new Date().toLocaleTimeString(),
      });
    };
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {isListening && <VoiceWave />}

      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        onClick={startListening}
        className={`relative w-24 h-24 rounded-full transition-all duration-300 flex items-center justify-center border ${
          isListening
            ? "bg-gradient-to-br from-red-500 to-rose-600 scale-110 shadow-[0_0_60px_rgba(239,68,68,0.8)] border-red-300/40"
            : "bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_40px_rgba(34,211,238,0.5)] border-cyan-200/40"
        }`}
      >
        <div
          className={`absolute inset-0 rounded-full ${
            isListening ? "animate-ping bg-red-500/15" : "animate-pulse bg-cyan-300/10"
          }`}
        />

        <Mic size={30} className={isListening ? "text-white" : "text-slate-950"} />
      </motion.button>

      <p className={isListening ? "text-red-300" : "text-slate-400"}>
        {isListening ? "Listening..." : "Tap to speak"}
      </p>
    </div>
  );
}