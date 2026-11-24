import type { ReactNode } from "react";
import { JsonLd } from "./JsonLd";
import { breadcrumbLd } from "@/lib/seo";

export function LegalPage({ title, path, draft = false, children }: { title: string; path: string; draft?: boolean; children: ReactNode }) {
  return (
    <>
      {draft && (
        <div className="draft" role="note">
          {/* STATIC: remove this draft banner at launch (STATIC-NOTES.md) */}
          Draft — review by a lawyer before publishing
        </div>
      )}
      <main className="page" id="main"><div className="wrap">
        <h1>{title}</h1>
        {children}
      </div></main>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: title, path }])} />
    </>
  );
}
