import type { MetadataRoute } from "next";
import { newsArticles } from "@/lib/content/news";
import { analysisPieces } from "@/lib/content/analysis";

const base = "https://gmpunters.in";

const staticRoutes = [
  "",
  "/news",
  "/analysis",
  "/community",
  "/about",
  "/contact",
  "/privacy",
  "/disclaimer",
  "/cricketx",
  "/cricketx/download",
  "/cricketx/privacy-policy",
  "/cricketx/terms",
  "/cricketx/withdrawal-rules",
  "/cricketx/support",
  "/cricketx/updates",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const newsEntries = newsArticles.map((a) => ({
    url: `${base}/news/${a.slug}`,
    lastModified: a.date,
  }));

  const analysisEntries = analysisPieces.map((a) => ({
    url: `${base}/analysis/${a.slug}`,
    lastModified: a.date,
  }));

  return [...staticEntries, ...newsEntries, ...analysisEntries];
}
