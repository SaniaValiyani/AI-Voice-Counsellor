import Student from "../models/Student";
import ChatMessage from "../models/ChatMessage";

export async function getDashboardAnalytics(email: string) {

  const student = await Student.findOne({ email });

  if (!student)
    return null;

  const chats =
    await ChatMessage.countDocuments();

  return {

    xp: student.xp,

    level: student.level,

    learningStreak: student.learningStreak,

    careerReadiness: student.careerReadiness,

    goalProgress: student.goalProgress,

    completedGoals:
      student.goals.filter(
        g => g.completed
      ).length,

    totalGoals:
      student.goals.length,

    skills:
      student.skills.length,

    interests:
      student.interests.length,

    achievements:
      student.achievements.length,

    chats,

    recommendations:
      student.timeline.filter(
        t =>
          t.includes("Recommendation")
      ).length,

    resumeUploaded:
      !!student.resume,

    timeline:
      student.timeline.slice(-8),

  };

}