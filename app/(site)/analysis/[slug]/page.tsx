import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { analysisPieces } from "@/lib/content/analysis";

export function generateStaticParams() {
  return analysisPieces.map((piece) => ({ slug: piece.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const piece = analysisPieces.find((p) => p.slug === params.slug);
  if (!piece) return {};
  return { title: piece.title, description: piece.dek };
}

export default function AnalysisArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const piece = analysisPieces.find((p) => p.slug === params.slug);
  if (!piece) notFound();

  const date = new Date(piece.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="py-12 md:py-16">
      <Container className="max-w-prose">
        <Link href="/analysis" className="text-sm text-gm-emerald hover:underline">
          Back to analysis
        </Link>

        <div className="mt-6 flex items-center gap-3 text-xs text-gm-soft">
          <span className="font-medium text-gm-emerald">{piece.category}</span>
          <span>·</span>
          <span>{date}</span>
          {piece.placeholder && (
            <span className="rounded-full bg-gm-tint px-2 py-0.5 text-gm-emerald">
              Sample content
            </span>
          )}
        </div>

        <h1 className="mt-3 font-display text-3xl leading-tight text-gm-ink md:text-4xl">
          {piece.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gm-soft">{piece.dek}</p>

        {piece.category === "Prediction" && (
          <p className="mt-6 rounded-md bg-gm-tint px-4 py-3 text-sm text-gm-emerald">
            This is a prediction, not a guarantee of outcome.
          </p>
        )}

        <div className="mt-8 space-y-5 border-t border-gm-line pt-8">
          {piece.body.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-gm-ink">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </article>
  );
}
