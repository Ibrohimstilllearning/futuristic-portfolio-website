"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React JS", level: 60 },
      { name: "Flutter", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 70 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 50 },
      { name: "Python", level: 43 },
      { name: "MySQL", level: 85 },
      { name: "PHP", level: 80 },
    ],
  },
]

const technologies = [
  "React","JavaScript", "Node.js", "Python", "MySQL",
  "SQLite","Flutter","Tailwind CSS", "Vercel", "Figma", "Dart", "Firebase", "Supabase",
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-sm text-primary tracking-wider uppercase">Skills</span>
          </div>

          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Technologies I{" "}
            <span className="text-primary">work with</span>
          </h2>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-700 hover:border-primary/30 glow-border ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + catIndex * 150}ms` }}
            >
              <h3 className="mb-6 font-mono text-sm font-semibold text-primary tracking-wider uppercase">
                {category.title}
              </h3>
              <div className="flex flex-col gap-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${400 + catIndex * 150 + skillIndex * 100}ms`,
                          boxShadow: "0 0 10px hsl(210 100% 56% / 0.5)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="mb-6 text-center font-mono text-sm text-muted-foreground tracking-wider uppercase">
            Tech Stack
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-secondary/50 px-4 py-2 font-mono text-xs text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_15px_hsl(210_100%_56%/0.15)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
