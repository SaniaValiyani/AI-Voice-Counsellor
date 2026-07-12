const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const resolvedBaseUrl =
  typeof apiBaseUrl === "string" && apiBaseUrl.length > 0
    ? apiBaseUrl.replace(/\/api$/, "")
    : "";

const defaultBrowserBaseUrl =
  typeof window !== "undefined" &&
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : typeof window !== "undefined"
    ? window.location.origin
    : "";

export const serverUrl =
  resolvedBaseUrl || defaultBrowserBaseUrl;
