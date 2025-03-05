import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const protocol = "https";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // You can add disallow paths if needed
      // disallow: ["/internal/", "/admin/"],
    },
    sitemap: `${protocol}://${host}/sitemap.xml`,
  };
}
