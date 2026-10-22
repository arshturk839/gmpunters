import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { social } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Support",
  description: "Support and FAQs for the GM CricketX app.",
};

const faqs = [
  {
    q: "The app shows a login error — what do I do?",
    a: "Make sure you're on the latest version from the download page, then try again. If it keeps happening, report it through the Telegram group with your device model and Android version.",
  },
  {
    q: "My prediction didn't register.",
    a: "Report it in the Telegram group with the match name and roughly when you submitted it — that's the fastest way to get it looked at while this app doesn't yet have a dedicated support inbox.",
  },
  {
    q: "Where do I check my withdrawal status?",
    a: "Inside the app's withdrawal screen. The exact rules around timing are being finalised — see the withdrawal rules page for what's confirmed so far.",
  },
  {
    q: "Is there a support email?",
    a: "Not yet set up. The Telegram group is the current channel for reporting issues until a dedicated support contact exists.",
  },
];

export default function CricketXSupportPage() {
  return (
    <Container className="max-w-prose py-12 md:py-16">
      <h1 className="text-3xl font-semibold text-cx-text">Support &amp; FAQs</h1>
      <div className="mt-8 space-y-8">
        {faqs.map((item) => (
          <div key={item.q} className="border-b border-cx-line pb-8 last:border-b-0">
            <h2 className="font-medium text-cx-text">{item.q}</h2>
            <p className="mt-2 text-sm leading-relaxed text-cx-muted">{item.a}</p>
          </div>
        ))}
      </div>
      <a
        href={social.telegramGroup}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center rounded-full bg-cx-green px-6 py-3 text-sm font-medium text-cx-bg hover:bg-cx-greenDark hover:text-white"
      >
        Ask on Telegram
      </a>
    </Container>
  );
}
