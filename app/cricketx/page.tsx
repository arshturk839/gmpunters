import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BarChart3, Download, ShieldCheck, Target, Wallet } from "lucide-react";
import { Container } from "@/components/site/Container";
import { cricketXApp, social } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "GM CricketX",
  description: cricketXApp.description,
};

const features = [
  { icon: Target, number: "01", title: "Match predictions", body: "Make your calls across matches and review how your predictions perform." },
  { icon: BarChart3, number: "02", title: "Track your form", body: "Keep an eye on your prediction history instead of judging a single result." },
  { icon: Wallet, number: "03", title: "Virtual coins", body: "Understand the in-app points system and its limits in the published terms." },
  { icon: ShieldCheck, number: "04", title: "Request status", body: "Review the app&apos;s request process and read the rules before submitting one." },
];

export default function CricketXPage() {
  return (
    <main className="min-h-screen bg-cx-bg text-cx-text">
      <section className="cx-hero-glow relative isolate overflow-hidden border-b border-cx-line">
        <div className="gm-grid-pattern absolute inset-0 -z-10 opacity-20" />
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cx-green/30 bg-cx-green/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-cx-green">GM PUNTERS presents</span>
            <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">{cricketXApp.tagline}</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-cx-muted sm:text-lg">{cricketXApp.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/cricketx/download" className="cx-button-primary"><Download size={17} /> Explore download options <ArrowRight size={16} /></Link>
              <Link href="/cricketx/support" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cx-line px-6 py-3 text-sm font-bold text-cx-text transition hover:border-cx-green hover:bg-cx-panel"><ShieldCheck size={17} /> Support &amp; FAQs</Link>
            </div>
            <p className="mt-5 text-xs leading-6 text-cx-muted">Check availability and release details before installing. No betting operator affiliation is claimed.</p>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-cx-green/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-cx-line bg-cx-panel p-5 shadow-2xl shadow-black/20 sm:p-7">
              <div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[0.18em] text-cx-muted">CricketX / Overview</span><span className="size-2.5 rounded-full bg-cx-green" /></div>
              <div className="mt-6 rounded-2xl border border-cx-line bg-cx-bg p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-cx-green">Your cricket companion</p>
                <h2 className="mt-3 text-2xl font-bold">Think through every call.</h2>
                <p className="mt-2 text-sm leading-6 text-cx-muted">Predictions, history and app information in one place.</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-cx-line bg-cx-panel p-3"><Target size={19} className="text-cx-green" /><p className="mt-3 text-sm font-semibold">Predictions</p></div>
                  <div className="rounded-xl border border-cx-line bg-cx-panel p-3"><BarChart3 size={19} className="text-cx-green" /><p className="mt-3 text-sm font-semibold">Form history</p></div>
                </div>
              </div>
              <Link href="/cricketx/download" className="mt-4 flex items-center justify-between rounded-2xl bg-cx-green px-5 py-4 font-bold text-cx-bg transition hover:bg-white"><span className="inline-flex items-center gap-2"><Download size={18} /> Release information</span><ArrowUpRight size={18} /></Link>
              <p className="mt-4 text-center text-xs text-cx-muted">Android · Release availability shown on the download page</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-cx-green">Built for the cricket-minded</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Everything, clearly explained.</h2><p className="mt-4 text-sm leading-7 text-cx-muted sm:text-base">Explore the app&apos;s key areas and review the rules before using any feature.</p></div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.number} className="group rounded-3xl border border-cx-line bg-cx-panel p-6 transition duration-200 hover:-translate-y-1 hover:border-cx-green/50 hover:bg-cx-panelLight sm:p-8">
                <div className="flex items-center justify-between"><span className="flex size-12 items-center justify-center rounded-2xl bg-cx-green/10 text-cx-green"><feature.icon size={23} strokeWidth={1.8} /></span><span className="text-xs font-bold tracking-widest text-cx-muted">{feature.number}</span></div>
                <h3 className="mt-6 text-xl font-bold">{feature.title}</h3><p className="mt-3 text-sm leading-7 text-cx-muted">{feature.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="rounded-[2rem] border border-cx-line bg-cx-panel p-7 sm:p-10 md:flex md:items-center md:justify-between md:gap-8">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-cx-green">Need help?</p><h2 className="mt-3 text-2xl font-bold">Read the rules. Get support.</h2><p className="mt-3 max-w-xl text-sm leading-7 text-cx-muted">Review the terms and withdrawal rules, or reach the community through Telegram for support.</p></div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0 md:shrink-0"><Link href="/cricketx/terms" className="inline-flex min-h-11 items-center justify-center rounded-full border border-cx-line px-5 py-3 text-sm font-bold hover:border-cx-green">Read terms</Link><Link href="/cricketx/support" className="cx-button-primary">Get support <ArrowRight size={16} /></Link></div>
          </div>
          <p className="mt-6 text-xs leading-6 text-cx-muted">Virtual coins and any request process are governed by the app&apos;s published terms and rules. Do not assume virtual points have cash value.</p>
        </Container>
      </section>
    </main>
  );
}
