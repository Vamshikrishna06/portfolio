"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "mellurimvamshi@gmail.com",
    href: "mailto:mellurimvamshi@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "vamshimelluri8055",
    href: "https://www.linkedin.com/in/vamshimelluri8055/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "Vamshikrishna06",
    href: "https://github.com/Vamshikrishna06/",
    icon: Github,
  },
  {
    label: "Phone",
    value: "+91 8019102475",
    href: "tel:+918019102475",
    icon: Phone,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="mb-2 font-mono text-sm text-primary">
            04. Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            I&apos;m always open to discussing data science projects,
            collaboration opportunities, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Phone" ? "_blank" : undefined}
              rel={link.label !== "Phone" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <link.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">{link.label}</p>
                <p className="truncate font-medium text-card-foreground">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
