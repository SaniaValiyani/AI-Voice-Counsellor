import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { StudentProfile } from "../types/studentProfile";

import {
  calculateAchievements,
} from "../utils/achievementEngine";

interface Message {
  sender: "user" | "ai";
  message: string;
  timestamp: string;
}

interface CounsellorState {
  isListening: boolean;

  isThinking: boolean;

  isSpeaking: boolean;

  roadmap: string;

  setListening: (
    value: boolean
  ) => void;

  setThinking: (
    value: boolean
  ) => void;

  setSpeaking: (
    value: boolean
  ) => void;

  setRoadmap: (
    roadmap: string
  ) => void;

  clearMessages: () => void;

  transcript: string;

  messages: Message[];

  sentiment: string;

  latestAchievement: string;

  setSentiment: (
    sentiment: string
  ) => void;

  setTranscript: (
    transcript: string
  ) => void;

  addMessage: (
    message: Message
  ) => void;

  studentProfile: StudentProfile;

  updateProfile: (
    profile: Partial<StudentProfile>
  ) => void;

  refreshAchievements: () => void;

  addXP: (
    amount: number
  ) => void;

  toggleGoal: (
    goalId: string
  ) => void;
}

export const useCounsellorStore =
  create<CounsellorState>()(
    persist(
      (set) => ({
        isListening: false,
        isThinking: false,
        isSpeaking: false,

        roadmap: "",

        latestAchievement: "",

        studentProfile: {
          careerGoal: "",

          interests: [],

          skills: [],

          completedSkills: [],

          goalProgress: 0,

          recentTopics: [],

          strengths: [],

          weaknesses: [],

          learningStreak: 1,

          lastActiveDate:
            new Date()
              .toISOString()
              .split("T")[0],

          educationLevel: "",

          preferredLanguage: "",

          achievements: [],

          xp: 0,

          level: 1,

          goals: [],
        },

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

        setRoadmap: (
          roadmap
        ) =>
          set({
            roadmap,
          }),

        updateProfile: (
          profile
        ) =>
          set((state) => ({
            studentProfile: {
              ...state.studentProfile,

              ...profile,

              skills: [
                ...new Set([
                  ...state.studentProfile.skills,

                  ...(profile.skills ||
                    []),
                ]),
              ],
            },
          })),

        refreshAchievements:
          () =>
            set((state) => {

              const updated =
                calculateAchievements(
                  state.studentProfile
                );

              const latest =
                updated.find(
                  (achievement) =>
                    !state.studentProfile.achievements.includes(
                      achievement
                    )
                );

              return {
                studentProfile: {
                  ...state.studentProfile,
                  achievements:
                    updated,
                },

                latestAchievement:
                  latest || "",
              };
            }),

        addXP: (
          amount
        ) =>
          set((state) => {
            const xp =
              state.studentProfile
                .xp + amount;

            const level =
              Math.floor(
                xp / 100
              ) + 1;

            return {
              studentProfile: {
                ...state
                  .studentProfile,

                xp,

                level,
              },
            };
          }),

        toggleGoal: (
          goalId
        ) =>
          set((state) => {

            const updatedGoals =
              state.studentProfile.goals.map(
                (goal) =>
                  goal.id === goalId
                    ? {
                        ...goal,
                        completed:
                          !goal.completed,
                      }
                    : goal
              );

            const completedCount =
              updatedGoals.filter(
                (goal) =>
                  goal.completed
              ).length;

            const totalGoals =
              updatedGoals.length;

            const progress =
              Math.round(
                (completedCount /
                  totalGoals) *
                  100
              );

            const xp =
              state.studentProfile.xp +
              25;

            const level =
              Math.floor(
                xp / 100
              ) + 1;

            return {
              studentProfile: {
                ...state.studentProfile,

                goals:
                  updatedGoals,

                goalProgress:
                  progress,

                xp,

                level,
              },
            };
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

        setTranscript: (
          transcript
        ) =>
          set({
            transcript,
          }),

        addMessage: (
          message
        ) =>
          set((state) => ({
            messages: [
              ...state.messages,
              message,
            ],
          })),

        clearMessages: () =>
          set({
            messages: [
              {
                sender: "ai",
                message:
                  "Hello! I am your AI Counsellor.",
                timestamp:
                  new Date().toLocaleTimeString(),
              },
            ],
            transcript: "",
            sentiment: "Neutral",
          }),
      }),
      {
        name:
          "ai-counsellor-storage",

        partialize: (state) => ({
          messages:
            state.messages,

          transcript:
            state.transcript,

          sentiment:
            state.sentiment,

          studentProfile:
            state.studentProfile,
        }),
      }
    )
  );