import { TileIcon } from "./TileIcon";
import { Mascot } from "./Mascot";

// Pure-CSS looping demo: clear the blocker, slide the pink jelly into the pink gate, pop, earn coins.
const cell = (col: number, row: number) => ({ left: `${col * 20}%`, top: `${row * 33.3333}%` });

export function GateDemo() {
  return (
    <div className="demo" role="img" aria-label="Animated demo: a blue jelly steps aside, then the pink heart jelly slides right through the pink heart gate and pops for coins.">
      <div className="demo-board">
        <div className="demo-grid" aria-hidden="true">{Array.from({ length: 15 }, (_, i) => <i key={i} />)}</div>
        <div className="piece p-static" style={cell(1, 2)}><TileIcon tile="mint" symbol="plus" size="fill" /></div>
        <div className="piece p-static" style={cell(3, 2)}><TileIcon tile="sun" symbol="star" size="fill" /></div>
        <div className="piece p-static" style={cell(3, 0)}><TileIcon tile="violet" symbol="diamond" size="fill" /></div>
        <div className="piece p-block" style={cell(2, 1)}><TileIcon tile="sky" symbol="circle" size="fill" /></div>
        <div className="piece p-hero" style={cell(0, 1)}><TileIcon tile="pink" symbol="heart" size="fill" /></div>
        <div className="demo-gate" aria-hidden="true"><TileIcon tile="pink" symbol="heart" size="fill" /></div>
        <span className="demo-coin" aria-hidden="true">+30</span>
      </div>
      <div className="demo-mascot" aria-hidden="true">
        <span className="bubble">Slide me to my gate!</span>
        <Mascot size={120} />
      </div>
    </div>
  );
}
