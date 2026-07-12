import { serverUrl } from "../utils/serverUrl";
import { getAuthHeaders } from "../utils/authHeaders";

export async function saveMessage(message: any) {
  const response = await fetch(`${serverUrl}/api/chat-history/save`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    throw new Error("Unable to save chat history");
  }

  return response.json();
}

export async function loadMessages() {
  const response = await fetch(`${serverUrl}/api/chat-history/all`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Unable to load chat history");
  }

  return response.json();
}