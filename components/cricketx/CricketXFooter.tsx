import Link from "next/link";
import { Container } from "@/components/site/Container";

const links = [
  { href: "/cricketx/privacy-policy", label: "Privacy policy" },
  { href: "/cricketx/terms", label: "Terms" },
  { href: "/cricketx/withdrawal-rules", label: "Withdrawal rules" },
  { href: "/cricketx/support", label: "Support" },
  { href: "/cricketx/updates", label: "Updates" },
];

export function CricketXFooter() {
  return (
    <footer className="border-t border-cx-line bg-cx-bg">
      <Container className="py-12 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-semibold text-cx-text">GM CricketX</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-cx-muted">
              A cricket prediction app for Android, from the makers of GM
              PUNTERS.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cx-muted hover:text-cx-text">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 border-t border-cx-line pt-6 text-xs text-cx-muted">
          <p>
            Virtual coins have no cash value unless explicitly stated in the
            app&apos;s terms. GM CricketX is not a betting or gambling product.
          </p>
        </div>
      </Container>
    </footer>
  );
}
