import { Mic, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguageStore } from "../../store/languageStore";
import { useCounsellorStore } from "../../store/counsellorStore";
import { sendChat } from "../../services/chatService";
import VoiceWave from "./VoiceWave";
import { speakText } from "../../services/speechService";

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
    recognition.maxAlternatives = 5;
    recognition.interimResults = true;

    if (language === "English") recognition.lang = "en-IN";
    if (language === "Hindi") recognition.lang = "hi-IN";
    if (language === "Gujarati") recognition.lang = "gu-IN";
    if (language === "Marathi") recognition.lang = "mr-IN";

    window.speechSynthesis.cancel();

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

      // sendChat expects 4 arguments; pass language and an empty options object
      const data = await sendChat(text, messages, language, {});

      setSentiment(data.sentiment);

      addMessage({
        sender: "ai",
        message: data.reply,
        timestamp: new Date().toLocaleTimeString(),
      });
      speakText(
        data.reply,
        language
      );
    };
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {isListening && <VoiceWave />}

      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        animate={
          isListening
            ? {
                scale: [1, 1.08, 1],
              }
            : {}
        }
        transition={{
          repeat: isListening ? Infinity : 0,
          duration: 1.5,
        }}
        onClick={startListening}
        className="
          relative
          w-28
          h-28
          rounded-full
          overflow-hidden
          flex
          items-center
          justify-center
          shadow-2xl
        "
      >
        {/* Outer Glow */}

        <div
          className={`
            absolute
            inset-0
            rounded-full
            blur-xl
            transition-all
            duration-500
            ${
              isListening
                ? "bg-red-500/60 animate-pulse"
                : "bg-cyan-500/40"
            }
          `}
        />

        {/* Orb */}

        <div
          className={`
            absolute
            inset-2
            rounded-full
            border
            backdrop-blur-xl
            ${
              isListening
                ? "bg-linear-to-br from-red-500 via-rose-500 to-orange-500 border-red-200/40"
                : "bg-linear-to-br from-cyan-400 via-sky-500 to-blue-600 border-cyan-200/40"
            }
          `}
        />

        {/* Sparkles */}

        {!isListening && (
          <Sparkles
            size={18}
            className="
              absolute
              top-4
              right-5
              text-white
              opacity-80
            "
          />
        )}

        <Mic
          size={34}
          className="relative z-10 text-white"
        />
      </motion.button>

      <p
        className="
          text-sm
          font-medium
          tracking-wide
          transition-all
          duration-300
          text-slate-300
        "
      >
        {isListening
          ? "🎙️ Listening..."
          : "✨ Ask anything"}
      </p>
    </div>
  );
}