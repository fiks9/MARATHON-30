import RevealCard from "./RevealCard.jsx";
import BiometricSparkline from "./BiometricSparkline.jsx";
import ComplianceGrid from "./ComplianceGrid.jsx";

const phases = [
  {
    n: "01",
    title: "Baseline Reset (Days 1–7)",
    body: "Glycogen depletion and insulin sensitivity restoration. Focus on cellular hydration and inflammation reduction.",
  },
  {
    n: "02",
    title: "Metabolic Acceleration (Days 8–14)",
    body: "Strategic introduction of High-Intensity Interval Protocols (HIIP) paired with targeted carbohydrate refeeds.",
  },
  {
    n: "03",
    title: "Maximal Oxidation (Days 15–24)",
    body: "The core deficit phase. Sustained fat oxidation utilizing precise macro-nutrient timing and progressive overload.",
  },
  {
    n: "04",
    title: "Sustainable Lock-In (Days 25–30)",
    body: "Reverse-diet calibration to lock in your new baseline and prevent rebound, with personalized maintenance macros.",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-surface-container py-section-gap px-container-padding"
    >
      <div className="pointer-events-none absolute -right-64 -top-64 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-64 -bottom-64 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="mb-6 font-display text-headline-lg text-on-background">
            The Phase-Shift Protocol
          </h2>
          <p className="mb-8 font-body text-body-md text-on-surface-variant">
            MARATHON 30 circumvents adaptation by systematically cycling
            nutritional inputs and training stimuli across four distinct
            clinical phases.
          </p>

          <ol className="flex flex-col gap-6">
            {phases.map((phase) => (
              <li key={phase.n} className="flex items-start gap-4">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded bg-primary-container/20 font-mono text-sm font-bold text-primary">
                  {phase.n}
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-on-background">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant">{phase.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Bento metrics grid */}
        <div className="grid grid-cols-2 gap-4">
          <RevealCard
            delay={0}
            className="group glass-card col-span-2 flex items-center gap-5 rounded-2xl p-6 transition duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-[0_18px_42px_-12px_rgba(79,55,138,0.25)]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container transition-transform duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined">monitor_weight</span>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-on-background transition-colors duration-300 group-hover:text-primary">
                −8.4 lbs
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-on-surface-variant">
                Avg. Clinical Loss
              </div>
            </div>
          </RevealCard>

          <RevealCard
            delay={120}
            className="group glass-card flex aspect-square flex-col justify-between rounded-2xl p-6 transition duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-[0_18px_42px_-12px_rgba(79,55,138,0.25)]"
          >
            <div className="flex items-start justify-between">
              <span className="material-symbols-outlined text-3xl text-primary transition-transform duration-300 group-hover:scale-105">
                bloodtype
              </span>
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-on-surface-variant">
                30d
              </span>
            </div>

            {/* Sparkline — weight-loss trajectory */}
            <BiometricSparkline />

            <div>
              <div className="font-mono text-xl font-bold text-on-background">
                Biometric
              </div>
              <div className="text-sm text-on-surface-variant">Tracking</div>
            </div>
          </RevealCard>

          <RevealCard
            delay={240}
            className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-2xl bg-primary p-6 text-on-primary shadow-[0_12px_40px_-8px_rgba(79,55,138,0.4)] transition duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-[0_22px_56px_-10px_rgba(79,55,138,0.55)]"
          >
            <div className="flex items-start justify-between">
              <span className="material-symbols-outlined text-3xl text-primary-fixed transition duration-300 group-hover:scale-105">
                verified_user
              </span>
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-primary-fixed/70">
                Day 18 / 30
              </span>
            </div>

            {/* 30-day completion grid */}
            <ComplianceGrid completed={18} total={30} />

            <div>
              <div className="font-mono text-xl font-bold">100%</div>
              <div className="text-sm text-primary-fixed">
                Compliance Rate Goal
              </div>
            </div>
          </RevealCard>
        </div>
      </div>
    </section>
  );
}
