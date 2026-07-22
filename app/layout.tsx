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
        className={`${fraunces.variable} ${newsreader.variable} ${plexMono.variable} font-display grain relative min-h-screen bg-paper text-ink antialiased`}
      >
        {/* CSS-only mobile nav toggle */}
        <input type="checkbox" id="nav-toggle" className="peer hidden" />

        <header className="sticky top-0 z-40 border-b border-line/60 bg-paper/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
            <Link
              href="/"
              className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-ink"
            >
              
              <span>{SITE.name}</span>
            </Link>

            <nav className="flex items-center gap-4 md:gap-8 font-mono text-xs uppercase tracking-widest2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative py-1 text-ink/80 transition-colors hover:text-rust"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-rust transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            
          </div>

          {/* mobile panel */}
          <nav className="hidden flex-col gap-1 border-t border-line/60 bg-paper px-6 py-4 font-mono text-sm uppercase tracking-widest2 peer-checked:flex md:hidden">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-line/30 py-3 text-ink/80 last:border-none"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        <main className="relative z-0">{children}</main>

        <footer className="border-t border-line/60 bg-ink text-cream">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10">
            <div>
              <p className="font-display text-2xl  text-cream">
                {SITE.name}
              </p>
              <p className="mt-2 max-w-sm font-display text-sm text-cream/60">
                {SITE.tagline}
              </p>
            </div>
            <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest2 text-cream/70 md:items-end">
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-rust"
              >
                {SITE.email}
              </a>
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
