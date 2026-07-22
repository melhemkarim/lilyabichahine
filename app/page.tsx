

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, SITE } from "@/lib/data";

const GROUPS = [
  "Mare Nostrum",
  "Visual Art",
  "Lecture Performances",
  "Tribunals",
  "Academic and Artistic Research",
] as const;

/** Warm placeholder-safe image block. If the file isn't there yet, it falls
 * back to a soft gradient instead of a broken-image icon. */
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
        backgroundImage: `linear-gradient(160deg, rgba(36,30,26,0.06), rgba(122,46,46,0.08)), url(${src})`,
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

export default function Home() {
  const [activeGroup, setActiveGroup] = useState<(typeof GROUPS)[number] | null>(null);
  const groupProjects = activeGroup ? PROJECTS.filter((p) => p.group === activeGroup) : [];
  return (
    <div>
      {/* ---------------------------------------------------------------- HERO */}
      <section className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden border-b border-line/60">
        <Frame
          src={SITE.heroImage}
          alt={`${SITE.name} — portrait`}
          className="absolute inset-0"
        />
        <img
  src="/images/overlay.jpg"
  alt=""
  aria-hidden="true"
 className="absolute inset-0 h-full w-full object-cover pointer-events-none brightness-50"
/>

        <motion.div
          initial={{ opacity: 0, rotate: -14, scale: 0.8 }}
          animate={{ opacity: 1, rotate: -8, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute right-6 top-24 z-10 hidden h-24 w-24 select-none items-center justify-center rounded-full border border-brass/70 font-mono text-[10px] uppercase tracking-widest2 text-brass sm:flex md:right-10"
        >
          <span className="text-center leading-tight">
            Exhibit
            <br />
            Dossier
          </span>
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-40 md:px-10">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-widest2 text-white"
          >
          </motion.p>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-lg font-display text-lg  leading-[1.05] text-white sm:text-lg"
          >
            {SITE.role}
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-3xl font-display text-5xl  leading-[1.05] text-white sm:text-7xl"
          >
            {SITE.name}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl font-body text-lg text-white"
          >
            {SITE.tagline}
          </motion.p>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest2 text-cream/50"
        >
          Scroll ↓
        </motion.div>
      </section>

      {/* ---------------------------------------------------------------- INTRO */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-20 md:px-10">
        
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.4 }}
    variants={fadeUp}
    transition={{ duration: 0.7 }}
    className="max-w-3xl"
  >
    <p className="max-w-4xl  font-body text-2xl leading-relaxed text-ink/90 md:text-3xl">
      Lily Abichahine moves between performance, lecture-performance, video, and installation—addressing the body, Mediterranean myth, urban memory, and the legal questions that quietly govern them all.
      <Link
        href="/about"
        className="text-rust underline decoration-brass/60 underline-offset-4 hover:decoration-rust"
      >
        Read the full biography →
      </Link>
    </p>
  </motion.div>
</section>

      {/* ---------------------------------------------------------------- INDEX */}
      <section id="work" className="border-t border-line/60 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 pt-8 md:px-10">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest2 text-ink/50"
          >
            Selected Works
          </motion.p>

          {/* TABS */}
          <div className="mt-5 flex flex-wrap gap-2 border-b border-line/60 pb-5">
            {GROUPS.map((group) => {
              const count = PROJECTS.filter((p) => p.group === group).length;
              const isActive = group === activeGroup;
              return (
                <button
                  key={group}
                  onClick={() => setActiveGroup(isActive ? null : group)}
                  className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest2 transition-colors ${
                    isActive
                      ? "border-rust bg-rust text-cream"
                      : "border-line/70 text-ink/60 hover:border-rust/60 hover:text-rust"
                  }`}
                >
                  {group}{" "}
                  <span className={isActive ? "text-cream/70" : "text-ink/40"}>
                    ({String(count).padStart(2, "0")})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeGroup === null ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-6xl px-6 py-16 text-center font-body text-ink/40 md:px-10"
            >
              Select a category above to view works.
            </motion.p>
          ) : (
            <motion.ul
              key={activeGroup}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {groupProjects.length === 0 && (
                <li className="mx-auto max-w-6xl px-6 py-12 text-center font-body text-ink/50 md:px-10">
                  No works added to this section yet.
                </li>
              )}
              {groupProjects.map((project, i) => (
                <motion.li
                  key={project.slug}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                  className="border-t border-line/60 last:border-b"
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="group mx-auto flex max-w-6xl items-center gap-6 px-6 py-7 transition-colors hover:bg-white/70 md:px-10 md:py-9"
                  >
                    <span className="hidden font-mono text-sm text-brass sm:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <Frame
                      src={project.coverImage}
                      alt={project.title}
                      className="h-16 w-20 shrink-0 rounded-sm sm:h-20 sm:w-28"
                    />

                    <div className="min-w-0 flex-1">
                      <h2 className="truncate font-display text-xl text-ink transition-colors group-hover:text-rust sm:text-2xl md:text-3xl">
                        {project.title}
                      </h2>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-ink/50">
                        {project.category} · {project.location}
                      </p>
                    </div>

                    <span className="shrink-0 font-mono text-xs text-ink/50">
                      {project.date}
                    </span>

                    <span className="hidden shrink-0 font-display text-2xl text-ink/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-rust sm:block">
                      →
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </section>

      {/* ---------------------------------------------------------------- CTA */}
      <section className="border-t border-line/60 bg-white text-black">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-24 md:flex-row md:items-center md:px-10"
        >
          <h3 className="max-w-lg font-display text-3xl  text-black sm:text-4xl">
            For commissions, residencies, and press inquiries.
          </h3>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full border border-brass/70 px-7 py-3 font-mono text-xs uppercase tracking-widest2 text-black transition-colors  hover:border-black"
          >
            Get in touch
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
