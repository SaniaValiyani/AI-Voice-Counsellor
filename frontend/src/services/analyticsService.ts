import api from "./api";

export async function fetchAnalytics(
  email: string
) {
  const res =
    await api.get(
      `/analytics/${email}`
    );

  return res.data;
}