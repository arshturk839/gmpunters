import { Container } from "@/components/site/Container";

export function PageHeader({
  eyebrow,
  title,
  dek,
}: {
  eyebrow?: string;
  title: string;
  dek?: string;
}) {
  return (
    <div className="border-b border-gm-line py-12 md:py-16">
      <Container>
        {eyebrow && <p className="text-sm font-medium text-gm-emerald">{eyebrow}</p>}
        <h1 className="mt-2 max-w-2xl font-display text-3xl text-gm-ink md:text-4xl">
          {title}
        </h1>
        {dek && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gm-soft">
            {dek}
          </p>
        )}
      </Container>
    </div>
  );
}
