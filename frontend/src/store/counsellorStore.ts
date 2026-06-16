import { create } from "zustand";

interface Message {
  sender: "user" | "ai";
  message: string;
}

interface CounsellorState {
  transcript: string;

  messages: Message[];

  setTranscript: (
    transcript: string
  ) => void;

  addMessage: (
    message: Message
  ) => void;
}

export const useCounsellorStore =
  create<CounsellorState>((set) => ({
    transcript: "",

    messages: [
      {
        sender: "ai",
        message:
          "Hello! I am your AI Counsellor.",
      },
    ],

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
  }));