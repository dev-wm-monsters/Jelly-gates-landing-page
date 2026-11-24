import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Phone } from "@/components/Phone";
import { abs, breadcrumbLd, pageMetadata } from "@/lib/seo";
import { SCREENS } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "How to play Jelly Gates",
  description: "Learn how to play Jelly Gates: slide each jelly out through the gate with its colour and symbol, beat the timer and earn stars to build Jelly Town.",
  path: "/how-to-play/",
});

const steps = [
  { name: "Drag a jelly", text: "Touch a jelly and drag it along its row or column. Jellies slide until something blocks them." },
  { name: "Match the gate", text: "Move each jelly to the gate on the edge of the board that has the same colour and symbol. A wrong gate will not let it through." },
  { name: "Clear the way", text: "Move blocking jellies aside first. Plan the order, because every move counts." },
  { name: "Beat the timer", text: "Clear the whole board before the timer runs out. Fewer moves earn up to three stars." },
  { name: "Spend stars and coins", text: "Stars build Jelly Town. Coins buy boosters and refills." },
];

export default function HowToPlay() {
  return (
    <main className="page" id="main"><div className="wrap">
      <h1>How to play Jelly Gates</h1>
      <p><strong>In short:</strong> drag each jelly out through the gate with its colour and symbol, before the timer runs out. Fewer moves earn more stars; stars build your town and coins buy boosters.</p>
      <ol className="steps">
        {steps.map((s) => <li key={s.name}><strong>{s.name}.</strong> {s.text}</li>)}
      </ol>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", margin: "24px 0" }}>
        <Phone file="play" alt={SCREENS[1].alt} /><Phone file="win" alt={SCREENS[3].alt} />
      </div>
      <h2>Tips</h2>
      <ul>
        <li>Look at which gates are open before you move anything.</li>
        <li>If you are stuck, a booster can freeze the timer or pop a jelly.</li>
        <li>Come back daily for the daily challenge, daily treats and the lucky spin.</li>
      </ul>
      <p>More questions? See <Link href="/support/">Support</Link> or the <Link href="/">FAQ on the home page</Link>.</p>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "HowTo", name: "How to play Jelly Gates", url: abs("/how-to-play/"),
        step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text })),
      }} />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "How to play", path: "/how-to-play/" }])} />
    </div></main>
  );
}
