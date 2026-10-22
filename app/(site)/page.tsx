import Link from "next/link";
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
  const recentNews = newsArticles.slice(1, 3);
  const recentAnalysis = analysisPieces.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-gm-line">
        <Container className="grid gap-12 py-16 md:grid-cols-5 md:gap-10 md:py-24">
          <div className="animate-fade-up md:col-span-3">
            <p className="text-sm font-medium text-gm-emerald">
              A cricket media brand, not a betting site
            </p>
            <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.08] text-gm-ink sm:text-5xl md:text-6xl">
              Cricket, read closely.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-gm-soft md:text-lg">
              News, match analysis, and records — written for people who
              already know the game, and a Telegram community to talk it
              through with.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={social.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-gm-emerald px-6 py-3 text-sm font-medium text-gm-white transition-colors hover:bg-gm-emeraldDark"
              >
                Join the channel
              </a>
              <a
                href={social.telegramGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-gm-line px-6 py-3 text-sm font-medium text-gm-ink transition-colors hover:border-gm-emerald hover:text-gm-emerald"
              >
                Join the discussion group
              </a>
            </div>
          </div>

          {featured && (
            <Link
              href={`/news/${featured.slug}`}
              className="group block rounded-2xl border border-gm-line bg-gm-white p-7 transition-colors hover:border-gm-emerald md:col-span-2"
            >
              <p className="text-sm text-gm-soft">
                Featured · {formatDate(featured.date)}
              </p>
              <h2 className="mt-3 font-display text-xl leading-snug text-gm-ink group-hover:text-gm-emerald">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gm-soft">
                {featured.dek}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-gm-emerald">
                Read the piece
              </span>
            </Link>
          )}
        </Container>
      </section>

      {/* Latest */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <div className="flex items-baseline justify-between border-b border-gm-line pb-3">
                <h2 className="font-display text-xl text-gm-ink">News</h2>
                <Link href="/news" className="text-sm text-gm-emerald hover:underline">
                  All news
                </Link>
              </div>
              <ul>
                {recentNews.map((article) => (
                  <li key={article.slug} className="border-b border-gm-line py-5 last:border-b-0">
                    <Link href={`/news/${article.slug}`} className="group block">
                      <p className="text-xs text-gm-soft">{formatDate(article.date)}</p>
                      <h3 className="mt-1.5 text-base font-medium leading-snug text-gm-ink group-hover:text-gm-emerald">
                        {article.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-gm-soft">
                        {article.dek}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-baseline justify-between border-b border-gm-line pb-3">
                <h2 className="font-display text-xl text-gm-ink">Analysis</h2>
                <Link href="/analysis" className="text-sm text-gm-emerald hover:underline">
                  All analysis
                </Link>
              </div>
              <ul>
                {recentAnalysis.map((piece) => (
                  <li key={piece.slug} className="border-b border-gm-line py-5 last:border-b-0">
                    <Link href={`/analysis/${piece.slug}`} className="group block">
                      <p className="text-xs text-gm-soft">
                        {piece.category} · {formatDate(piece.date)}
                      </p>
                      <h3 className="mt-1.5 text-base font-medium leading-snug text-gm-ink group-hover:text-gm-emerald">
                        {piece.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-gm-soft">
                        {piece.dek}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Community */}
      <section className="border-t border-gm-line bg-gm-tint/50 py-16 md:py-20">
        <Container>
          <h2 className="font-display text-2xl text-gm-ink md:text-3xl">
            Built around one community, not a comment section
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-gm-soft md:text-base">
            The channel carries updates and new pieces as they publish. The
            group is where the actual discussion happens.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={social.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-gm-line bg-gm-white p-6 transition-colors hover:border-gm-emerald"
            >
              <p className="font-medium text-gm-ink">Telegram channel</p>
              <p className="mt-1.5 text-sm text-gm-soft">
                One-way updates — new articles, scores worth knowing about.
              </p>
            </a>
            <a
              href={social.telegramGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-gm-line bg-gm-white p-6 transition-colors hover:border-gm-emerald"
            >
              <p className="font-medium text-gm-ink">Discussion group</p>
              <p className="mt-1.5 text-sm text-gm-soft">
                Where members actually talk cricket with each other.
              </p>
            </a>
          </div>
        </Container>
      </section>

      {/* CricketX cross-link */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-cx-bg p-8 text-cx-text md:flex-row md:items-center md:p-10">
            <div>
              <p className="text-sm text-cx-green">Also from GM PUNTERS</p>
              <h2 className="mt-2 font-sans text-xl font-semibold md:text-2xl">
                GM CricketX — predict matches on Android
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-cx-muted">
                A separate app for match predictions, built on its own
                backend. Not affiliated with any betting operator.
              </p>
            </div>
            <Link
              href="/cricketx"
              className="inline-flex shrink-0 items-center rounded-full bg-cx-green px-6 py-3 text-sm font-medium text-cx-bg transition-colors hover:bg-cx-greenDark hover:text-white"
            >
              See the app
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
