import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/site/Container";
import { social } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach GM PUNTERS.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch" />
      <Container className="max-w-prose py-12 md:py-16">
        <p className="text-base leading-relaxed text-gm-soft">
          The fastest way to reach GM PUNTERS right now is the Telegram
          discussion group — it&apos;s actively monitored.
        </p>
        <a
          href={social.telegramGroup}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center rounded-full bg-gm-emerald px-6 py-3 text-sm font-medium text-gm-white hover:bg-gm-emeraldDark"
        >
          Message on Telegram
        </a>

        <div className="mt-10 rounded-2xl border border-dashed border-gm-line p-6">
          <p className="text-sm font-medium text-gm-ink">
            A contact form isn&apos;t wired up yet.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-gm-soft">
            Adding one needs a real destination — an email address or a
            server-side form handler — plus spam protection and validation,
            none of which should be faked. It&apos;ll go here once that&apos;s
            decided and configured, rather than as a form that quietly goes
            nowhere.
          </p>
        </div>
      </Container>
    </>
  );
}
