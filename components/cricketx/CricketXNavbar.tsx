"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/site/Container";
import { cricketXNav } from "@/lib/site-config";

export function CricketXNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/cricketx" ? pathname === "/cricketx" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-cx-line bg-cx-bg/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/cricketx" className="text-lg font-semibold tracking-tight text-cx-text">
          GM CricketX
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {cricketXNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-sm transition-colors ${
                isActive(item.href) ? "text-cx-green font-medium" : "text-cx-muted hover:text-cx-text"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/" className="text-sm text-cx-muted hover:text-cx-text transition-colors">
            GM PUNTERS
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/cricketx/download"
            className="inline-flex items-center rounded-full bg-cx-green px-5 py-2.5 text-sm font-medium text-cx-bg transition-colors hover:bg-cx-greenDark hover:text-white"
          >
            Get the app
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="cricketx-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-md p-2 text-cx-text md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div id="cricketx-mobile-nav" className="border-t border-cx-line md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {cricketXNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-md px-3 py-2.5 text-base ${
                  isActive(item.href) ? "bg-cx-panel text-cx-green font-medium" : "text-cx-text"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/" className="rounded-md px-3 py-2.5 text-base text-cx-text">
              GM PUNTERS
            </Link>
            <Link
              href="/cricketx/download"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-cx-green px-5 py-3 text-sm font-medium text-cx-bg"
            >
              Get the app
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
