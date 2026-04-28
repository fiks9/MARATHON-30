import useCountdown from "../../hooks/useCountdown.js";

const pad = (n) => String(n).padStart(2, "0");

function CountdownUnit({ value, label }) {
  return (
    <div className="flex min-w-[64px] flex-col items-center rounded-lg border border-outline-variant/40 bg-surface-container-lowest/70 px-3 py-2 backdrop-blur-sm sm:min-w-[80px] sm:px-4 sm:py-3">
      <span className="font-display text-2xl font-extrabold tabular-nums text-on-background sm:text-3xl">
        {pad(value)}
      </span>
      <span className="font-mono text-[0.65rem] uppercase tracking-widest text-on-surface-variant">
        {label}
      </span>
    </div>
  );
}

export default function CTASection({
  deadline,
  price = 299,
  cohort = 16,
}) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(deadline);

  return (
    <section
      id="pricing"
      className="relative bg-surface-container py-section-gap px-container-padding"
    >
      <div className="pointer-events-none absolute inset-0 bg-primary/5" />
      <div className="glass-card-strong relative z-10 mx-auto max-w-4xl rounded-2xl p-6 text-center sm:p-10 md:p-12">
        <h2 className="mb-4 font-display text-headline-lg text-on-background">
          Commit to the Protocol
        </h2>
        <p className="mx-auto mb-8 max-w-2xl font-body text-body-md text-on-surface-variant">
          {isExpired
            ? "Enrollment for this cohort has just closed. Join the waitlist for the next intake."
            : "Enrollment for the next cohort closes soon. Secure your spot to receive your personalized metabolic baseline assessment."}
        </p>

        {!isExpired && (
          <div className="mb-8 flex items-center justify-center gap-2 sm:gap-3">
            <CountdownUnit value={days} label="Days" />
            <CountdownUnit value={hours} label="Hours" />
            <CountdownUnit value={minutes} label="Minutes" />
            <CountdownUnit value={seconds} label="Seconds" />
          </div>
        )}

        <div className="flex flex-col items-center gap-6">
          <div className="font-display text-4xl font-extrabold text-on-background md:text-5xl">
            ${price}{" "}
            <span className="font-body text-base font-normal text-on-surface-variant md:text-lg">
              / 30 Days
            </span>
          </div>
          <button
            type="button"
            disabled={isExpired}
            className="cta-glow w-full rounded-xl bg-primary px-8 py-4 font-mono text-stat-label uppercase text-on-primary disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10 sm:py-5"
          >
            {isExpired ? "Join Waitlist" : `Apply for Cohort ${cohort}`}
          </button>
          <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-base">lock</span>
            Secure SSL Checkout · 100% Data Privacy Guarantee.
          </div>
        </div>
      </div>
    </section>
  );
}
