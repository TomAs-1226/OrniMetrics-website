"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";
import { navLinks, site } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/75 backdrop-blur-xl"
          : "border-transparent",
      )}
    >
      <nav className="container-page flex h-14 items-center gap-6">
        <a
          href="#top"
          className="flex items-center gap-2 font-semibold tracking-[-0.01em]"
        >
          <Logo className="size-6" />
          <span>{site.name}</span>
        </a>

        <ul className="ml-2 hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#watch">Watch the film</a>
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-page flex flex-col py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[15px] text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-3">
              <ThemeToggle />
              <Button asChild size="sm">
                <a href="#watch" onClick={() => setOpen(false)}>
                  Watch the film
                </a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
