import { useMemo } from "react";
import Navbar from "./components/landing/Navbar.jsx";
import HeroSection from "./components/landing/HeroSection.jsx";
import ProblemSection from "./components/landing/ProblemSection.jsx";
import SolutionSection from "./components/landing/SolutionSection.jsx";
import ProofSection from "./components/landing/ProofSection.jsx";
import CTASection from "./components/landing/CTASection.jsx";
import Footer from "./components/landing/Footer.jsx";
import { COHORT_DEADLINE_MS } from "./config/cohort.js";

export default function App() {
  // Anchor the deadline to a stable timestamp so the countdown target
  // does not shift forward on every re-render (which would otherwise
  // reset `useCountdown`'s interval — see docs/improve.md §1.1).
  const cohortDeadline = useMemo(() => new Date(COHORT_DEADLINE_MS), []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProofSection />
        <CTASection deadline={cohortDeadline} />
      </main>
      <Footer />
    </div>
  );
}
