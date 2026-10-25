// Central place for real, verified external links and site facts.
// Nothing here is invented: unavailable items are explicitly null/false
// rather than guessed, so pages can render honest "not available yet" states.

export const siteConfig = {
  name: "GM PUNTERS",
  tagline: "Cricket, read closely.",
  domain: "gmpunters.in",
  description:
    "A cricket media and community brand covering news, match analysis, and records — built around a Telegram community, not betting or wallets.",
};

export const social = {
  telegramChannel: "https://t.me/cric1256",
  telegramGroup: "https://t.me/+VTseC95II4I2NDQ1",
  // Not yet supplied. Keep null — pages must render an honest
  // "coming soon" state instead of a broken or fabricated link.
  instagram: null as string | null,
};

export const cricketXApp = {
  name: "GM CricketX",
  packageId: "com.cricketarena.app",
  tagline: "Predict matches. Track your form.",
  description:
    "An Android app for cricket match predictions, built on Firebase with a dedicated backend.",
  apk: {
    available: true,
    url: "https://github.com/arshturk839/gm-cricketx-downloads/releases/download/v1.0.2/app-release.apk",
    version: "1.0.2",
    releaseDate: "2026-10-22",
  },
};

export const siteNav = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/analysis", label: "Analysis" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const cricketXNav = [
  { href: "/cricketx", label: "Overview" },
  { href: "/cricketx/download", label: "Download" },
  { href: "/cricketx/support", label: "Support" },
  { href: "/cricketx/updates", label: "Updates" },
];
