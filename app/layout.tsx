import type { Metadata } from "next";
import { Fraunces, Newsreader, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { SITE } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${SITE.name} `,
  description: SITE.tagline,
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Selected Works" },
  { href: "/about", label: "About / CV" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${newsreader.variable} ${plexMono.variable} font-display grain relative min-h-screen bg-white text-ink antialiased`}
      >
        {/* CSS-only mobile nav toggle */}
        <input type="checkbox" id="nav-toggle" className="peer hidden" />

        <header className="sticky top-0 z-40 border-b border-line/60 bg-white backdrop-blur-sm">
  <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 md:flex-row md:items-center md:justify-between md:gap-0 md:px-10">
    <Link
      href="/"
      className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-ink"
    >
      <span>{SITE.name}</span>
    </Link>

    <nav className="flex items-center gap-x-3 overflow-x-auto whitespace-nowrap font-mono text-[10px] uppercase tracking-widest2 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-x-8 md:overflow-visible md:text-xs [&::-webkit-scrollbar]:hidden">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group relative shrink-0 py-1 text-ink/80 transition-colors hover:text-rust"
        >
          {link.label}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-rust transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}
    </nav>
  </div>
</header>

        <main className="relative z-0">{children}</main>

        <footer className="border-t border-line/60 bg-black text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10">
            <div>
              <p className="font-display text-2xl  text-cream">
                {SITE.name}
              </p>
          
            </div>
            <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest2 text-cream/70 md:items-end">
              
              <span className="mt-2 text-cream/40">
                © {new Date().getFullYear()} {SITE.name}
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
