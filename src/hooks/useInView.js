import { useEffect, useRef, useState } from "react";

/**
 * useInView
 *
 * Lightweight IntersectionObserver hook that flips `inView` to `true` once
 * the observed element enters the viewport. By default the flip is sticky
 * (one-shot reveal), which is the right behaviour for scroll-in animations.
 *
 * @param {object}  [options]
 * @param {number}  [options.threshold=0.15]   How much of the element must
 *                                              be visible before triggering.
 * @param {string}  [options.rootMargin="0px 0px -40px 0px"]
 * @param {boolean} [options.once=true]        If false, will toggle each
 *                                              time the element enters/leaves.
 * @returns {[React.RefObject, boolean]}
 */
export default function useInView({
  threshold = 0.15,
  rootMargin = "0px 0px -40px 0px",
  once = true,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      // Fallback: if IO is unavailable, reveal immediately.
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
