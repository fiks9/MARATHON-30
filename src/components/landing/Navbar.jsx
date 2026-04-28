import { useState } from "react";

const links = [
  { href: "#program", label: "The Program", active: true },
  { href: "#results", label: "Results" },
  { href: "#expertise", label: "Expertise" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-12">
        <a
          href="#"
          className="font-display text-xl font-extrabold tracking-tight text-white md:text-2xl"
        >
          MARATHON 30
        </a>

        <nav className="hidden items-center gap-8 font-display md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.active
                  ? "border-b-2 border-violet-500 pb-1 font-bold text-white"
                  : "font-medium text-zinc-400 transition-colors hover:text-violet-300"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden font-display font-bold text-violet-400 transition-colors hover:text-violet-300 sm:inline-block"
          >
            Join Now
          </a>
          <span className="material-symbols-outlined hidden cursor-pointer text-violet-400 sm:inline-block">
            account_circle
          </span>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden"
          >
            <span className="material-symbols-outlined text-violet-400">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-zinc-950/95 md:hidden">
          <ul className="flex flex-col px-5 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
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
