export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse top-0 left-0" />

      <div className="absolute h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse bottom-0 right-0" />

      <div className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse top-1/2 left-1/2" />
    </div>
  );
}