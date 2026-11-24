import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { abs, breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Support",
  description: "Help for Jelly Gates: restoring purchases, lost progress, ads and how to contact us.",
  path: "/support/",
});

const items = [
  { q: "How do I restore my purchases?", a: "Open the game, go to Settings and choose Restore purchases, signed in to the same Google Play or Apple account you bought with. Purchases such as Remove ads are tied to your store account, so they return after a reinstall or on a new device. Consumable items you already spent, such as coin packs, cannot be restored." },
  { q: "I lost my progress. Can you get it back?", a: "Jelly Gates has no login and no cloud save, so progress lives only on your device. Uninstalling the game, clearing app data or changing phones removes it, and we cannot recover it because we never receive a copy. Your purchases can be restored (see above). Check whether your phone's own device backup is enabled to carry app data to a new device." },
  { q: "Why are there ads? Can I remove them?", a: "Ads from Google AdMob help keep the game going. Rewarded ads are optional and give you bonuses. The Remove ads purchase in the shop removes interstitial ads. See the Privacy Policy for how ads use data and how to change your ad choices." },
  { q: "My purchase didn't arrive.", a: "Check your connection and reopen the game: purchases are verified on our server and delivered when the check completes. If it still has not arrived, email us with your store order number (never your card details) and the item name." },
  { q: "How do I get a refund?", a: "Refunds are handled by Google Play or Apple. Request them through your store account's purchase history." },
];

export default function Support() {
  return (
    <main className="page" id="main"><div className="wrap">
      <h1>Support</h1>
      <p>Need a hand with Jelly Gates? Start with the answers below, or email us at <ContactEmail />.</p>
      {/* STATIC: exact in-app Restore purchases path to confirm; no contact form backend, mailto only */}
      <Faq items={items} />
      <p>How do I delete my data? See <Link href="/delete-data/">Delete your data</Link>. New to the game? Read <Link href="/how-to-play/">How to play</Link>.</p>
      <h2>Contact us</h2>
      <p>Email <ContactEmail /> and include your device model, OS version and a short description of the problem.</p>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "FAQPage", "@id": abs("/support/#faq"),
        mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }} />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Support", path: "/support/" }])} />
    </div></main>
  );
}
