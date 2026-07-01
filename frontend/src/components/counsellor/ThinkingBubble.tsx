import { motion } from "framer-motion";

export default function ThinkingBubble() {
  return (
    <div className="flex">

      <div className="bg-slate-900 rounded-3xl p-6">

        <p className="text-white mb-4">

          CareerPilot AI is thinking...

        </p>

        <div className="flex gap-2">

          {[1,2,3].map(dot=>(
            <motion.div
              key={dot}
              animate={{
                y:[0,-8,0],
              }}
              transition={{
                repeat:Infinity,
                duration:0.8,
                delay:dot*0.2,
              }}
              className="w-3 h-3 rounded-full bg-cyan-400"
            />
          ))}

        </div>

      </div>

    </div>
  );
}