import { SITE } from "@/lib/site";

export function ContactEmail() {
  return (
    <>
      <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
    </>
  );
}
