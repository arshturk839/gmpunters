import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { CricketXLegalContent } from "@/components/ui/CricketXLegalContent";
import type { LegalSection } from "@/components/ui/LegalContent";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the GM CricketX Android app.",
};

const sections: LegalSection[] = [
  {
    heading: "What virtual coins are",
    body: [
      "Virtual coins are an in-app point system used for predictions. They have no cash value, cannot be purchased with real money, and cannot be exchanged for currency except through whatever withdrawal mechanism the app actually implements — detailed on the withdrawal rules page.",
    ],
  },
  {
    heading: "No guaranteed outcomes",
    body: [
      "The app does not guarantee rewards, winnings, or income of any kind. Prediction accuracy does not entitle a user to a specific payout.",
    ],
  },
  {
    heading: "Account use",
    body: [
      "Account eligibility rules, acceptable use, and any restrictions on automated or abusive use need to be confirmed and written here before launch.",
    ],
    unresolved: true,
  },
  {
    heading: "Who operates this app",
    body: [
      "The legal entity name and jurisdiction under which these terms apply need to be confirmed.",
    ],
    unresolved: true,
  },
];

export default function CricketXTermsPage() {
  return (
    <Container className="py-12 md:py-16">
      <h1 className="text-3xl font-semibold text-cx-text">Terms</h1>
      <CricketXLegalContent sections={sections} />
    </Container>
  );
}
