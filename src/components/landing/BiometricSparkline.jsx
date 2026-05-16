import { useEffect, useState } from "react";
import useInView from "../../hooks/useInView.js";

/**
 * BiometricSparkline
 *
 * Stylised weight-loss trajectory rendered as an inline SVG. Uses a soft
 * gradient area fill under the line for visual weight, and a pulsing dot
 * at the latest data point to imply "live tracking".
 *
 * The pulsing rings are only mounted while the sparkline is on-screen AND
 * the viewer has not requested reduced motion (docs/improve.md §1.5).
 * Previously the two SVG <animate> elements ran forever in the background,
 * even off-screen and for users with `prefers-reduced-motion: reduce`.
 */
// Weight-loss trajectory — y values increase over time (SVG y-axis is flipped,
// so the rendered line trends DOWN-RIGHT, matching a downward weight curve).
const POINTS = [
  [0, 4],
  [16, 8],
  [32, 11],
  [48, 16],
  [64, 20],
  [80, 24],
  [100, 27],
];

const linePath = POINTS.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]} ${p[1]}`).join(" ");
const areaPath = `${linePath} L100 32 L0 32 Z`;
const [endX, endY] = POINTS[POINTS.length - 1];

function usePrefersReducedMotion() {
  const getMatch = () =>
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [reduced, setReduced] = useState(getMatch);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined;
    }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setReduced(e.matches);
    // Safari < 14 only supports the deprecated addListener API.
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
    mq.addListener(handler);
    return () => mq.removeListener(handler);
  }, []);

  return reduced;
}

export default function BiometricSparkline() {
  // `once: false` so the pulse stops again when the card scrolls back out.
  const [ref, inView] = useInView({ once: false });
  const reducedMotion = usePrefersReducedMotion();
  const animate = inView && !reducedMotion;

  return (
    <div ref={ref} className="flex w-full flex-col gap-2">
      <div className="flex items-baseline gap-1.5">
        <span className="font-mono text-base font-bold tracking-tight text-primary">
          −2.4 lbs
        </span>
        <span
          aria-hidden="true"
          className="material-symbols-outlined text-base leading-none text-primary"
        >
          arrow_downward
        </span>
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-on-surface-variant">
          this wk
        </span>
      </div>
      <svg
        viewBox="0 0 100 32"
        preserveAspectRatio="none"
        className="block h-14 w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4f378a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#4f378a" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="sparkLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#cfbcff" />
            <stop offset="100%" stopColor="#4f378a" />
          </linearGradient>
        </defs>

        <path d={areaPath} fill="url(#sparkFill)" />
        <path
          d={linePath}
          fill="none"
          stroke="url(#sparkLine)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Pulsing endpoint — only animated while visible and motion-allowed. */}
        <circle cx={endX} cy={endY} r={animate ? 3.5 : 5} fill="#4f378a" opacity="0.18">
          {animate && (
            <>
              <animate
                attributeName="r"
                values="3.5;6;3.5"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.18;0;0.18"
                dur="2s"
                repeatCount="indefinite"
              />
            </>
          )}
        </circle>
        <circle cx={endX} cy={endY} r="1.8" fill="#4f378a" />
      </svg>
    </div>
  );
}
