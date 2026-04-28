/**
 * SpotCounter
 *
 * Tiny presentational chip showing the number of remaining cohort spots.
 * Hardcoded — `spots` defaults to 7 per requirements.
 */
export default function SpotCounter({ spots = 7, label = "Spots Remaining for Q3" }) {
  return (
    <div className="flex items-center gap-2 font-mono text-sm text-on-surface-variant">
      <span className="material-symbols-outlined text-lg text-tertiary-container">
        group
      </span>
      <span>
        Only <span className="font-bold text-on-background">{spots}</span> {label}
      </span>
    </div>
  );
}
