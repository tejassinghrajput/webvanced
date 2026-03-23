import type { ReactNode } from "react";

export interface ServiceItem {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon?: string;
}

export interface Quality {
  title: string;
  description: string;
}

export interface HeroData {
  badge: string;
  stat: string;
  title: string;
  description: string;
}

export interface ServicePageData {
  hero: HeroData;
  intro: string;
  benefits: Benefit[];
  services: ServiceItem[];
  qualities: Quality[];
  process: string[];
  whyUs: string;
}

export type AccentColor = "indigo" | "emerald" | "orange" | "violet" | "pink" | "fuchsia" | "teal" | "sky" | "cyan" | "amber" | "rose" | "purple";

export interface ServiceTheme {
  accent: string; accentBg: string; accentBgLight: string; accentBorder: string;
  accentDark: string; accentIconBg: string; hoverBg: string; hoverBorder: string;
  hoverText: string; hoverShadow: string; heroBg: string; heroGlow: string;
  heroGradient: string; formButtonBg: string;
}
