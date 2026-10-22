import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, ArrowLeft, ArrowUpRight, CheckCircle2, Download, ShieldCheck } from "lucide-react";
import { Container } from "@/components/site/Container";
import { cricketXApp, social } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Download GM CricketX",
  description: "Check the verified Android release status and download information for GM CricketX.",
};

export default function DownloadPage() {
  const { apk } = cricketXApp;

  return (
    <main className="min-h-screen bg-cx-bg text-cx-text">
      <section className="cx-hero-glow border-b border-cx-line">
        <Container className="max-w-4xl py-12 sm:py-16 lg:py-20">
          <Link href="/cricketx" className="inline-flex items-center gap-2 text-sm font-semibold text-cx-muted transition hover:text-cx-green"><ArrowLeft size={16} /> Back to CricketX</Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-cx-green">Android release centre</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Get GM CricketX.</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-cx-muted">Check release availability and installation details here. Only use a release link published and verified by the project.</p>

          {apk.available && apk.url ? (
            <div className="mt-8 rounded-3xl border border-cx-green/40 bg-cx-panel p-6 sm:p-8">
              <div className="flex items-start gap-4"><span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-cx-green/10 text-cx-green"><CheckCircle2 size={24} /></span><div><p className="text-xs font-bold uppercase tracking-wider text-cx-green">Release available</p><h2 className="mt-2 text-2xl font-bold">Version {apk.version}</h2><p className="mt-2 text-sm leading-6 text-cx-muted">Review the source and installation details before continuing.</p></div></div>
              <a href={apk.url} target="_blank" rel="noopener noreferrer" className="cx-button-primary mt-6 w-full sm:w-auto"><Download size={17} /> Download APK <ArrowUpRight size={16} /></a>
            </div>
          ) : (
            <div className="mt-8 overflow-hidden rounded-3xl border border-cx-line bg-cx-panel">
              <div className="flex items-center gap-3 border-b border-cx-line bg-cx-panelLight px-6 py-4"><AlertCircle className="text-cx-green" size={21} /><span className="text-sm font-bold">Release status</span><span className="ml-auto rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-900">Not published here yet</span></div>
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold">We won&apos;t give you an unverified APK.</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-cx-muted">A verified release link has not been configured on this page. Check the official Telegram channel for release announcements; this page will offer a download when the real artifact is connected.</p>
                <a href={social.telegramChannel} target="_blank" rel="noopener noreferrer" className="cx-button-primary mt-6 w-full sm:w-auto"><span>Follow release updates</span><ArrowUpRight size={16} /></a>
              </div>
            </div>
          )}
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <h2 className="text-2xl font-bold">Before installing</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-cx-line bg-cx-panel p-5"><ShieldCheck className="text-cx-green" size={22} /><h3 className="mt-4 font-bold">Verify the source</h3><p className="mt-2 text-sm leading-7 text-cx-muted">Only install an APK from a source you trust. Check release information and checksum details when provided.</p></article>
            <article className="rounded-2xl border border-cx-line bg-cx-panel p-5"><Download className="text-cx-green" size={22} /><h3 className="mt-4 font-bold">Android permissions</h3><p className="mt-2 text-sm leading-7 text-cx-muted">If installing outside the Play Store, Android may ask you to allow installation from that source. Only proceed if you trust the file.</p></article>
          </div>
          <div className="mt-8 border-t border-cx-line pt-6"><Link href="/cricketx/terms" className="text-sm font-semibold text-cx-green hover:underline">Read terms and conditions</Link><span className="mx-3 text-cx-muted">·</span><Link href="/cricketx/privacy-policy" className="text-sm font-semibold text-cx-green hover:underline">Privacy policy</Link></div>
        </Container>
      </section>
    </main>
  );
}
