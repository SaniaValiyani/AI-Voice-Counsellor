import { create } from "zustand";

interface Message {
  sender: "user" | "ai";
  message: string;
  timestamp: string;
}

interface CounsellorState {
  isListening: boolean;

  isThinking: boolean;

  isSpeaking: boolean;

  sessionStartTime: number;

  setListening: (
    value: boolean
  ) => void;

  setThinking: (
    value: boolean
  ) => void;

  setSpeaking: (
    value: boolean
  ) => void;

  clearMessages: () => void;
  transcript: string;

  messages: Message[];

  sentiment: string;

  setSentiment: (
    sentiment: string
  ) => void;

  setTranscript: (
    transcript: string
  ) => void;

  addMessage: (
    message: Message
  ) => void;
}

export const useCounsellorStore =
  create<CounsellorState>((set) => ({
    isListening: false,
    isThinking: false,
    isSpeaking: false,

    sessionStartTime: Date.now(),

    transcript: "",

    sentiment: "Neutral",

    setListening: (value) =>
      set({
        isListening: value,
      }),

    setThinking: (value) =>
      set({
        isThinking: value,
      }),

    setSpeaking: (value) =>
      set({
        isSpeaking: value,
      }),

    messages: [
      {
        sender: "ai",
        message:
          "Hello! I am your AI Counsellor.",
        timestamp:
          new Date().toLocaleTimeString(),
      },
    ],

    setSentiment: (
      sentiment
    ) =>
      set({
        sentiment,
      }),

    setTranscript: (transcript) =>
      set({
        transcript,
      }),

    addMessage: (message) =>
      set((state) => ({
        messages: [
          ...state.messages,
          message,
        ],
      })),

    clearMessages: () =>
      set({
        messages: [],
      }),

  }));