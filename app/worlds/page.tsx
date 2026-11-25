import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Phone } from "@/components/Phone";
import { abs, breadcrumbLd, pageMetadata } from "@/lib/seo";
import { ZONES } from "@/lib/game";
import { SCREENS } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Worlds and levels: 6 zones, 6 boss gates",
  description: "Explore the six zones of Jelly Gates: Block Jam Puzzle, from Gummy Meadows to the Royal Jelly Citadel, with their levels, difficulty and boss gates.",
  path: "/worlds/",
});

export default function Worlds() {
  return (
    <main className="page" id="main"><div className="wrap">
      <h1>Worlds and levels</h1>
      <p><strong>In short:</strong> Jelly Gates has 6 zones. Each zone has 5 levels and ends with a Boss Gate. Beat the boss to open the next zone, and the puzzles get trickier as you go.</p>
      <div style={{ margin: "24px 0" }}><Phone file="map" alt={SCREENS[2].alt} /></div>
      {ZONES.map((z, i) => (
        <section key={z.name}>
          <h2>{i + 1}. {z.name}</h2>
          <p><em>{z.tagline}.</em> Difficulty: {z.tier}.</p>
          <p><strong>Levels:</strong> {z.levels.join(", ")}.</p>
          <p><strong>Boss Gate:</strong> {z.boss}.</p>
        </section>
      ))}
      <p>Stuck on a level? Check the <Link href="/boosters/">boosters</Link> or the <Link href="/how-to-play/">how-to-play guide</Link>.</p>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "ItemList", name: "Jelly Gates zones", url: abs("/worlds/"),
        itemListElement: ZONES.map((z, i) => ({ "@type": "ListItem", position: i + 1, name: z.name, description: z.tagline })),
      }} />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Worlds", path: "/worlds/" }])} />
    </div></main>
  );
}
