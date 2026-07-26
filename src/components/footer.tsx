import { Globe } from "lucide-react";
import { Logo } from "@/components/logo";
import { GithubIcon, YoutubeIcon } from "@/components/brand-icons";
import { site } from "@/lib/content";

const columns = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#how" },
      { label: "Technology", href: "#technology" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Companion app", href: "#app" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Research", href: "#research" },
      { label: "Source code", href: "#source" },
      { label: "FAQ", href: "#faq" },
      { label: "Watch", href: "#watch" },
    ],
  },
];

const social = [
  { label: "GitHub", href: site.links.github, Icon: GithubIcon },
  { label: "YouTube", href: site.links.youtube, Icon: YoutubeIcon },
  { label: "Google Site", href: site.links.googleSite, Icon: Globe },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-page py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <a href="#top" className="flex items-center gap-2 font-semibold">
              <Logo className="size-7" />
              <span>{site.name}</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              On-device AI that recognizes every bird — individually. Patent
              pending, by {site.author}.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {social.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold">{col.title}</h3>
                <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="transition-colors hover:text-foreground">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-sm font-semibold">Connect</h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
                <li>
                  <a className="transition-colors hover:text-foreground" href={site.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li>
                  <a className="transition-colors hover:text-foreground" href={site.links.huggingface} target="_blank" rel="noopener noreferrer">HuggingFace</a>
                </li>
                <li>
                  <a className="transition-colors hover:text-foreground" href={site.links.googleSite} target="_blank" rel="noopener noreferrer">Google Site</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 OrniMetrics. Patent Pending.</p>
          <p>Designed &amp; built by {site.author}.</p>
        </div>
      </div>
    </footer>
  );
}
