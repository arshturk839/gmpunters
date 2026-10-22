import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { newsArticles } from "@/lib/content/news";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = newsArticles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return { title: article.title, description: article.dek };
}

export default function NewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = newsArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const date = new Date(article.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="py-12 md:py-16">
      <Container className="max-w-prose">
        <Link href="/news" className="text-sm text-gm-emerald hover:underline">
          Back to news
        </Link>

        <div className="mt-6 flex items-center gap-3 text-xs text-gm-soft">
          <span>{article.category}</span>
          <span>·</span>
          <span>{date}</span>
          {article.placeholder && (
            <span className="rounded-full bg-gm-tint px-2 py-0.5 text-gm-emerald">
              Sample content
            </span>
          )}
        </div>

        <h1 className="mt-3 font-display text-3xl leading-tight text-gm-ink md:text-4xl">
          {article.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gm-soft">{article.dek}</p>

        <div className="mt-8 space-y-5 border-t border-gm-line pt-8">
          {article.body.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-gm-ink">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </article>
  );
}
