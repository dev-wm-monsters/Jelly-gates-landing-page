import Image from "next/image";
import Link from "next/link";
import { BASE_PATH } from "@/lib/site";

export function Header() {
  return (
    <header className="site wrap">
      <Link className="logo" href="/"><Image src={`${BASE_PATH}/img/mascot/jelly-sm.webp`} alt="" width={96} height={74} className="logo-jelly" />Jelly Gates</Link>
      <nav className="top" aria-label="Main">
        <Link href="/how-to-play/">How to play</Link>
        <Link href="/support/">Support</Link>
        <Link href="/privacy/">Privacy</Link>
      </nav>
    </header>
  );
}
