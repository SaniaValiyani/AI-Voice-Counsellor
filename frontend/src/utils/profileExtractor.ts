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
  ];

  careers.forEach((career) => {
    if (lower.includes(career)) {
      careerGoal = career
        .split(" ")
        .map(
          (word) =>
            word.charAt(0)
              .toUpperCase() +
            word.slice(1)
        )
        .join(" ");
    }
  });

  const skills: string[] = [];

  const skillKeywords = [
    "python",
    "java",
    "javascript",
    "typescript",
    "react",
    "node",
    "sql",
    "git",
    "machine learning",
    "deep learning",
    "cloud",
    "aws",
    "docker",
  ];

  skillKeywords.forEach(
    (skill) => {
      if (
        lower.includes(skill)
      ) {
        skills.push(skill);
      }
    }
  );

  return {
    careerGoal,
    skills,
  };
}