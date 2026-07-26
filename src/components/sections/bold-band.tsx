import { Container } from "@/components/primitives/section";
import { Marquee } from "@/components/primitives/marquee";
import { Reveal } from "@/components/primitives/reveal";

const species = [
  "Northern Cardinal",
  "Blue Jay",
  "American Goldfinch",
  "Black-capped Chickadee",
  "Tufted Titmouse",
  "House Finch",
  "Downy Woodpecker",
  "White-breasted Nuthatch",
  "Dark-eyed Junco",
  "Mourning Dove",
];

export function BoldBand() {
  return (
    <section className="mt-20 bg-ink-900 py-[clamp(4.5rem,9vw,7.5rem)] text-on-ink">
      <Container>
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-on-ink-muted">
            <span className="size-2.5 bg-primary" />
            Patent Pending / Edge-AI Bird Feeder / Est. 2026
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 text-[clamp(3rem,11vw,9.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.05em]">
            Feed the
            <br />
            right{" "}
            <span className="font-serif font-medium normal-case italic text-primary">
              bird.
            </span>
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal delay={120}>
            <p className="max-w-[46ch] text-lg leading-relaxed text-on-ink-muted">
              Three models run together on the feeder — it names the species,
              recognizes the individual, and even judges whether the bird looks
              healthy. Timid birds finally eat. Squirrels get nothing. No cloud
              required.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="text-right">
              <div className="text-[clamp(3.5rem,8vw,7rem)] font-extrabold leading-[0.8] tracking-[-0.04em] text-primary tabular-nums">
                555
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-on-ink-muted">
                species recognized
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
      <div className="mt-14 border-y border-on-ink-line py-4">
        <Marquee>
          {species.map((s) => (
            <span
              key={s}
              className="text-xl font-semibold uppercase tracking-wide text-on-ink/75"
            >
              {s}
            </span>
          ))}
          <span className="text-xl font-semibold uppercase tracking-wide text-primary">
            Squirrel — denied
          </span>
        </Marquee>
      </div>
    </section>
  );
}
