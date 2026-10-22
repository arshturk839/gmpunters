"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { siteNav, social } from "@/lib/site-config";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-gm-line bg-gm-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-gm-ink md:text-2xl"
        >
          GM PUNTERS
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {siteNav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-sm transition-colors ${
                isActive(item.href)
                  ? "text-gm-emerald font-medium"
                  : "text-gm-soft hover:text-gm-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/cricketx"
            className="text-sm text-gm-soft hover:text-gm-ink transition-colors"
          >
            CricketX App
          </Link>
        </nav>

        <div className="hidden md:block">
          <a
            href={social.telegramChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-gm-emerald px-5 py-2.5 text-sm font-medium text-gm-white transition-colors hover:bg-gm-emeraldDark"
          >
            Join the channel
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-md p-2 text-gm-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-gm-line md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteNav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-md px-3 py-2.5 text-base ${
                  isActive(item.href)
                    ? "bg-gm-tint text-gm-emerald font-medium"
                    : "text-gm-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/cricketx" className="rounded-md px-3 py-2.5 text-base text-gm-ink">
              CricketX App
            </Link>
            <a
              href={social.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gm-emerald px-5 py-3 text-sm font-medium text-gm-white"
            >
              Join the channel
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
