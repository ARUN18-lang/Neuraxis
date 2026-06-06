import { contact } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] px-6 pb-10 pt-20 text-[var(--color-bg)]">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-end justify-between gap-10 border-b border-white/10 pb-12">
          <div className="max-w-sm">
            <a href="#hero" className="font-display text-[40px] font-medium tracking-tight">
              Zen<span className="serif-italic text-[var(--color-accent)]">X</span>
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
                ["#why", "Why ZenX"],
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

        <div className="flex flex-wrap justify-between gap-3 pt-6 text-[14px] text-white/50">
          <span>© {new Date().getFullYear()} ZenX. All rights reserved.</span>
          <span>Built with precision. Shipped with speed.</span>
        </div>
      </div>
    </footer>
  );
}
