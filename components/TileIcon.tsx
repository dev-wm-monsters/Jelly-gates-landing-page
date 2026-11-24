import Image from "next/image";
import { BASE_PATH } from "@/lib/site";

/** A game jelly tile with its gate symbol (art from the game). */
export function TileIcon({ tile, symbol, size = 64, className = "" }: { tile: string; symbol: string; size?: number | "fill"; className?: string }) {
  return (
    <span className={`tile ${className}`} style={size === "fill" ? undefined : { width: size, height: size }} aria-hidden="true">
      <Image src={`${BASE_PATH}/img/tiles/${tile}.webp`} alt="" width={128} height={128} />
      <Image className="sym" src={`${BASE_PATH}/img/tiles/sym_${symbol}.webp`} alt="" width={128} height={128} />
    </span>
  );
}
