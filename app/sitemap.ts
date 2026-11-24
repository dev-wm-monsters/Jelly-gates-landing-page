import type { MetadataRoute } from "next";
import { abs } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [["/", 1], ["/how-to-play/", 0.8], ["/support/", 0.6], ["/press/", 0.5], ["/privacy/", 0.3], ["/terms/", 0.3], ["/delete-data/", 0.3]];
  return pages.map(([p, priority]) => ({ url: abs(p), lastModified: SITE.lastUpdated, changeFrequency: "monthly", priority }));
}
