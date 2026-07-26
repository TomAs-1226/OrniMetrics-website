import { BadgeCheck, ScrollText, ExternalLink } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { papers, site } from "@/lib/content";

export function Research() {
  return (
    <Section id="research">
      <Container>
        <SectionHeader
          eyebrow="Research & IP"
          title={
            <>
              Grounded in{" "}
              <span className="font-serif font-normal italic text-primary">
                real science.
              </span>
            </>
          }
        />
        <Reveal className="mt-12 flex flex-col gap-6 rounded-lg border bg-ink-900 p-8 text-on-ink sm:flex-row sm:items-center sm:gap-8 sm:p-10">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <ScrollText className="size-7" />
          </div>
          <div className="flex-1">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              Patent Pending
            </div>
            <h3 className="mt-1 text-xl font-semibold">
              OrniMetrics selective-feeding system
            </h3>
            <p className="mt-1 text-sm text-on-ink-muted">
              Invented by {site.author}. Covering edge-AI species and individual
              recognition integrated with automated, per-individual dispensing.
            </p>
          </div>
          <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-on-ink-line px-3 py-1.5 text-xs text-on-ink-muted">
            <BadgeCheck className="size-4 text-primary" /> IP protected
          </div>
        </Reveal>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {papers.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 70}
              className="flex flex-col rounded-lg border bg-card p-7"
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ember-ink">
                <p.icon className="size-4" />
                {p.kind}
              </div>
              <h4 className="mt-3 font-semibold leading-snug tracking-[-0.01em]">
                {p.title}
              </h4>
              <p className="mt-1 text-xs text-muted-foreground">{p.meta}</p>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                {p.summary}
              </p>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Read <ExternalLink className="size-3.5" />
                </a>
              ) : null}
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
