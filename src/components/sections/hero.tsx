import { ArrowRight, Play, Bird } from "lucide-react";
import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { CountUp } from "@/components/primitives/count-up";
import { Button } from "@/components/ui/button";
import { hero, heroStats } from "@/lib/content";

/** Placeholder "AI camera view" — swap the scene for a real product photo later. */
function HeroProduct() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-[calc(var(--radius)+16px)] border bg-card shadow-[0_50px_140px_-60px_rgba(20,22,40,0.55)]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 12%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%), linear-gradient(180deg, var(--card), var(--muted))",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(80% 70% at 50% 42%, #000 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(80% 70% at 50% 42%, #000 40%, transparent 75%)",
        }}
      />

      <span className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
        <span className="size-1.5 rounded-full bg-red-500 animate-[pulse-ring_1.9s_infinite]" />
        AI Vision
      </span>

      <div className="absolute inset-0 grid place-items-center">
        <div className="relative">
          <Bird
            className="size-32 text-foreground/85 sm:size-40"
            strokeWidth={1}
          />
          <div className="absolute -inset-6 rounded-md border-2 border-primary/90">
            <span className="absolute -left-[3px] -top-[3px] size-3 border-l-2 border-t-2 border-primary" />
            <span className="absolute -bottom-[3px] -right-[3px] size-3 border-b-2 border-r-2 border-primary" />
            <span className="absolute -top-7 left-0 whitespace-nowrap rounded bg-primary px-2 py-0.5 font-mono text-[11px] font-medium text-primary-foreground">
              Northern Cardinal · 98%
            </span>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-4 bottom-4 z-20 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <span
            className="size-2 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 40% 35%, #3a3f4a, #0b0d12 70%)",
            }}
          />
          OrniMetrics · Standard
        </span>
        <span className="text-muted-foreground/60">↳ your product photo</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]"
        style={{
          background:
            "radial-gradient(58% 60% at 50% 0%, color-mix(in oklab, var(--primary) 11%, transparent), transparent 72%)",
        }}
      />
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-ember-ink">
            <span className="size-1.5 rounded-full bg-primary" />
            {hero.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 text-balance text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
            {hero.titleTop}
            <br />
            <span className="font-serif font-normal italic text-primary">
              {hero.titleAccent}
            </span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-[32ch] text-balance text-[clamp(1.15rem,2.2vw,1.5rem)] leading-[1.35] text-muted-foreground">
            {hero.subtitle}
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href="#watch">
                <Play className="size-4" /> Watch the film
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#how">
                How it works <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={300} className="mt-14 w-full">
          <HeroProduct />
        </Reveal>
        <Reveal delay={120} className="mt-14 w-full">
          <div className="mx-auto flex max-w-2xl items-stretch justify-center divide-x divide-border">
            {heroStats.map((s) => (
              <div
                key={s.label}
                className="flex flex-1 flex-col items-center px-4 sm:px-8"
              >
                <div className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tabular-nums tracking-[-0.03em]">
                  <CountUp
                    to={s.value}
                    decimals={s.decimals ?? 0}
                    suffix={s.suffix}
                  />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
