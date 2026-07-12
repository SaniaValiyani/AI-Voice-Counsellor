import { serverUrl } from "../utils/serverUrl";
import { getAuthHeaders } from "../utils/authHeaders";

export async function fetchGoals(careerGoal: string) {
  const response = await fetch(`${serverUrl}/api/goals`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      careerGoal,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to fetch goals");
  }

  return response.json();
}