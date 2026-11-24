import type { Metadata } from "next";
import { BASE_PATH, SITE, SITE_URL } from "./site";

export const abs = (path: string) => `${SITE_URL}${path}`;
export const SHARE_IMAGE = abs(`${BASE_PATH}/img/share.png`);

export function pageMetadata(o: { title: string; description: string; path: string; noindex?: boolean }): Metadata {
  const url = abs(o.path);
  return {
    title: o.title,
    description: o.description,
    alternates: { canonical: url },
    robots: o.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website", siteName: SITE.name, title: `${o.title} | ${SITE.name}`, description: o.description, url,
      images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: "Jelly Gates: candy sliding-block puzzle" }],
    },
    twitter: { card: "summary_large_image", title: `${o.title} | ${SITE.name}`, description: o.description, images: [SHARE_IMAGE] },
  };
}

export const orgId = abs("/#organization");
export const appId = abs("/#app");

export const organizationLd = {
  "@type": "Organization", "@id": orgId, name: SITE.developer, url: abs("/"),
  logo: abs(`${BASE_PATH}/icon.svg`), email: SITE.email,
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
  };
}
