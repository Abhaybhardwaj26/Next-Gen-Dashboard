"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export default function ActivityCard() {
  const activity = [35, 60, 80, 95, 70, 100];

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        scale: 1.02,
      }}
      className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all"
    >
      <div className="flex items-center gap-3 mb-5">
        <Activity className="text-green-400" />
        <h2 className="text-2xl font-bold">
          Weekly Activity
        </h2>
      </div>

      <div className="space-y-4">
        {activity.map((value, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm text-zinc-400 mb-1">
              <span>Day {index + 1}</span>
              <span>{value}%</span>
            </div>

            <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${value}%`,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                }}
                className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 text-zinc-400 text-sm">
        Learning consistency this week
      </div>
    </motion.section>
  );
}