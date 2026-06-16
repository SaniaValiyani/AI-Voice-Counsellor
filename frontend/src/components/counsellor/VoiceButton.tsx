import { Mic } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguageStore } from "../../store/languageStore";
import { useCounsellorStore } from "../../store/counsellorStore";

export default function VoiceButton() {
  const {
    setTranscript,
    addMessage,
    setListening,
    setThinking,
    isListening,
  } = useCounsellorStore();

  const { language } = useLanguageStore();

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

    if (language === "English") {
      recognition.lang = "en-IN";
    }

    if (language === "Hindi") {
      recognition.lang = "hi-IN";
    }

    if (language === "Gujarati") {
      recognition.lang = "gu-IN";
    }

    if (language === "Marathi") {
      recognition.lang = "mr-IN";
    }

    recognition.start();
    setListening(true);

    recognition.onresult = (
      event: any
    ) => {
      const text =
        event.results[0][0].transcript;

      setTranscript(text);
      setListening(false);
      setThinking(true);

      addMessage({
        sender: "user",
        message: text,
        timestamp:
          new Date().toLocaleTimeString(),
      });

      setTimeout(() => {
        setThinking(false);
        addMessage({
          sender: "ai",
          message:
            "Thank you. I understand your query.",
          timestamp:
            new Date().toLocaleTimeString(),
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
      className={`
        w-24 h-24
        rounded-full
        shadow-2xl
        transition-all
        duration-300
        flex
        items-center
        justify-center
        ${
          isListening
            ? "bg-red-500 scale-110 shadow-red-500/50"
            : "bg-cyan-500"
        }
        `}
    >
      <Mic
        size={32}
        className="text-black"
      />

      {
        isListening ? (
          <p className="text-red-400">
            Listening...
          </p>
        ) : (
          <p className="text-slate-400">
            Tap to speak
          </p>
        )
      }

    </motion.button>
  );
}