"use client";

import * as React from "react";
import { Play } from "lucide-react";

export function YouTubeLite({ id, title }: { id: string; title: string }) {
  const [active, setActive] = React.useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border bg-ink-900">
      {active ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 size-full"
          aria-label={`Play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            className="size-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            loading="lazy"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition duration-300 group-hover:scale-110">
              <Play className="size-6 translate-x-0.5" fill="currentColor" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
