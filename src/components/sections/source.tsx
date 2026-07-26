import { ArrowUpRight } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { GithubIcon } from "@/components/brand-icons";
import { repos } from "@/lib/content";

export function Source() {
  return (
    <Section id="source" className="bg-card">
      <Container>
        <SectionHeader
          eyebrow="Open source"
          title={
            <>
              Built in the{" "}
              <span className="font-serif font-normal italic text-primary">
                open.
              </span>
            </>
          }
          sub="Explore the code and models behind OrniMetrics."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {repos.map((r, i) => (
            <Reveal key={r.name} delay={i * 70}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-lg border bg-background p-7 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <GithubIcon className="size-6 text-foreground" />
                  <ArrowUpRight className="size-5 text-muted-foreground transition group-hover:text-primary" />
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <h3 className="font-semibold">{r.name}</h3>
                  <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                    {r.lang}
                  </span>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {r.blurb}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
