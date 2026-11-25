import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: "The terms that apply when you play Jelly Gates.",
  path: "/terms/",
});

export default function Page() {
  return (
    <LegalPage title="Terms of Use" path="/terms/" draft>

<p><strong>Effective date:</strong> [EFFECTIVE DATE — to be set at launch] {/* STATIC: effective date is a placeholder; set at launch */}</p>
<p className="note">{/* STATIC: in-app Terms screen is one line ("Jelly Gates is a game for fun. Play fair and have a sweet time!"); this page is the full version */}Note for the owner: the in-app Terms screen is a one-line summary. This page is the full version and should be linked from it.</p>
<p>By downloading or playing Jelly Gates (the "Game"), published by <a href="https://wakeupmonster.com/" rel="noopener">Wakeup Monster</a> ("we") <em>[LEGAL NAME — to be provided]</em>, you agree to these terms. If you do not agree, do not use the Game.</p>
<h2>1. Licence</h2>
<p>We grant you a personal, non-exclusive, non-transferable, revocable licence to install and play the Game on devices you own or control, for non-commercial use, subject to these terms and the app store's usage rules. We keep all rights in the Game, including its art, music, code and name.</p>
<h2>2. Virtual currency and items</h2>
<p>Coins, extra moves, cosmetics and similar virtual items have no cash value, are not property, cannot be exchanged for money, and can't be transferred. They are licensed to you, not sold, and may be modified or removed (for example if the Game is discontinued), subject to applicable law.</p>
<h2>3. Purchases and refunds</h2>
<p>Purchases are processed by Google Play or Apple and are final except where required by law or permitted by the store's refund policy. Refund requests are handled by the store (Google Play or Apple), not by us. Because the Game has no account or cloud save, purchases are tied to your store account; use the "Restore purchases" option after reinstalling.</p>
<h2>4. Ads</h2>
<p>The Game is supported by ads. Watching optional rewarded ads may give in-game rewards. The "remove ads" purchase removes interstitial ads but may not remove ads you choose to watch for rewards.</p>
<h2>5. Acceptable use</h2>
<p>Do not cheat, modify, reverse engineer, decompile or tamper with the Game or its purchase verification; use bots or exploits; commit fraud (including chargeback abuse); or use the Game unlawfully. We may block access to purchase verification for fraudulent activity.</p>
<h2>6. Progress on your device</h2>
<p>Progress is stored on your device only. We cannot recover progress lost through uninstalling, device loss or data clearing.</p>
<h2>7. Disclaimer and limitation of liability</h2>
<p>The Game is provided "as is" without warranties of any kind, to the extent permitted by law. To the maximum extent permitted by law, we are not liable for indirect, incidental or consequential damages, and our total liability is limited to the amount you paid us for the Game in the 12 months before the claim. Nothing excludes liability that cannot be excluded by law, including for death or personal injury caused by negligence or for fraud, or your statutory consumer rights.</p>
<h2>8. Changes and termination</h2>
<p>We may update the Game or these terms. Continued use after an update means you accept it. We may suspend or end access if you breach these terms.</p>
<h2>9. Governing law</h2>
<p>These terms are governed by the laws of <em>[GOVERNING LAW / JURISDICTION — to be provided]</em>, without affecting mandatory consumer protections in your country of residence. {/* STATIC: governing law and venue placeholder */}</p>
<h2>10. Contact</h2>
<p><ContactEmail />{/* STATIC: placeholder contact email; owner must provide the real address */}. See also our <Link href="/privacy/">Privacy Policy</Link>.</p>

    </LegalPage>
  );
}
