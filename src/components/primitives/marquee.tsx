import * as React from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  duration = 34,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <div
      className={cn("flex w-full overflow-hidden", className)}
      style={
        {
          maskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
        } as React.CSSProperties
      }
    >
      <div
        className="flex min-w-full shrink-0 items-center gap-8 pr-8 motion-reduce:animate-none"
        style={{
          animation: `marquee ${duration}s linear infinite`,
        }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex min-w-full shrink-0 items-center gap-8 pr-8 motion-reduce:animate-none"
        style={{
          animation: `marquee ${duration}s linear infinite`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
