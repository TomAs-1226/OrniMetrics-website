import type { LucideIcon } from "lucide-react";
import {
  ScanEye,
  Bird,
  Fingerprint,
  Boxes,
  ShieldCheck,
  Cog,
  Cpu,
  Zap,
  Radar,
  Wifi,
  Activity,
  BellRing,
  CloudSun,
  Users,
  Images,
  PieChart,
  Feather,
  Crown,
  FileText,
  BookOpen,
  Camera,
} from "lucide-react";

/* ---------------------------------------------------------------- *
 * Central content. Tech facts sourced from the OrniMetrics GitHub
 * (Ornimetrics-AI deployment branch) + HuggingFace model card.
 * Some metrics reflect model capability (HF card) vs the shipped subset.
 * ---------------------------------------------------------------- */

export const site = {
  name: "OrniMetrics",
  tagline: "The bird feeder that knows who's who.",
  author: "Baichen Yu",
  links: {
    github: "https://github.com/TomAs-1226",
    githubAI: "https://github.com/TomAs-1226/Ornimetrics-AI",
    githubML: "https://github.com/TomAs-1226/Ornimetrics-ML",
    githubApp: "https://github.com/TomAs-1226/ornimetrics_app",
    huggingface: "https://huggingface.co/Ornimetrics/ornimetrics-edge",
    googleSite: "https://sites.google.com/view/ornimetrics/home",
    youtube: "https://youtu.be/KBCVFSuUY1U",
  },
};

export const navLinks = [
  { label: "How it works", href: "#how" },
  { label: "Technology", href: "#technology" },
  { label: "Watch", href: "#watch" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "AI-Powered Smart Bird Feeder",
  titleTop: "Every bird,",
  titleAccent: "recognized.",
  subtitle:
    "On-device AI names the species, recognizes the individual, and keeps squirrels out — no cloud required.",
};

export type Stat = {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const heroStats: Stat[] = [
  { value: 555, label: "species recognized" },
  { value: 86.9, decimals: 1, suffix: "%", label: "top-1 accuracy" },
  { value: 100, suffix: "%", label: "on-device · no cloud" },
];

export const impactStats: Stat[] = [
  { value: 555, label: "Species the model knows" },
  { value: 86.9, decimals: 1, suffix: "%", label: "Top-1 classification" },
  { value: 30, suffix: " fps", label: "Real-time on Hailo-8" },
  { value: 0, label: "Cloud calls to decide" },
];

export type Model = {
  step: string;
  icon: LucideIcon;
  title: string;
  spec: string;
  blurb: string;
  points: string[];
};

// The "triple-model architecture" = the on-device bird-welfare pipeline
// (detect -> embed -> anomaly-score). Source: HuggingFace ornimetrics-edge card.
export const models: Model[] = [
  {
    step: "01 · Detect",
    icon: ScanEye,
    title: "Find the bird",
    spec: "YOLO · Hailo-8",
    blurb:
      "A real-time detector on the AI HAT+ (26 TOPS) finds and crops each visitor from the live feed — birds, squirrels, and people.",
    points: ["0.93 mAP@50", "~30 fps on-device", "auto-cropping"],
  },
  {
    step: "02 · Embed",
    icon: Boxes,
    title: "Encode the bird",
    spec: "EfficientNetV2-S",
    blurb:
      "The crop is encoded into a 1280-dimension fingerprint that captures both the species and exactly what a healthy bird of its kind should look like.",
    points: ["1280-d features", "555 species", "86.9% top-1"],
  },
  {
    step: "03 · Assess welfare",
    icon: Activity,
    title: "Judge its health",
    spec: "Mahalanobis anomaly",
    blurb:
      "Without ever training on a single sick bird, it measures how far the visitor sits from the healthy distribution — flagging possible injury or illness.",
    points: ["AUC 0.974 vs dead", "AUC 0.963 vs injured", "fully unsupervised"],
  },
];

export const welfare = {
  eyebrow: "Triple-model architecture",
  title: "A welfare pipeline that never trained on a sick bird.",
  sub: "Three models chain on the feeder — detect, embed, and score — so OrniMetrics tells you not just which bird visited, but whether it looks healthy.",
  quote:
    "There is no public dataset of injured wild birds, so this isn't a supervised 'injured detector.' Instead it learns what healthy birds look like in the backbone's feature space and measures how far a new bird sits from that distribution.",
  quoteBy: "OrniMetrics model card · HuggingFace",
};

export type Step = { icon: LucideIcon; title: string; body: string };

export const pipeline: Step[] = [
  {
    icon: ScanEye,
    title: "Detect",
    body: "A YOLO model on the Hailo-8 flags any animal the instant it lands.",
  },
  {
    icon: Boxes,
    title: "Sense depth",
    body: "A depth camera turns the visitor into a 3D point cloud.",
  },
  {
    icon: ShieldCheck,
    title: "Verify",
    body: "Liveness checks reject flat photos and decoys.",
  },
  {
    icon: Fingerprint,
    title: "Identify",
    body: "Species classified; the individual matched to the gallery.",
  },
  {
    icon: Cog,
    title: "Decide",
    body: "Per-bird rules set the portion. Squirrels get a locked tray.",
  },
  {
    icon: Camera,
    title: "Log",
    body: "Every visit is timestamped, photographed, and logged.",
  },
];

export type Tech = { icon: LucideIcon; name: string; spec: string; blurb: string };

export const techStack: Tech[] = [
  {
    icon: Cpu,
    name: "Raspberry Pi 5",
    spec: "8GB compute",
    blurb: "The brain — runs the OS, the full pipeline, and the local dashboard.",
  },
  {
    icon: Zap,
    name: "AI HAT+ · Hailo-8",
    spec: "26 TOPS",
    blurb: "Accelerates detection and inference at the edge. No cloud, no lag.",
  },
  {
    icon: Radar,
    name: "Depth camera",
    spec: "Time-of-flight",
    blurb: "Turns every visitor into a 3D point cloud — the basis for individual recognition.",
  },
  {
    icon: Camera,
    name: "RGB camera",
    spec: "live feed",
    blurb: "Powers real-time detection and the timestamped photo log of every visitor.",
  },
  {
    icon: Cog,
    name: "Servo dispenser",
    spec: "PCA9685",
    blurb: "Precision, jitter-safe servo control meters the exact portion per species.",
  },
  {
    icon: Wifi,
    name: "Ornimetrics OS",
    spec: "on-device",
    blurb: "Bluetooth setup, a local web dashboard, app pairing, and optional cloud sync.",
  },
];

export const capabilities: Step[] = [
  {
    icon: Fingerprint,
    title: "Individual recognition",
    body: "A 3D 'Face-ID' for birds. A depth camera fingerprints each visitor and matches it to an on-device gallery that grows as new birds enroll.",
  },
  {
    icon: ShieldCheck,
    title: "Anti-spoofing",
    body: "Point-cloud liveness checks reject flat photos and decoys, so only real birds are ever recognized.",
  },
  {
    icon: Bird,
    title: "555 species",
    body: "Fine-grained classification across up to 555 North American species, at 86.9% top-1 accuracy.",
  },
  {
    icon: Wifi,
    title: "Ornimetrics OS",
    body: "Headless Bluetooth onboarding, a local dashboard, and per-user cloud sync — a platform, not just a feeder.",
  },
];

export type Video = {
  id: string | null;
  title: string;
  blurb: string;
  duration: string;
  tag: string;
  featured?: boolean;
};

export const videos: Video[] = [
  {
    id: "KBCVFSuUY1U",
    title: "Meet OrniMetrics",
    blurb: "The official product film — the feeder and its most notable features.",
    duration: "1:47",
    tag: "Film",
    featured: true,
  },
  {
    id: "iwKFyFyVEkc",
    title: "Introduction",
    blurb: "A friendly tour of the OrniMetrics smart bird feeder.",
    duration: "2:30",
    tag: "Overview",
  },
  {
    id: "6kyETM3tRLI",
    title: "The concept",
    blurb: "The vision behind OrniMetrics, in under a minute.",
    duration: "0:59",
    tag: "Concept",
  },
  {
    id: "DaaiMkBa01E",
    title: "At the Game Gala",
    blurb: "OrniMetrics showcased at the Game Gala.",
    duration: "2:00",
    tag: "Showcase",
  },
];

export const appFeatures: Step[] = [
  {
    icon: BellRing,
    title: "Smart notifications",
    body: "Alerts when a rare species visits, feed runs low, or maintenance is due — with a live food-level bar.",
  },
  {
    icon: CloudSun,
    title: "Environment context",
    body: "GPS-based weather and humidity tag every sighting and drive maintenance rules.",
  },
  {
    icon: Users,
    title: "Community Center",
    body: "Share sightings and photos, and get AI 'Ecology Insights' on each post.",
  },
  {
    icon: Images,
    title: "Photo gallery",
    body: "Every visitor, timestamped and tagged by species — and by individual.",
  },
  {
    icon: PieChart,
    title: "Analytics",
    body: "Track species frequency, individual regulars, feed consumption, and trends.",
  },
];

export type Product = {
  name: string;
  accent: string;
  icon: LucideIcon;
  badge: string;
  tagline: string;
  price: string;
  estimate?: boolean;
  current?: boolean;
  features: string[];
};

export const products: Product[] = [
  {
    name: "Lite",
    accent: "Lite",
    icon: Feather,
    badge: "Coming soon",
    tagline: "Affordable AI feeding for everyone",
    price: "$149",
    estimate: true,
    features: [
      "Compact Pi-powered core",
      "Species detection (30+ species)",
      "Single-servo dispensing",
      "Companion app basics",
      "Weatherproof design",
    ],
  },
  {
    name: "Standard",
    accent: "Standard",
    icon: Bird,
    badge: "Current model",
    tagline: "The full individual-recognition feeder",
    price: "$299",
    current: true,
    features: [
      "Raspberry Pi 5 + AI HAT+",
      "555-species classification",
      "3D Face-ID individual recognition",
      "Time-of-flight depth camera",
      "Full weatherproof housing",
      "Ornimetrics OS + app",
    ],
  },
  {
    name: "Pro",
    accent: "Pro",
    icon: Crown,
    badge: "In development",
    tagline: "Research-grade, for labs and enthusiasts",
    price: "$599",
    estimate: true,
    features: [
      "Dual accelerator + 4K night vision",
      "Multi-chamber dispensing (4 seeds)",
      "Solar panel + battery backup",
      "Cellular (LTE) connectivity",
      "BirdNET audio identification",
      "Research-grade data export",
    ],
  },
];

export type Plan = {
  name: string;
  price: string;
  per?: string;
  note: string;
  popular?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    per: "/mo",
    note: "Included with every feeder",
    features: [
      "Species detection",
      "Local photo storage",
      "Basic dashboard",
      "Manual feeding rules",
    ],
  },
  {
    name: "Plus",
    price: "$5",
    per: "/mo",
    note: "For casual birdwatchers",
    popular: true,
    features: [
      "Everything in Free",
      "Cloud photo backup",
      "Individual bird tracking",
      "Rare-bird push alerts",
      "Community leaderboards",
    ],
  },
  {
    name: "Pro",
    price: "$15",
    per: "/mo",
    note: "For enthusiasts & researchers",
    features: [
      "Everything in Plus",
      "AI species & welfare reports",
      "Raw data API access",
      "Multi-feeder management",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "For institutions & labs",
    features: [
      "Everything in Pro",
      "Bulk deployment",
      "Dedicated support + SLA",
      "White-label options",
      "On-prem hosting",
    ],
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How does it recognize individual birds?",
    a: "A depth (time-of-flight) camera builds a 3D point cloud of each visitor, and an embedding model matches it against an on-device gallery of known birds. New birds are enrolled on their first visit, and anti-spoofing rejects flat photos — so it's a genuine 3D 'Face-ID' for birds.",
  },
  {
    q: "How many species can it identify?",
    a: "The classification model is trained on up to 555 North American species with 86.9% top-1 accuracy. Units ship with a growing on-device set and improve over time.",
  },
  {
    q: "Does it need the internet or the cloud?",
    a: "No. Detection, species classification, and individual recognition all run on the feeder (Raspberry Pi 5 + Hailo-8 AI HAT+). The cloud is optional — only for app sync, backups, and community features.",
  },
  {
    q: "What happens when a squirrel shows up?",
    a: "It's detected and denied — the tray stays locked and the event is logged with a photo. It's humane: nothing harmful, just no free lunch.",
  },
  {
    q: "What's inside the feeder?",
    a: "A Raspberry Pi 5, the AI HAT+ (Hailo-8, 26 TOPS), an RGB camera, a time-of-flight depth camera, and a PCA9685-driven servo dispenser — all in a weatherproof housing.",
  },
  {
    q: "Can I choose which birds get fed?",
    a: "Yes. Through the app you set per-species — and even per-individual — rules for portion size, cooldowns, and priority.",
  },
];

export type Repo = {
  name: string;
  lang: string;
  href: string;
  blurb: string;
};

export const repos: Repo[] = [
  {
    name: "Ornimetrics-AI",
    lang: "Python",
    href: "https://github.com/TomAs-1226/Ornimetrics-AI",
    blurb:
      "The on-device brain: YOLO detection on Hailo, depth point clouds, individual re-identification, and servo control — the Ornimetrics OS.",
  },
  {
    name: "ornimetrics-edge",
    lang: "Model",
    href: "https://huggingface.co/Ornimetrics/ornimetrics-edge",
    blurb:
      "The edge model on HuggingFace: EfficientNetV2-S species classification with detection and re-identification heads.",
  },
  {
    name: "ornimetrics_app",
    lang: "Dart",
    href: "https://github.com/TomAs-1226/ornimetrics_app",
    blurb:
      "The Flutter companion app: notifications, environment context, photo gallery, and the community center.",
  },
];

export type Paper = {
  kind: string;
  icon: LucideIcon;
  title: string;
  meta: string;
  summary: string;
  href?: string;
};

export const papers: Paper[] = [
  {
    kind: "Original research",
    icon: FileText,
    title: "OrniMetrics: individual-level selective bird feeding at the edge",
    meta: "Yu, Baichen — OrniMetrics",
    summary:
      "The system paper: on-device detection, species classification, and 3D point-cloud re-identification for per-individual feeding.",
    href: "https://huggingface.co/Ornimetrics/ornimetrics-edge",
  },
  {
    kind: "Journal article",
    icon: BookOpen,
    title: "In bird-feeder battles, social species are featherweights",
    meta: "Grueskin, Z. — Audubon Magazine, 2023",
    summary:
      "Social species get outcompeted at feeders by dominant ones — the imbalance OrniMetrics corrects with selective feeding.",
    href: "https://www.audubon.org/news/in-bird-feeder-battles-social-species-are-featherweights",
  },
  {
    kind: "Research study",
    icon: BookOpen,
    title: "When 136 bird species show up at a feeder… which one wins?",
    meta: "Cornell Lab of Ornithology / All About Birds",
    summary:
      "A study of competitive dynamics across 136 feeder species — the hierarchy OrniMetrics accounts for in its dispensing logic.",
    href: "https://www.allaboutbirds.org/news/when-136-bird-species-show-up-at-a-feeder-which-one-wins/",
  },
];

