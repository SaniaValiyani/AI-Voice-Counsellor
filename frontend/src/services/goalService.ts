export async function fetchGoals(
  careerGoal: string
) {

  const response =
    await fetch(
      "http://localhost:5000/api/goals",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify({
            careerGoal,
          }),
      }
    );

  return response.json();
}