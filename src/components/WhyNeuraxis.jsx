import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { whyNeuraxis } from "../data/site";

export default function WhyNeuraxis() {
  return (
    <section id="why" className="bg-[var(--color-bg-2)] py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHead
          index="(02)"
          eyebrow="Why Neuraxis"
          title="A small team that punches above its weight."
        />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {whyNeuraxis.map((w, i) => (
            <Reveal key={w.num} delay={i * 0.1}>
              <div className="border-t-2 border-[var(--color-ink)] pt-6">
                <div className="font-display text-[64px] font-medium leading-none text-[var(--color-accent)]">
                  {w.num}
                </div>
                <h3 className="mt-5 text-[26px] font-medium tracking-[-0.01em]">{w.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-[var(--color-muted)]">
                  {w.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
