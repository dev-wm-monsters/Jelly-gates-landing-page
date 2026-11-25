// Facts below come from the game repo (branch feature/shop-events-redesign): Progression.zoneNames,
// assets/levels/levels.json + bosses.json, and the Booster enum. Re-check before launch (STATIC-NOTES.md).
export const ZONES = [
  { name: "Gummy Meadows", tagline: "Soft hills where every jelly learns to slide", tier: "Easy", boss: "Gummy Guardian", levels: ["First Slide", "Corner Shop", "Side Step", "Make Room", "Crossroads"] },
  { name: "Frostjelly Falls", tagline: "Slippery ice jelly and frozen cascades", tier: "Easy–Medium", boss: "Frostjaw", levels: ["Slippery", "The Pillars", "Rush Hour", "Ice Rink", "Glide Path"] },
  { name: "Caramel Canyon", tagline: "Chained jelly on sticky caramel bridges", tier: "Medium", boss: "Caramel Warden", levels: ["Chained Up", "Key Order", "Tangle", "Frozen Chain", "Chain Reaction"] },
  { name: "Twin-Core Lagoon", tagline: "Double jelly floating in a bubbly lagoon", tier: "Medium–Hard", boss: "Twin-Core Colossus", levels: ["Jelly Core", "Two Coats", "Russian Doll", "Cold Core", "Thaw"] },
  { name: "Prism Peaks", tagline: "Shifting gates among rainbow crystals", tier: "Hard", boss: "Prism Sentinel", levels: ["Traffic Lights", "Rotating Door", "Lock Step", "Black Ice", "Kaleidoscope"] },
  { name: "Royal Jelly Citadel", tagline: "Every trick at once in the jelly castle", tier: "Advanced", boss: "Royal Jelly Keeper", levels: ["Clockwork", "Deep Freeze", "Labyrinth", "Avalanche", "Jelly Master"] },
] as const;

export const BOOSTERS = [
  { name: "Freeze", unlock: 5, text: "Stops the timer for 10 seconds. Tap it whenever the clock gets scary.", img: "freeze" },
  { name: "Pop", unlock: 10, text: "Pops one jelly off the board. Tap Pop, then tap any jelly.", img: "pop" },
  { name: "Key", unlock: 15, text: "Opens any gate for one jelly, whatever its colour.", img: null },
] as const;

export const BUDDIES = [
  // STATIC: buddy names are the art folder names in the game repo; confirm final names
  { file: "djinn", name: "Djinn", desc: "A little genie floating over a golden lamp, with coins orbiting around." },
  { file: "falcon", name: "Falcon", desc: "A blue-and-gold bird that ruffles its feathers and looks around." },
  { file: "lootie", name: "Lootie", desc: "A hungry treasure chest with a big tongue and bigger eyes." },
  { file: "orion", name: "Orion", desc: "A starry space whale with a tiny ringed planet on its head." },
] as const;
