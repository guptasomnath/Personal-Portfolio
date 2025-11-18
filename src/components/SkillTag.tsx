"use client";

import { motion } from "motion/react";
import { cn } from "./ui/utils";

interface SkillTagProps {
  name: string;
  icon: string;
  index: number;
}

export function SkillTag({ name, icon, index }: SkillTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center gap-3 border border-gray-200 dark:border-gray-700"
    >
      {/* <Icon className="h-10 w-10 text-blue-600 dark:text-blue-400" /> */}
      <img src={icon} alt={`Somnath Gupta ${name} Icon`} className={cn(
        name == "Node.js" || name == "MySQL" || name == "Nginx"  ? "scale-107" : "",
        "h-10 w-10 text-blue-600"
      )}/>
      <span className="text-gray-900 dark:text-white text-center">{name}</span>
    </motion.div>
  );
}
