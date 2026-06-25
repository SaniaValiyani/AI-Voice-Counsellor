export interface StudentProfile {
  careerGoal: string;

  interests: string[];

  skills: string[];

  educationLevel: string;

  preferredLanguage: string;

  recentTopics: string[];

  strengths: string[];

  weaknesses: string[];

  completedSkills: string[];

  goalProgress: number;

  learningStreak: number;

  lastActiveDate: string;

  achievements: string[];

  xp: number;

  level: number;

  goals: {
    id: string;
    title: string;
    completed: boolean;
  }[];

  careerReadiness: number;

  timeline: string[];

}