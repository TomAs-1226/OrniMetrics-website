import { Check } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { models, welfare } from "@/lib/content";

export function Architecture() {
  return (
    <Section id="architecture" className="bg-card">
      <Container>
        <SectionHeader
          eyebrow={welfare.eyebrow}
          title={welfare.title}
          sub={welfare.sub}
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {models.map((m, i) => (
            <Reveal
              key={m.title}
              delay={i * 90}
              className="flex flex-col rounded-lg border bg-background p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <m.icon className="size-6" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-ember-ink">
                  {m.step}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em]">
                {m.title}
              </h3>
              <div className="mt-1 font-mono text-xs text-muted-foreground">
                {m.spec}
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {m.blurb}
              </p>
              <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-5">
                {m.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <Check className="size-4 shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-6">
          <figure className="rounded-lg border bg-ink-900 p-8 text-on-ink sm:p-12">
            <blockquote className="max-w-4xl text-balance text-[clamp(1.25rem,2.6vw,1.9rem)] font-medium leading-[1.35] tracking-[-0.01em]">
              <span className="font-serif italic text-primary">“</span>
              {welfare.quote}
              <span className="font-serif italic text-primary">”</span>
            </blockquote>
            <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-on-ink-muted">
              {welfare.quoteBy}
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}
