import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const lastModified = new Date("2026-07-07");

const routes = [
  { path: "/", priority: 1 },
  { path: "/first-visit", priority: 0.8 },
  { path: "/working-style", priority: 0.8 },
  { path: "/practice", priority: 0.9 },
  { path: "/practice/criminal", priority: 0.8 },
  { path: "/practice/civil", priority: 0.8 },
  { path: "/practice/inheritance-family", priority: 0.8 },
  { path: "/practice/administrative", priority: 0.8 },
  { path: "/consultation", priority: 0.9 },
  { path: "/faq", priority: 0.7 },
  { path: "/note", priority: 0.8 },
  { path: "/location", priority: 0.8 },
  { path: "/privacy", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
