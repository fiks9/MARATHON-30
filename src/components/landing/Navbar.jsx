import { useEffect, useId, useRef, useState } from "react";

const links = [
  { href: "#program", label: "The Program" },
  { href: "#results", label: "Results" },
  { href: "#expertise", label: "Expertise" },
  { href: "#pricing", label: "Pricing" },
];

// Stable, module-scope reference. Passing `links.map(...)` from the
// component body would create a fresh array each render and re-trigger
// the scroll-spy `useEffect` below, tearing down and rebuilding the
// IntersectionObserver on every keystroke / state change.
const LINK_HREFS = links.map((l) => l.href);

/**
 * useActiveSection
 *
 * Scroll-spy: returns the href (`#id`) of whichever section is most prominently
 * in view. Drives the underlined "active" state in the desktop nav so it stays
 * in sync with the user's scroll position (docs/improve.md §1.3).
 */
function useActiveSection(hrefs) {
  const [active, setActive] = useState(hrefs[0]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const ids = hrefs.map((h) => h.slice(1));
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (nodes.length === 0) return undefined;

    // Track current ratios for every observed section and pick the most
    // visible one on each callback. A single observer covers all sections.
    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }
        let bestId = null;
        let bestRatio = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestId) setActive(`#${bestId}`);
      },
      {
        // A band roughly centred on the viewport, biased slightly upward to
        // account for the fixed navbar height.
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [hrefs]);

  return active;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef(null);
  const active = useActiveSection(LINK_HREFS);

  // Esc closes the mobile menu and restores focus to the toggle.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    // Lock body scroll while the panel is open so the page behind doesn't drift.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-12">
        <a
          href="#"
          className="font-display text-xl font-extrabold tracking-tight text-white md:text-2xl"
        >
          MARATHON 30
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 font-display md:flex"
        >
          {links.map((link) => {
            const isActive = link.href === active;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "border-b-2 border-violet-500 pb-1 font-bold text-white"
                    : "font-medium text-zinc-400 transition-colors hover:text-violet-300"
                }
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden font-display font-bold text-violet-400 transition-colors hover:text-violet-300 sm:inline-block"
          >
            Join Now
          </a>
          <span
            aria-hidden="true"
            className="material-symbols-outlined hidden cursor-pointer text-violet-400 sm:inline-block"
          >
            account_circle
          </span>
          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-violet-400"
            >
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id={panelId}
          aria-label="Mobile"
          className="border-t border-white/10 bg-zinc-950/95 md:hidden"
        >
          <ul className="flex flex-col px-5 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={link.href === active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-zinc-300 hover:text-violet-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
