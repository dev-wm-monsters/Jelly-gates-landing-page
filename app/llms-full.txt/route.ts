import { abs } from "@/lib/seo";
import { FAQ, SITE } from "@/lib/site";
import { BOOSTERS, BUDDIES, ZONES } from "@/lib/game";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${SITE.fullName}: full reference

${SITE.description}

Developer: ${SITE.developer} (${SITE.companyUrl}). Support: ${SITE.email}. Website: ${abs("/")}

## Frequently asked questions
${FAQ.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Worlds
Jelly Gates has ${ZONES.length} zones of 5 levels, each ending in a Boss Gate.
${ZONES.map((z, i) => `${i + 1}. ${z.name} (${z.tier}): ${z.tagline}. Levels: ${z.levels.join(", ")}. Boss: ${z.boss}.`).join("\n")}

## Boosters
${BOOSTERS.map((b) => `- ${b.name} (unlocks at level ${b.unlock}): ${b.text}`).join("\n")}

## Characters
Jelly is the purple mascot. Buddies: ${BUDDIES.map((b) => b.name).join(", ")}.

## Pages
- ${abs("/")}
- ${abs("/how-to-play/")}
- ${abs("/worlds/")}
- ${abs("/boosters/")}
- ${abs("/support/")}
- ${abs("/press/")}
- ${abs("/privacy/")}
- ${abs("/terms/")}
- ${abs("/delete-data/")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
