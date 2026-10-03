import { CONTACT } from "./offer";

const OG_IMAGE = `${CONTACT.siteUrl}/og-image.jpg`;

/** Per-route head with absolute canonical/OG URLs on the published domain. */
export function seo(path: string, title: string, description: string) {
  const url = `${CONTACT.siteUrl}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
