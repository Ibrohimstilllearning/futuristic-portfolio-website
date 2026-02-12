"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "NexusAnalytics",
    description:
      "A real-time analytics dashboard built with Next.js and WebSockets. Features interactive charts, custom widgets, and team collaboration tools.",
    image: "/images/project-1.jpg",
    tags: ["Next.js", "TypeScript", "D3.js", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "VoltCommerce",
    description:
      "Modern headless e-commerce platform with blazing-fast performance. Built on edge functions with optimistic UI updates.",
    image: "/images/project-2.jpg",
    tags: ["React", "Stripe", "Supabase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SynthAI Chat",
    description:
      "AI-powered conversational interface with streaming responses, memory context, and multi-modal input support.",
    image: "/images/project-3.jpg",
    tags: ["AI SDK", "OpenAI", "Next.js", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "PulseConnect",
    description:
      "Real-time social platform with live feeds, direct messaging, and community spaces. Built for scale with serverless architecture.",
    image: "/images/project-4.jpg",
    tags: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-sm text-primary tracking-wider uppercase">Projects</span>
          </div>

          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Selected{" "}
            <span className="text-primary">work</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-700 hover:border-primary/30 hover:shadow-[0_0_40px_hsl(210_100%_56%/0.12)] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 transition-opacity duration-500 group-hover:opacity-0" />
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      aria-label={`View ${project.title} live demo`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
