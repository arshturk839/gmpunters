import { CricketXNavbar } from "@/components/cricketx/CricketXNavbar";
import { CricketXFooter } from "@/components/cricketx/CricketXFooter";

export default function CricketXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-cx-bg text-cx-text">
      <CricketXNavbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <CricketXFooter />
    </div>
  );
}
