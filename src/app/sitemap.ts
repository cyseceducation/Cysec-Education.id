import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { roadmaps, ebooks, webinars, threads, blogPosts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${site.url}${p}`;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: u("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: u("/roadmap"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: u("/ebooks"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: u("/webinars"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: u("/forum"), lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: u("/blog"), lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: u("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const dynamicRoutes: MetadataRoute.Sitemap = [
    ...roadmaps.map((r) => ({ url: u(`/roadmap/${r.id}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...ebooks.map((e) => ({ url: u(`/ebooks/${e.id}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...webinars.map((w) => ({ url: u(`/webinars/${w.id}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...threads.map((t) => ({ url: u(`/forum/${t.id}`), lastModified: now, changeFrequency: "weekly" as const, priority: 0.5 })),
    ...blogPosts.map((p) => ({ url: u(`/blog/${p.id}`), lastModified: new Date(p.date), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];

  return [...staticRoutes, ...dynamicRoutes];
}