export function getAuthHeaders() {
  const stored = localStorage.getItem("auth-storage");
  const token = stored
    ? JSON.parse(stored || "{}")?.state?.token
    : null;

  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}
