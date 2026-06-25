import {
  useCounsellorStore
} from "../../store/counsellorStore";

export default function CareerReadinessCard() {

  const {
    studentProfile
  } =
    useCounsellorStore();

  return (
    <div
      className="
      bg-white/5
      rounded-2xl
      p-5
      "
    >
      <h2
        className="
        text-xl
        text-white
        "
      >
        🚀 Career Readiness
      </h2>

      <div
        className="
        mt-4
        "
      >
        <div
          className="
          w-full
          h-4
          bg-slate-700
          rounded-full
          "
        >
          <div
            className="
            h-4
            bg-green-500
            rounded-full
            "
            style={{
              width:
                `${studentProfile.careerReadiness}%`
            }}
          />
        </div>

        <p
          className="
          mt-3
          text-lg
          "
        >
          {
            studentProfile
              .careerReadiness
          }
          %
        </p>
      </div>
    </div>
  );
}