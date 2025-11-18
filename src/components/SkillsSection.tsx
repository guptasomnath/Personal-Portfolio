"use client";

import { motion } from "motion/react";
import { SkillTag } from "./SkillTag";
import {
  Code2,
  Database,
  Server,
  Cloud,
  GitBranch,
  Boxes,
  Layers,
  Workflow,
  FileCode,
  Cpu,
  Container,
  Network,
} from "lucide-react";

const skills = [
  { name: "React", icon: "/skills/react.svg" },
  { name: "Next.js", icon: "/skills/nextjs.svg" },
  { name: "TypeScript", icon: "/skills/typescript.svg" },
  { name: "Rust", icon: "/skills/rust.svg" },
  { name: "Nginx", icon: "/skills/nginx.svg" },
  { name: "Node.js", icon: "/skills/nodejs.svg" },
  { name: "SQL", icon: "/skills/sql.svg" },
  { name: "PostgreSQL", icon: "/skills/pgdb.svg" },
  { name: "MySQL", icon: "/skills/mysql.svg" },
  { name: "Docker", icon: "/skills/docker.svg" },
  { name: "Git", icon: "/skills/git.svg" },
  { name: "AWS", icon: "/skills/aws.svg" },
  { name: "Microservices", icon: "/skills/boxes.svg" },
];

// const skills = [
//   { name: "React", Icon: Code2 },
//   { name: "Next.js", Icon: Layers },
//   { name: "TypeScript", Icon: FileCode },
//   { name: "Node.js", Icon: Server },
//   { name: "PostgreSQL", Icon: Database },
//   { name: "MySQL", Icon: Database },
//   { name: "MongoDB", Icon: Database },
//   { name: "Docker", Icon: Container },
//   { name: "Kubernetes", Icon: Boxes },
//   { name: "Git", Icon: GitBranch },
//   { name: "CI/CD", Icon: Workflow },
//   { name: "REST API", Icon: Network },
//   { name: "GraphQL", Icon: Network },
//   { name: "AWS", Icon: Cloud },
//   { name: "Redis", Icon: Cpu },
//   { name: "Microservices", Icon: Boxes },
// ];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build scalable and efficient
            applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillTag
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
