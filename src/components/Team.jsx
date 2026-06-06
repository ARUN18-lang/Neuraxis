import { motion } from "motion/react";
import SectionHead from "./SectionHead";
import { team } from "../data/site";

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-[1200px] px-6 py-28">
      <SectionHead index="(03)" eyebrow="The Team" title="Builders, not bystanders." />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5 }}
            className="group rounded-[var(--radius-xl2)] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 transition-colors hover:border-[var(--color-ink)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent-soft)] font-display text-2xl font-semibold text-[var(--color-accent)]">
                {m.initial}
              </div>
              <div>
                <h3 className="text-[22px] font-medium leading-tight">{m.name}</h3>
                <div className="text-[14px] font-semibold text-[var(--color-accent)]">{m.role}</div>
              </div>
            </div>
            <p className="mt-6 border-t border-[var(--color-line)] pt-5 text-[15px] leading-relaxed text-[var(--color-muted)]">
              {m.tag}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
