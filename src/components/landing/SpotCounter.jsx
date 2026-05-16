import { COHORT } from "../../config/cohort.js";

/**
 * SpotCounter
 *
 * Tiny presentational chip showing the number of remaining cohort spots.
 * Defaults pull from `src/config/cohort.js` so the marketing claim has a
 * single source of truth (docs/improve.md §1.7).
 */
export default function SpotCounter({
  spots = COHORT.spotsRemaining,
  label = COHORT.spotsLabel,
}) {
  return (
    <div className="flex items-center gap-2 font-mono text-sm text-on-surface-variant">
      <span
        aria-hidden="true"
        className="material-symbols-outlined text-lg text-tertiary-container"
      >
        group
      </span>
      <span>
        Only <span className="font-bold text-on-background">{spots}</span> {label}
      </span>
    </div>
  );
}
