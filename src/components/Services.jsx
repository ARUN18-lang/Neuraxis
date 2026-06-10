import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Brain,
  Cpu,
  Cog,
  Globe,
  Rocket,
  Smartphone,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import SectionHead from "./SectionHead";
import { services } from "../data/site";

const PEEK = 52;
const iconMap = {
  cpu: Cpu,
  globe: Globe,
  smartphone: Smartphone,
  brain: Brain,
  cog: Cog,
  rocket: Rocket,
};

function easeOutQuint(t) {
  const c = Math.max(0, Math.min(1, t));
  return 1 - (1 - c) ** 5;
}

function ServiceCard({ service, index, progress, total, entryX }) {
  const Icon = iconMap[service.icon] ?? Cpu;

  const x = useTransform(progress, (p) => {
    const v = p * (total - 1);
    const stackX = index * PEEK;

    if (index === 0) {
      if (v <= 0) return 0;
      return stackX;
    }

    if (v < index - 1) return entryX;
    if (v >= index) return stackX;

    const t = easeOutQuint(v - (index - 1));
    return entryX + (stackX - entryX) * t;
  });

  const scale = useTransform(progress, (p) => {
    const v = p * (total - 1);
    if (v <= index) return 1;
    const behind = v - index;
    return Math.max(0.965, 1 - behind * 0.006);
  });

  const opacity = useTransform(progress, (p) => {
    const v = p * (total - 1);
    if (index === 0) return 1;
    if (v < index - 0.85) return 0;
    if (v < index - 0.15) return easeOutQuint((v - (index - 0.85)) / 0.7);
    return 1;
  });

  return (
    <motion.a
      href="#contact"
      style={{ x, scale, opacity, zIndex: index + 1, transformOrigin: "left center" }}
      className="service-stack-card group absolute inset-0 flex will-change-transform flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-[var(--color-line)] bg-[var(--color-surface)] p-5 shadow-[0_32px_80px_-24px_rgba(20,20,19,0.18)] transition-[border-color,box-shadow] duration-500 hover:border-[var(--color-accent)]/35 hover:shadow-[0_40px_100px_-20px_rgba(217,119,87,0.2)] sm:p-8 md:p-10 lg:p-12"
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(217,119,87,0.18), transparent 70%)" }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-[var(--radius-xl2)] bg-gradient-to-br from-[var(--color-accent)]/[0.05] via-transparent to-transparent" />

      <div className="relative mb-5 flex items-start justify-between gap-4 sm:mb-8 sm:gap-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg)] text-[var(--color-accent)] transition-colors duration-500 group-hover:border-[var(--color-accent)]/30 group-hover:bg-[var(--color-accent-soft)] sm:h-14 sm:w-14 md:h-16 md:w-16">
          <Icon size={24} strokeWidth={1.75} className="sm:h-7 sm:w-7" />
        </div>
        <span className="font-mono text-[13px] tabular-nums tracking-wider text-[var(--color-muted)]">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative max-w-xl text-[clamp(22px,5vw,42px)] font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
        {service.title}
      </h3>
      <p className="relative mt-3 max-w-2xl flex-1 text-[clamp(14px,2vw,19px)] leading-relaxed text-[var(--color-muted)] sm:mt-5">
        {service.desc}
      </p>

      <div className="relative mt-6 flex items-center gap-2 text-[14px] font-medium text-[var(--color-accent)] sm:mt-10 sm:text-[15px]">
        <span>Start a project</span>
        <ArrowUpRight size={18} strokeWidth={2} />
      </div>
    </motion.a>
  );
}

function ServicesStatic() {
  return (
    <div className="mx-auto flex max-w-[980px] flex-col gap-6 px-6">
      {services.map((s) => {
        const Icon = iconMap[s.icon] ?? Cpu;
        return (
          <a
            key={s.title}
            href="#contact"
            className="flex flex-col rounded-[var(--radius-xl2)] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 md:p-10"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg)] text-[var(--color-accent)]">
              <Icon size={26} strokeWidth={1.75} />
            </div>
            <h3 className="text-[28px] font-semibold tracking-[-0.02em]">{s.title}</h3>
            <p className="mt-3 text-[17px] leading-relaxed text-[var(--color-muted)]">{s.desc}</p>
          </a>
        );
      })}
    </div>
  );
}

export default function Services() {
  const containerRef = useRef(null);
  const stackRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [entryX, setEntryX] = useState(1040);
  const [scrollVh, setScrollVh] = useState(100);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = stackRef.current;
    if (!el) return;

    const update = () => {
      setEntryX(el.offsetWidth + 48);
      setScrollVh(window.innerWidth < 768 ? 85 : 100);
    };
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    mass: 0.25,
    restDelta: 0.0005,
  });

  const scrollHintOpacity = useTransform(smoothProgress, [0, 0.06, 0.94, 1], [1, 0, 0, 1]);

  return (
    <section id="services" className="relative">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(217,119,87,0.08), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4 pt-20 sm:px-6 sm:pt-28">
        <SectionHead index="(01)" eyebrow="What We Do" title="Full-stack engineering, end to end.">
          From silicon to software — one team that ships the whole product.
        </SectionHead>
      </div>

      {reduceMotion ? (
        <div className="pb-28">
          <ServicesStatic />
        </div>
      ) : (
        <div
          ref={containerRef}
          className="relative"
          style={{ height: `${services.length * scrollVh}vh` }}
        >
          <div className="sticky top-0 flex h-screen items-center overflow-hidden px-4 md:px-8">
            <div
              ref={stackRef}
              className="relative mx-auto w-full max-w-[min(96vw,1040px)]"
              style={{ height: "min(78vh, 720px)" }}
            >
              {services.map((s, i) => (
                <ServiceCard
                  key={s.title}
                  service={s}
                  index={i}
                  progress={smoothProgress}
                  total={services.length}
                  entryX={entryX}
                />
              ))}
            </div>
          </div>

          <motion.p
            style={{ opacity: scrollHintOpacity }}
            className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[13px] text-[var(--color-muted)]"
          >
            Scroll to explore services
          </motion.p>
        </div>
      )}
    </section>
  );
}
