import Link from "next/link";
import { Mascot } from "@/components/Mascot";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <main className="page" id="main"><div className="wrap">
      <Mascot size={180} alt="Jelly the mascot, looking lost" />
      <h1>Oops, this jelly slid away!</h1>
      <p>We couldn&apos;t find that page. <Link href="/">Head back to the Jelly Gates home page</Link>.</p>
    </div></main>
  );
}
