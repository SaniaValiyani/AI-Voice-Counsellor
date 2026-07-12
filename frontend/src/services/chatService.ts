import { serverUrl } from "../utils/serverUrl";
import { getAuthHeaders } from "../utils/authHeaders";

export async function sendChat(
  message: string,
  history: any[],
  profile: any,
  settings: any
) {
  const response = await fetch(`${serverUrl}/api/chat`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      message,
      history,
      profile,
      settings,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to send chat message");
  }

  return response.json();
}