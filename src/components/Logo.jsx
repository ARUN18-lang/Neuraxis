export function LogoMark({ className = "h-9 w-9", ...props }) {
  return (
    <img
      src="/logo-mark.svg"
      alt=""
      aria-hidden="true"
      className={className}
      {...props}
    />
  );
}

export default function Logo({
  className = "",
  size = "md",
  variant = "light",
  showText = true,
}) {
  const sizes = {
    sm: { mark: "h-8 w-8", text: "text-[20px]" },
    md: { mark: "h-9 w-9", text: "text-[22px]" },
    lg: { mark: "h-12 w-12", text: "text-[clamp(48px,12vw,120px)]" },
    xl: { mark: "h-14 w-14", text: "text-[36px]" },
  };

  const s = sizes[size] ?? sizes.md;
  const ink = variant === "dark" ? "text-[var(--color-bg)]" : "text-[var(--color-ink)]";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className={`${s.mark} shrink-0`} />
      {showText && (
        <span className={`font-display font-semibold tracking-[-0.03em] ${s.text} ${ink}`}>
          Neur<span className="text-[var(--color-accent)]">axis</span>
        </span>
      )}
    </span>
  );
}
