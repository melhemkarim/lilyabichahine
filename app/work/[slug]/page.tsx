"use client";

import { use, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getProject, getAdjacentProjects } from "@/lib/data";

function Frame({
  src,
  alt,
  className = "",
  onClick,
}: {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      role={onClick ? "button" : "img"}
      aria-label={alt}
      onClick={onClick}
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

function vimeoEmbedUrl(url: string) {
  const id = url.split("/").filter(Boolean).pop();
  return `https://player.vimeo.com/video/${id}`;
}
function youtubeEmbedUrl(url: string) {
  const id = url.includes("watch?v=")
    ? url.split("watch?v=")[1]
    : url.split("/").pop();
  return `https://www.youtube.com/embed/${id}`;
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = getProject(slug);
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <p className="font-mono text-xs uppercase tracking-widest2 text-[#C9A227]">
          Exhibit not found
        </p>
        <h1 className="mt-4 font-display text-3xl">
          This case file doesn&rsquo;t exist.
        </h1>
        <Link
          href="/work"
          className="mt-8 inline-block font-mono text-xs uppercase tracking-widest2 text-black underline decoration-black/30 underline-offset-4 hover:text-[#C9A227]"
        >
          ← Back to all works
        </Link>
      </div>
    );
  }

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <div>
      {/* -------------------------------------------------------------- HEADER */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:px-10 md:pt-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/work"
            className="font-mono text-xs uppercase tracking-widest2 text-black/50 hover:text-[#C9A227]"
          >
            ← All works
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-[#C9A227]">
            <span className="rounded-full border border-[#C9A227]/60 px-3 py-1">
              {project.category}
            </span>
            <span className="text-black/50">{project.date}</span>
          </div>

          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-tight text-black sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 font-mono text-sm uppercase tracking-widest2 text-black/50">
            {project.venue} · {project.location}
          </p>
        </motion.div>
      </section>

      {/* -------------------------------------------------------------- COVER */}
      <motion.section
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-6 md:px-10"
      >
        <Frame
          src={project.coverImage}
          alt={project.title}
          className="aspect-[16/9] w-full"
        />
      </motion.section>

      {/* -------------------------------------------------------------- BODY */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[2fr_1fr] md:gap-16 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="space-y-5 font-body text-lg leading-relaxed text-black/80"
        >
          {project.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="h-fit border border-black/10 p-6"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-black/40">
            Credits
          </p>
          <ul className="mt-4 space-y-2 font-body text-sm text-black/75">
            {project.credits.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* -------------------------------------------------------------- GALLERY */}
      {project.gallery && project.gallery.length > 0 && (
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
                  Gallery
            </motion.p>
            {project.galleryCredit && (
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-black/40">
                {project.galleryCredit} — Pictures
              </p>
            )}

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {project.gallery.map((src, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                >
                  <Frame
                    src={src}
                    alt={`${project.title} — still ${i + 1}`}
                    onClick={() => setLightbox(src)}
                    className="aspect-square w-full cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* -------------------------------------------------------------- EMBED */}
      {/* -------------------------------------------------------------- EMBEDS */}
{project.embeds && project.embeds.length > 0 && (
  <section className="border-t border-black/10 bg-black">
    <div className="mx-auto max-w-4xl space-y-12 px-6 py-16 md:px-10">
      {project.embeds.map((embed, index) => (
        <div key={index}>
          <p className="font-mono text-xs uppercase tracking-widest2 text-white/50">
            {embed.platform === "vimeo" ? "Vimeo" : "YouTube"}
          </p>

          <div className="mt-6 aspect-video w-full overflow-hidden border border-white/10">
            <iframe
              className="h-full w-full"
              src={
                embed.platform === "vimeo"
                  ? vimeoEmbedUrl(embed.url)
                  : youtubeEmbedUrl(embed.url)
              }
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={`${project.title} video ${index + 1}`}
            />
          </div>

          {embed.note && (
            <p className="mt-4 font-body text-sm text-white/60">
              {embed.note}
            </p>
          )}
        </div>
      ))}
    </div>
  </section>
)}

      {/* -------------------------------------------------------------- NEXT/PREV */}
      <section className="border-t border-black/10">
        <div className="mx-auto grid max-w-6xl divide-y divide-black/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
          <Link
            href={`/work/${prev.slug}`}
            className="group px-6 py-10 transition-colors hover:bg-black/[0.03] md:px-10"
          >
            <p className="font-mono text-xs uppercase tracking-widest2 text-black/40">
              ← Previous
            </p>
            <p className="mt-2 font-display text-xl text-black group-hover:text-[#C9A227]">
              {prev.title}
            </p>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="group px-6 py-10 text-right transition-colors hover:bg-black/[0.03] md:px-10"
          >
            <p className="font-mono text-xs uppercase tracking-widest2 text-black/40">
              Next →
            </p>
            <p className="mt-2 font-display text-xl text-black group-hover:text-[#C9A227]">
              {next.title}
            </p>
          </Link>
        </div>
      </section>

      {/* -------------------------------------------------------------- LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/95 p-6"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="h-full max-h-[80vh] w-full max-w-4xl"
            >
              <Frame
                src={lightbox}
                alt="Enlarged gallery still"
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
