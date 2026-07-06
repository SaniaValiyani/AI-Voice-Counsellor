import api from "./api";

export async function fetchReport(
  email: string
) {

  const res =
    await api.get(
      `/report/${email}`
    );

  return res.data;

}