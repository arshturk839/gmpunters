import type { Metadata } from "next";
import Link from "next/link";
import { Target, Wallet, TrendingUp, ShieldCheck } from "lucide-react";
import { Container } from "@/components/site/Container";
import { cricketXApp } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "GM CricketX",
  description: cricketXApp.description,
};

const features = [
  {
    icon: Target,
    title: "Match predictions",
    body: "Predict outcomes across matches and see how your calls land.",
  },
  {
    icon: TrendingUp,
    title: "Track your form",
    body: "A running record of your predictions, not just a single score.",
  },
  {
    icon: Wallet,
    title: "Virtual coins",
    body: "An in-app point system tied to predictions — see the terms page for exactly what coins are and aren't.",
  },
  {
    icon: ShieldCheck,
    title: "Withdrawal requests",
    body: "Submit a request and see its status in the app — rules are detailed separately.",
  },
];

export default function CricketXPage() {
  return (
    <>
      <section className="border-b border-cx-line">
        <Container className="py-16 md:py-24">
          <p className="text-sm text-cx-green">From the makers of GM PUNTERS</p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.1] text-cx-text sm:text-5xl">
            {cricketXApp.tagline}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cx-muted">
            {cricketXApp.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cricketx/download"
              className="inline-flex items-center rounded-full bg-cx-green px-6 py-3 text-sm font-medium text-cx-bg transition-colors hover:bg-cx-greenDark hover:text-white"
            >
              Get the app
            </Link>
            <Link
              href="/cricketx/support"
              className="inline-flex items-center rounded-full border border-cx-line px-6 py-3 text-sm font-medium text-cx-text transition-colors hover:border-cx-green hover:text-cx-green"
            >
              Support &amp; FAQs
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <h2 className="text-xl font-semibold text-cx-text">What the app does</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-cx-line bg-cx-panel p-6">
                <feature.icon className="text-cx-green" size={22} strokeWidth={1.75} />
                <h3 className="mt-4 font-medium text-cx-text">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cx-muted">{feature.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
