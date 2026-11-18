import type { MetadataRoute } from "next";
import { allowSearchIndexing, siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!allowSearchIndexing) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
