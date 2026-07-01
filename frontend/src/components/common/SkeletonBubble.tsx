export default function SkeletonBubble() {
  return (
    <div
      className="
      animate-pulse
      rounded-2xl
      bg-slate-800
      p-5
      w-2/3
      "
    >
      <div className="h-3 rounded bg-slate-700 mb-3" />

      <div className="h-3 rounded bg-slate-700 w-4/5 mb-3" />

      <div className="h-3 rounded bg-slate-700 w-2/3" />
    </div>
  );
}