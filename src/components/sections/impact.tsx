import { Container } from "@/components/primitives/section";
import { Reveal } from "@/components/primitives/reveal";
import { CountUp } from "@/components/primitives/count-up";
import { impactStats } from "@/lib/content";

export function Impact() {
  return (
    <section className="bg-ink-900 py-[clamp(4rem,8vw,6.5rem)] text-on-ink">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center sm:text-left">
              <div className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold tracking-[-0.04em] text-primary tabular-nums">
                <CountUp
                  to={s.value}
                  decimals={s.decimals ?? 0}
                  suffix={s.suffix}
                />
              </div>
              <div className="mt-2 text-sm text-on-ink-muted">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
