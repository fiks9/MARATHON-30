import { useEffect, useRef, useState } from "react";

/**
 * useCountdown
 *
 * Drives a live countdown to a fixed target time. Returns days, hours, minutes,
 * seconds, the total milliseconds remaining, and a boolean `isExpired` flag.
 *
 * Implementation notes (docs/improve.md §1.4):
 *  - Ticks are aligned to the wall-clock second boundary via a self-rescheduling
 *    setTimeout, so the displayed seconds never drift by ~1s and `59 → 00`
 *    transitions feel snappy.
 *  - The timer is paused while `document.visibilityState === "hidden"` to save
 *    battery, and resynced immediately on becoming visible again.
 *
 * @param {Date|number|string} target  The countdown target (Date, ms, or ISO string).
 * @returns {{
 *   days: number,
 *   hours: number,
 *   minutes: number,
 *   seconds: number,
 *   totalMs: number,
 *   isExpired: boolean,
 * }}
 */
export default function useCountdown(target) {
  const targetMs =
    target instanceof Date ? target.getTime() : new Date(target).getTime();

  const compute = () => {
    const diff = Math.max(0, targetMs - Date.now());
    const totalSeconds = Math.floor(diff / 1000);
    return {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
      totalMs: diff,
      isExpired: diff <= 0,
    };
  };

  const [time, setTime] = useState(compute);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (Number.isNaN(targetMs)) return undefined;

    let cancelled = false;

    const clearTimer = () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const tick = () => {
      if (cancelled) return;
      const next = compute();
      setTime(next);
      if (next.isExpired) {
        clearTimer();
        return;
      }
      // Schedule the next tick so it fires *just after* the next wall-clock
      // second boundary. Avoids the ~1s display drift of a naive setInterval.
      const delay = 1000 - (Date.now() % 1000);
      timeoutRef.current = window.setTimeout(tick, delay);
    };

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        clearTimer();
      } else {
        // Resync immediately on return so a tab left in the background
        // doesn't show stale time.
        clearTimer();
        tick();
      }
    };

    // Sync immediately, then start the boundary-aligned loop.
    setTime(compute());
    if (typeof document === "undefined" || document.visibilityState !== "hidden") {
      const delay = 1000 - (Date.now() % 1000);
      timeoutRef.current = window.setTimeout(tick, delay);
    }

    if (typeof document !== "undefined") {
      document.addEventListener("visibilitychange", handleVisibility);
    }

    return () => {
      cancelled = true;
      clearTimer();
      if (typeof document !== "undefined") {
        document.removeEventListener("visibilitychange", handleVisibility);
      }
    };
  }, [targetMs]);

  return time;
}
