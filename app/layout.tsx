import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { SITE } from "@/lib/data";

// Single clean grotesk across the whole site (headings, body, and labels),
// bound to the same three CSS variable names the Tailwind config already
// maps to font-display / font-body / font-mono — so no other files change.
const fraunces = Inter({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
});

const newsreader = Inter({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500"],
});

const plexMono = Inter({
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
  { href: "/work", label: "Selected Works" },
  { href: "/about", label: "About" },
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
        className={`${fraunces.variable} ${newsreader.variable} ${plexMono.variable} font-display relative min-h-screen bg-white text-black antialiased`}
      >
        <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 md:flex-row md:items-center md:justify-between md:gap-0 md:px-10">
            <Link
              href="/"
              className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-black"
            >
              <span>{SITE.name}</span>
            </Link>

            <nav className="flex items-center gap-x-4 overflow-x-auto whitespace-nowrap font-mono text-[10px] uppercase tracking-widest2 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-x-9 md:overflow-visible md:text-xs [&::-webkit-scrollbar]:hidden">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative shrink-0 py-1 text-black/70 transition-colors hover:text-[#C9A227]"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#C9A227] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="relative z-0">{children}</main>

        <footer className="border-t border-black/10 bg-black text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10">
            <div>
              <p className="font-display text-2xl text-white">{SITE.name}</p>
            </div>
            <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest2 text-white/60 md:items-end">
              <span className="mt-2 text-white/35">
                © {new Date().getFullYear()} {SITE.name}
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
