import api from "./api";

export async function fetchRoadmap(
  email: string
) {
  const res =
    await api.get(
      `/roadmap/${email}`
    );

  return res.data.roadmap;
}
