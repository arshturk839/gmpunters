import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/site/Container";
import { analysisPieces } from "@/lib/content/analysis";

export const metadata: Metadata = {
  title: "Analysis",
  description: "Match analysis and previews from GM PUNTERS.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function AnalysisIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Analysis"
        title="Analysis"
        dek="Previews, breakdowns, and predictions — each one labelled by type."
      />
      <Container className="py-12 md:py-16">
        {analysisPieces.length === 0 ? (
          <p className="text-sm text-gm-soft">Nothing published yet.</p>
        ) : (
          <ul>
            {analysisPieces.map((piece) => (
              <li key={piece.slug} className="border-b border-gm-line py-6 first:pt-0">
                <Link href={`/analysis/${piece.slug}`} className="group block">
                  <div className="flex items-center gap-3 text-xs text-gm-soft">
                    <span className="font-medium text-gm-emerald">{piece.category}</span>
                    <span>{formatDate(piece.date)}</span>
                    {piece.placeholder && (
                      <span className="rounded-full bg-gm-tint px-2 py-0.5 text-gm-emerald">
                        Sample content
                      </span>
                    )}
                  </div>
                  <h2 className="mt-2 font-display text-xl text-gm-ink group-hover:text-gm-emerald">
                    {piece.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gm-soft">
                    {piece.dek}
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
