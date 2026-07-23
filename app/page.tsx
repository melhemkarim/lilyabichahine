"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ABOUT, SITE } from "@/lib/data";

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
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div>
      {/* -------------------------------------------------------- PORTRAIT + BIO */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-16 md:grid-cols-[1fr_1.3fr] md:gap-16 md:px-10 md:pt-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <Frame
            src={ABOUT.portrait}
            alt={`${SITE.name} — portrait`}
            className="aspect-[4/5] w-full"
          />
          <p className="mt-3 font-mono text-[11px] uppercase tracking-widest2 text-black/40">
            {ABOUT.portraitCredit}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest2 text-[#C9A227]">
            {SITE.role}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] text-black sm:text-5xl">
            {SITE.name}
          </h1>
          <p className="mt-5 max-w-lg font-body text-lg text-black/70">
            {SITE.tagline}
          </p>

          <div className="mt-8 space-y-5 font-body text-lg leading-relaxed text-black/80">
            {ABOUT.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest2">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-black transition-colors hover:text-[#C9A227]"
            >
              Selected Works
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-black transition-colors hover:text-[#C9A227]"
            >
              Contact
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ---------------------------------------------------------- CURRICULUM */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest2 text-black/50"
          >
            Academic Background
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-4xl font-body text-lg leading-relaxed text-black/80"
          >
            <p>
              Lily Abichahine is currently pursuing a PhD in Performing Arts at
              EDESTA, Paris VIII University, in affiliation with the
              University of Humanistic Studies in Utrecht, Netherlands. Her
              doctoral research,{" "}
              <span className="font-medium">
                “Fiction in Art and Law: Rethinking the Possibilities of Law
                via Artistic Practices,”
              </span>{" "}
              investigates the relationship between artistic fiction and legal
              imagination under the supervision of Éliane Beaufils and Nicole
              Immler. She holds degrees in Performing Arts from Paris VIII
              University (BA, 2015–2019; MA, 2019–2020) and previously trained
              in law, earning a BA from Saint Joseph University, Lebanon
              (2003–2007), and an MA from Paris Descartes University (2008).
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
