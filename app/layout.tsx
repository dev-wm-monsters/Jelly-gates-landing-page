import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE, SITE_URL } from "@/lib/site";
import { SHARE_IMAGE } from "@/lib/seo";

const title = localFont({ src: "./fonts/BagelFatOne-400.woff2", variable: "--font-title", display: "swap", weight: "400" });
const body = localFont({
  variable: "--font-body", display: "swap",
  src: [
    { path: "./fonts/MPlusRounded1c-400.woff2", weight: "400" },
    { path: "./fonts/MPlusRounded1c-700.woff2", weight: "700" },
    { path: "./fonts/MPlusRounded1c-800.woff2", weight: "800" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE.name}: ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.developer }],
  creator: SITE.developer,
  openGraph: { type: "website", siteName: SITE.name, locale: "en_US", images: [{ url: SHARE_IMAGE, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: [SHARE_IMAGE] },
};
export const viewport: Viewport = { themeColor: "#FFF6E6", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${title.variable} ${body.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
