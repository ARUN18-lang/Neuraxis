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
    <section id="hero" className="relative overflow-hidden pt-40 pb-24">
      {/* soft accent wash, top-right */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-60 blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(255,74,28,0.18), transparent 70%)" }}
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
        className="relative mx-auto w-full max-w-[1200px] px-6"
      >
        <motion.div
          variants={item}
          className="mb-10 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]"
        >
          <span className="h-px w-10 bg-[var(--color-accent)]" />
          Engineering-First Technology Studio
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-[15ch] text-[clamp(46px,8.5vw,116px)] font-medium tracking-[-0.03em]"
        >
          We build what
          <br />
          others <span className="serif-italic text-[var(--color-accent)]">can&rsquo;t.</span>
        </motion.h1>

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-[var(--color-line)] pt-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <motion.p
            variants={item}
            className="max-w-xl text-[clamp(17px,2.2vw,21px)] leading-relaxed text-[var(--color-muted)]"
          >
            ZenX is a lean, high-impact studio engineering end-to-end digital products —
            hardware, web, mobile, AI/ML, and automation. Deep engineering. Real business
            outcomes. No fluff.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 md:justify-end">
            <a
              href="#contact"
              className="rounded-full bg-[var(--color-accent)] px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent-2)]"
            >
              Start a Project →
            </a>
            <a
              href="#services"
              className="rounded-full border border-[var(--color-ink)]/20 px-8 py-4 font-semibold transition-all hover:-translate-y-0.5 hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)]"
            >
              See Our Work
            </a>
          </motion.div>
        </div>

        {/* editorial stat row */}
        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-[var(--color-line)] pt-8 sm:grid-cols-4"
        >
          {[
            ["5+", "Domains under one roof"],
            ["End-to-end", "Idea → production"],
            ["Senior", "Engineers only"],
            ["< 1 day", "Typical reply time"],
          ].map(([big, small]) => (
            <div key={small}>
              <div className="font-display text-[28px] font-medium leading-none">{big}</div>
              <div className="mt-2 text-[13px] text-[var(--color-muted)]">{small}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
