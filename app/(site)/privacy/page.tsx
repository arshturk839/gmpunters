import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LegalContent, type LegalSection } from "@/components/ui/LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How GM PUNTERS handles data on this website.",
};

const sections: LegalSection[] = [
  {
    heading: "What this covers",
    body: [
      "This policy covers the GM PUNTERS website only — not the separate GM CricketX Android app, which has its own privacy policy under /cricketx/privacy-policy.",
    ],
  },
  {
    heading: "Data this site collects",
    body: [
      "In its current form, the website does not run analytics, does not require accounts, and does not include a working contact form. If any of that changes, this section will be updated to say exactly what is collected and why, before it ships.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "No tracking or advertising cookies are set by this site at this time.",
    ],
  },
  {
    heading: "Who operates this site",
    body: [
      "The legal entity name, registered address, and a contact email for privacy requests need to be confirmed before this policy can be considered complete.",
    ],
    unresolved: true,
  },
  {
    heading: "Not legal advice",
    body: [
      "This page is a working draft, not a completed legal compliance review. It should be checked before the site goes live.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy policy" dek="Website only — see the app's own policy for GM CricketX." />
      <LegalContent sections={sections} />
    </>
  );
}
