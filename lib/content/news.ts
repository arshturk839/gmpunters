export type Article = {
  slug: string;
  title: string;
  dek: string;
  date: string; // ISO date
  category: "News";
  body: string[];
  placeholder: true;
};

// Sample editorial placeholders — clearly labelled on every page that
// renders them. Replace with real, dated reporting before launch.
export const newsArticles: Article[] = [
  {
    slug: "series-preview-what-to-watch",
    title: "What to watch for as the home summer gets underway",
    dek: "A short primer on the storylines worth following once the season opens.",
    date: "2026-10-01",
    category: "News",
    placeholder: true,
    body: [
      "This is sample editorial copy standing in for a real news piece. It exists to show the layout — the typography, the line length, the date and category treatment — rather than to report anything factual.",
      "Replace this paragraph, and the one above, with real reporting once the publishing workflow is in place. Keep the structure: a short dek, a dated byline, and two or three paragraphs of body copy.",
    ],
  },
  {
    slug: "squad-watch-fitness-updates",
    title: "Squad watch: the fitness updates worth tracking",
    dek: "A placeholder round-up format for fitness and availability news.",
    date: "2026-09-24",
    category: "News",
    placeholder: true,
    body: [
      "Sample content. This article demonstrates how a shorter, list-style news update would read on the site before any real reporting is added.",
    ],
  },
  {
    slug: "domestic-season-calendar",
    title: "The domestic season calendar, at a glance",
    dek: "A placeholder explainer showing how a reference-style article lays out.",
    date: "2026-09-10",
    category: "News",
    placeholder: true,
    body: [
      "Sample content for a reference-style piece — the kind of article readers bookmark rather than read once. Swap this for the real calendar once it is confirmed.",
    ],
  },
];
