import { Container } from "@/components/site/Container";

export type LegalSection = {
  heading: string;
  body: string[];
  unresolved?: boolean;
};

export function LegalContent({
  updated,
  sections,
}: {
  updated?: string;
  sections: LegalSection[];
}) {
  return (
    <Container className="max-w-prose py-12 md:py-16">
      {updated && (
        <p className="mb-8 text-sm text-gm-soft">Last reviewed: {updated}</p>
      )}
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-xl text-gm-ink">{section.heading}</h2>
            <div className="mt-3 space-y-3">
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-gm-soft md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            {section.unresolved && (
              <p className="mt-3 rounded-md bg-gm-tint px-4 py-3 text-sm text-gm-emerald">
                Unresolved: this detail needs to be confirmed before publishing definitive wording.
              </p>
            )}
          </section>
        ))}
      </div>
    </Container>
  );
}
