import { useEffect, useRef, useState } from "react";

/**
 * useCountdown
 *
 * Drives a live countdown to a fixed target time. Returns days, hours, minutes,
 * seconds, the total milliseconds remaining, and a boolean `isExpired` flag.
 *
 * @param {Date|number|string} target          The countdown target (Date, ms, or ISO string).
 * @param {object}             [options]
 * @param {number}             [options.intervalMs=1000]  Tick interval in milliseconds.
 * @returns {{
 *   days: number,
 *   hours: number,
 *   minutes: number,
 *   seconds: number,
 *   totalMs: number,
 *   isExpired: boolean,
 * }}
 */
export default function useCountdown(target, { intervalMs = 1000 } = {}) {
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
  const intervalRef = useRef(null);

  useEffect(() => {
    setTime(compute());
    if (Number.isNaN(targetMs)) return undefined;

    intervalRef.current = window.setInterval(() => {
      const next = compute();
      setTime(next);
      if (next.isExpired && intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, intervalMs);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetMs, intervalMs]);

  return time;
}
