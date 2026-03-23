import { useEffect } from "react";

const SITE_NAME = "Webvance";
const SITE_URL = "https://webvance.tech";
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/og-image.png`;

export interface SEOProps {
  /** Page-specific title — site name is appended automatically */
  title: string;
  /** 120-160 character meta description */
  description: string;
  /** Absolute canonical URL; defaults to current pathname */
  canonical?: string;
  /** Open Graph image URL; falls back to the default OG image */
  ogImage?: string;
  /** Set to true for pages that should not be indexed (e.g. thank-you pages) */
  noindex?: boolean;
}

/** Upsert a <meta> tag by attribute key */
function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

/** Upsert a <link> tag identified by rel + a data-seo marker */
function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"][data-seo]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    el.setAttribute("data-seo", "true");
    document.head.appendChild(el);
  }
  el.href = href;
}

/**
 * Lightweight, dependency-free SEO head manager.
 * Renders nothing — manages <title> and <meta> tags via the DOM.
 * Googlebot executes JavaScript, so dynamic meta tags are fully crawled.
 */
export function SEO({ title, description, canonical, ogImage, noindex = false }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = canonical ?? `${SITE_URL}${window.location.pathname}`;
    const image = ogImage ?? DEFAULT_OG_IMAGE;

    // Document title
    document.title = fullTitle;

    // Standard meta
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    // Canonical link
    setLink("canonical", canonicalUrl);

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", SITE_NAME);

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
  }, [title, description, canonical, ogImage, noindex]);

  return null;
}
