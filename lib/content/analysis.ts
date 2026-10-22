export type AnalysisPiece = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  category: "Analysis" | "Preview" | "Prediction";
  body: string[];
  placeholder: true;
};

// Sample editorial placeholders — clearly labelled. The category field
// exists specifically so News / Opinion / Analysis / Prediction stay
// visually distinct, per the brief.
export const analysisPieces: AnalysisPiece[] = [
  {
    slug: "reading-the-conditions",
    title: "Reading the conditions before the toss",
    dek: "A placeholder for the kind of pitch-and-conditions breakdown this section is built for.",
    date: "2026-10-05",
    category: "Analysis",
    placeholder: true,
    body: [
      "Sample analysis copy. A real piece here would walk through surface, weather, and team balance before a match — this one exists only to demonstrate the article layout.",
      "Swap in real analysis once the editorial workflow is live.",
    ],
  },
  {
    slug: "matchup-to-watch",
    title: "The matchup that could decide this one",
    dek: "A placeholder preview focused on a single head-to-head battle.",
    date: "2026-09-29",
    category: "Preview",
    placeholder: true,
    body: [
      "Sample preview content, shown to confirm the Preview category renders distinctly from News and Analysis.",
    ],
  },
  {
    slug: "form-guide-this-week",
    title: "This week's form guide",
    dek: "A placeholder for a short, prediction-flavoured round-up.",
    date: "2026-09-20",
    category: "Prediction",
    placeholder: true,
    body: [
      "Sample prediction-style content. Replace with real, clearly-labelled predictions — never framed as guarantees.",
    ],
  },
];
