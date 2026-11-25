import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Jelly Gates handles data: on-device storage, ads, purchases and your rights.",
  path: "/privacy/",
});

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy/">

<p><strong>Effective date:</strong> 25 November 2026</p>
<p>This policy explains what happens to information when you play Jelly Gates (the "Game"), published by <a href="https://wakeupmonster.com/" rel="noopener">Wakeup Monster</a> ("we", "us").</p>
<h2>1. Short version</h2>
<ul><li>There is no account, no login and no cloud save. You play as a guest.</li>
<li>Your progress, settings and coins are stored on your device only.</li>
<li>We show ads through Google AdMob, which collects some device data.</li>
<li>In-app purchases are handled by Google Play or Apple; we never see your card details.</li>
<li>Our server checks purchases using a purchase token and product id, nothing personal.</li></ul>
<h2>2. Data stored on your device only</h2>
<p>Game progress, levels completed, coin balance, purchased items, settings and similar data live in local storage on your device. We do not receive a copy. Uninstalling the Game removes this data (see <Link href="/delete-data/">Delete your data</Link>).</p>
<h2>3. Advertising (Google AdMob)</h2>
<p>The Game shows rewarded and interstitial ads served by Google AdMob. AdMob and its partners may collect and use your advertising ID, IP address, device and app information (model, OS version, language, approximate location derived from IP), and ad interaction data to serve and measure ads, prevent fraud and, where permitted, personalise ads. Learn more in <a href="https://policies.google.com/technologies/partner-sites" rel="noopener">Google's partner policy</a>.</p>
<ul><li><strong>EEA, UK and Switzerland:</strong> we use Google's User Messaging Platform (UMP) to ask for your consent before personalised ads. You can change your choice at any time in the Game's settings (privacy options), where offered.</li>
<li><strong>iOS:</strong> we ask permission through Apple's App Tracking Transparency (ATT) prompt. If you decline, the Game does not access your IDFA for tracking and ads may be less relevant.</li>
<li>You can reset or opt out of your advertising ID in your device settings (Android: Settings → Privacy → Ads; iOS: Settings → Privacy &amp; Security → Tracking).</li></ul>
<h2>4. In-app purchases (Google Play Billing and Apple App Store)</h2>
<p>Purchases (coin packs, extra moves, remove ads, cosmetics) are processed by Google Play Billing or Apple StoreKit. Payment details are handled solely by Google or Apple; we never see or store your card or payment information. Their own privacy policies apply to that processing.</p>
<h2>5. Purchase verification (Firebase Cloud Functions)</h2>
<p>To confirm that a purchase is genuine and to deliver it, the Game sends the store purchase token and product id to our backend running on Google Firebase Cloud Functions. This request contains no name, email or other personal details. We keep these verification records for as long as needed to prevent fraud, handle refunds and meet legal obligations. Firebase, as our infrastructure provider, may process technical data such as IP address in server logs.</p>
<h2>6. Analytics</h2>
<p>We do not include a separate analytics SDK. Only the data collected by AdMob and Firebase as described above is processed.</p>
<h2>7. This website</h2>
<p>This website does not use cookies, advertising trackers or analytics at present. {/* STATIC: if website analytics are added later, describe them here (cookieless, respecting Do Not Track) */}Our hosting provider may keep standard server logs (IP address, browser, pages requested) for security and operation. If you email us, we use your message only to reply.</p>
<h2>8. Children</h2>
<p>The Game is not directed at children under 13, and we do not knowingly collect personal information from them. If you believe a child has provided data, contact us and we will help.</p>
<h2>9. Your rights (GDPR / UK GDPR / CCPA)</h2>
<p>Depending on where you live you may have the right to access, correct, delete or port your data, to object to or restrict processing, to withdraw consent, and to lodge a complaint with your supervisory authority. California residents may also request to know, delete, and opt out of the "sale" or "sharing" of personal information; we do not sell personal information for money, and ad personalisation is controlled by the consent and device settings above. Because we hold almost no data about you, most requests are answered by explaining that data is on your device. To exercise rights, e-mail <ContactEmail />. We will respond within the period required by law (generally 30 days).</p>
<h2>10. International transfers and security</h2>
<p>Google and Apple may process data in countries outside your own under their own safeguards. We use reasonable measures to protect our backend, but no system is perfectly secure.</p>
<h2>11. Changes</h2>
<p>We may update this policy; the effective date above will change and, for material changes, we will notify you in the Game or on this page.</p>
<h2>12. Contact</h2>
<p><ContactEmail /></p>

    </LegalPage>
  );
}
