"use client";

import { motion } from "motion/react";
import { Trophy, Award, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// const achievements = [
//   {
//     title: "Employee of the Month - January 2024",
//     description: "Recognized for exceptional performance in delivering the CRM project ahead of schedule",
//     image: "https://images.unsplash.com/photo-1617149897850-9b0dea0a2705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMGF3YXJkJTIwY2VydGlmaWNhdGV8ZW58MXx8fHwxNzYyOTY1OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//   },
//   {
//     title: "Employee of the Month - July 2024",
//     description: "Awarded for outstanding contribution to the banking portal modernization project",
//     image: "https://images.unsplash.com/photo-1762345127396-ac4a970436c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2hpZXZlbWVudCUyMHRyb3BoeXxlbnwxfHx8fDE3NjI5Mjc3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//   },
//   {
//     title: "Employee of the Month - November 2024",
//     description: "Recognized for leading the team and mentoring junior developers",
//     image: "https://images.unsplash.com/photo-1617149897850-9b0dea0a2705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMGF3YXJkJTIwY2VydGlmaWNhdGV8ZW58MXx8fHwxNzYyOTY1OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//   },
// ];

const achievements = [
  {
    title: "Employee of the Month - Sep 2024",
    description:
      "Recognized for excellent work on a complex end-to-end CRM project.",
    image: "/achievements/eom1.png",
    link: "https://www.linkedin.com/posts/guptasomnath_excited-to-be-employee-of-the-month-at-omm-activity-7241037478197936128-NV9z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDohZsBycNuj2y_h7NblRiUx3pjw_MFOms",
  },
  {
    title: "Employee of the Month - May 2025",
    description:
      "Awarded for excellent full-stack contribution to the travel portal project.",
    image: "/achievements/eom2.png",
    link: "https://www.linkedin.com/posts/omm-digital-solution-pvt-ltd_employeeofthemonth-teamomm-creativeminds-activity-7349334818700034048-t6mC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDohZsBycNuj2y_h7NblRiUx3pjw_MFOms",
  },
  {
    title: "Employee of the Month - June 2025",
    description:
      "Recognized for leading the team and mentoring junior developers",
    image: "/achievements/eom3.png",
    link: "https://www.linkedin.com/posts/guptasomnath_just-got-employee-of-the-month-at-omm-digital-activity-7323749234774544387-YLVV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDohZsBycNuj2y_h7NblRiUx3pjw_MFOms",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">Achievements</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognized for excellence and dedication in delivering high-quality
            work
          </p>
        </motion.div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 mb-12 text-white text-center"
        >
          <Trophy className="h-16 w-16 mx-auto mb-4" />
          <h3 className="mb-2">3× Employee of the Month</h3>
          <p className="text-blue-100">
            Consistently recognized for outstanding performance and leadership
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <a href={achievement.link} target="__blank">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 rounded-full p-2">
                    <Star className="h-6 w-6 text-yellow-900 fill-yellow-900" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <h4 className="text-gray-900 dark:text-white">
                      {achievement.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
