import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OrniMetrics — The AI bird feeder that knows who's who",
    template: "%s · OrniMetrics",
  },
  description:
    "OrniMetrics is an edge-AI smart bird feeder that recognizes individual birds in real time — dispensing species-specific portions while keeping squirrels out. 555 species, 3D Face-ID, 100% on-device. Patent pending.",
  applicationName: "OrniMetrics",
  authors: [{ name: "Baichen Yu" }],
  creator: "Baichen Yu",
  keywords: [
    "smart bird feeder",
    "edge AI",
    "individual bird identification",
    "bird re-identification",
    "computer vision",
    "Raspberry Pi",
    "Hailo",
    "YOLO",
    "ornithology",
    "3D Face-ID for birds",
  ],
  openGraph: {
    title: "OrniMetrics — The AI bird feeder that knows who's who",
    description:
      "Edge-AI smart bird feeder with individual bird recognition (3D Face-ID). 555 species, 100% on-device. Patent pending.",
    siteName: "OrniMetrics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrniMetrics — The AI bird feeder that knows who's who",
    description:
      "It recognizes individual birds. 555 species, 3D Face-ID, 100% on-device. Patent pending.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
    >
      <body className="min-h-dvh bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
