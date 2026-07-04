import api from "./api";

export async function uploadProfileImage(
  file: File
) {
  const form = new FormData();

  form.append(
    "profileImage",
    file
  );

  const res = await api.post(
    "/upload/profile-image",
    form
  );

  return res.data;
}

export async function uploadResume(
  file: File
) {
  const form = new FormData();

  form.append(
    "resume",
    file
  );

  const res = await api.post(
    "/upload/resume",
    form
  );

  return res.data;
}