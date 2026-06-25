export function calculateCareerReadiness(
  skills: string[],
  goalsCompleted: number,
  totalGoals: number,
  streak: number
) {

  let score = 0;

  score += skills.length * 10;

  score += goalsCompleted * 10;

  score += Math.min(
    streak,
    20
  );

  return Math.min(
    score,
    100
  );
}