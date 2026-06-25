export async function saveProfile(
  profile: any
) {

  try {

    await fetch(
      "http://localhost:5000/api/student/save",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify(profile),
      }
    );

  } catch (error) {

    console.error(
      "Profile save failed",
      error
    );
  }
}

export async function loadProfile() {

  const response =
    await fetch(
      "http://localhost:5000/api/student/profile"
    );

  return response.json();
}