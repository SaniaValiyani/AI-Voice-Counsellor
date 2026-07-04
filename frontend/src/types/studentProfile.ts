export interface Goal {
  id: string;
  title: string;
  completed: boolean;
}

export interface StudentProfile {
  name: string;
  email: string;

  phone: string;

  college: string;

  branch: string;

  year: string;

  location: string;

  bio: string;

  profileImage: string;

  linkedin: string;

  github: string;

  portfolio: string;

  resume: string;

  careerGoal: string;

  educationLevel: string;

  preferredLanguage: string;

  interests: string[];

  skills: string[];

  completedSkills: string[];

  strengths: string[];

  weaknesses: string[];

  recentTopics: string[];

  xp: number;

  level: number;

  learningStreak: number;

  goalProgress: number;

  careerReadiness: number;

  achievements: string[];

  goals: Goal[];

  timeline: string[];

  lastActiveDate: string;
}