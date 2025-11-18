"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Download, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // Mock resume download - replace with actual resume URL
    // alert("Resume download would start here. Please add your resume URL.");
    window.open("https://drive.google.com/file/d/1E-1fktTun_Z1t9_Hn-X5ueKFSzCWkJ3I/view")
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Hi, I'm
              </p>
              <h1 className="text-gray-900 dark:text-white mb-4">
                Somnath Gupta
              </h1>
              <h2 className="text-gray-700 dark:text-gray-300">
                Full Stack Web Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-600 dark:text-gray-400 max-w-xl"
            >
              I build scalable web applications with modern technologies.
              Passionate about creating clean, efficient code and delivering
              exceptional user experiences. Specialized in React, Next.js,
              Node.js, and cloud technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="gap-2"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <ImageWithFallback
                  src="/somnath.jpg"
                  alt="Somnath Gupta - Full Stack Developer"
                  className="rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-square"
                />
              </motion.div>
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
