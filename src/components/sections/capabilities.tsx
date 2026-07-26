import { Section, Container, SectionHeader } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { capabilities } from "@/lib/content";

export function Capabilities() {
  return (
    <Section id="capabilities" className="bg-card">
      <Container>
        <SectionHeader
          eyebrow="What sets it apart"
          title={
            <>
              Not just a feeder. A{" "}
              <span className="font-serif font-normal italic text-primary">
                field station.
              </span>
            </>
          }
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 70}
              className="flex gap-5 rounded-lg border bg-background p-7"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <c.icon className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.01em]">
                  {c.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
