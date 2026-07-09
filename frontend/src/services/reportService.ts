import api from "./api";

export async function fetchReport() {

  const res =
    await api.get("/report");

  return res.data;

}