const API =
  "http://localhost:5000";

export async function registerUser(
  fullName: string,
  email: string,
  password: string
) {
  const response =
    await fetch(
      `${API}/auth/register`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      }
    );

  return response.json();
}

export async function loginUser(
  email: string,
  password: string
) {
  const response =
    await fetch(
      `${API}/auth/login`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

  return response.json();
}