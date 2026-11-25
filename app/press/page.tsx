import type { Metadata } from "next";
import { ContactEmail } from "@/components/ContactEmail";
import { JsonLd } from "@/components/JsonLd";
import { abs, breadcrumbLd, pageMetadata } from "@/lib/seo";
import { BASE_PATH, SCREENS, SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Press kit",
  description: "Fact sheet, screenshots, colours and fonts for Jelly Gates, a candy sliding-block puzzle game by Wakeup Monster.",
  path: "/press/",
});

const palette: [string, string][] = [["Cream", "#FFF6E6"], ["Caramel", "#E9C08E"], ["Cocoa", "#4A2A1F"], ["Cherry", "#FF4D6D"], ["Blueberry", "#3D8BFF"], ["Lemon", "#FFC93C"], ["Lime", "#49D17D"], ["Tangerine", "#FF8A3D"], ["Grape", "#9B5CFF"], ["Bubblegum", "#FF6FC8"], ["Mint", "#22C7C0"]];

export default function Press() {
  return (
    <main className="page" id="main"><div className="wrap">
      <h1>Jelly Gates: Block Jam Puzzle press kit</h1>
      <h2>Fact sheet</h2>
      <dl className="facts">
        <dt>Game</dt><dd>Jelly Gates: Block Jam Puzzle (short name: Jelly Gates)</dd>
        <dt>Developer</dt><dd><a href={SITE.companyUrl} rel="noopener">{SITE.developer}</a> ({SITE.companyUrl.replace("https://", "").replace(/\/$/, "")})</dd>
        <dt>Genre</dt><dd>Sliding-block puzzle (casual)</dd>
        <dt>Platforms</dt><dd>Android (Google Play), iOS (App Store)</dd>
        <dt>Status</dt><dd>{/* STATIC: launch date and release status to confirm */}Coming soon [release date to be announced]</dd>
        <dt>Price</dt><dd>{/* STATIC: confirm price model */}Free to play with optional ads and in-app purchases [to be confirmed]</dd>
        <dt>Accounts</dt><dd>None: guest play, progress stored on device</dd>
        <dt>Website</dt><dd><a href={abs("/")}>{abs("/")}</a></dd>
        <dt>Press contact</dt><dd><ContactEmail /></dd>
      </dl>
      <h2>Description</h2>
      <p>{SITE.description}</p>
      <h2>Screenshots</h2>
      <p>Right-click or long-press to save. All images are 390 × 844 px.</p>
      <ul>
        {SCREENS.map((s) => <li key={s.file}><a href={`${BASE_PATH}/img/screens/${s.file}.webp`}>{s.title}</a></li>)}
        <li><a href={`${BASE_PATH}/img/share.png`}>Share image (1200 × 630)</a></li>
      </ul>
      <h2>Brand colours</h2>
      <div className="swatches">{palette.map(([n, h]) => <span key={n} style={{ background: h, color: ["Cream", "Caramel", "Lemon"].includes(n) ? "#4A2A1F" : "#fff", textShadow: "none" }}>{n}<br />{h}</span>)}</div>
      <h2>Fonts</h2>
      <p>Bagel Fat One (titles) and M PLUS Rounded 1c (body), both under the SIL Open Font License.</p>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Press kit", path: "/press/" }])} />
    </div></main>
  );
}
