"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Send, X } from "lucide-react";
import { Container } from "./Container";
import { siteNav, social } from "@/lib/site-config";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-gm-line/80 bg-gm-paper/90 backdrop-blur-xl">
      <Container className="flex h-[70px] items-center justify-between gap-4 md:h-20">
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="GM PUNTERS home">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-gm-emerald font-display text-xl font-bold text-white shadow-sm transition group-hover:rotate-[-4deg]">G</span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-bold tracking-tight text-gm-ink sm:text-2xl">GM PUNTERS</span>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-gm-soft sm:block">Cricket · Community</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {siteNav.slice(1).map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-sm font-semibold transition-colors ${isActive(item.href) ? "text-gm-emerald" : "text-gm-soft hover:text-gm-emerald"}`}>
              {item.label}
            </Link>
          ))}
          <Link href="/cricketx" className={`text-sm font-semibold transition-colors ${pathname.startsWith("/cricketx") ? "text-gm-emerald" : "text-gm-soft hover:text-gm-emerald"}`}>CricketX</Link>
        </nav>

        <div className="hidden lg:block">
          <a href={social.telegramChannel} target="_blank" rel="noopener noreferrer" className="gm-button-primary !min-h-11 !px-5 !py-2.5">
            <Send size={15} /> Join Telegram <ArrowUpRight size={15} />
          </a>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex size-11 items-center justify-center rounded-full border border-gm-line bg-white text-gm-ink transition hover:border-gm-emerald hover:text-gm-emerald lg:hidden">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-gm-line bg-gm-paper shadow-xl lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteNav.slice(1).map((item) => (
              <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-2xl px-4 py-3 text-base font-semibold ${isActive(item.href) ? "bg-gm-tint text-gm-emerald" : "text-gm-ink hover:bg-white"}`}>
                {item.label}
              </Link>
            ))}
            <Link href="/cricketx" className={`rounded-2xl px-4 py-3 text-base font-semibold ${pathname.startsWith("/cricketx") ? "bg-gm-tint text-gm-emerald" : "text-gm-ink hover:bg-white"}`}>GM CricketX App</Link>
            <a href={social.telegramChannel} target="_blank" rel="noopener noreferrer" className="gm-button-primary mt-3 w-full"><Send size={16} /> Join Telegram channel <ArrowUpRight size={15} /></a>
          </Container>
        </div>
      )}
    </header>
  );
}
