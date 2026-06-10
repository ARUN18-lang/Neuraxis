import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, children, index }) {
  return (
    <Reveal className="mb-10 max-w-3xl md:mb-16">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)] sm:mb-5 sm:gap-3 sm:text-[13px] sm:tracking-[0.22em]">
        {index && <span className="text-[var(--color-accent)]">{index}</span>}
        <span className="h-px w-8 bg-[var(--color-accent)]" />
        {eyebrow}
      </div>
      <h2 className="text-[clamp(28px,6vw,58px)] font-medium tracking-[-0.02em]">{title}</h2>
      {children && (
        <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-muted)] sm:mt-5 sm:text-[19px]">{children}</p>
      )}
    </Reveal>
  );
}
