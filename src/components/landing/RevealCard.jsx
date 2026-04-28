import useInView from "../../hooks/useInView.js";

/**
 * RevealCard
 *
 * Generic wrapper that fades + slides its children up the first time they
 * scroll into view. Stagger via the `delay` prop (ms).
 *
 * Polymorphic: renders `as` (default "div") so it works for <article>,
 * <figure>, etc.
 */
export default function RevealCard({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={[
        "transform-gpu transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
}
