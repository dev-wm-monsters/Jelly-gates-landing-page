import Image from "next/image";
import { BASE_PATH } from "@/lib/site";

export function Phone({ file, alt, priority = false, className = "" }: { file: string; alt: string; priority?: boolean; className?: string }) {
  return (
    <div className={`phone ${className}`}>
      <Image src={`${BASE_PATH}/img/screens/${file}.webp`} alt={alt} width={390} height={844} priority={priority} sizes="(max-width:800px) 40vw, 240px" />
    </div>
  );
}
