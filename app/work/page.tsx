"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/data";

const GROUPS = [
  "Mare Nostrum",
  "Visual Art",
  "Lecture Performances",
  "Tribunals",
  "Academic and Artistic Research",
  "Contract",
  "Lawyers Monologue",
  "Law and art workshops",
  "Arpentage",
  "Architecture of Justice",
  "False Self-Care Sequences or Catastrophe Meditation",
  "Legal Clinic",
] as const;

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
      className={`relative overflow-hidden bg-black/5 ${className}`}
      style={{
        backgroundImage: `url(${src})`,
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

export default function Work() {
  const [activeGroup, setActiveGroup] = useState<(typeof GROUPS)[number] | null>(null);
  const groupProjects = activeGroup ? PROJECTS.filter((p) => p.group === activeGroup) : [];

  return (
    <div>
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:px-10 md:pt-24">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest2 text-[#C9A227]"
          >
            Index
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 font-display text-4xl text-black sm:text-5xl"
          >
            Selected Works
          </motion.h1>
        </div>
      </section>

      <section className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 pt-8 md:px-10">
          {/* TABS */}
          <div className="mt-5 flex flex-wrap gap-2 border-b border-black/10 pb-5">
            {GROUPS.map((group) => {
              const count = PROJECTS.filter((p) => p.group === group).length;
              const isActive = group === activeGroup;
              return (
                <button
                  key={group}
                  onClick={() => setActiveGroup(isActive ? null : group)}
                  className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest2 transition-colors ${
                    isActive
                      ? "border-black bg-black text-white"
                      : "border-black/20 text-black/60 hover:border-[#C9A227] hover:text-[#C9A227]"
                  }`}
                >
                  {group}{" "}
                  <span className={isActive ? "text-white/60" : "text-black/35"}>
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
              className="mx-auto max-w-6xl px-6 py-16 text-center font-body text-black/40 md:px-10"
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
                <li className="mx-auto max-w-6xl px-6 py-12 text-center font-body text-black/50 md:px-10">
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
                  className="border-t border-black/10 last:border-b"
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="group mx-auto flex max-w-6xl items-center gap-6 px-6 py-7 transition-colors hover:bg-black/[0.03] md:px-10 md:py-9"
                  >
                    <span className="hidden font-mono text-sm text-[#C9A227] sm:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <Frame
                      src={project.coverImage}
                      alt={project.title}
                      className="h-16 w-20 shrink-0 sm:h-20 sm:w-28"
                    />

                    <div className="min-w-0 flex-1">
                      <h2 className="truncate font-display text-xl text-black transition-colors group-hover:text-[#C9A227] sm:text-2xl md:text-3xl">
                        {project.title}
                      </h2>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-black/50">
                        {project.category} · {project.location}
                      </p>
                    </div>

                    <span className="shrink-0 font-mono text-xs text-black/50">
                      {project.date}
                    </span>

                    <span className="hidden shrink-0 font-display text-2xl text-black/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#C9A227] sm:block">
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
      <section className="border-t border-black/10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-24 md:flex-row md:items-center md:px-10"
        >
          <h3 className="max-w-lg font-display text-3xl text-black sm:text-4xl">
            For commissions, residencies, and press inquiries.
          </h3>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full border border-black px-7 py-3 font-mono text-xs uppercase tracking-widest2 text-black transition-colors hover:border-[#C9A227] hover:text-[#C9A227]"
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
