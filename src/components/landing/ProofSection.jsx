import RevealCard from "./RevealCard.jsx";

const testimonials = [
  {
    name: "Aaron J.",
    meta: "Cohort 12 · −12 lbs",
    quote:
      "The data-first approach removed all the guesswork. For the first time, I wasn't just tired and hungry; I was following a precise mechanism for change.",
    avatar: "from-[#6750a4] to-[#4f378a]",
    featured: false,
  },
  {
    name: "Sarah K.",
    meta: "Cohort 14 · −9 lbs",
    quote:
      "As a physician, I appreciate the physiological soundness of the phase shifts. It respects hormonal boundaries while driving significant metabolic adaptation.",
    avatar: "from-[#c9a74d] to-[#765b00]",
    featured: true,
  },
  {
    name: "Marcus R.",
    meta: "Cohort 11 · −14 lbs",
    quote:
      "The weekly check-ins and objective metric tracking kept me accountable to the protocol, not just my feelings. Incredibly effective.",
    avatar: "from-[#494551] to-[#1d1b20]",
    featured: false,
  },
];

export default function ProofSection() {
  return (
    <section
      id="results"
      className="bg-surface-container-lowest py-section-gap px-container-padding"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-stack-lg text-center">
          <h2 className="font-display text-headline-lg text-on-background">
            Documented Efficacy
          </h2>
          <p className="mt-4 font-body text-body-md text-on-surface-variant">
            Results verified through dual-energy X-ray absorptiometry (DEXA)
            scans and blood panels.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <RevealCard
              as="figure"
              key={t.name}
              delay={idx * 140}
              className={[
                "group glass-card flex flex-col gap-4 rounded-xl p-6 transition duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-[0_18px_42px_-12px_rgba(79,55,138,0.22)] sm:p-8",
                t.featured
                  ? "border-t-4 border-t-primary md:-translate-y-2 md:hover:-translate-y-3"
                  : "",
              ].join(" ")}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`h-12 w-12 rounded-full bg-gradient-to-br transition-transform duration-300 group-hover:scale-110 ${t.avatar}`}
                  aria-hidden="true"
                />
                <figcaption>
                  <div className="font-bold text-on-background">{t.name}</div>
                  <div className="font-mono text-xs text-on-surface-variant">
                    {t.meta}
                  </div>
                </figcaption>
              </div>
              <blockquote className="text-sm italic text-on-surface-variant">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
