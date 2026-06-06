import { marqueeWords } from "../data/site";

export default function Marquee() {
  const row = [...marqueeWords, ...marqueeWords];
  return (
    <div className="overflow-hidden bg-[var(--color-ink)] py-5 text-[var(--color-bg)]">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {row.map((w, i) => (
          <span
            key={i}
            className="flex items-center px-8 font-display text-[20px] font-medium"
          >
            {w}
            <span className="ml-8 text-[18px] text-[var(--color-accent)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
