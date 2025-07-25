"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface Project {
  id: string
  title: string
  date: string
  image: string
  category: string
  tools: string[]
  href: string
}

const projectsData: Project[] = [
  {
    id: "forge",
    title: "Forge (AI SaaS)",
    date: "December 2024",
    image: "/images/projects/forge-preview.png",
    category: "MVP + Marketing",
    tools: ["React", "AI Integration"],
    href: "/projects/forge",
  },
  {
    id: "techflow",
    title: "TechFlow Solutions",
    date: "November 2024",
    image: "/images/projects/techflow-preview.png",
    category: "Complete Package",
    tools: ["Branding", "SaaS Platform"],
    href: "/projects/techflow",
  },
  {
    id: "nexus",
    title: "Nexus Analytics",
    date: "October 2024",
    image: "/images/projects/nexus-preview.png",
    category: "Landing Page",
    tools: ["Conversion", "A/B Testing"],
    href: "/projects/nexus",
  },
  {
    id: "zenith",
    title: "Zenith CRM",
    date: "September 2024",
    image: "/images/projects/zenith-preview.png",
    category: "14-day MVP",
    tools: ["B2B SaaS", "CRM"],
    href: "/projects/zenith",
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={project.href} className="block">
        <div className="relative overflow-hidden rounded-lg bg-muted/20">
          {/* Project Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Image Overlay with Date and Project Name */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-4 flex items-start justify-between">
              <span className="rounded bg-black/50 px-2 py-1 text-sm font-medium text-white backdrop-blur-sm">
                {project.date}
              </span>
              <span className="rounded bg-black/50 px-2 py-1 text-sm font-medium text-white backdrop-blur-sm">
                {project.title}
              </span>
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-4 space-y-3">
            <h3 className="text-[1.125rem] font-semibold text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[0.875rem] font-normal uppercase tracking-[0.04em] text-foreground backdrop-blur-sm">
                {project.category}
              </span>
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[0.875rem] font-normal uppercase tracking-[0.04em] text-foreground backdrop-blur-sm">
                {project.tools.join(", ")}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function RecentWorksSection() {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight tracking-tight">
              <span className="text-muted-foreground">Our</span> Work
              <span className="text-muted-foreground">.</span>
            </h2>
            <p className="hidden text-[0.875rem] font-normal uppercase tracking-[0.04em] text-muted-foreground md:block">
              ( Portfolio )
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* See All Projects CTA */}
        <motion.div
          className="mt-16 md:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/projects"
            className="group flex flex-col items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-muted-foreground transition-colors group-hover:text-foreground">
              See All Projects
            </h2>

            <div className="flex items-center gap-1 text-xs font-bold text-muted-foreground transition-colors group-hover:text-foreground">
              <span>(</span>
              <span>{projectsData.length}</span>
              <span>)</span>
            </div>

            <div className="h-px w-16 bg-muted-foreground/30 transition-all duration-300 group-hover:w-24 group-hover:bg-foreground/50" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
