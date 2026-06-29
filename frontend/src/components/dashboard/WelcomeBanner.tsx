import { motion } from "framer-motion";

export default function WelcomeBanner() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl bg-linear-to-r from-cyan-500 via-sky-500 to-blue-600 p-8 shadow-xl"
    >
      <h1 className="text-4xl font-bold text-white">
        {greeting}, Sania 👋
      </h1>

      <p className="text-cyan-100 mt-2 text-lg">
        Small progress every day leads to big success.
      </p>
    </motion.div>
  );
}