import { Section, Container, SectionHeader } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { YouTubeLite } from "@/components/youtube-lite";
import { videos } from "@/lib/content";

export function Videos() {
  const [featured, ...rest] = videos;

  return (
    <Section id="watch">
      <Container>
        <SectionHeader
          eyebrow="Watch"
          title={
            <>
              See it{" "}
              <span className="font-serif font-normal italic text-primary">
                work.
              </span>
            </>
          }
          sub="The film, the concept, and the story behind OrniMetrics."
        />

        {featured?.id ? (
          <Reveal className="mt-12">
            <YouTubeLite id={featured.id} title={featured.title} />
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-ember-ink">
                  {featured.tag} · {featured.duration}
                </span>
                <h3 className="mt-1 text-lg font-semibold">{featured.title}</h3>
              </div>
              <span className="max-w-sm text-sm text-muted-foreground">
                {featured.blurb}
              </span>
            </div>
          </Reveal>
        ) : null}

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {rest.map((v, i) =>
            v.id ? (
              <Reveal key={v.id} delay={i * 70}>
                <YouTubeLite id={v.id} title={v.title} />
                <div className="mt-3">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ember-ink">
                    {v.tag} · {v.duration}
                  </span>
                  <h4 className="mt-1 font-semibold">{v.title}</h4>
                  <p className="text-sm text-muted-foreground">{v.blurb}</p>
                </div>
              </Reveal>
            ) : null,
          )}
        </div>
      </Container>
    </Section>
  );
}
