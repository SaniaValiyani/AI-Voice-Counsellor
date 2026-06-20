import { create } from "zustand";

interface Message {
  sender: "user" | "ai";
  message: string;
  timestamp: string;
}

interface CounsellorState {
  isListening: boolean;

  isThinking: boolean;

  setListening: (
    value: boolean
  ) => void;

  setThinking: (
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