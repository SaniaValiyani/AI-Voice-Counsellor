export function extractProfile(
  text: string
) {
  const lower =
    text.toLowerCase();

  let careerGoal = "";

  if (
    lower.includes(
      "ai engineer"
    )
  ) {
    careerGoal =
      "AI Engineer";
  }

  if (
    lower.includes(
      "data scientist"
    )
  ) {
    careerGoal =
      "Data Scientist";
  }

  if (
    lower.includes(
      "web developer"
    )
  ) {
    careerGoal =
      "Web Developer";
  }

  if (
    lower.includes(
      "cybersecurity"
    )
  ) {
    careerGoal =
      "Cybersecurity";
  }

  return {
    careerGoal,
  };
}