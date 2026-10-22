import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { CricketXLegalContent } from "@/components/ui/CricketXLegalContent";
import type { LegalSection } from "@/components/ui/LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the GM CricketX Android app handles data.",
};

const sections: LegalSection[] = [
  {
    heading: "What this covers",
    body: [
      "This policy covers the GM CricketX Android app and its backend — not the gmpunters.in website, which has its own privacy policy.",
    ],
  },
  {
    heading: "Data the app collects",
    body: [
      "The app uses Firebase for authentication and data storage, and a separate backend for match, prediction, and withdrawal handling. Exactly what personal data each of those touches — account details, device identifiers, usage events — needs to be confirmed against the current app build before this section can be written precisely.",
    ],
    unresolved: true,
  },
  {
    heading: "Third-party services",
    body: [
      "Firebase (Google) and the app's own backend are both involved in handling app data. Their respective roles and any data shared between them need to be documented here.",
    ],
    unresolved: true,
  },
  {
    heading: "Who operates this app",
    body: [
      "The legal entity name, registered address, and a contact method for privacy requests need to be confirmed before this policy is complete.",
    ],
    unresolved: true,
  },
  {
    heading: "Not legal advice",
    body: [
      "This is a working draft, not a completed legal or security audit of the app's data handling.",
    ],
  },
];

export default function CricketXPrivacyPolicyPage() {
  return (
    <Container className="py-12 md:py-16">
      <h1 className="text-3xl font-semibold text-cx-text">Privacy policy</h1>
      <p className="mt-3 max-w-prose text-sm text-cx-muted">
        App only — see the website&apos;s own privacy policy for gmpunters.in.
      </p>
      <CricketXLegalContent sections={sections} />
    </Container>
  );
}
