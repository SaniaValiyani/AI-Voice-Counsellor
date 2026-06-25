import {
  useCounsellorStore
}
from "../../store/counsellorStore";

export default function TimelineCard() {

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
      <h2>
        📈 Progress Timeline
      </h2>

      <div
        className="
        mt-3
        space-y-2
        "
      >
        {
          studentProfile.timeline?.map(
            (
              item,
              index
            ) => (
              <div
                key={index}
              >
                • {item}
              </div>
            )
          )
        }
      </div>
    </div>
  );
}