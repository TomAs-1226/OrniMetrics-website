import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section, Container, SectionHeader } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { plans } from "@/lib/content";

export function Plans() {
  return (
    <Section id="plans" className="bg-card">
      <Container>
        <SectionHeader
          eyebrow="Software"
          title={
            <>
              Unlock the full{" "}
              <span className="font-serif font-normal italic text-primary">
                picture.
              </span>
            </>
          }
          sub="Every feeder includes the essentials. Upgrade for cloud, individual tracking, and research tools."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 60}
              className={cn(
                "relative flex flex-col rounded-lg border bg-background p-6",
                p.popular && "ring-2 ring-primary",
              )}
            >
              {p.popular ? (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                  Best value
                </span>
              ) : null}
              <h3 className="font-semibold">{p.name}</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-3xl font-semibold tracking-[-0.02em]">
                  {p.price}
                </span>
                {p.per ? (
                  <span className="text-sm text-muted-foreground">{p.per}</span>
                ) : null}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
              <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-border pt-5 text-sm">
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
