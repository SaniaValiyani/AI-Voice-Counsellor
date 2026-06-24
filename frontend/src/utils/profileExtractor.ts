export function extractProfile(
  text: string
) {
  const lower =
    text.toLowerCase();

  let careerGoal = "";

  const careers = [
    "ai engineer",
    "data scientist",
    "data analyst",
    "frontend developer",
    "backend developer",
    "full stack developer",
    "cloud engineer",
    "devops engineer",
    "cybersecurity engineer",
    "ui ux designer",
    "product manager",
    "mobile app developer",
  ];

  for (const career of careers) {
    if (lower.includes(career)) {
      careerGoal = career
        .split(" ")
        .map(
          (word) =>
            word.charAt(0).toUpperCase() +
            word.slice(1)
        )
        .join(" ");
    }
  }

  return {
    careerGoal,
    preferredLanguage:
      localStorage.getItem(
        "selected-language"
      ) || "English",
  };
}