"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, Brain, BarChart3, Database, Globe, Layout } from "lucide-react";

type Category =
  | "All"
  | "Computer Vision"
  | "Machine Learning"
  | "Data Analytics"
  | "SQL"
  | "Web Scraping"
  | "Web App (using AI)";

interface Project {
  title: string;
  description: string;
  category: Category;
  github: string;
  icon: typeof Eye;
}

const projects: Project[] = [
  {
    title: "AirSlide",
    description:
      "Hand Gesture Controlled PPT System using Computer Vision and MediaPipe for touchless presentation navigation.",
    category: "Computer Vision",
    github: "https://github.com/Vamshikrishna06/",
    icon: Eye,
  },
  {
    title: "DriveSafe",
    description:
      "Driver Drowsiness Detection system using Computer Vision techniques to alert drivers in real-time.",
    category: "Computer Vision",
    github: "https://github.com/Vamshikrishna06/",
    icon: Eye,
  },
  {
    title: "SpamShield",
    description:
      "Spam & Ham Classification using ML algorithms to filter unwanted emails with high accuracy.",
    category: "Machine Learning",
    github: "https://github.com/Vamshikrishna06/",
    icon: Brain,
  },
  {
    title: "Mobile Market Insights",
    description:
      "Interactive Power BI Dashboard for analyzing mobile market trends, pricing, and consumer behavior.",
    category: "Data Analytics",
    github: "https://github.com/Vamshikrishna06/",
    icon: BarChart3,
  },
  {
    title: "Global EV Sales Analysis",
    description:
      "Comprehensive analysis of global electric vehicle sales data with interactive visualizations and insights.",
    category: "Data Analytics",
    github: "https://github.com/Vamshikrishna06/",
    icon: BarChart3,
  },
  {
    title: "Employee Management System",
    description:
      "SQL-based system for managing employee records, departments, and payroll with complex queries.",
    category: "SQL",
    github: "https://github.com/Vamshikrishna06/",
    icon: Database,
  },
  {
    title: "Food Donation Management",
    description:
      "SQL project to track and manage food donations, donors, and distribution to optimize food aid.",
    category: "SQL",
    github: "https://github.com/Vamshikrishna06/",
    icon: Database,
  },
  {
    title: "OYO Hotel Scraping",
    description:
      "Web scraping project to extract OYO hotel data for price analysis, ratings, and market trends.",
    category: "Web Scraping",
    github: "https://github.com/Vamshikrishna06/",
    icon: Globe,
  },
  {
    title: "ReelIntend",
    description:
      "Video Recommendation Web App that suggests personalized content based on user viewing patterns.",
    category: "Web App (using AI)",
    github: "https://github.com/Vamshikrishna06/",
    icon: Layout,
  },
];

const categories: Category[] = [
  "All",
  "Computer Vision",
  "Machine Learning",
  "Data Analytics",
  "SQL",
  "Web Scraping",
  "Web App (using AI)",
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 font-mono text-sm text-primary">
            03. Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What I&apos;ve Built
          </h2>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"
                >
                  View on GitHub
                  <ExternalLink className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
