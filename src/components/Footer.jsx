import { useState } from "react";
import { contact } from "../data/site";
import Logo from "./Logo";
import TermsModal from "./TermsModal";

export default function Footer() {
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer className="bg-[var(--color-ink)] px-4 pb-[calc(2.5rem+env(safe-area-inset-bottom))] pt-16 text-[var(--color-bg)] sm:px-6 sm:pb-10 sm:pt-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-wrap items-end justify-between gap-10 border-b border-white/10 pb-12">
            <div className="max-w-sm">
              <a href="#hero" aria-label="Neuraxis home">
                <Logo size="xl" variant="dark" />
              </a>
              <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                Engineering-first, results-obsessed. We build end-to-end digital products that
                punch above their weight.
              </p>
            </div>

            <div className="flex flex-wrap gap-14">
              <div>
                <h4 className="mb-4 text-[12px] uppercase tracking-[0.18em] text-white/40">Navigate</h4>
                {[
                  ["#services", "Services"],
                  ["#why", "Why Neuraxis"],
                  ["#team", "Team"],
                  ["#contact", "Contact"],
                ].map(([href, label]) => (
                  <a key={href} href={href} className="mb-2.5 block text-[15px] text-white/80 transition-colors hover:text-[var(--color-accent)]">
                    {label}
                  </a>
                ))}
              </div>
              <div>
                <h4 className="mb-4 text-[12px] uppercase tracking-[0.18em] text-white/40">Connect</h4>
                <a href={`mailto:${contact.email}`} className="mb-2.5 block text-[15px] text-white/80 transition-colors hover:text-[var(--color-accent)]">
                  Email
                </a>
                <a href={`tel:${contact.phoneLink}`} className="mb-2.5 block text-[15px] text-white/80 transition-colors hover:text-[var(--color-accent)]">
                  Call
                </a>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener" className="mb-2.5 block text-[15px] text-white/80 transition-colors hover:text-[var(--color-accent)]">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-[14px] text-white/50">
            <span>© {new Date().getFullYear()} Neuraxis. All rights reserved.</span>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setTermsOpen(true)}
                className="rounded-full border border-white/20 px-4 py-2 text-[13px] font-medium text-white/80 transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Terms & Conditions
              </button>
              <span className="hidden sm:inline">Built with precision. Shipped with speed.</span>
            </div>
          </div>
        </div>
      </footer>

      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  );
}
