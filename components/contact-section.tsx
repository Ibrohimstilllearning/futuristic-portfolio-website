"use client"

import { useEffect, useRef, useState } from "react"
import { Send, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-sm text-primary tracking-wider uppercase">Contact</span>
          </div>

          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {"Let's build something "}
            <span className="text-primary">together</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, I'll get back to you as soon as I can."}
            </p>

            <div className="flex flex-col gap-6">
              {[
                { icon: Mail, label: "Email", value: "ibrohimstilllearning@gmail.com" },
                { icon: MapPin, label: "Location", value: "Indonesia" },
                { icon: Clock, label: "Timezone", value: "WIB" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/50 text-primary">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</p>
                    <p className="text-sm text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            className={`flex flex-col gap-5 rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-700 delay-300 sm:p-8 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            action="https://formsubmit.co/your@email.com"
            method="POST"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-primary/50 focus:shadow-[0_0_15px_hsl(210_100%_56%/0.1)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-primary/50 focus:shadow-[0_0_15px_hsl(210_100%_56%/0.1)]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="What's this about?"
                className="rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-primary/50 focus:shadow-[0_0_15px_hsl(210_100%_56%/0.1)]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="resize-none rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-primary/50 focus:shadow-[0_0_15px_hsl(210_100%_56%/0.1)]"
              />
            </div>
            <button
              type="submit"
              className="group mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(210_100%_56%/0.4)]"
            >
              Send Message
              <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
