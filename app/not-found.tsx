import Link from "next/link";
import { Container } from "@/components/site/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gm-paper">
      <Container className="py-20 text-center">
        <p className="font-display text-7xl text-gm-emerald">404</p>
        <h1 className="mt-4 font-display text-2xl text-gm-ink">
          That page doesn&apos;t exist
        </h1>
        <p className="mt-2 text-sm text-gm-soft">
          The link might be old, or the address was mistyped.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-gm-emerald px-6 py-3 text-sm font-medium text-gm-white hover:bg-gm-emeraldDark"
          >
            Back to GM PUNTERS
          </Link>
          <Link
            href="/cricketx"
            className="inline-flex items-center rounded-full border border-gm-line px-6 py-3 text-sm font-medium text-gm-ink hover:border-gm-emerald hover:text-gm-emerald"
          >
            GM CricketX app
          </Link>
        </div>
      </Container>
    </div>
  );
}
