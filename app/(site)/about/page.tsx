import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/site/Container";

export const metadata: Metadata = {
  title: "About",
  description: "What GM PUNTERS is, and what it deliberately isn't.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="What this is, and isn't" />
      <Container className="max-w-prose space-y-6 py-12 text-base leading-relaxed text-gm-soft md:py-16">
        <p>
          GM PUNTERS is a cricket media and community brand. The focus is
          news, match analysis, and records — written for readers who
          already follow the game, not an introduction to it.
        </p>
        <p>
          It is deliberately not a betting, gambling, wallet, or payments
          product. There are no odds here, no deposits, and nothing to
          withdraw. The name refers to a community of cricket followers, not
          a betting term.
        </p>
        <p>
          The site is run as an independent publication. Coverage and
          analysis reflect editorial judgement, not sponsorship — and where
          content is a prediction rather than reporting, it is labelled as
          one.
        </p>
        <p>
          The community lives on Telegram: a channel for updates, and a
          separate group for discussion. Both are linked from the{" "}
          <a href="/community" className="text-gm-emerald hover:underline">
            Community
          </a>{" "}
          page.
        </p>
      </Container>
    </>
  );
}
