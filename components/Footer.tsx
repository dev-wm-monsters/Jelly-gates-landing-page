import Link from "next/link";

export function Footer() {
  return (
    <footer className="site"><div className="wrap">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/how-to-play/">How to play</Link></li>
        <li><Link href="/support/">Support</Link></li>
        <li><Link href="/press/">Press kit</Link></li>
        <li><Link href="/privacy/">Privacy Policy</Link></li>
        <li><Link href="/terms/">Terms of Use</Link></li>
        <li><Link href="/delete-data/">Delete your data</Link></li>
      </ul>
      {/* STATIC: legal company name and registered address not known; footer uses "Wakeup Monster" */}
      <small>© 2026 <a href="https://wakeupmonster.com/" rel="noopener">Wakeup Monster</a>. Jelly Gates is a trademark of its owner. Apple and the Apple logo are trademarks of Apple Inc. Google Play is a trademark of Google LLC.</small>
    </div></footer>
  );
}
