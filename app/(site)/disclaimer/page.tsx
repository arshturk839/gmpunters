import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LegalContent, type LegalSection } from "@/components/ui/LegalContent";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "What GM PUNTERS content is, and isn't.",
};

const sections: LegalSection[] = [
  {
    heading: "Editorial, not advice",
    body: [
      "News, analysis, and prediction content on this site reflects editorial judgement at the time of writing. It is not financial, betting, or professional advice of any kind.",
    ],
  },
  {
    heading: "Not a betting or gambling service",
    body: [
      "GM PUNTERS does not accept wagers, hold funds, or process withdrawals. Any resemblance between site content and betting terminology is coincidental to the sport, not the business model.",
    ],
  },
  {
    heading: "Predictions are labelled",
    body: [
      "Where content is a prediction rather than reporting, it carries a Prediction label. Predictions are opinions about future events and are not guaranteed to be accurate.",
    ],
  },
  {
    heading: "Sample content",
    body: [
      "Some article pages on this site are currently placeholder content used to test the layout. Each one is clearly marked as a sample — none of it should be read as real reporting.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Disclaimer" />
      <LegalContent sections={sections} />
    </>
  );
}
