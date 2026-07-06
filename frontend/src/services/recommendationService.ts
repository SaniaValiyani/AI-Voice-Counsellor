import api from "./api";

export async function fetchRecommendations(
  email: string
) {
  const res =
    await api.get(
      `/recommendations/${email}`
    );

  return res.data.recommendations;
}