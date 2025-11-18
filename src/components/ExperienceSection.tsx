"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Building2, Layers, Trophy } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface Experience {
  company: string;
  position: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  isCurrentJob?: boolean;
  companyLogo?: string;
}

const experiences: Experience[] = [
  {
    company: "Omm Digital Soluction Pvt.Ltd",
    position: "Full Stack Developer",
    location: "Dum Dum, Kolkata, India",
    duration: "1.9 years",
    startDate: "March 2024",
    endDate: "Present",
    isCurrentJob: true,
    description:
      "Leading the development of enterprise-scale web applications and complex CRM systems",
    responsibilities: [
      "Architected and developed microservices-based applications serving hugh number users",
      "Architected and developed large-scale web platform serving students and administrative staff with secure course browsing, purchase, and payment processing via Razorpay",
      "Developed flexible trekking tour booking platform with comprehensive admin panel and PhonePe payment integration",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
];

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6 md:p-8">
        {/* Header Section */}
        <div className="flex items-start gap-6 mb-6">
          {/* Company Logo/Icon */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Building2 className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Company & Position Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
              <div>
                <h3 className="text-gray-900 dark:text-white mb-1">
                  {experience.position}
                </h3>
                <h4 className="text-blue-600 dark:text-blue-400">
                  {experience.company}
                </h4>
              </div>
              {experience.isCurrentJob && (
                <Badge className="bg-green-500 hover:bg-green-600 shrink-0">
                  Current Role
                </Badge>
              )}
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mt-3">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{experience.startDate} - {experience.endDate}</span>
                <span className="text-gray-400 dark:text-gray-500">({experience.duration})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          {experience.description}
        </p>

        {/* Expandable Section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Responsibilities */}
              <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                <h5 className="text-gray-900 dark:text-white mb-3">
                  Key Responsibilities
                </h5>
                <ul className="space-y-2.5">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                      <span className="leading-relaxed">{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-2 gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              View Responsibilities
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in full-stack development
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6 mb-16">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-shadow">
            <Briefcase className="h-8 w-8 mx-auto mb-3 opacity-90" />
            <div className="mb-2">1.9+</div>
            <p className="text-blue-100">Years of Experience</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-shadow">
            <Layers className="h-8 w-8 mx-auto mb-3 opacity-90"/>
            <div className="mb-2">9+</div>
            <p className="text-purple-100">Projects Completed</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-shadow">
            <Trophy className="h-8 w-8 mx-auto mb-3 opacity-90"/>
            <div className="mb-2">3×</div>
            <p className="text-green-100">Employee of the Month</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}