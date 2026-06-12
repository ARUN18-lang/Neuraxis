import { Briefcase, Cpu, LineChart } from "lucide-react";
import { motion } from "motion/react";
import SectionHead from "./SectionHead";
import { team } from "../data/site";

const roleIcons = {
  "Founder & CEO": Briefcase,
  "Co-founder & CTO": Cpu,
  "Co-founder & CFO": LineChart,
};

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(217,119,87,0.1), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        <SectionHead index="(03)" eyebrow="The Team" title="Builders, not bystanders." />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {team.map((m, i) => {
            const Icon = roleIcons[m.role] ?? Briefcase;
            const index = String(i + 1).padStart(2, "0");

            return (
              <motion.article
                key={m.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-[var(--color-accent)]/35 hover:shadow-[0_28px_70px_-24px_rgba(217,119,87,0.28)] sm:p-7"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(circle, rgba(217,119,87,0.25), transparent 70%)",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative mb-6 flex items-start justify-between">
                  <span className="font-mono text-[11px] font-medium tabular-nums tracking-widest text-[var(--color-muted)]">
                    {index}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-line)] bg-[var(--color-bg)] text-[var(--color-accent)] transition-colors duration-500 group-hover:border-[var(--color-accent)]/30 group-hover:bg-[var(--color-accent-soft)]">
                    <Icon size={17} strokeWidth={1.75} />
                  </span>
                </div>

                <div className="relative flex items-center gap-4">
                  <div className="relative flex h-[72px] w-[72px] shrink-0 items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent opacity-60" />
                    <div className="absolute inset-0 rounded-2xl border border-[var(--color-accent)]/20 transition-colors duration-500 group-hover:border-[var(--color-accent)]/50" />
                    <span className="relative font-display text-[26px] font-semibold text-[var(--color-accent)]">
                      {m.initial}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[20px] font-semibold leading-tight tracking-[-0.02em] sm:text-[22px]">
                      {m.name}
                    </h3>
                    <span className="mt-2 inline-flex rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent-2)]">
                      {m.role}
                    </span>
                  </div>
                </div>

                <div className="relative mt-6 flex-1 border-t border-[var(--color-line)] pt-5">
                  <p className="border-l-2 border-[var(--color-accent)] pl-4 text-[15px] font-medium leading-relaxed text-[var(--color-ink)]">
                    {m.tag}
                  </p>
                  <p className="mt-4 text-[14px] leading-relaxed text-[var(--color-muted)]">
                    {m.bio}
                  </p>
                </div>

                <div className="relative mt-6 h-px w-full overflow-hidden rounded-full bg-[var(--color-line)]">
                  <div className="h-full w-0 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] transition-all duration-700 group-hover:w-full" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
