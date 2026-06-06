import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, children, index }) {
  return (
    <Reveal className="mb-16 max-w-3xl">
      <div className="mb-5 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
        {index && <span className="text-[var(--color-accent)]">{index}</span>}
        <span className="h-px w-8 bg-[var(--color-accent)]" />
        {eyebrow}
      </div>
      <h2 className="text-[clamp(32px,5vw,58px)] font-medium tracking-[-0.02em]">{title}</h2>
      {children && (
        <p className="mt-5 text-[19px] leading-relaxed text-[var(--color-muted)]">{children}</p>
      )}
    </Reveal>
  );
}
