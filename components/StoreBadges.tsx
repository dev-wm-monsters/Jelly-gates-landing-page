import { SITE } from "@/lib/site";

export function StoreBadges({ center = false }: { center?: boolean }) {
  return (
    <div className="badges" style={center ? { justifyContent: "center" } : undefined}>
      {/* STATIC: store links and official badge artwork not available yet (lib/site.ts) */}
      <a className="badge" href={SITE.playUrl} aria-label="Get Jelly Gates on Google Play"><span><small>GET IT ON</small><b>Google Play</b></span></a>
      <a className="badge" href={SITE.appStoreUrl} aria-label="Download Jelly Gates on the App Store"><span><small>Download on the</small><b>App Store</b></span></a>
    </div>
  );
}
