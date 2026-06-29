export async function sendChat(
  message: string,
  history: any[],
  profile: any,
  settings: any
) {
  const response =
    await fetch(
      "http://localhost:5000/api/chat",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          message,
          history,
          profile,
          settings,
        }),
      }
    );

  return response.json();
}