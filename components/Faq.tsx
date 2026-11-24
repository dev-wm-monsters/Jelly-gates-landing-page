import { FAQ } from "@/lib/site";

export function Faq({ items = FAQ }: { items?: { q: string; a: string }[] }) {
  return (
    <div>
      {items.map((f) => (
        <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
      ))}
    </div>
  );
}
