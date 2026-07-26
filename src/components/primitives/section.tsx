import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Container({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("container-page", className)} {...props}>
      {children}
    </div>
  );
}

export function Section({
  id,
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-[clamp(4.5rem,9vw,7.5rem)]", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "font-mono text-xs uppercase tracking-[0.16em] text-ember-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  center = false,
  tone = "light",
  className,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  sub?: React.ReactNode;
  center?: boolean;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        center && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow className={tone === "dark" ? "text-ember" : undefined}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={cn(
          "text-balance text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.035em]",
          tone === "dark" && "text-on-ink",
        )}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed",
            center && "mx-auto",
            tone === "dark" ? "text-on-ink-muted" : "text-muted-foreground",
          )}
        >
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}
