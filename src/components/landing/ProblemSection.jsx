import RevealCard from "./RevealCard.jsx";

const painPoints = [
  {
    icon: "trending_flat",
    title: "Adaptive Thermogenesis",
    body: "Your metabolism aggressively down-regulates to match caloric deficits, leading to abrupt stalls in progress despite continued effort.",
  },
  {
    icon: "water_drop",
    title: "Hormonal Resistance",
    body: "Chronic stress from uncalibrated training spikes cortisol, promoting visceral fat retention and disrupting sleep architecture.",
  },
  {
    icon: "restaurant_menu",
    title: "Nutrient Voiding",
    body: "Generic macros fail to provide the micronutrient density required for cellular repair, leaving you depleted and prone to injury.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-surface-container-lowest py-section-gap px-container-padding">
      <div className="mx-auto max-w-7xl">
        <header className="mb-stack-lg text-center">
          <h2 className="font-display text-headline-lg text-on-background">
            The Metabolic Plateau
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-body-md text-on-surface-variant">
            Standard approaches fail because they ignore the underlying systemic
            adaptations your body makes to calorie restriction.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {painPoints.map((p, idx) => (
            <RevealCard
              as="article"
              key={p.title}
              delay={idx * 120}
              className="group glass-card rounded-xl border-l-4 border-l-error p-6 transition duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-[0_18px_42px_-12px_rgba(186,26,26,0.18)] sm:p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-error-container text-on-error-container transition-transform duration-300 group-hover:scale-105">
                <span className="material-symbols-outlined">{p.icon}</span>
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-on-background">
                {p.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant">{p.body}</p>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
