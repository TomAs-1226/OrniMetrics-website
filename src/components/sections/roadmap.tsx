import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section, Container, SectionHeader } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/content";

export function Roadmap() {
  return (
    <Section id="roadmap">
      <Container>
        <SectionHeader
          eyebrow="Roadmap"
          title={
            <>
              A feeder for every{" "}
              <span className="font-serif font-normal italic text-primary">
                birdwatcher.
              </span>
            </>
          }
          sub="Three models — from an affordable entry point to a research-grade rig."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 80}
              className={cn(
                "flex flex-col rounded-lg border bg-card p-8",
                p.current && "ring-2 ring-primary",
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <p.icon className="size-6" />
                </div>
                <Badge variant={p.current ? "default" : "outline"}>
                  {p.badge}
                </Badge>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em]">
                OrniMetrics <span className="text-primary">{p.name}</span>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-3xl font-semibold tracking-[-0.02em]">
                  {p.price}
                </span>
                {p.estimate ? (
                  <span className="text-xs text-muted-foreground">est.</span>
                ) : null}
              </div>
              <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-border pt-6 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
