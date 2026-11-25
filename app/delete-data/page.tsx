import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Delete your data",
  description: "How to delete your Jelly Gates data, including purchase-verification records.",
  path: "/delete-data/",
});

export default function Page() {
  return (
    <LegalPage title="Delete your data" path="/delete-data/">

<p>Jelly Gates has no accounts, so there is no account to delete. Here is what data exists and how to remove it.</p>
<h2>1. Data on your device</h2>
<p>Your progress, settings and coin balance are stored only on your device. <strong>Uninstalling the game (or clearing its storage in your device settings) deletes all of it.</strong> We cannot see or delete it remotely.</p>
<h2>2. Purchase-verification records</h2>
<p>When you buy something, our backend stores the store purchase token and product id to prevent fraud. These records contain no name or e-mail. To request deletion:</p>
<ol><li>E-mail <ContactEmail /> with the subject "Delete my data".</li>
<li>Include the store order number (Google Play order ID or Apple order ID) for the purchases concerned, so we can find the records. We do not need your name or card details.</li>
<li>We will confirm and delete matching records within 30 days, except records we must keep for fraud prevention or legal reasons (we'll tell you if so).</li></ol>
<p className="note">Deleting verification records may mean we can no longer verify or restore those purchases through our service.</p>
<h2>3. Advertising data</h2>
<p>Google AdMob processes ad data under Google's policies. Reset or delete your advertising ID in your device settings, and manage Google ad data at <a href="https://myadcenter.google.com/" rel="noopener">myadcenter.google.com</a>.</p>
<p>See our <Link href="/privacy/">Privacy Policy</Link> for details.</p>

    </LegalPage>
  );
}
