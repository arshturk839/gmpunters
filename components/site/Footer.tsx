import Link from "next/link";
import { Container } from "./Container";
import { social, siteConfig } from "@/lib/site-config";

const columns = [
  {
    heading: "Read",
    links: [
      { href: "/news", label: "News" },
      { href: "/analysis", label: "Analysis" },
      { href: "/about", label: "About" },
    ],
  },
  {
    heading: "Community",
    links: [
      { href: "/community", label: "Community" },
      { href: "/contact", label: "Contact" },
      { href: "/cricketx", label: "GM CricketX app" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy policy" },
      { href: "/disclaimer", label: "Disclaimer" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gm-line bg-gm-white">
      <Container className="py-14 md:py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <p className="font-display text-lg font-semibold text-gm-ink">
              GM PUNTERS
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gm-soft">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={social.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gm-emerald hover:underline"
              >
                Telegram channel
              </a>
              <a
                href={social.telegramGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gm-emerald hover:underline"
              >
                Telegram group
              </a>
              {social.instagram ? (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gm-emerald hover:underline"
                >
                  Instagram
                </a>
              ) : (
                <span className="text-sm text-gm-soft/70">
                  Instagram — coming soon
                </span>
              )}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-sm font-medium text-gm-ink">{col.heading}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gm-soft hover:text-gm-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-gm-line pt-6 text-xs text-gm-soft md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} GM PUNTERS. Not a betting, gambling, or wallet service.</p>
          <p>{siteConfig.domain}</p>
        </div>
      </Container>
    </footer>
  );
}
