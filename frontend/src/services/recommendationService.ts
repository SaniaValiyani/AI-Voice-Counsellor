import api from "./api";

export async function getRecommendations() {
  const res = await api.get("/recommendations");
  return res.data;
}