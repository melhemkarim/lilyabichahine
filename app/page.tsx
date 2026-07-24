"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, SITE } from "@/lib/data";

// Slideshow pulls from every project except the CV-style academic/artistic
// research entries, since those don't have real photography yet.
const SLIDES = PROJECTS.filter((p) => p.group !== "Academic and Artistic Research");

const AUTO_ADVANCE_MS = 5500;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused || SLIDES.length <= 1) return;
    const id = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = SLIDES[index];

  return (
    <div>
      {/* ---------------------------------------------------------------- HERO SLIDESHOW */}
      <section
        className="relative flex h-[60vh] min-h-[420px] flex-col justify-end overflow-hidden border-b border-black/10 bg-black"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Link href={`/work/${slide.slug}`} className="block h-full w-full">
              <div
                className="h-full w-full bg-black/10"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.45) 100%), url(${slide.coverImage})`,                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Slide caption */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.slug}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -10 }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <p className="font-mono text-xs uppercase tracking-widest2 text-[#C9A227]">
                {slide.category} · {slide.date}
              </p>
              <Link href={`/work/${slide.slug}`} className="group inline-block">
                <h1 className="mt-3 max-w-2xl font-display text-3xl leading-[1.05] text-white transition-colors group-hover:text-[#C9A227] sm:text-4xl md:text-5xl">
                  {slide.title}
                </h1>
              </Link>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest2 text-white/60">
                {slide.venue} · {slide.location}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous project"
          className="group absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/30 p-3 text-white transition-colors hover:border-[#C9A227] hover:text-[#C9A227] sm:flex"
        >
          ←
        </button>
        <button
          onClick={next}
          aria-label="Next project"
          className="group absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/30 p-3 text-white transition-colors hover:border-[#C9A227] hover:text-[#C9A227] sm:flex"
        >
          →
        </button>

        {/* Dots */}
        <div className="relative z-10 mx-auto mb-8 flex w-full max-w-6xl gap-2 px-6 md:px-10">
          {SLIDES.map((s, i) => (
            <button
              key={s.slug}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-[#C9A227]" : "w-4 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- INTRO */}
      
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
            Explore the full body of work.
          </h3>
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 rounded-full border border-black px-7 py-3 font-mono text-xs uppercase tracking-widest2 text-black transition-colors hover:border-[#C9A227] hover:text-[#C9A227]"
          >
            Selected Works
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
