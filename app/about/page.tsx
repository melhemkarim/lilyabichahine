"use client";

import { motion } from "framer-motion";
import { ABOUT, PROJECTS } from "@/lib/data";

function Frame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden bg-gradient-to-br from-paper2 via-line/40 to-brass/30 ${className}`}
      style={{
        backgroundImage: `linear-gradient(160deg, rgba(36,30,26,0.05), rgba(122,46,46,0.1)), url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-20 md:grid-cols-[1fr_1.3fr] md:gap-16 md:px-10 md:pt-28">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <Frame
            src={ABOUT.portrait}
            alt="Portrait"
            className="aspect-[4/5] w-full rounded-sm"
          />
          <p className="mt-3 font-mono text-[11px] uppercase tracking-widest2 text-ink/40">
            {ABOUT.portraitCredit}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest2 text-rust">
            {ABOUT.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">
            {ABOUT.heading}
          </h1>

          <div className="mt-8 space-y-5 font-body text-lg leading-relaxed text-ink/85">
            {ABOUT.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ---------------------------------------------------------- CURRICULUM */}
      <section className="border-t border-line/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest2 text-ink/50"
          >
            Education
          </motion.p>

          <ul className="mt-6 divide-y divide-line/40 border-y border-line/40">
            {ABOUT.education.map((row, i) => (
              <motion.li
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-baseline gap-6 py-4 font-body text-base text-ink/85"
              >
                <span className="w-14 shrink-0 font-mono text-sm text-brass">
                  {row.year}
                </span>
                <span>{row.item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-14 font-mono text-xs uppercase tracking-widest2 text-ink/50"
          >
            Selected Works
          </motion.p>

          <ul className="mt-6 divide-y divide-line/40 border-y border-line/40">
            {PROJECTS.map((p, i) => (
              <motion.li
                key={p.slug}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: (i % 5) * 0.05 }}
                className="flex flex-wrap items-baseline gap-x-6 gap-y-1 py-4 font-body text-base text-ink/85"
              >
                <span className="w-14 shrink-0 font-mono text-sm text-brass">
                  {p.date}
                </span>
                <span className="font-display italic">{p.title}</span>
                <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink/45">
                  {p.category}, {p.location}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
