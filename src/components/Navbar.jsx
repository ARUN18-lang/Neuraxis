import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Neuraxis" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        scrolled ? "glass-light border-b border-[var(--color-line)]" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <a href="#hero" aria-label="Neuraxis home">
          <Logo size="md" />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[var(--color-ink)] px-6 py-2.5 text-[15px] font-semibold text-[var(--color-bg)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent)]"
          >
            Start a Project
          </a>
        </nav>

        <button
          className="flex flex-col gap-[5px] md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-[var(--color-ink)] transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-[var(--color-ink)] transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-[var(--color-ink)] transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg)] md:hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-[var(--color-ink)] px-6 py-3 text-center font-semibold text-[var(--color-bg)]"
              >
                Start a Project
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
