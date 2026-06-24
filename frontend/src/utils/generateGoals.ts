export function generateGoals(
  careerGoal: string
) {
  if (
    careerGoal ===
    "AI Engineer"
  ) {
    return [
      {
        id: "1",
        title:
          "Learn Python Basics",
        completed: false,
      },
      {
        id: "2",
        title:
          "Complete ML Course",
        completed: false,
      },
      {
        id: "3",
        title:
          "Build AI Chatbot",
        completed: false,
      },
    ];
  }

  return [
    {
      id: "0",
      title:
        "Explore Career Path",
      completed: false,
    },
  ];
}