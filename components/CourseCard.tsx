"use client";

import { motion } from "framer-motion";
import {
  Database,
  Code,
  Rocket,
  FileCode,
} from "lucide-react";

type Course = {
  id: number;
  title: string;
  progress: number;
  icon_name: string;
};

export default function CourseCard({
  course,
}: {
  course: Course;
}) {
  const getIcon = () => {
    switch (course.icon_name) {
      case "Database":
        return <Database size={22} />;
      case "Code":
        return <Code size={22} />;
      case "Rocket":
        return <Rocket size={22} />;
      case "FileCode":
        return <FileCode size={22} />;
      default:
        return <Code size={22} />;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        scale: 1.03,
      }}
      className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-green-400">
          {getIcon()}
        </div>

        <h2 className="text-xl font-bold">
          {course.title}
        </h2>
      </div>

      <p className="mb-3 text-zinc-300">
        Progress: {course.progress}%
      </p>

      <div className="w-full bg-zinc-700 rounded-full h-3 overflow-hidden mb-4">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${course.progress}%`,
          }}
          transition={{
            duration: 1,
          }}
          className="bg-green-500 h-3 rounded-full"
        />
      </div>

      <p className="text-zinc-400 text-sm">
        Course Status Active
      </p>
    </motion.article>
  );
}