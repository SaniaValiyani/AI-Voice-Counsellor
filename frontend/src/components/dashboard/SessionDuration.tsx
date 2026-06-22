import { useEffect, useState } from "react";

import { useCounsellorStore }
from "../../store/counsellorStore";

export default function SessionDuration() {
  const sessionStartTime = useCounsellorStore(
    (state) => (state as any).sessionStartTime ?? Date.now()
  );

  const [minutes, setMinutes] =
    useState(0);

  useEffect(() => {
    const interval =
      setInterval(() => {
        const diff =
          Date.now() -
          sessionStartTime;

        setMinutes(
          Math.floor(
            diff / 60000
          )
        );
      }, 1000);

    return () =>
      clearInterval(
        interval
      );
  }, [sessionStartTime]);

  return (
    <div
      className="
      bg-white/5
      backdrop-blur-lg
      rounded-2xl
      p-5
      "
    >
      <h2 className="text-white text-xl">
        Session Duration
      </h2>

      <p className="text-3xl mt-4">
        {minutes} min
      </p>
    </div>
  );
}