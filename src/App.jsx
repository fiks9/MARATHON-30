import Navbar from "./components/landing/Navbar.jsx";
import HeroSection from "./components/landing/HeroSection.jsx";
import ProblemSection from "./components/landing/ProblemSection.jsx";
import SolutionSection from "./components/landing/SolutionSection.jsx";
import ProofSection from "./components/landing/ProofSection.jsx";
import CTASection from "./components/landing/CTASection.jsx";
import Footer from "./components/landing/Footer.jsx";

export default function App() {
  // Cohort closes 48 hours from first page load
  const cohortDeadline = new Date(Date.now() + 48 * 60 * 60 * 1000);

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
