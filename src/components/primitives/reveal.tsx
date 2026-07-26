"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type RevealProps = React.ComponentProps<"div"> & {
  delay?: number;
  /** re-hide when scrolled out of view */
  repeat?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  repeat = false,
  style,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (!repeat) io.disconnect();
        } else if (repeat) {
          setShown(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [repeat]);

  return (
    <div
      ref={ref}
      data-reveal={shown ? "in" : "out"}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={cn(
        "translate-y-4 opacity-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(.2,.7,.2,1)] will-change-[opacity,transform] motion-reduce:translate-y-0 motion-reduce:opacity-100",
        shown && "translate-y-0 opacity-100",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
