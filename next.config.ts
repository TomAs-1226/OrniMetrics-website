import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export -> emits an `out/` folder of HTML/CSS/JS.
  // Deployed on Render as a Static Site (fast, free, great SEO).
  output: "export",
  // Static export can't use the default image optimizer; ship images as-is
  // (we hand-optimize source assets instead).
  images: { unoptimized: true },
  // Emit /route/index.html so clean URLs work on a static host.
  trailingSlash: true,
};

export default nextConfig;
