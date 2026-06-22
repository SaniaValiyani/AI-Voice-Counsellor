import {
  useCounsellorStore
}
from "../../store/counsellorStore";

export default function ProfileCard() {
  const {
    studentProfile,
  } =
    useCounsellorStore();

  return (
    <div
      className="
      bg-white/5
      backdrop-blur-lg
      rounded-2xl
      p-5
      "
    >
      <h2 className="text-xl text-white">
        Student Profile
      </h2>

      <div className="mt-4">

        <p>
          🎯 Goal:
          {" "}
          {
            studentProfile
              .careerGoal ||
            "Unknown"
          }
        </p>

        <p>
          🌐 Language:
          {" "}
          {
            studentProfile
              .preferredLanguage ||
            "Unknown"
          }
        </p>

      </div>
    </div>
  );
}