import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "@/components/Phone";
import { StoreBadges } from "@/components/StoreBadges";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { appId, abs, orgId, organizationLd, pageMetadata } from "@/lib/seo";
import { BASE_PATH, FAQ, SCREENS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: `${SITE.name}: ${SITE.tagline}`,
    description: SITE.description,
    path: "/",
  }),
  title: { absolute: `${SITE.name}: candy sliding-block puzzle game for Android & iOS` },
};

const features = [
  { c: "var(--cherry)", t: "Slide & match", d: "Drag jellies across the board and out through the gate with the same colour and symbol. Clear the board before the timer runs out; fewer moves earn more stars." },
  { c: "var(--lime)", t: "Build your jelly town", d: "Stars turn into houses, a bakery and a glowing fountain. Spend them to build Jelly Town and unlock new zones such as Caramel Canyon." },
  { c: "var(--grape)", t: "Fresh every day", d: "Daily challenge boards, daily treats, a lucky spin wheel, events and move challenges give you a reason to come back." },
  { c: "var(--blueberry)", t: "Play as a guest", d: "No login and no sign-up. Jump straight in; your progress stays on your device." },
  { c: "var(--tangerine)", t: "Boosters when you're stuck", d: "Freeze the timer or pop a jelly with boosters bought with coins or won from spins and rewards." },
  { c: "var(--mint)", t: "Candy Glass look", d: "Glossy, glowing candy art with skins and trails that change how your jellies look, never how the puzzles play." },
];

const ld = {
  "@context": "https://schema.org",
  "@graph": [
    organizationLd,
    { "@type": "WebSite", "@id": abs("/#website"), url: abs("/"), name: SITE.name, publisher: { "@id": orgId }, inLanguage: "en" },
    {
      "@type": ["MobileApplication", "VideoGame"], "@id": appId, name: SITE.name, description: SITE.description,
      applicationCategory: "GameApplication", genre: ["Puzzle", "Casual"], operatingSystem: "Android, iOS",
      gamePlatform: ["Android", "iOS"], inLanguage: "en", url: abs("/"),
      image: SCREENS.slice(0, 4).map((s) => abs(`${BASE_PATH}/img/screens/${s.file}.webp`)),
      screenshot: SCREENS.map((s) => ({ "@type": "ImageObject", contentUrl: abs(`${BASE_PATH}/img/screens/${s.file}.webp`), caption: s.alt })),
      author: { "@id": orgId }, publisher: { "@id": orgId },
      // STATIC: confirm price model (free with in-app purchases) before launch
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage", "@id": abs("/#faq"),
      mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <div className="sky" style={{ backgroundImage: `url(${BASE_PATH}/img/art/jelly-town.webp)` }}>
        <div className="cloud c1" aria-hidden="true" /><div className="cloud c2" aria-hidden="true" />
        <main id="main"><div className="wrap hero">
          <div>
            <h1>Jelly Gates</h1>
            <p className="tag">Slide the jellies. Match the gates. Pop the puzzle!</p>
            <p className="lead">Jelly Gates is a candy sliding-block puzzle game for Android and iOS. Guide every coloured jelly out through the gate of its own colour, then build a sweet town with the stars you earn.</p>
            <StoreBadges />
          </div>
          <div className="phones">
            <Phone file="home" alt={SCREENS[0].alt} priority />
            <Phone file="play" alt={SCREENS[1].alt} priority />
          </div>
        </div></main>
      </div>

      <section className="block"><div className="wrap">
        <h2>What is Jelly Gates?</h2>
        <p className="sub">Jelly Gates is a sliding-block puzzle game by Wakeup Monster. Each board is full of jellies and gates. Drag a jelly until it reaches the gate with the same colour and symbol, clear the board, and earn up to three stars. <Link href="/how-to-play/">Read the full how-to-play guide</Link>.</p>
        <div className="features">
          {features.map((f, i) => (
            <div className="card" key={f.t}><div className="ico" style={{ background: f.c }} aria-hidden="true">{i + 1}</div><h3>{f.t}</h3><p>{f.d}</p></div>
          ))}
        </div>
      </div></section>

      <section className="block" style={{ paddingTop: 0 }}><div className="wrap">
        <h2>See it in action</h2>
        <div className="gallery" role="list" aria-label="Game screenshots">
          {SCREENS.map((s) => (
            <figure key={s.file} role="listitem"><Phone file={s.file} alt={s.alt} /><figcaption><b>{s.title}</b>{s.caption}</figcaption></figure>
          ))}
        </div>
      </div></section>

      <section className="block" style={{ paddingTop: 0 }}><div className="wrap" style={{ maxWidth: 800 }}>
        <h2>Frequently asked questions</h2>
        <Faq />
      </div></section>

      <section className="band"><div className="wrap">
        <h2>Ready to slide?</h2>
        <p>Coming soon to Google Play and the App Store.</p>
        <StoreBadges center />
      </div></section>
      <JsonLd data={ld} />
    </>
  );
}
