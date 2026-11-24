import Link from "next/link";

export function Header() {
  return (
    <header className="site wrap">
      <Link className="logo" href="/"><i aria-hidden="true" />Jelly Gates</Link>
      <nav className="top" aria-label="Main">
        <Link href="/how-to-play/">How to play</Link>
        <Link href="/support/">Support</Link>
        <Link href="/press/">Press</Link>
      </nav>
    </header>
  );
}
