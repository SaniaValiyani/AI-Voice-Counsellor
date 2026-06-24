interface Props {
  title: string;
}

export default function AchievementToast({
  title,
}: Props) {
  return (
    <div
      className="
      fixed
      top-5
      right-5
      bg-cyan-500
      text-black
      px-5
      py-3
      rounded-xl
      shadow-lg
      z-50
      "
    >
      🏆 Achievement Unlocked

      <div>
        {title}
      </div>
    </div>
  );
}