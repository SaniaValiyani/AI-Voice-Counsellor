import { create } from "zustand";
import { getRecommendations } from "../services/recommendationService";

interface RecommendationState {
  data: any;
  loading: boolean;
  load: () => Promise<void>;
}

export const useRecommendationStore = create<RecommendationState>((set) => ({
  data: null,
  loading: false,

  load: async () => {
    set({ loading: true });

    try {
      const data = await getRecommendations();
      set({ data });
    } finally {
      set({ loading: false });
    }
  },
}));