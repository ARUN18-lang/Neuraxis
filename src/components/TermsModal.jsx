import { useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { termsContent } from "../data/terms";

export default function TermsModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close terms"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[400] bg-[var(--color-ink)]/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[max(1rem,env(safe-area-inset-top))] z-[410] mx-auto flex max-h-[min(88vh,calc(100dvh-2rem))] w-full max-w-3xl flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_40px_100px_-24px_rgba(20,20,19,0.35)] sm:inset-x-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
          >
            <div className="flex shrink-0 items-start justify-between gap-4 border-b border-[var(--color-line)] bg-[var(--color-bg)] px-5 py-4 sm:px-6 sm:py-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {termsContent.company}
                </p>
                <h2
                  id="terms-title"
                  className="mt-1 text-[20px] font-semibold tracking-[-0.02em] text-[var(--color-ink)] sm:text-[22px]"
                >
                  {termsContent.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-line)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-ink)] hover:bg-[var(--color-bg-2)] hover:text-[var(--color-ink)]"
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>

            <div className="terms-scroll flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-6 sm:py-6">
              <p className="rounded-xl border border-[var(--color-line)] bg-[var(--color-bg)] p-4 text-[15px] leading-[1.75] text-[var(--color-muted)] sm:p-5">
                {termsContent.intro}
              </p>

              <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                {termsContent.clauses.length} clauses
              </p>

              <ol className="mt-4 space-y-4">
                {termsContent.clauses.map((clause) => (
                  <li
                    key={clause.num}
                    className="flex gap-4 rounded-xl border border-[var(--color-line)] bg-[var(--color-bg)]/60 p-4 transition-colors hover:border-[var(--color-accent)]/25 sm:gap-5 sm:p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] font-mono text-[12px] font-semibold tabular-nums text-[var(--color-accent)]">
                      {clause.num}
                    </span>
                    <p className="pt-0.5 text-[14px] leading-[1.8] text-[var(--color-ink)] sm:text-[15px]">
                      {clause.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="shrink-0 border-t border-[var(--color-line)] bg-[var(--color-bg)] px-5 py-4 sm:px-6">
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-full bg-[var(--color-ink)] py-3 text-[15px] font-semibold text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent)]"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
