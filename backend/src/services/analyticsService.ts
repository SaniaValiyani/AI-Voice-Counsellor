import Student from "../models/Student";

type Goal = {
  id?: string | null;
  title?: string | null;
  completed?: boolean;
};

export async function getAnalytics(email: string) {
  const student = await Student.findOne({ email });

  if (!student) {
    throw new Error("Student not found");
  }

  const totalSessions = student.timeline?.length ?? 0;

  const goals = (student.goals as any as Goal[]).map((goal: Goal) => ({
    id: goal.id,
    title: goal.title,
    completed: !!goal.completed,
  }));

  const completedGoals = goals.filter((g: Goal) => g.completed).length;

  return {
    xp: student.xp,
    level: student.level,
    careerReadiness: student.careerReadiness,
    learningStreak: student.learningStreak,
    goalProgress: student.goalProgress,
    completedGoals: completedGoals,
    totalGoals: goals.length,
    totalSessions,
    skills: student.skills,
    interests: student.interests,
    achievements: student.achievements,
  };
}