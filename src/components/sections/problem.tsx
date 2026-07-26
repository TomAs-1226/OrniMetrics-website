import { ShieldAlert, Trash2, Bug, Squirrel } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";

const problems = [
  {
    icon: ShieldAlert,
    title: "Species dominance",
    body: "Aggressive birds bully timid ones away from a shared tray.",
  },
  {
    icon: Trash2,
    title: "Seed waste",
    body: "First-come-first-served feeding spills and wastes seed.",
  },
  {
    icon: Bug,
    title: "Disease spread",
    body: "Leftover seed becomes a breeding ground for avian disease.",
  },
  {
    icon: Squirrel,
    title: "Squirrel raids",
    body: "Squirrels drain the feed and crowd out the birds you want.",
  },
];

export function Problem() {
  return (
    <Section id="why" className="bg-card">
      <Container>
        <SectionHeader
          eyebrow="The problem"
          title={
            <>
              A shared tray is a{" "}
              <span className="font-serif font-normal italic text-primary">
                free-for-all.
              </span>
            </>
          }
          sub="Conventional feeders can't tell who's eating — so the loudest, boldest, and bushy-tailed win."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 60} className="rounded-lg border bg-background p-7">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
                <p.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-semibold">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-6 rounded-lg border bg-background p-8 text-center">
          <p className="mx-auto max-w-2xl text-balance text-xl font-medium tracking-[-0.01em]">
            OrniMetrics ends the scramble — it recognizes each visitor and feeds
            them by name.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
