import { create } from "zustand";
import { getRecommendations } from "../services/recommendationService";

interface RecommendationData {
  careerPaths: string[];
  skillsToLearn: string[];
  courses: string[];
  certifications: string[];
  projects: string[];
  resources: {
    title: string;
    url: string;
  }[];
}

interface Store {
  data: RecommendationData | null;
  loading: boolean;
  load: () => Promise<void>;
}

export const useRecommendationStore =
create<Store>((set)=>({

data:null,

loading:false,

load:async()=>{

set({loading:true});

try{

const data=
await getRecommendations();

set({data});

}

finally{

set({loading:false});

}

}

}));