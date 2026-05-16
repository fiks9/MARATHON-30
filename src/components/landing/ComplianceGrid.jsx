import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useInView from "../../hooks/useInView.js";

// SSR-safe layout effect. `useLayoutEffect` warns during server rendering;
// the project is Vite-only / client-rendered today, but this keeps the
// component portable if pre-rendering is ever introduced (improve.md §4).
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * ComplianceGrid
 *
 * 30-cell "days completed" grid (5 cols × 6 rows). Cells fill in sequence
 * the first time the grid scrolls into view. Crucially, if the user lands
 * on the page already scrolled past this section (deep link, refresh,
 * back-nav) the completed cells render filled immediately on first paint —
 * we only stage the per-cell delay animation when the user actually witnesses
 * the reveal (docs/improve.md §1.6).
 */
export default function ComplianceGrid({ completed = 18, total = 30 }) {
  const [ref, inView] = useInView();
  // `skipAnimRef` records whether the element was already in the viewport
  // on first paint. `useInView` always starts with `initialInView = false`
  // (the IntersectionObserver fires asynchronously), so we can't rely on
  // the hook's first value to know — we have to measure the DOM ourselves.
  const skipAnimRef = useRef(false);
  const [filled, setFilled] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const node = ref.current;
    if (!node || typeof window === "undefined") return;
    const rect = node.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    // Treat any overlap with the viewport as "already visible". The user is
    // looking at it on first paint, so there is nothing to reveal — fill
    // immediately and disable the per-cell stagger below.
    if (rect.top < vh && rect.bottom > 0) {
      skipAnimRef.current = true;
      setFilled(true);
    }
    // Run once on mount only — viewport position at first paint is what matters.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inView) setFilled(true);
  }, [inView]);

  const cells = Array.from({ length: total });

  return (
    <div
      ref={ref}
      className="grid grid-cols-5 gap-1.5 py-2"
      role="img"
      aria-label={`${completed} of ${total} days completed`}
    >
      {cells.map((_, i) => {
        const isDone = filled && i < completed;
        return (
          <span
            key={i}
            className={[
              "block aspect-square rounded-[3px] transition-all duration-300 ease-out",
              isDone
                ? "scale-100 bg-primary-fixed shadow-[0_0_6px_rgba(233,221,255,0.45)]"
                : "scale-90 bg-white/15",
            ].join(" ")}
            style={{
              transitionDelay:
                isDone && !skipAnimRef.current ? `${i * 35}ms` : "0ms",
            }}
          />
        );
      })}
    </div>
  );
}
