import useInView from "../../hooks/useInView.js";

/**
 * ComplianceGrid
 *
 * 30-cell "days completed" grid (5 cols × 6 rows). Cells fill in sequence
 * once the grid scrolls into view, so the protocol progress feels alive.
 */
export default function ComplianceGrid({ completed = 18, total = 30 }) {
  const [ref, inView] = useInView();
  const cells = Array.from({ length: total });

  return (
    <div
      ref={ref}
      className="grid grid-cols-5 gap-1.5 py-2"
      role="img"
      aria-label={`${completed} of ${total} days completed`}
    >
      {cells.map((_, i) => {
        const isDone = inView && i < completed;
        return (
          <span
            key={i}
            className={[
              "block aspect-square rounded-[3px] transition-all duration-300 ease-out",
              isDone
                ? "scale-100 bg-primary-fixed shadow-[0_0_6px_rgba(233,221,255,0.45)]"
                : "scale-90 bg-white/15",
            ].join(" ")}
            style={{ transitionDelay: isDone ? `${i * 35}ms` : "0ms" }}
          />
        );
      })}
    </div>
  );
}
