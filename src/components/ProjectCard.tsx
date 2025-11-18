"use client";

import { motion } from "motion/react";
import { ExternalLink, Github, Building2 } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Project } from "./ProjectDialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer"
    >
      {/* Thumbnail Image */}
      {project.thumbnail && (
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {project.isCompanyProject && (
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Company
              </span>
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        {!project.thumbnail && project.isCompanyProject && project.companyLogo && (
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Company Project
            </span>
          </div>
        )}

        <h3 className="text-gray-900 dark:text-white mb-3">{project.title}</h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={(e : any) => {
                e.stopPropagation();
                window.open(project.githubUrl, "_blank");
              }}
            >
              <Github className="h-4 w-4" />
              Code
            </Button>
          )}
          {project.demoUrl && (
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={(e : any) => {
                e.stopPropagation();
                window.open(project.demoUrl, "_blank");
              }}
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}