import SpotCounter from "./SpotCounter.jsx";

const bars = [
  { height: "40%", color: "bg-surface-variant", label: "Day 1", labelColor: "text-on-surface-variant" },
  { height: "55%", color: "bg-surface-variant" },
  { height: "70%", color: "bg-primary/40" },
  { height: "85%", color: "bg-primary/60" },
  { height: "100%", color: "bg-primary", label: "Day 30", labelColor: "text-primary font-bold" },
];

export default function HeroSection({ spots = 7 }) {
  return (
    <section
      id="program"
      className="hero-bg relative overflow-hidden py-section-gap px-container-padding"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-stack-lg text-center">
        <div className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-primary backdrop-blur-sm">
          <span className="material-symbols-outlined text-base">science</span>
          <span className="font-mono text-stat-label uppercase">
            Clinically Proven Protocol
          </span>
        </div>

        <h1
          className="animate-fade-up font-display text-display-xl text-on-background"
          style={{ animationDelay: "0.1s" }}
        >
          30 Days to <br />
          <span className="text-gradient">Measurable Results.</span>
        </h1>

        <p
          className="animate-fade-up max-w-2xl font-body text-body-md text-on-surface-variant"
          style={{ animationDelay: "0.2s" }}
        >
          A data-driven, metabolic optimization program designed by health
          professionals. Reverse stagnation, optimize markers, and rebuild your
          baseline in four scientific phases.
        </p>

        <div
          className="mt-stack-md flex animate-fade-up flex-col items-center gap-5 sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#pricing"
            className="cta-glow rounded-lg bg-primary px-8 py-4 font-mono text-stat-label uppercase text-on-primary"
          >
            Start Your Protocol
          </a>
          <SpotCounter spots={spots} />
        </div>

        {/* Clinical bar chart */}
        <div
          className="glass-card relative mt-stack-md w-full max-w-3xl animate-fade-up overflow-hidden rounded-xl p-6"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="material-symbols-outlined pointer-events-none absolute right-4 top-4 select-none text-6xl text-primary/10">
            vital_signs
          </span>
          <div className="flex h-32 items-end justify-between gap-3 md:gap-4">
            {bars.map((bar, idx) => (
              <div
                key={idx}
                className={`bar relative w-1/6 animate-bar-rise rounded-t-sm ${bar.color}`}
                style={{ height: bar.height, animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                {bar.label && (
                  <div
                    className={`absolute -top-6 inset-x-0 text-center font-mono text-xs ${bar.labelColor}`}
                  >
                    {bar.label}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
