import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { TileIcon } from "@/components/TileIcon";
import { abs, breadcrumbLd, pageMetadata } from "@/lib/seo";
import { BOOSTERS } from "@/lib/game";
import { BASE_PATH } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Boosters: Freeze, Pop and Key",
  description: "What the Freeze, Pop and Key boosters do in Jelly Gates: Block Jam Puzzle, and the level where each one unlocks.",
  path: "/boosters/",
});

export default function Boosters() {
  return (
    <main className="page" id="main"><div className="wrap">
      <h1>Boosters</h1>
      <p><strong>In short:</strong> Jelly Gates has three boosters: Freeze stops the timer, Pop removes a jelly and Key opens any gate. They unlock as you play, from level 5.</p>
      <div className="boost-list">
        {BOOSTERS.map((b) => (
          <div className="card" key={b.name}>
            {b.img ? <Image src={`${BASE_PATH}/img/boosters/${b.img}.webp`} alt="" width={96} height={96} /> : <TileIcon tile="orange" symbol="hexagon" size={96} />}
            <div><h2>{b.name}</h2><p>{b.text}</p><p><small>Unlocks at level {b.unlock}.</small></p></div>
          </div>
        ))}
      </div>
      <p>Coins buy boosters and refills, and you can win more from the daily treats and the lucky spin. See <Link href="/how-to-play/">how to play</Link> and the <Link href="/worlds/">worlds</Link>.</p>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Boosters", path: "/boosters/" }])} />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "ItemList", name: "Jelly Gates boosters", url: abs("/boosters/"),
        itemListElement: BOOSTERS.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.name, description: b.text })),
      }} />
    </div></main>
  );
}
