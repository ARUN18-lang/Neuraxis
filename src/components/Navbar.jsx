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

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[200] pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        scrolled || open
          ? "glass-light border-b border-[var(--color-line)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-3 px-4 sm:h-20 sm:px-6">
        <a href="#hero" aria-label="Neuraxis home" className="min-w-0 shrink" onClick={closeMenu}>
          <Logo size="sm" className="gap-2 sm:gap-3" />
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
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="relative z-[220] flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-transparent transition-colors hover:border-[var(--color-line)] hover:bg-[var(--color-bg-2)] active:bg-[var(--color-bg-2)] md:hidden"
        >
          <span className="relative h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-[var(--color-ink)] transition-transform duration-200 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-6 bg-[var(--color-ink)] transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-6 bg-[var(--color-ink)] transition-transform duration-200 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-[var(--color-ink)]/20 sm:top-20 md:hidden"
              onClick={closeMenu}
            />

            <motion.nav
              id="mobile-nav"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-[215] border-b border-[var(--color-line)] bg-[var(--color-bg)] shadow-[0_20px_40px_-24px_rgba(20,20,19,0.2)] md:hidden"
            >
              <div className="flex flex-col gap-1 px-4 py-4 sm:px-6 sm:py-5">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={closeMenu}
                    className="rounded-xl px-3 py-3.5 text-[16px] font-medium text-[var(--color-ink)] transition-colors active:bg-[var(--color-bg-2)]"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 rounded-full bg-[var(--color-ink)] px-6 py-3.5 text-center text-[15px] font-semibold text-[var(--color-bg)]"
                >
                  Start a Project
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
