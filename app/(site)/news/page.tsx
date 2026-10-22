import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/site/Container";
import { newsArticles } from "@/lib/content/news";

export const metadata: Metadata = {
  title: "News",
  description: "Cricket news and updates from GM PUNTERS.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function NewsIndexPage() {
  return (
    <>
      <PageHeader eyebrow="News" title="News" dek="Updates and reporting, newest first." />
      <Container className="py-12 md:py-16">
        {newsArticles.length === 0 ? (
          <p className="text-sm text-gm-soft">No articles published yet.</p>
        ) : (
          <ul>
            {newsArticles.map((article) => (
              <li key={article.slug} className="border-b border-gm-line py-6 first:pt-0">
                <Link href={`/news/${article.slug}`} className="group block">
                  <div className="flex items-center gap-3 text-xs text-gm-soft">
                    <span>{formatDate(article.date)}</span>
                    {article.placeholder && (
                      <span className="rounded-full bg-gm-tint px-2 py-0.5 text-gm-emerald">
                        Sample content
                      </span>
                    )}
                  </div>
                  <h2 className="mt-2 font-display text-xl text-gm-ink group-hover:text-gm-emerald">
                    {article.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gm-soft">
                    {article.dek}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
