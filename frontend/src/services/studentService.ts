import { serverUrl } from "../utils/serverUrl";
import { getAuthHeaders } from "../utils/authHeaders";

export async function saveProfile(profile: any) {
  const response = await fetch(`${serverUrl}/api/student/save`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(profile),
  });

  if (!response.ok) {
    throw new Error("Failed to save profile");
  }

  return response.json();
}

export async function loadProfile() {
  const response = await fetch(`${serverUrl}/api/student/profile`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to load profile");
  }

  return response.json();
}