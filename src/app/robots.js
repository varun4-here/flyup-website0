/**
 * robots.txt — SEO configuration for FlyUP Foundation
 *
 * All public pages are allowed for all crawlers.
 * Next.js internal paths (/_next/) are excluded since they are build
 * artifacts, not user-facing content.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://flyupfoundation.org.in/sitemap.xml",
    host: "https://flyupfoundation.org.in",
  };
}
