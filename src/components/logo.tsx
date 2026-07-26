import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-[7px] bg-primary text-primary-foreground",
        className,
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        className="size-[62%]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 7h.01" />
        <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
        <path d="m7 18-1.3-3.9" />
        <path d="M18 8.3 21.7 7" />
      </svg>
    </span>
  );
}
