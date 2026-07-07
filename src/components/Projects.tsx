"use client";

import { useState } from "react";

type Category = "All" | "Web" | "Mobile" | "Data & AI" | "Design";

interface Project {
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  tags: string[];
  link?: string;
  status: "Live" | "In progress" | "Case study";
}

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A full-stack web application built with Next.js and Supabase. Placeholder — replace with your real project description.",
    category: "Web",
    tags: ["Next.js", "Supabase", "TypeScript"],
    status: "Live",
  },
  {
    title: "Project Two",
    description:
      "Cross-platform mobile app for iOS and Android. Placeholder — replace with your real project description.",
    category: "Mobile",
    tags: ["React Native", "Expo", "TypeScript"],
    status: "Live",
  },
  {
    title: "Project Three",
    description:
      "LLM-powered data pipeline and analytics dashboard. Placeholder — replace with your real project description.",
    category: "Data & AI",
    tags: ["Python", "LLMs", "RAG", "PostgreSQL"],
    status: "In progress",
  },
  {
    title: "Project Four",
    description:
      "End-to-end product design and design system for a SaaS product. Placeholder — replace with your real project description.",
    category: "Design",
    tags: ["Figma", "Design System", "Prototyping"],
    status: "Case study",
  },
  {
    title: "Project Five",
    description:
      "Real-time collaboration tool built on WebSockets. Placeholder — replace with your real project description.",
    category: "Web",
    tags: ["React", "WebSockets", "Node.js"],
    status: "Live",
  },
  {
    title: "Project Six",
    description:
      "AI-assisted mobile app for productivity. Placeholder — replace with your real project description.",
    category: "Mobile",
    tags: ["Swift", "CoreML", "iOS"],
    status: "Live",
  },
];

const categories: Category[] = ["All", "Web", "Mobile", "Data & AI", "Design"];

const statusColor: Record<Project["status"], string> = {
  Live: "text-emerald-400 bg-emerald-400/10",
  "In progress": "text-amber-400 bg-amber-400/10",
  "Case study": "text-sky-400 bg-sky-400/10",
};

export default function Projects() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-xs font-semibold tracking-widest text-[#6366f1] uppercase mb-4">
        Projects
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
        Things I&apos;ve built
      </h3>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
              active === cat
                ? "bg-[#6366f1] text-white"
                : "bg-[#18181b] text-[#a1a1aa] border border-[#27272a] hover:border-[#6366f1] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project) => (
          <div
            key={project.title}
            className="group relative flex flex-col p-6 rounded-xl bg-[#18181b] border border-[#27272a] hover:border-[#6366f1]/50 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColor[project.status]}`}
              >
                {project.status}
              </span>
              <span className="text-xs text-[#52525b]">{project.category}</span>
            </div>

            <h4 className="text-base font-semibold text-white mb-2 group-hover:text-[#818cf8] transition-colors">
              {project.title}
            </h4>
            <p className="text-sm text-[#a1a1aa] leading-relaxed flex-1 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded bg-[#09090b] text-[#71717a] border border-[#27272a]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 rounded-xl"
                aria-label={`View ${project.title}`}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
