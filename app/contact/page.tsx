"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // honeypot — real visitors never fill this hidden field
    if (data.company) {
      setStatus("sent");
      form.reset();
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://formspree.io/f/mqerbdly", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Send failed");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1fr_1.2fr] md:gap-20 md:px-10 md:py-28">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.7 }}
      >
        <p className="font-mono text-xs uppercase tracking-widest2 text-rust">
          Contact
        </p>
        <h1 className="mt-4 font-display text-4xl  text-ink sm:text-5xl">
          Let&rsquo;s start a file.
        </h1>
        <p className="mt-6 max-w-sm font-body text-lg leading-relaxed text-ink/80">
          For commissions, residencies, press, or collaboration inquiries,
          send a note below — or write directly.
        </p>

        <div className="mt-10 space-y-2 font-mono text-sm uppercase tracking-widest2 text-ink/70">
          <a href={`mailto:${SITE.email}`} className="block hover:text-rust">
            {SITE.email}
          </a>
        </div>
      </motion.div>

      <motion.form
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.1 }}
        onSubmit={handleSubmit}
        className="space-y-6 border border-line/60 bg-paper2/40 p-8 sm:p-10"
      >
        <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink/40">
          Exhibit — Inquiry Form
        </p>

        {/* honeypot */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="font-mono text-xs uppercase tracking-widest2 text-ink/60">
              Name
            </span>
            <input
              required
              name="name"
              type="text"
              className="mt-2 w-full border-b border-line bg-transparent py-2 font-body text-base text-ink outline-none transition-colors focus:border-rust"
            />
          </label>
          <label className="block">
            <span className="font-mono text-xs uppercase tracking-widest2 text-ink/60">
              Email
            </span>
            <input
              required
              name="email"
              type="email"
              className="mt-2 w-full border-b border-line bg-transparent py-2 font-body text-base text-ink outline-none transition-colors focus:border-rust"
            />
          </label>
        </div>

        <label className="block">
          <span className="font-mono text-xs uppercase tracking-widest2 text-ink/60">
            Subject
          </span>
          <input
            required
            name="subject"
            type="text"
            className="mt-2 w-full border-b border-line bg-transparent py-2 font-body text-base text-ink outline-none transition-colors focus:border-rust"
          />
        </label>

        <label className="block">
          <span className="font-mono text-xs uppercase tracking-widest2 text-ink/60">
            Message
          </span>
          <textarea
            required
            name="message"
            rows={5}
            className="mt-2 w-full resize-none border-b border-line bg-transparent py-2 font-body text-base text-ink outline-none transition-colors focus:border-rust"
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-3 rounded-full border border-brass/70 px-7 py-3 font-mono text-xs uppercase tracking-widest2 text-ink transition-colors hover:bg-rust hover:border-rust hover:text-cream disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send inquiry"}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        {status === "sent" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body text-sm text-rust"
          >
            Received — thank you. A reply will follow shortly.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body text-sm text-rustDark"
          >
            {errorMsg || "Something went wrong — please try again."}
          </motion.p>
        )}
      </motion.form>
    </div>
  );
}
