import Image from "next/image";
import Link from "next/link";
import { BASE_PATH } from "@/lib/site";

// Pure CSS menu (checkbox) so it works without JavaScript.
export function Header() {
  return (
    <header className="site-bar">
      <div className="wrap bar">
        <Link className="logo" href="/"><Image src={`${BASE_PATH}/img/mascot/jelly-sm.webp`} alt="" width={96} height={74} className="logo-jelly" />Jelly Gates</Link>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" aria-label="Toggle menu" />
        <label htmlFor="menu-toggle" className="menu-btn" aria-hidden="true"><span /><span /><span /></label>
        <nav className="top" aria-label="Main">
          <Link href="/how-to-play/">How to play</Link>
          <Link href="/worlds/">Worlds</Link>
          <Link href="/support/">Support</Link>
          <Link href="/privacy/">Privacy</Link>
          <Link className="nav-cta" href="/#download">Get the game</Link>
        </nav>
      </div>
    </header>
  );
}
