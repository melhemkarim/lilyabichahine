"use client";

import { motion } from "framer-motion";
import { ABOUT, PROJECTS } from "@/lib/data";
import Link from "next/link";

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
          <h1 className="mt-4 font-display text-4xl  text-ink sm:text-5xl">
            {ABOUT.heading}
          </h1>
<p>
    
  </p>
         <div className="mt-8 space-y-5 font-body text-lg leading-relaxed text-ink/85">
  {ABOUT.bio.map((p, i) => (
    <p key={i}>{p}</p>
  ))}

  <div className="pt-8">
    <p className="font-mono text-xs uppercase tracking-widest2 text-rust">
      Academic 
    </p>

    <div className="mt-6">
      Lily Abichahine is currently pursuing a PhD in Performing Arts at EDESTA,
    Paris VIII University, in affiliation with the University of Humanistic
    Studies in Utrecht, Netherlands. Her doctoral research,
    <em>“Fiction in Art and Law: Rethinking the Possibilities of Law via Artistic
    Practices,”</em> investigates the relationship between artistic fiction and
    legal imagination under the supervision of Éliane Beaufils and Nicole
    Immler.
    She holds degrees in Performing Arts from Paris VIII University (BA,
    2015–2019; MA, 2019–2020) and previously trained in law, earning a BA from
    Saint Joseph University, Lebanon (2003–2007), and an MA from Paris
    Descartes University (2008).
    </div>
  </div>

  <p>
    For commissions, residencies, and press inquiries,{" "}
    <Link
      href="/contact"
      className="text-rust underline decoration-brass/60 underline-offset-4 hover:decoration-rust"
    >
      get in touch →
    </Link>
  </p>
</div>
        </motion.div>
      </section>

      
    </div>
  );
}
