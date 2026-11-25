import Link from "next/link";

export function Footer() {
  return (
    <footer className="site"><div className="wrap">
      <div className="foot-cols">
        <div><b>Game</b><ul>
          <li><Link href="/">Home</Link></li><li><Link href="/how-to-play/">How to play</Link></li>
          <li><Link href="/worlds/">Worlds</Link></li><li><Link href="/boosters/">Boosters</Link></li>
        </ul></div>
        <div><b>Help</b><ul>
          <li><Link href="/support/">Support</Link></li><li><Link href="/delete-data/">Delete your data</Link></li><li><Link href="/press/">Press kit</Link></li>
        </ul></div>
        <div><b>Legal</b><ul>
          <li><Link href="/privacy/">Privacy Policy</Link></li><li><Link href="/terms/">Terms of Use</Link></li>
        </ul></div>
        <div><b>Wakeup Monster</b><ul>
          <li><a href="https://wakeupmonster.com/" rel="noopener">Made by Wakeup Monster</a></li>
          <li><a href="https://letsdrag.wakeupmonster.com/" rel="noopener">Let&apos;s Drag!, file converter</a></li>
        </ul></div>
      </div>
      {/* STATIC: legal company name and registered address not known; footer uses "Wakeup Monster" */}
      <small>© 2026 <a href="https://wakeupmonster.com/" rel="noopener">Wakeup Monster</a>. Jelly Gates is a trademark of its owner. Apple and the Apple logo are trademarks of Apple Inc. Google Play is a trademark of Google LLC.</small>
    </div></footer>
  );
}
