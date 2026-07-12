import { serverUrl } from "../utils/serverUrl";
import { getAuthHeaders } from "../utils/authHeaders";

export async function getConversations() {
  const response = await fetch(`${serverUrl}/conversation`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Unable to load conversations");
  }

  return response.json();
}