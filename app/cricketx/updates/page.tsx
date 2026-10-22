import type { Metadata } from "next";
import { Container } from "@/components/site/Container";

export const metadata: Metadata = {
  title: "Updates",
  description: "Release notes and version history for GM CricketX.",
};

type Release = {
  version: string;
  date: string;
  notes: string[];
};

// Intentionally empty: no release has been verified as published yet.
// Add entries here once a version is actually tagged and shipped —
// don't backfill from development commits.
const releases: Release[] = [];

export default function UpdatesPage() {
  return (
    <Container className="max-w-prose py-12 md:py-16">
      <h1 className="text-3xl font-semibold text-cx-text">Updates</h1>
      <p className="mt-3 text-sm leading-relaxed text-cx-muted">
        Release notes will appear here once a version is tagged and shipped.
      </p>

      {releases.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-cx-line p-6">
          <p className="text-sm text-cx-muted">No published releases yet.</p>
        </div>
      ) : (
        <div className="mt-8 space-y-8">
          {releases.map((release) => (
            <div key={release.version} className="border-b border-cx-line pb-8 last:border-b-0">
              <div className="flex items-baseline gap-3">
                <h2 className="font-medium text-cx-text">v{release.version}</h2>
                <span className="text-xs text-cx-muted">{release.date}</span>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-cx-muted">
                {release.notes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}
