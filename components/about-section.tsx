"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Palette, Zap, Globe } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-tested code that scales with your product.",
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Building component libraries with consistent, accessible design tokens.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for Core Web Vitals and delivering lightning-fast experiences.",
  },
  {
    icon: Globe,
    title: "Full-Stack",
    description: "From database schemas to pixel-perfect UIs, end-to-end development.",
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-sm text-primary tracking-wider uppercase">About</span>
          </div>

          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Crafting digital experiences{" "}
            <span className="text-primary">that matter</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {`I'm a developer passionate about building accessible, performant web applications that push the boundaries of what's possible on the web. With 2+ years of experience, I specialize in the PHP & JS ecosystem. When I'm not coding, you'll find me exercising my programming logic.`}
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {"Currently, I'm focused on creating seamless developer experiences and building products that help teams ship faster. I believe great software is born at the intersection of thoughtful design and robust engineering. ."}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {"When I'm not coding, you'll find me exercising my programming logic."}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`group rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(210_100%_56%/0.1)] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                  <item.icon size={22} />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
