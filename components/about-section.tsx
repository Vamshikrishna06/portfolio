"use client";

import { motion } from "framer-motion";
import { GraduationCap, TrendingUp } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 font-mono text-sm text-primary">01. About Me</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Who I Am
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-border bg-card p-8"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">
              Education
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              B.Tech in Information Technology from Vasavi College of
              Engineering, Hyderabad. Equipped with a strong foundation in
              computer science, programming, and analytical thinking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-border bg-card p-8"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <TrendingUp className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">
              Current Focus
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Currently upskilling in Data Science, Machine Learning, Computer
              Vision, and Analytics. Passionate about leveraging data to solve
              real-world problems and building intelligent systems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
