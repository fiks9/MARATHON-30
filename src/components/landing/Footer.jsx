const navLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Contact Support" },
  { href: "#", label: "Affiliates" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-950 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-12">
        <div className="font-display text-xs font-black uppercase tracking-widest text-white">
          MARATHON 30
        </div>
        <div className="font-display text-xs uppercase tracking-widest text-violet-400">
          © 2026 MARATHON 30. All rights reserved.
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-display text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
