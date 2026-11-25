import Image from "next/image";
import { Mascot } from "./Mascot";
import { BASE_PATH } from "@/lib/site";
import { BUDDIES } from "@/lib/game";

export function Buddies() {
  return (
    <section className="block" style={{ paddingTop: 0 }}><div className="wrap">
      <h2 className="reveal">Meet Jelly and the buddies</h2>
      <p className="sub reveal">Jelly is the star of the show, and a few friends keep it company around Jelly Town.</p>
      <div className="buddies">
        <div className="buddy buddy-main reveal"><Mascot size={150} alt="Jelly, the purple jelly mascot" /><h3>Jelly</h3><p>Our purple jelly mascot: always smiling, always sliding.</p></div>
        {BUDDIES.map((b) => (
          <div className="buddy reveal" key={b.file}>
            <Image src={`${BASE_PATH}/img/buddies/${b.file}.webp`} alt={`${b.name}: ${b.desc}`} width={200} height={200} unoptimized />
            <h3>{b.name}</h3><p>{b.desc}</p>
          </div>
        ))}
      </div>
    </div></section>
  );
}
