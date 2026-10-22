import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { CricketXLegalContent } from "@/components/ui/CricketXLegalContent";
import type { LegalSection } from "@/components/ui/LegalContent";

export const metadata: Metadata = {
  title: "Withdrawal Rules",
  description: "How withdrawals work in the GM CricketX app.",
};

// Deliberately unresolved throughout: the brief is explicit that none of
// this should be guessed. Replace each item with the app's real, current
// behaviour — confirmed, not assumed — before this page is treated as
// accurate.
const sections: LegalSection[] = [
  {
    heading: "Eligibility to withdraw",
    body: [
      "What makes a balance eligible for withdrawal — a minimum amount, a verification step, an account age — needs to be confirmed against the current backend logic.",
    ],
    unresolved: true,
  },
  {
    heading: "Processing time",
    body: [
      "No processing time is stated here because none has been verified. Any number shown to users should come from the real withdrawal flow, not an estimate.",
    ],
    unresolved: true,
  },
  {
    heading: "Fees",
    body: [
      "Whether withdrawals carry any fee, and how it's calculated if so, needs to be confirmed.",
    ],
    unresolved: true,
  },
  {
    heading: "Supported payment methods",
    body: [
      "Which payout methods the backend actually supports needs to be confirmed before they're listed here.",
    ],
    unresolved: true,
  },
  {
    heading: "What's not promised",
    body: [
      "Nothing on this page should be read as a guarantee until every section above is replaced with verified detail. The app does not promise guaranteed withdrawals, processing times, or payout amounts.",
    ],
  },
];

export default function WithdrawalRulesPage() {
  return (
    <Container className="py-12 md:py-16">
      <h1 className="text-3xl font-semibold text-cx-text">Withdrawal rules</h1>
      <p className="mt-3 max-w-prose text-sm text-cx-muted">
        Most of this page is intentionally marked unresolved — see the notes
        below each heading for exactly what needs confirming.
      </p>
      <CricketXLegalContent sections={sections} />
    </Container>
  );
}
