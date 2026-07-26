import { Section, Container, SectionHeader } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { appFeatures } from "@/lib/content";

const todayStats = [
  { n: "23", l: "visits" },
  { n: "7", l: "species" },
  { n: "82%", l: "feed" },
];

const recent = [
  { n: "Northern Cardinal", t: "2m", ok: true },
  { n: "Blue Jay", t: "8m", ok: true },
  { n: "Squirrel — blocked", t: "15m", ok: false },
];

function PhoneMock() {
  return (
    <div className="relative w-[280px] rounded-[2.5rem] border-8 border-foreground/90 bg-background shadow-2xl">
      <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-foreground/20" />
      <div className="space-y-3 p-4 pt-8">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">OrniMetrics</span>
          <span className="font-mono text-xs text-muted-foreground">9:41</span>
        </div>
        <div className="rounded-2xl border bg-card p-4">
          <div className="text-xs font-medium text-muted-foreground">Today</div>
          <div className="mt-2 flex justify-between">
            {todayStats.map((s) => (
              <div key={s.l}>
                <div className="text-xl font-semibold tabular-nums">{s.n}</div>
                <div className="text-[11px] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-4">
          <div className="text-xs font-medium text-muted-foreground">
            Recent visitors
          </div>
          <ul className="mt-2 space-y-2.5 text-sm">
            {recent.map((r) => (
              <li key={r.n} className="flex items-center gap-2">
                <span
                  className={`size-2 shrink-0 rounded-full ${r.ok ? "bg-emerald-500" : "bg-destructive"}`}
                />
                <span className="flex-1 truncate">{r.n}</span>
                <span className="text-xs text-muted-foreground">{r.t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function AppShowcase() {
  return (
    <Section id="app" className="bg-card">
      <Container>
        <SectionHeader
          eyebrow="Companion app"
          title={
            <>
              Your backyard,{" "}
              <span className="font-serif font-normal italic text-primary">
                in your pocket.
              </span>
            </>
          }
          sub="Monitor the feeder, meet your regulars, and share sightings with the community."
        />
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {appFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 60} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <f.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="flex justify-center">
            <PhoneMock />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
