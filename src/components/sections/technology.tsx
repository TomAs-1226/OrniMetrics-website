import { Section, Container, SectionHeader } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { techStack } from "@/lib/content";

export function Technology() {
  return (
    <Section id="technology">
      <Container>
        <SectionHeader
          eyebrow="Edge AI"
          title={
            <>
              Serious hardware,{" "}
              <span className="font-serif font-normal italic text-primary">
                quietly
              </span>{" "}
              housed.
            </>
          }
          sub="Everything needed to see, decide, and dispense — running on the feeder, not in the cloud."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((t, i) => (
            <Reveal key={t.name} delay={i * 60} className="rounded-lg border bg-card p-7">
              <div className="flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <t.icon className="size-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {t.spec}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em]">
                {t.name}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {t.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
