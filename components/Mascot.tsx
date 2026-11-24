import Image from "next/image";
import { BASE_PATH } from "@/lib/site";

type Tint = "cherry" | "blueberry" | "lime" | "lemon" | "tangerine";

/** Jelly, the Jelly Gates mascot (art from the game). Purple by default; `tint` recolours it for the jelly family. */
export function Mascot({ size = 160, tint, className = "", priority = false, alt = "", delay = 0 }: {
  size?: number; tint?: Tint; className?: string; priority?: boolean; alt?: string; delay?: number;
}) {
  return (
    <span className={`mascot ${tint ? `tint-${tint}` : ""} ${className}`} style={{ width: size, animationDelay: `${delay}s` }}>
      <Image src={`${BASE_PATH}/img/mascot/jelly.webp`} alt={alt} width={640} height={496} priority={priority} sizes={`${size}px`} />
    </span>
  );
}
