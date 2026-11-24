import { SITE } from "@/lib/site";

export function ContactEmail() {
  return (
    <>
      {/* STATIC: placeholder contact email (lib/site.ts); owner must provide the real address */}
      <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
    </>
  );
}
