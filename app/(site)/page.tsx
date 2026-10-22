import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/site/Container";
import { social } from "@/lib/site-config";
import { newsArticles } from "@/lib/content/news";
import { analysisPieces } from "@/lib/content/analysis";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function HomePage() {
  const featured = newsArticles[0];
  const recentNews = newsArticles.slice(1, 4);
  const recentAnalysis = analysisPieces.slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-gm-emerald text-white">
        <div className="gm-hero-glow absolute inset-0 -z-10" />
        <div className="gm-grid-pattern absolute inset-0 -z-10 opacity-40" />
        <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-16 lg:py-24">
          <div className="animate-gm-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-50">
              <Sparkles size={14} /> CRICKET. CONTEXT. COMMUNITY.
            </span>
            <h1 className="mt-7 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Read the game.
              <span className="mt-1 block text-emerald-200">Beyond the score.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-emerald-50/85 sm:text-lg">
              Cricket news, thoughtful match analysis and a community that loves
              talking about every session, decision and turning point.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-gm-emerald transition hover:-translate-y-0.5 hover:bg-emerald-50" href={social.telegramChannel} target="_blank" rel="noopener noreferrer">
                <Send size={17} /> Join Telegram channel <ArrowUpRight size={16} />
              </a>
              <a className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10" href={social.telegramGroup} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={17} /> Join the discussion
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-emerald-100/75">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={14} /> Independent cricket community</span>
              <span>News · Analysis · Discussion</span>
            </div>
          </div>

          <div className="animate-gm-rise lg:pl-2">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#062f25]/80 p-5 shadow-2xl shadow-black/15 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">The cricket brief</span>
                <span className="rounded-full bg-emerald-200/10 px-3 py-1 text-[11px] text-emerald-100">GM PUNTERS</span>
              </div>
              <div className="my-7 border-t border-white/15" />
              <div className="grid grid-cols-[auto_1fr] items-start gap-4">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-emerald-300/15 text-emerald-200"><BookOpen size={21} /></span>
                <div>
                  <h2 className="text-lg font-semibold">Stories worth following</h2>
                  <p className="mt-1 text-sm leading-6 text-emerald-100/70">Catch up on the latest articles and cricket developments.</p>
                </div>
              </div>
              {featured && (
                <Link href={`/news/${featured.slug}`} className="mt-6 block rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition hover:bg-white/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-200">Featured story · {formatDate(featured.date)}</p>
                  <h3 className="mt-3 font-display text-2xl leading-snug">{featured.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-100/70">{featured.dek}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200">Read story <ArrowRight size={16} /></span>
                </Link>
              )}
              <div className="mt-5 flex items-center justify-between text-xs text-emerald-100/60">
                <span>Read. Think. Discuss.</span><ArrowDownRight size={17} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-gm-line bg-white">
        <Container className="grid grid-cols-1 gap-5 py-6 sm:grid-cols-3 sm:gap-8">
          {[
            ["01", "Read", "Cricket news and updates"],
            ["02", "Understand", "Analysis with context"],
            ["03", "Discuss", "Join the Telegram community"],
          ].map(([number, title, body]) => (
            <div key={number} className="flex items-start gap-4">
              <span className="font-display text-2xl text-emerald-700/50">{number}</span>
              <div><h2 className="font-semibold text-gm-ink">{title}</h2><p className="mt-1 text-sm text-gm-soft">{body}</p></div>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div><p className="gm-eyebrow">Fresh from the crease</p><h2 className="gm-section-title mt-3">Latest cricket news</h2></div>
            <Link href="/news" className="hidden items-center gap-2 pb-1 text-sm font-bold text-gm-emerald hover:gap-3 sm:inline-flex">All news <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {recentNews.map((article, index) => (
              <Link key={article.slug} href={`/news/${article.slug}`} className="gm-card group flex h-full flex-col p-6 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl sm:p-7">
                <div className="flex items-center justify-between gap-3"><span className="rounded-full bg-gm-tint px-3 py-1 text-xs font-bold text-gm-emerald">NEWS / 0{index + 1}</span><span className="text-xs text-gm-soft">{formatDate(article.date)}</span></div>
                <h3 className="mt-6 font-display text-2xl leading-snug text-gm-ink transition group-hover:text-gm-emerald">{article.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-gm-soft">{article.dek}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gm-emerald">Read article <ArrowUpRight size={16} /></span>
              </Link>
            ))}
          </div>
          <Link href="/news" className="gm-button-secondary mt-6 w-full sm:hidden">Explore all news <ArrowRight size={16} /></Link>
        </Container>
      </section>

      <section className="bg-[#eef4ee] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div><p className="gm-eyebrow">Go beyond the headline</p><h2 className="gm-section-title mt-3">Match analysis</h2><p className="mt-3 max-w-lg text-sm leading-7 text-gm-soft sm:text-base">Thoughtful reads to help you understand the story behind the game.</p></div>
            <Link href="/analysis" className="hidden items-center gap-2 pb-1 text-sm font-bold text-gm-emerald hover:gap-3 sm:inline-flex">All analysis <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {recentAnalysis.map((piece) => (
              <Link key={piece.slug} href={`/analysis/${piece.slug}`} className="group rounded-3xl border border-emerald-950/10 bg-white/85 p-6 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg sm:p-7">
                <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-gm-emerald">{piece.category}</span>
                <p className="mt-4 text-xs text-gm-soft">{formatDate(piece.date)}</p>
                <h3 className="mt-3 font-display text-2xl leading-snug group-hover:text-gm-emerald">{piece.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gm-soft">{piece.dek}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gm-emerald">Explore analysis <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
          <Link href="/analysis" className="gm-button-secondary mt-6 w-full sm:hidden">Explore all analysis <ArrowRight size={16} /></Link>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-gm-emerald p-7 text-white sm:p-10 lg:p-14">
            <div className="gm-grid-pattern absolute inset-0 opacity-30" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="gm-eyebrow !text-emerald-200">Your community, one tap away</p>
                <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight sm:text-4xl">The match is better when there&apos;s someone to talk about it with.</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-50/80 sm:text-base">Follow channel updates, then join the group for cricket conversations with the community.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <a href={social.telegramChannel} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-gm-emerald transition hover:bg-emerald-50"><Send size={16} /> Join channel <ArrowUpRight size={15} /></a>
                <a href={social.telegramGroup} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"><MessageCircle size={16} /> Join group</a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-6 rounded-3xl border border-cx-line bg-cx-bg p-7 text-cx-text sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cx-green"><Sparkles size={14} /> From the GM PUNTERS team</span>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Meet GM CricketX</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-cx-muted">Explore the Android cricket prediction app, learn how its features work and read the app information before installing.</p>
            </div>
            <Link href="/cricketx" className="cx-button-primary">Explore the app <ArrowRight size={16} /></Link>
          </div>
        </Container>
      </section>
    </>
  );
}
