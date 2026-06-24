import {
  useCounsellorStore,
}
from "../../store/counsellorStore";

export default function AchievementToast() {
  const {
    latestAchievement,
  } =
    useCounsellorStore();

  if (
    !latestAchievement
  )
    return null;

  return (
    <div
      className="
      fixed
      top-5
      right-5
      bg-green-500
      px-5
      py-3
      rounded-xl
      z-50
      "
    >
      🏆 Achievement
      Unlocked

      <div>
        {
          latestAchievement
        }
      </div>
    </div>
  );
}