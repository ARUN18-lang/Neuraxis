import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Splash({ onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 400 : 1500;
    const start = performance.now();
    let raf;

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(onComplete, reduce ? 0 : 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[300] flex flex-col justify-between bg-[var(--color-bg)] px-6 py-10"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* faint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 paper-grid"
        style={{
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 75%)",
        }}
      />

      <div className="relative flex items-center justify-between text-[13px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
        <span>Engineering-First Studio</span>
        <span className="tabular-nums">{String(count).padStart(3, "0")}%</span>
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(64px,16vw,180px)] font-medium leading-none tracking-[-0.03em]"
        >
          Zen<span className="serif-italic text-[var(--color-accent)]">X</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 max-w-sm text-center text-[15px] text-[var(--color-muted)]"
        >
          We build what others can&rsquo;t.
        </motion.p>
      </div>

      <div className="relative">
        <div className="h-px w-full bg-[var(--color-line)]">
          <motion.div
            className="h-px bg-[var(--color-accent)]"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
