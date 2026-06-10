import { motion } from "motion/react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-1 pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24">
      {/* soft accent wash, top-right */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-60 blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(217,119,87,0.16), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5] paper-grid"
        style={{
          maskImage: "radial-gradient(ellipse 70% 70% at 70% 10%, #000 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 70% 10%, #000 10%, transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6"
      >
        <motion.div
          variants={item}
          className="mb-8 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)] sm:mb-10 sm:gap-3 sm:text-[13px] sm:tracking-[0.22em]"
        >
          <span className="h-px w-8 shrink-0 bg-[var(--color-accent)] sm:w-10" />
          Engineering-First Technology Studio
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-[14ch] text-[clamp(36px,9.5vw,116px)] font-medium tracking-[-0.03em]"
        >
          We build what
          <br />
          others <span className="serif-italic text-[var(--color-accent)]">can&rsquo;t.</span>
        </motion.h1>

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-[var(--color-line)] pt-8 sm:mt-12 sm:gap-10 sm:pt-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <motion.p
            variants={item}
            className="max-w-xl text-[clamp(17px,2.2vw,21px)] leading-relaxed text-[var(--color-muted)]"
          >
            Neuraxis is a lean, high-impact studio engineering end-to-end digital products —
            hardware, web, mobile, AI/ML, and automation. Deep engineering. Real business
            outcomes. No fluff.
          </motion.p>

          <motion.div variants={item} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:justify-end">
            <a
              href="#contact"
              className="rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-center text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent-2)] sm:px-8 sm:py-4 sm:text-base"
            >
              Start a Project →
            </a>
            <a
              href="#services"
              className="rounded-full border border-[var(--color-ink)]/20 px-6 py-3.5 text-center text-[15px] font-semibold transition-all hover:-translate-y-0.5 hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] sm:px-8 sm:py-4 sm:text-base"
            >
              See Our Work
            </a>
          </motion.div>
        </div>

        {/* editorial stat row */}
        <motion.div
          variants={item}
          className="mt-12 grid grid-cols-2 gap-6 border-t border-[var(--color-line)] pt-6 sm:mt-16 sm:gap-8 sm:pt-8 sm:grid-cols-4"
        >
          {[
            ["5+", "Domains under one roof"],
            ["End-to-end", "Idea → production"],
            ["Senior", "Engineers only"],
            ["< 1 day", "Typical reply time"],
          ].map(([big, small]) => (
            <div key={small}>
              <div className="font-display text-[22px] font-medium leading-none sm:text-[28px]">{big}</div>
              <div className="mt-2 text-[12px] leading-snug text-[var(--color-muted)] sm:text-[13px]">{small}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
