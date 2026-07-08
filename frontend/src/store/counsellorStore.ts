import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { StudentProfile } from "../types/studentProfile";

import {
  calculateAchievements,
} from "../utils/achievementEngine";

import {
  calculateCareerReadiness,
} from "../utils/careerReadiness";

import {
  saveProfile,
  loadProfile,
}
from "../services/studentService";

import {
 saveMessage,
 loadMessages,
}
from "../services/chatHistoryService";

import {
fetchRoadmap,
} from "../services/roadmapService";

import {
  saveSettings,
  loadSettings,
} from "../services/settingsService";

interface Message {
  sender: "user" | "ai";
  message: string;
  timestamp: string;
}

interface Settings {
  theme: string;
  language: string;
  aiPersonality: string;
  voiceRate: number;
  voicePitch: number;
  notifications: boolean;
}

interface CounsellorState {
  isListening: boolean;

  isThinking: boolean;

  isSpeaking: boolean;

  roadmap: string;

  settings: Settings;

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

  setMessages: (
    messages: Message[]
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

  loadStudentProfile:
    () => Promise<void>;

  persistProfile:
    () => Promise<void>;

  loadChatHistory:
    () => Promise<void>;

  updateSettings:
    (settings: Partial<Settings>) => void;

  loadRoadmap:
  () => Promise<void>;

  loadSettings: () => Promise<void>;

  persistSettings: () => Promise<void>;
}

export const useCounsellorStore =
  create<CounsellorState>()(
    persist(
      (set) => ({
        isListening: false,
        isThinking: false,
        isSpeaking: false,

        isGeneratingGoals: false,

        roadmap: "",

        latestAchievement: "",

        studentProfile: {
          name: "",

          email: "",

          phone: "",

          college: "",

          branch: "",

          year: "",

          location: "",

          bio: "",

          profileImage: "",

          linkedin: "",

          github: "",

          portfolio: "",

          resume: "",
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

          timeline: [],

          careerReadiness: 0,
        },

        settings: {

          theme: "dark",

          language: "English",

          aiPersonality: "Friendly",

          voiceRate: 1,

          voicePitch: 1,

          notifications: true,

      },

      updateSettings:(settings)=>{

      set(state=>({

      settings:{

      ...state.settings,

      ...settings,

      },

      }));

      },

      loadSettings: async () => {
        const settings = await loadSettings();

        if (!settings) return;

        set({
          settings,
        });
      },

      persistSettings: async () => {
        const state = useCounsellorStore.getState();

        await saveSettings(state.settings);
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
        ) => {

          set((state) => ({
            studentProfile: {
              ...state.studentProfile,

              ...profile,

              skills: [
                ...new Set([
                  ...state.studentProfile.skills,
                  ...(profile.skills || []),
                ]),
              ],
            },
          }));

          setTimeout(() => {

            useCounsellorStore
              .getState()
              .persistProfile();

          }, 0);
        },
        loadStudentProfile:
        async () => {

          const profile =
            await loadProfile();

          if (!profile)
            return;

          const {
            _id,
            __v,
            createdAt,
            updatedAt,
            ...cleanProfile
          } = profile;

          set({
            studentProfile:
              cleanProfile,
          });
        },

        loadRoadmap:
        async()=>{

        const profile=
        useCounsellorStore
        .getState()
        .studentProfile;

        const roadmap=
        await fetchRoadmap(
        profile.email
        );

        set({
        roadmap,
        });

        },

        persistProfile:
          async () => {

            const state =
              useCounsellorStore.getState();

            await saveProfile(
              state.studentProfile
            );
          },

        loadChatHistory:
        async () => {

        const messages =
        await loadMessages();

        set({
          messages,
        });
        },

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
        ) => {

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

            const readiness =
              calculateCareerReadiness(
                state.studentProfile.skills,
                completedCount,
                totalGoals,
                state.studentProfile.learningStreak
              );

            const timelineEntry =
              `Completed: ${
                updatedGoals.find(
                  (goal) =>
                    goal.id === goalId
                )?.title
              }`;

            return {
              studentProfile: {
                ...state.studentProfile,

                goals:
                  updatedGoals,

                goalProgress:
                  progress,

                xp,

                level,

                careerReadiness:
                  readiness,

                timeline: [
                  ...state.studentProfile
                    .timeline,

                  timelineEntry,
                ],
              },
            };
          });

          setTimeout(() => {

            useCounsellorStore
              .getState()
              .persistProfile();

          }, 0);
        },

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

        addMessage:
        (message) => {

        set((state) => ({
          messages:[
          ...state.messages,
          message,
          ],
        }));

        saveMessage(
          message
        );
        },

        setMessages: (
          messages
        ) =>
          set({
            messages,
          }),

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