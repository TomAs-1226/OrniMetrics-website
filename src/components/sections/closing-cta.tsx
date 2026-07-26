import { Play } from "lucide-react";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/brand-icons";
import { site } from "@/lib/content";

export function ClosingCta() {
  return (
    <section className="py-[clamp(4.5rem,9vw,7rem)]">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[calc(var(--radius)+12px)] border bg-ink-900 px-8 py-16 text-center text-on-ink sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 80% at 50% 0%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%)",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              The feeder that knows{" "}
              <span className="font-serif font-normal italic text-primary">
                every bird.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-on-ink-muted">
              On-device AI. Individual recognition. Welfare-aware. Patent
              pending.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <a href="#watch">
                  <Play className="size-4" /> Watch the film
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-on-ink-line bg-transparent text-on-ink hover:bg-white/10 hover:text-on-ink"
              >
                <a href={site.links.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="size-4" /> View the code
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
