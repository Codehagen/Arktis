import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  let domain = headersList.get("host") as string;
  let protocol = "https";

  // Define all website routes
  const routes = [
    "",
    "/eiendoms-ai",
    "/losninger",
    "/om-oss",
    "/kontakt",
    "/blog",
  ];

  // Map routes to sitemap entries
  const routeEntries = routes.map((route) => ({
    url: `${protocol}://${domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // TODO: Add dynamic blog entries when you have a data source
  // For example:
  // const blogPosts = await fetchBlogPosts();
  // const blogEntries = blogPosts.map(post => ({
  //   url: `${protocol}://${domain}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }));

  return [...routeEntries];
}
