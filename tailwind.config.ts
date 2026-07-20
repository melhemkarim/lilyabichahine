import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#E4D9BE", // manila folder tan — the site's background
        paper2: "#DACEAF", // slightly deeper paper for panels
        ink: "#241E1A", // near-black warm charcoal — primary text / dark sections
        ink2: "#3A322B",
        rust: "#7A2E2E", // wax-seal oxblood — primary accent
        rustDark: "#5E2222",
        brass: "#94793C", // aged brass/foil — secondary accent
        line: "#B9A97D", // hairline / divider tone
        cream: "#F1EADA",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-newsreader)", "serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        grain: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9J2ZyYWN0YWxOb2lzZScgYmFzZUZyZXF1ZW5jeT0nMC44JyBudW1PY3RhdmVzPScyJyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsdGVyPSd1cmwoI24pJyBvcGFjaXR5PScwLjA0Jy8+PC9zdmc+')",
      },
    },
  },
  plugins: [],
};
export default config;
