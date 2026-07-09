import api from "./api";

export async function getDashboardAnalytics() {

const res =
await api.get("/analytics");

return res.data;

}