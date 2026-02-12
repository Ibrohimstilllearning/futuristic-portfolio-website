import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="font-mono text-sm font-bold text-foreground">{"<IbrohimMasaran />"}</span>
          <p className="text-xs text-muted-foreground">
            {"Designed & built with Next.js and Tailwind CSS"}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/Ibrohimstilllearning", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/ibrohim-almasarani-159870324/", label: "LinkedIn" },
            { icon: Twitter, href: "#", label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          {"© 2026 Ibrohim. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
