"use client"

import { useState, useEffect } from "react"
import { Download, Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map((l) => l.href.replace("#", ""))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          {"<IbrohimMasaran />"}
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative font-mono text-sm tracking-wide transition-colors duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-primary" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs font-medium text-primary transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_15px_hsl(210_100%_56%/0.2)]"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-foreground md:hidden"
          aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`block rounded-lg px-4 py-3 font-mono text-sm transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                onClick={() => setIsMobileOpen(false)}
                className="mt-2 flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-3 font-mono text-sm font-medium text-primary transition-all duration-300 hover:border-primary hover:bg-primary/20"
              >
                <Download size={16} />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
