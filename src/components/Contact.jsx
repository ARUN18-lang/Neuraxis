import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { contact } from "../data/site";
import { formEnabled, submitLead } from "../lib/leads";

const field =
  "w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-bg)] px-4 py-3.5 text-[15px] text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-muted)]/60 focus:border-[var(--color-accent)] focus:bg-white";

const EMPTY = { name: "", email: "", phone: "", message: "" };

function buildMailto(form) {
  const subject = `New project inquiry from ${form.name}`;
  const body =
    `Name: ${form.name}\r\n` +
    `Email: ${form.email}\r\n` +
    `Phone: ${form.phone}\r\n\r\n` +
    `${form.message}`;
  return `mailto:${contact.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    // No Web3Forms key → open the visitor's mail app instead.
    if (!formEnabled) {
      window.location.href = buildMailto(form);
      return;
    }

    setStatus("sending");
    try {
      await submitLead(form);
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  const channels = [
    { emoji: "✉", label: "Email us", val: contact.email, href: `mailto:${contact.email}` },
    { emoji: "☎", label: "Call us", val: contact.phoneDisplay, href: `tel:${contact.phoneLink}` },
    {
      emoji: "✺",
      label: "WhatsApp",
      val: contact.phoneDisplay,
      href: `https://wa.me/${contact.whatsapp}`,
    },
  ];

  return (
    <section id="contact" className="bg-[var(--color-bg-2)] py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead index="(04)" eyebrow="Get In Touch" title="Let's build something that matters.">
          Tell us about your project — we usually reply within a day.
        </SectionHead>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="flex flex-col">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label === "WhatsApp" ? "_blank" : undefined}
                rel="noopener"
                className="group flex items-center justify-between border-t border-[var(--color-line)] py-7 transition-colors last:border-b hover:text-[var(--color-accent)]"
              >
                <span className="flex items-center gap-5">
                  <span className="font-display text-[24px]">{c.emoji}</span>
                  <span>
                    <span className="block text-[13px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                      {c.label}
                    </span>
                    <span className="font-display text-[22px] font-medium">{c.val}</span>
                  </span>
                </span>
                <span className="transition-transform group-hover:translate-x-1.5">↗</span>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-[var(--radius-xl2)] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 shadow-[0_24px_60px_-30px_rgba(23,20,15,0.25)]">
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-[13px] font-medium text-[var(--color-muted)]">
                      Name
                    </label>
                    <input id="name" name="name" value={form.name} onChange={onChange} required placeholder="Your name" className={field} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-[13px] font-medium text-[var(--color-muted)]">
                      Phone number
                    </label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={onChange} required placeholder="+91 98765 43210" className={field} />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="email" className="mb-2 block text-[13px] font-medium text-[var(--color-muted)]">
                    Email
                  </label>
                  <input id="email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="you@company.com" className={field} />
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="mb-2 block text-[13px] font-medium text-[var(--color-muted)]">
                    Message
                  </label>
                  <textarea id="message" name="message" value={form.message} onChange={onChange} required placeholder="What are you building?" className={`${field} min-h-32 resize-y`} />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-6 w-full rounded-full bg-[var(--color-accent)] py-4 font-semibold text-white transition-all hover:bg-[var(--color-accent-2)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Message →"}
                </button>

                {status === "error" && (
                  <p className="mt-3.5 text-center text-[13px] text-[var(--color-accent)]">
                    Something went wrong.{" "}
                    <a href={buildMailto(form)} className="underline">
                      Email us directly instead
                    </a>
                    .
                  </p>
                )}
                {status !== "error" && (
                  <p className="mt-3.5 text-center text-[13px] text-[var(--color-muted)]">
                    {formEnabled
                      ? `Messages are delivered to ${contact.email}. We'll reply within a day.`
                      : `Your mail app will open to send to ${contact.email}.`}
                  </p>
                )}
              </form>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-[var(--radius-xl2)] bg-[var(--color-surface)] p-8 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent-soft)] font-display text-3xl text-[var(--color-accent)]">
                      ✓
                    </div>
                    <h3 className="mt-5 text-[26px] font-medium">Message sent.</h3>
                    <p className="mt-2 max-w-xs text-[15px] text-[var(--color-muted)]">
                      Thanks for reaching out — we'll get back to you within a day.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 rounded-full border border-[var(--color-line)] px-6 py-2.5 text-[14px] font-semibold transition-colors hover:border-[var(--color-ink)]"
                    >
                      Send another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
