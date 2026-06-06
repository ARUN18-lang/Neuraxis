import { motion } from "motion/react";
import SectionHead from "./SectionHead";
import { services } from "../data/site";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1200px] px-6 py-28">
      <SectionHead index="(01)" eyebrow="What We Do" title="Full-stack engineering, end to end.">
        From silicon to software — one team that ships the whole product.
      </SectionHead>

      <div className="border-t border-[var(--color-line)]">
        {services.map((s, i) => (
          <motion.a
            href="#contact"
            key={s.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-[var(--color-line)] py-7 transition-colors hover:bg-[var(--color-bg-2)] md:gap-10 md:py-8"
          >
            <span className="font-display text-[18px] font-medium tabular-nums text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)] md:pl-2">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-10">
              <h3 className="flex items-center gap-3 text-[clamp(24px,3.4vw,38px)] font-medium tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-2">
                <span className="text-[24px] md:text-[28px]">{s.icon}</span>
                {s.title}
              </h3>
              <p className="max-w-md text-[15px] leading-relaxed text-[var(--color-muted)] md:ml-auto md:text-right">
                {s.desc}
              </p>
            </div>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] transition-all group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white md:mr-2">
              ↗
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
