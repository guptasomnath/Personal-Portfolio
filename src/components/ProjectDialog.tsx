"use client";

import { motion } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  ExternalLink,
  Github,
  X,
  Building2,
  ArrowBigLeftDash,
  ArrowBigRightDash,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollArea } from "./ui/scroll-area";
import { useState } from "react";

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  companyLogo?: string;
  isCompanyProject?: boolean;
  fullDescription?: string;
  features?: string[];
  screenshots?: string[];
  thumbnail?: string;
}

interface ProjectDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDialog({
  project,
  open,
  onOpenChange,
}: ProjectDialogProps) {
  if (!project) return null;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => {
      if (prev == (project.screenshots?.length || 0) - 1) return 0;
      return prev + 1;
    });
  };

    const prevSlide = () => {
    setCurrentSlideIndex((prev) => {
      if (prev == 0) return (project.screenshots?.length || 0) - 1;
      return prev - 1;
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6">
            <DialogHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <DialogTitle className="text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </DialogTitle>
                  {project.isCompanyProject && (
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Company Project
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <DialogDescription className="text-gray-600 dark:text-gray-400">
                {project.description}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 space-y-6">
              {/* Screenshots Carousel */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-gray-900 dark:text-white">Screenshots</h3>
                  <div className="relative w-full h-64">
                    <div className="z-50 absolute left-4 bottom-0 top-0 flex items-center justify-center pb-3 h-full">
                      <button onClick={prevSlide} className="bg-background opacity-70 cursor-pointer p-2 rounded-full">
                        <ArrowBigLeftDash size={28} />
                      </button>
                    </div>

                    {project.screenshots.map((screenshot, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: currentSlideIndex === index ? 1 : 0, scale: currentSlideIndex === index ? 1 : 0.95 }}
                        transition={{ delay: index * 0.1 }}
                        className="absolute inset-0 overflow-hidden overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 group"
                      >
                        <ImageWithFallback
                          src={screenshot}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </motion.div>
                    ))}

                    <div className="z-50 absolute right-4 bg-black bottom-0 top-0 flex items-center justify-center pb-3 h-full">
                      <button
                        onClick={nextSlide}
                        className="bg-background opacity-70 cursor-pointer p-2 rounded-full"
                      >
                        <ArrowBigRightDash size={28} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Full Description */}
              {project.fullDescription && (
                <div className="space-y-2">
                  <h3 className="text-gray-900 dark:text-white">
                    About the Project
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.fullDescription}
                  </p>
                </div>
              )}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-gray-900 dark:text-white">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mt-1">
                          •
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="space-y-2">
                <h3 className="text-gray-900 dark:text-white">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                {project.githubUrl && (
                  <Button
                    className="gap-2"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </Button>
                )}
                {project.demoUrl && (
                  <Button
                    variant="outline"
                    className="gap-2"
                    onClick={() => window.open(project.demoUrl, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
