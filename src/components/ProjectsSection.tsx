"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { ProjectDialog, Project } from "./ProjectDialog";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const personalProjects: Project[] = [
  {
    title: "App Helper Store Full Stack Project",
    description:
      "This is a full-stack web application. For frontend i used React Js for Backend i used Express js and for Database",
    techStack: [
      "React Js",
      "TypeScript",
      "Express Js",
      "Google Spreadsheet",
      "Tailwind CSS",
      "Google Auth",
    ],
    githubUrl: "https://github.com/guptasomnath/App-Helper",
    demoUrl: "https://somnath-gupta.vercel.app/",
    thumbnail: "/personal-projects/app-helper-project/image1.webp",
    fullDescription:
      "This is a full-stack web application. For frontend i used React Js for Backend i used Express js and for Database i used Google Spreadsheet. It incorporates advanced features such as user authentication, project filtring, project searching, project public or unlist option and more.",
    features: [
      "Category wish project listing",
      "Advance searching and filtring system",
      "Google login authentication",
      "Project download count",
    ],
    screenshots: [
      "/personal-projects/app-helper-project/image1.webp",
      "/personal-projects/app-helper-project/image2.webp",
      "/personal-projects/app-helper-project/image3.webp",
      "/personal-projects/app-helper-project/image4.webp",
    ],
  },
  {
    title: "Ed Tech Full Stack Project",
    description:
      "A project management tool with kanban boards, task assignments, time tracking, and team collaboration features.",
    techStack: ["Next.js", "Express js", "MongoDB"],
    githubUrl: "https://github.com/guptasomnath/EdTech-Full-Stack-MERN",
    thumbnail: "/personal-projects/ed-tech/image1.webp",
    fullDescription:
      "A comprehensive task management solution designed for agile teams. Features kanban boards, sprint planning, time tracking, and detailed analytics to help teams stay organized and productive.",
    features: [
      "Secure Authantication System",
      "Course Listing, Search, Filter System",
      "Course Booking With Razorpay Payment System",
      "View Course With Multiple Chapters",
      "Fully Device Responsive",
    ],
    screenshots: [
      "/personal-projects/ed-tech/image1.webp",
      "/personal-projects/ed-tech/image2.webp",
    ],
  },
  {
    title: "Online Code Compiler Project",
    description:
      "This is an online code compiler / editor created using Express.js and EJS. It currently supports compiling JavaScript, Java, Python, and PHP code, and can be customised to support other languages as well.",
    techStack: ["Node.js", "Express js", "Ejs", "Node Child Process"],
    githubUrl:
      "https://github.com/guptasomnath/CodeCompiler/blob/main/README.md",
    thumbnail: "/personal-projects/code-editor/image1.webp",
    fullDescription:
      "This is an online code compiler / editor created using Express.js and EJS. It currently supports compiling JavaScript, Java, Python, and PHP code, and can be customised to support other languages as well.",
    features: [
      "Support java code compilation",
      "Support python code compilation",
      "Support javascript code compilation",
      "Support PHP code compilation",
    ],
    screenshots: [
      "/personal-projects/code-editor/image1.webp",
      "/personal-projects/code-editor/image2.webp",
      "/personal-projects/code-editor/image3.webp",
    ],
  },
];

const companyProjects: Project[] = [
  {
    title: "Enterprise CRM System",
    description:
      "Built a full CRM system for a marine training institute with an advanced HR module, detailed booking analytics, and various other core modules.",
    techStack: [
      "React",
      "Next Js",
      "Node.js",
      "Nginx",
      "PostgreSQL",
      "Vps Cloud",
      "Docker",
    ],
    isCompanyProject: true,
    demoUrl: "https://seiedutrust.com/",
    companyLogo: "company-logo",
    thumbnail: "/company-projects/sei/image2.webp",
    fullDescription:
      "Led the end-to-end development of an enterprise-grade CRM system—from architecture and coding to deployment and ongoing support. The platform manages customer interactions, sales processes, and business analytics, handling millions of records and delivering real-time insights to sales teams.",
    features: [
      "Advanced analytics to give the sales team clear insights.",
      "Advance HR Management With Multiple Options Like (Manage Employee, Payslip, Attendance, Leave Management etc..)",
      "Automated leave calculation with automatic earned-leave updates based on attendance.",
      "Automatic time table creation system",
    ],
    screenshots: [
      "/company-projects/sei/image2.webp",
      "/company-projects/sei/image3.webp",
      "/company-projects/sei/image1.webp",
    ],
  },
  {
    title: "Tour Tracking Website With Crm",
    description:
      "Developed flexible trekking tour booking platform with comprehensive admin panel and PhonePe payment integration",
    techStack: [
      "Next.js",
      "Node js",
      "Nginx",
      "PostgresSql",
      "Docker",
      "CI/CD",
    ],
    isCompanyProject: true,
    demoUrl: "https://trekinsikkim.in/",
    companyLogo: "company-logo",
    thumbnail: "/company-projects/trek/image1.webp",
    fullDescription:
      "Developed a flexible trekking tour booking platform featuring a comprehensive admin panel, real-time booking management, and seamless PhonePe payment integration.",
    features: [
      "Developed a fully SEO-friendly, server-side rendered website using Next.js.",
      "Built sophisticated booking list management with filters, search functionality, and automated email notifications for new bookings",
      "Implemented dynamic package creation with multi-category linking and advanced page/blog management from admin dashboard",
    ],
    screenshots: [
      "/company-projects/trek/image1.webp",
      "/company-projects/trek/image2.webp",
      "/company-projects/trek/image3.webp",
      "/company-projects/trek/image4.webp",
    ],
  },
  {
    title: "Interactive Interior Design Website",
    description:
      "Developed a responsive and SEO-friendly interior design website featuring a customizable form and a real-time kitchen design customizer that instantly reflects user selections.",
    techStack: ["Next Js", "Tailwind Css", "Nginx", "Docker"],
    isCompanyProject: true,
    demoUrl: "https://greenspaceinterior.in/",
    companyLogo: "company-logo",
    thumbnail: "/company-projects/greens/image1.webp",
    fullDescription:
      "Developed a responsive, SEO-friendly interior design website with a customizable enquiry form and a real-time kitchen design customizer that lets users instantly preview their design choices.",
    features: [
      "SSR Friendly Website with responsive design",
      "Customize Kitchen Design With Real Time Demo",
      "Customizeable query form",
      "Email notification system when any new query happen",
    ],
    screenshots: [
      "/company-projects/greens/image1.webp",
      "/company-projects/greens/image2.webp",
      "/company-projects/greens/image3.webp",
    ],
  },
  {
    title: "Grillex — Metal Partitions & Invisible Grills Platform",
    description:
      "Developed a modern, SEO-friendly website for Grillex using Next.js (SSR), TypeScript, and Tailwind CSS, integrated with a WordPress CMS and custom REST API to power dynamic content and product sections.",
    techStack: ["Next Js", "Tailwind Css", "Typescript", "Wordpress CMS"],
    isCompanyProject: true,
    demoUrl: "https://www.grillex.in/",
    companyLogo: "company-logo",
    thumbnail: "/company-projects/grillex/image2.webp",
    fullDescription:
      "Built a fast, SEO-friendly website for Grillex using Next.js (SSR), TypeScript, and Tailwind CSS. Integrated a custom WordPress CMS and REST API to manage dynamic content such as products, galleries, and service sections. The site focuses on clean UI, responsive design, and smooth performance to showcase Grillex’s metal partitions, furniture, and invisible grill solutions.",
    features: [
      "Built with Next.js using SSR for fast, SEO-friendly rendering",
      "Dynamic content powered by WordPress CMS",
      "Created a custom WordPress REST API for fetching blocks and content.",
      "Fully mobile-optimized and performance-tuned layout"
    ],
    screenshots: [
      "/company-projects/grillex/image1.webp",
      "/company-projects/grillex/image2.webp",
    ],
  },
  {
    title: "Premium Bathware — Luxury Bath & Kitchen Product Platform",
    description:
      "Developed a premium product website for Premium Bathware using Next.js, TypeScript, Tailwind CSS, and a custom Node.js + Express.js API with MySQL for dynamic product listings.",
    techStack: ["Next Js", "Tailwind Css", "Typescript", "Node Js", "MySql"],
    isCompanyProject: true,
    demoUrl: "https://www.premiumbathware.com/",
    companyLogo: "company-logo",
    thumbnail: "/company-projects/premium-bathware/image1.webp",
    fullDescription:
      "Created the flagship website for Premium Bathware using Next.js (SSR), TypeScript, and Tailwind CSS, designed with a luxury look to match their high-end bathware and kitchen products. Integrated a custom Node.js + Express.js backend with a MySQL database to manage dynamic product listings, categories, and details. The site is optimized for performance, SEO, and smooth browsing to showcase faucets, sinks, accessories, and modern fixtures.",
    features: [
      "Built with Next.js (SSR) for fast, SEO-optimized performance",
      "Node.js + Express.js server for backend operations",
      "MySQL database powering dynamic product listings",
      "Mobile-first responsive layout"
    ],
    screenshots: [
      "/company-projects/premium-bathware/image1.webp",
      "/company-projects/premium-bathware/image2.webp",
       "/company-projects/premium-bathware/image3.webp",
        "/company-projects/premium-bathware/image4.webp",
    ],
  },
  {
    title: "Promiplast Windows — UPVC Window Systems Platform",
    description:
      "Developed a modern, SEO-friendly website for Promiplast Windows using Next.js, TypeScript, Tailwind CSS, and a WordPress CMS with custom APIs for dynamic content and brochure downloads.",
    techStack: ["Next Js", "Tailwind Css", "Typescript", "Wordpress CMS"],
    isCompanyProject: true,
    demoUrl: "https://www.promiplastwindows.com/",
    companyLogo: "company-logo",
    thumbnail: "/company-projects/promiplast/image1.webp",
    fullDescription:
      "Built a high-performance website for Promiplast UPVC Window Systems, powered by Next.js (SSR), TypeScript, and Tailwind CSS for a clean, responsive UI. Integrated WordPress CMS with custom REST APIs to manage product details and content. Added a modern brochure-download feature that unlocks files after form submission. The site is optimized for speed, SEO, and smooth user experience.",
    features: [
      "Built with Next.js (SSR) for SEO and fast performance",
      "WordPress CMS with custom REST API for dynamic content",
      "Brochure download gated by form submission only.",
      "Mobile-optimized modern layout"
    ],
    screenshots: [
      "/company-projects/promiplast/image1.webp",
      "/company-projects/promiplast/image2.webp",
    ],
  },
];

const INITIAL_DISPLAY_COUNT = 3;

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showAllPersonal, setShowAllPersonal] = useState(false);
  const [showAllCompany, setShowAllCompany] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const visiblePersonalProjects = showAllPersonal
    ? personalProjects
    : personalProjects.slice(0, INITIAL_DISPLAY_COUNT);

  const visibleCompanyProjects = showAllCompany
    ? companyProjects
    : companyProjects.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of personal and professional projects showcasing my
            expertise in full-stack development
          </p>
        </motion.div>

        {/* Personal Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-900 dark:text-white mb-8"
          >
            Personal Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {visiblePersonalProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </AnimatePresence>
          </div>

          {personalProjects.length > INITIAL_DISPLAY_COUNT && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mt-8"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAllPersonal(!showAllPersonal)}
                className="gap-2"
              >
                {showAllPersonal ? (
                  <>
                    <ChevronUp className="h-5 w-5" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-5 w-5" />
                    Load More ({personalProjects.length -
                      INITIAL_DISPLAY_COUNT}{" "}
                    more)
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </div>

        {/* Company Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-900 dark:text-white mb-8"
          >
            Company Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {visibleCompanyProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </AnimatePresence>
          </div>

          {companyProjects.length > INITIAL_DISPLAY_COUNT && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mt-8"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAllCompany(!showAllCompany)}
                className="gap-2"
              >
                {showAllCompany ? (
                  <>
                    <ChevronUp className="h-5 w-5" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-5 w-5" />
                    Load More ({companyProjects.length -
                      INITIAL_DISPLAY_COUNT}{" "}
                    more)
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      <ProjectDialog
        project={selectedProject}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  );
}
