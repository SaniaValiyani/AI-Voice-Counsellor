import { StudentProfile } from "../types/studentProfile";

export function calculateAchievements(
  profile: StudentProfile
) {
  const achievements =
    [...profile.achievements];

  if (
    profile.skills.length >= 1 &&
    !achievements.includes(
      "First Skill"
    )
  ) {
    achievements.push(
      "First Skill"
    );
  }

  if (
    profile.skills.length >= 5 &&
    !achievements.includes(
      "Skill Explorer"
    )
  ) {
    achievements.push(
      "Skill Explorer"
    );
  }

  if (
    profile.careerGoal &&
    !achievements.includes(
      "Career Explorer"
    )
  ) {
    achievements.push(
      "Career Explorer"
    );
  }

  if (
    profile.learningStreak >= 7 &&
    !achievements.includes(
      "7 Day Streak"
    )
  ) {
    achievements.push(
      "7 Day Streak"
    );
  }

  return achievements;
}