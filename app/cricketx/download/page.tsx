import type { Metadata } from "next";
import { AlertCircle } from "lucide-react";
import { Container } from "@/components/site/Container";
import { cricketXApp, social } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Download",
  description: "Download GM CricketX for Android.",
};

export default function DownloadPage() {
  const { apk } = cricketXApp;

  return (
    <Container className="max-w-prose py-12 md:py-16">
      <h1 className="text-3xl font-semibold text-cx-text">Download</h1>

      {apk.available ? (
        <div className="mt-8 rounded-2xl border border-cx-line bg-cx-panel p-6">
          <p className="text-sm text-cx-muted">Version {apk.version}</p>
          <a
            href={apk.url ?? undefined}
            className="mt-4 inline-flex items-center rounded-full bg-cx-green px-6 py-3 text-sm font-medium text-cx-bg hover:bg-cx-greenDark hover:text-white"
          >
            Download APK
          </a>
        </div>
      ) : (
        <div className="mt-8 flex gap-4 rounded-2xl border border-cx-line bg-cx-panel p-6">
          <AlertCircle className="mt-0.5 shrink-0 text-cx-green" size={20} />
          <div>
            <p className="font-medium text-cx-text">Not available here yet</p>
            <p className="mt-2 text-sm leading-relaxed text-cx-muted">
              There&apos;s no verified release artifact linked to this page yet.
              Rather than guess at a download link, this page waits for a
              real, checksum-verifiable APK URL before it goes live —
              nothing to click in the meantime.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cx-muted">
              Release announcements will go out on the{" "}
              <a
                href={social.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cx-green hover:underline"
              >
                Telegram channel
              </a>{" "}
              once one is ready.
            </p>
          </div>
        </div>
      )}

      <div className="mt-10 space-y-4 border-t border-cx-line pt-8">
        <h2 className="text-lg font-medium text-cx-text">Installing on Android</h2>
        <p className="text-sm leading-relaxed text-cx-muted">
          GM CricketX is distributed as a direct APK rather than through the
          Play Store, so Android will ask for permission to install from an
          unknown source the first time. That&apos;s expected for apps outside
          the Play Store — only grant it for an APK you downloaded from a
          link you trust.
        </p>
        <p className="text-sm leading-relaxed text-cx-muted">
          Once a release is linked here, this section will also include a
          published checksum so you can verify the file wasn&apos;t tampered
          with before installing.
        </p>
      </div>
    </Container>
  );
}
