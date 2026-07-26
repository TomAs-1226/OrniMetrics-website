import { Section, Container, SectionHeader } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { pipeline } from "@/lib/content";

export function HowItWorks() {
  return (
    <Section id="how">
      <Container>
        <SectionHeader
          eyebrow="The pipeline"
          title={
            <>
              From landing to lunch,{" "}
              <span className="font-serif font-normal italic text-primary">
                automatically.
              </span>
            </>
          }
          sub="A closed loop that runs entirely on the feeder — detect, sense, verify, identify, decide, repeat."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {pipeline.map((s, i) => (
            <Reveal key={s.title} delay={i * 60} className="bg-background p-7">
              <div className="flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <s.icon className="size-5" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
