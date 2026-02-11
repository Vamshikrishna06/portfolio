"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  BarChart3,
  Brain,
  Eye,
  LineChart,
  Globe,
  Sparkles,
  GitBranch,
} from "lucide-react";

const skills = [
  { name: "Python", icon: Code2, color: "text-primary" },
  { name: "SQL", icon: Database, color: "text-accent" },
  { name: "Power BI", icon: BarChart3, color: "text-primary" },
  { name: "Machine Learning", icon: Brain, color: "text-accent" },
  { name: "Computer Vision", icon: Eye, color: "text-primary" },
  { name: "Data Analysis", icon: LineChart, color: "text-accent" },
  { name: "Web Scraping", icon: Globe, color: "text-primary" },
  { name: "Building Webpages Using AI", icon: Sparkles, color: "text-accent" },
  { name: "Git", icon: GitBranch, color: "text-primary" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 font-mono text-sm text-primary">
            02. Skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technologies & Tools
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/10">
                <skill.icon className={`h-6 w-6 ${skill.color}`} />
              </div>
              <p className="text-sm font-medium text-card-foreground">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
