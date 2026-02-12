"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"

const roles = [
  "FullStack Developer",
  "Mobile Developer",
  "Website Developer",
  "Server-side Backend"
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const role = roles[currentRole]
    const speed = isDeleting ? 30 : 60

    if (!isDeleting && displayText === role) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting ? role.substring(0, displayText.length - 1) : role.substring(0, displayText.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div
        className={`relative z-10 mx-auto max-w-4xl text-center transition-all duration-1000 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
          <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
            Available for work
          </span>
        </div>

        <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl text-balance">
          {"Hi, I'm "}
          <span className="text-primary glow-text">Ibrohim</span>
        </h1>

        <div className="mb-8 flex h-10 items-center justify-center">
          <span className="font-mono text-lg text-accent sm:text-xl md:text-2xl">
            {displayText}
            <span className="ml-0.5 inline-block w-0.5 h-6 bg-primary animate-glow-pulse" />
          </span>
        </div>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
build pixel-perfect, accessible, and performant web experiences. Specializing in React, Next.js, Flutter, Laravel and modern framework architectures with a passion for creating interfaces that feel alive.
        </p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(210_100%_56%/0.4)]"
          >
            View My Work
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 font-mono text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:text-primary"
          >
            Get in Touch
          </a>
          <a
            href="/cv.pdf"
            className="group inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-6 py-3 font-mono text-sm font-medium text-primary backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_20px_hsl(210_100%_56%/0.25)]"
          >
            <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
            Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          {[
            { icon: Github, href: "https://github.com/Ibrohimstilllearning", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/ibrohim-almasarani-159870324/", label: "LinkedIn" },
            { icon: Mail, href: "almasaraniibrohim@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="rounded-lg border border-border bg-secondary/30 p-3 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_hsl(210_100%_56%/0.2)]"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown
            size={20}
            className="animate-float text-muted-foreground transition-colors hover:text-primary"
          />
        </a>
      </div>
    </section>
  )
}
