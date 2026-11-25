// Production domain (Hostinger subdomain). Override with NEXT_PUBLIC_SITE_URL for previews.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://jellygates.wakeupmonster.com").replace(/\/$/, "");
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const SITE = {
  name: "Jelly Gates",
  fullName: "Jelly Gates: Block Jam Puzzle",
  developer: "Wakeup Monster", // STATIC: confirm legal entity name
  companyUrl: "https://wakeupmonster.com/",
  tagline: "A candy sliding-block puzzle game for Android and iOS",
  description:
    "Jelly Gates: Block Jam Puzzle is a candy-themed sliding-block puzzle game by Wakeup Monster. Slide coloured jellies out through the gate of the same colour, build a sweet jelly town and play daily challenges on Android and iOS.",
  // STATIC: store links not available yet
  playUrl: "#",
  appStoreUrl: "#",
  email: "support@wakeupmonster.com",
  lastUpdated: "2026-11-24",
};

export const SCREENS = [
  { file: "home", title: "Jelly Town home", alt: "Jelly Gates home screen with the candy town, fountain and Level 13 play button", caption: "Your jelly town: pick up where you left off." },
  { file: "play", title: "Sliding puzzle board", alt: "Jelly Gates puzzle board: purple and pink jellies sliding toward matching coloured gates", caption: "Drag each jelly to the gate with its colour and symbol." },
  { file: "map", title: "World map", alt: "Jelly Gates world map for Caramel Canyon with level nodes and a boss gate", caption: "Travel the world map, zone by zone, to boss gates." },
  { file: "win", title: "Level complete", alt: "Jelly Gates level complete screen with two stars and a coin reward", caption: "Fewer moves earn more stars." },
  { file: "daily-challenge", title: "Daily challenge", alt: "Jelly Gates daily challenge popup with a weekly streak and Golden Jelly chest", caption: "A new challenge board every day, with a weekly streak." },
  { file: "lucky-spin", title: "Lucky spin", alt: "Jelly Gates lucky spin wheel with coin, booster and life prizes", caption: "Spin the wheel for coins, boosters and lives." },
  { file: "events", title: "Events and challenges", alt: "Jelly Gates events tab with a daily Perfect Solve challenge and move challenges", caption: "Events and move challenges keep every session fresh." },
  { file: "town-build", title: "Build Jelly Town", alt: "Jelly Gates town building screen showing the Candy Bakery under construction", caption: "Spend stars to build and light up the town." },
  { file: "shop", title: "Shop", alt: "Jelly Gates shop with a starter pack, free coins and coin packs", caption: "Coins buy boosters and refills." },
  { file: "cosmetics", title: "Cosmetics", alt: "Jelly Gates cosmetics shop with jelly skins and trails", caption: "Skins and trails change the look, never the puzzles." },
] as const;

export const FAQ: { q: string; a: string }[] = [
  { q: "What is Jelly Gates: Block Jam Puzzle?", a: "Jelly Gates: Block Jam Puzzle (Jelly Gates for short) is a candy-themed sliding-block puzzle game by Wakeup Monster for Android and iOS. You slide coloured jellies across a board and out through the gate that matches their colour and symbol." },
  { q: "How do you play Jelly Gates?", a: "Drag each jelly out through the gate with its colour and symbol. Clear the board before the timer runs out; fewer moves earn more stars. Stars build your jelly town, and coins buy boosters and refills." },
  { q: "Which devices does Jelly Gates run on?", a: "Jelly Gates is made for Android phones (Google Play) and iPhones (App Store). Store links will appear on this site when the game launches." },
  { q: "Is Jelly Gates free?", a: "Jelly Gates is built as a free-to-play game supported by optional rewarded ads and optional in-app purchases such as coin packs, extra moves, remove ads and cosmetics." },
  { q: "Do I need an account to play?", a: "No. There is no login and no cloud save: you play as a guest and your progress is stored on your device." },
  { q: "What happens to my progress if I change phones?", a: "Because progress is stored only on your device, it does not move automatically to a new phone and cannot be recovered after uninstalling. Purchases tied to your Google Play or Apple account can be restored with Restore purchases." },
  { q: "How do I restore my purchases?", a: "Open Settings in the game and choose Restore purchases while signed in to the same Google Play or Apple account you bought with. See the Support page for details." },
  { q: "Does Jelly Gates show ads?", a: "Yes. The game shows rewarded and interstitial ads from Google AdMob. Rewarded ads are optional, and the Remove ads purchase removes interstitial ads." },
  { q: "What data does Jelly Gates collect?", a: "Game data stays on your device. Google AdMob collects advertising data to serve ads, Google Play or Apple handle payments, and our purchase check receives only a purchase token and product id. See the Privacy Policy for the full list." },
  { q: "Is Jelly Gates for children?", a: "Jelly Gates is not directed at children under 13." },
  { q: "How do I delete my data?", a: "Uninstalling the game deletes everything stored on your device. To remove purchase-verification records from our server, email us as described on the Delete your data page." },
];
