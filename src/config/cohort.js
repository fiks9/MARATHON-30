/**
 * Cohort configuration
 *
 * Centralises the marketing/urgency constants that previously lived inline
 * across components. Edit values here rather than touching JSX.
 */

// Cohort closes 48 hours from first page load. Anchored once at module
// evaluation time so it survives re-renders / StrictMode double-invokes.
export const COHORT_DEADLINE_MS = Date.now() + 48 * 60 * 60 * 1000;

export const COHORT = Object.freeze({
  spotsRemaining: 7,
  spotsLabel: "Spots Remaining for Q3",
  price: 299,
  deadlineMs: COHORT_DEADLINE_MS,
});

export default COHORT;
