import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gmpunters.in"),
  title: {
    default: "GM PUNTERS — Cricket, read closely",
    template: "%s — GM PUNTERS",
  },
  description:
    "A cricket media and community brand: news, match analysis, and records — built around a Telegram community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link bg-gm-ink text-gm-white px-4 py-2 rounded">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
