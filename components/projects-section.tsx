"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "LSP MKC App",
    description:
      "Professional certification application for LSP (Lembaga Sertifikasi Profesi) MKC. Comprehensive platform for managing certifications, exams, and professional credentials with secure REST API backend and intuitive mobile interface.",
    image: "/placeholder.svg",
    tags: ["Flutter", "Laravel REST API", "GetX"],
    githubUrl: "https://github.com/Ibrohimstilllearning/lsp_mkc_app.git",
  },
  {
    title: "Alera App",
    description:
      "Online health center (Puskesmas) application for managing patient records, appointments, and medical services. Built for seamless healthcare management with real-time notifications and patient data synchronization.",
    image: "/placeholder.svg",
    tags: ["Flutter", "GetX"],
    githubUrl: "https://github.com/Ibrohimstilllearning/alera_app.git",
  },
  {
    title: "Hadhir Apps",
    description:
      "Employee attendance and absence tracking system for organizations. Real-time clock-in/out functionality, attendance reports, and automated tracking with cloud synchronization for reliable workforce management.",
    image: "/placeholder.svg",
    tags: ["Firebase", "Flutter"],
    githubUrl: "https://github.com/Ibrohimstilllearning/hadhirapps.git",
  },
  {
    title: "Scheduler App",
    description:
      "AI-powered scheduling application that intelligently suggests optimal schedules using Google Gemini API. Automates schedule optimization with machine learning recommendations for efficient time management.",
    image: "/placeholder.svg",
    tags: ["Gemini API", "Flutter"],
    githubUrl: "https://github.com/Ibrohimstilllearning/Scheduler.git",
  },
  {
    title: "QR Scanner",
    description:
      "Fast and reliable online QR code scanning application. Supports real-time QR code detection, multiple format support, and seamless data processing with offline capability and instant results.",
    image: "/placeholder.svg",
    tags: ["Flutter", "Dart"],
    githubUrl: "https://github.com/Ibrohimstilllearning/qr_skanner.git",
  },
  {
    title: "Noor Travel",
    description:
      "Umrah travel company profile website showcasing services, packages, and contact information for Noor Travel. Built with modern frontend tooling and deployed on Vercel.",
    image: "/placeholder.svg",
    tags: ["React.js", "Tailwind CSS", "Vercel", "Company Profile"],
    githubUrl: "https://github.com/Ibrohimstilllearning/noor-travel.git",
    liveUrl: "https://noor-travel-chi.vercel.app/",
  },
  {
    title: "News App",
    description:
      "Dynamic news aggregation application powered by NewsAPI.org. Features real-time news updates, personalized feeds, advanced search, and category filtering for comprehensive news consumption.",
    image: "/placeholder.svg",
    tags: ["Flutter", "Dart", "NewsAPI.org"],
    githubUrl: "https://github.com/Ibrohimstilllearning/news_app.git",
  },
  {
    title: "Payroll Service",
    description:
      "Enterprise payroll management system for automated salary processing, deductions, tax calculations, and payment distributions. Built with pure PHP for reliable backend processing and secure financial operations.",
    image: "/placeholder.svg",
    tags: ["PHP"],
    githubUrl: "https://github.com/Ibrohimstilllearning/payroll-service.git",
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

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Github size={18} />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live site`}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
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
