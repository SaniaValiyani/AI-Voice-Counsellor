import api from "./api";

export async function loadSettings() {
  const res = await api.get("/settings");
  return res.data;
}

export async function saveSettings(settings: any) {
  const res = await api.post(
    "/settings",
    settings
  );

  return res.data;
}