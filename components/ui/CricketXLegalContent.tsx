import { Container } from "@/components/site/Container";
import type { LegalSection } from "@/components/ui/LegalContent";

export function CricketXLegalContent({
  updated,
  sections,
}: {
  updated?: string;
  sections: LegalSection[];
}) {
  return (
    <Container className="max-w-prose py-12 md:py-16">
      {updated && <p className="mb-8 text-sm text-cx-muted">Last reviewed: {updated}</p>}
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold text-cx-text">{section.heading}</h2>
            <div className="mt-3 space-y-3">
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-cx-muted md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            {section.unresolved && (
              <p className="mt-3 rounded-md bg-cx-panel px-4 py-3 text-sm text-cx-green">
                Unresolved: this needs to be confirmed against the app&apos;s actual behaviour before publishing.
              </p>
            )}
          </section>
        ))}
      </div>
    </Container>
  );
}
