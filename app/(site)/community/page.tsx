import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/site/Container";
import { social } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Community",
  description: "Join the GM PUNTERS Telegram channel and discussion group.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="Two destinations, two purposes"
        dek="The channel and the group are not the same thing — pick the one that matches what you want."
      />
      <Container className="grid gap-6 py-12 md:grid-cols-2 md:py-16">
        <div className="rounded-2xl border border-gm-line bg-gm-white p-7">
          <h2 className="font-display text-lg text-gm-ink">Telegram channel</h2>
          <p className="mt-3 text-sm leading-relaxed text-gm-soft">
            One-way broadcast. New articles, analysis, and anything worth
            flagging quickly, posted by GM PUNTERS. No discussion thread —
            just the updates.
          </p>
          <a
            href={social.telegramChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center rounded-full bg-gm-emerald px-5 py-2.5 text-sm font-medium text-gm-white hover:bg-gm-emeraldDark"
          >
            Open the channel
          </a>
        </div>

        <div className="rounded-2xl border border-gm-line bg-gm-white p-7">
          <h2 className="font-display text-lg text-gm-ink">Discussion group</h2>
          <p className="mt-3 text-sm leading-relaxed text-gm-soft">
            Two-way conversation between members. This is where match
            threads, debates, and day-to-day cricket talk actually happen.
          </p>
          <a
            href={social.telegramGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center rounded-full border border-gm-line px-5 py-2.5 text-sm font-medium text-gm-ink hover:border-gm-emerald hover:text-gm-emerald"
          >
            Join the group
          </a>
        </div>

        <div className="rounded-2xl border border-dashed border-gm-line p-7 md:col-span-2">
          <h2 className="font-display text-lg text-gm-ink">Instagram</h2>
          <p className="mt-3 text-sm leading-relaxed text-gm-soft">
            Not live yet. This section will link out once the account is set
            up — nothing to click here in the meantime.
          </p>
        </div>
      </Container>
    </>
  );
}
