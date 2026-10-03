import type { Config } from "tailwindcss";

// Stitch: Technical Precision — #f1f5f9 gray, #0d6e6e teal, IBM Plex Sans+Mono

/* ============================================================
   SPF INSURANCE — "Technical Precision" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to teal (primary) / deep slate navy
   (secondary) / teal accent.
   clay = teal · sage = deep slate · gold = teal accent
   cream = clean white · sand = light gray
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#ffffff",
        sand: "#f1f5f9",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#0d6e6e",
          dark: "#084f4f",
          light: "#139e9e",
          gradient: "#0d6e6e",
          50: "#f0fafa",
          100: "#cceeee",
          200: "#99dddd",
          300: "#5cc7c7",
          400: "#20c0c0",
          500: "#139e9e",
          600: "#0d6e6e",
          700: "#084f4f",
          800: "#053535",
          900: "#021e1e",
        },
        sage: {
          DEFAULT: "#0f172a",
          dark: "#020617",
          light: "#1e293b",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        gold: {
          DEFAULT: "#139e9e",
          dark: "#0d6e6e",
          light: "#20c0c0",
          50: "#f0fafa",
          100: "#cceeee",
          200: "#99dddd",
          300: "#5cc7c7",
          400: "#20c0c0",
          500: "#139e9e",
          600: "#0d6e6e",
        },
        espresso: "#020617",
        cocoa: "#0f172a",
        mocha: "#64748b",
        adobe: "#e2e8f0",
        adobeDark: "#cbd5e1",
      },
      fontFamily: {
        headline: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        body: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        label: ["'IBM Plex Mono'", "monospace"],
        // Backward-compat aliases
        heading: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #ffffff 0%, #f8fafc 40%, #f1f5f9 70%, #ffffff 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(13,110,110,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.05) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #084f4f 0%, #0d6e6e 50%, #139e9e 100%)",
        "gold-gradient": "linear-gradient(135deg, #0d6e6e 0%, #20c0c0 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(13, 110, 110, 0.28), 0 4px 12px -6px rgba(2, 6, 23, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(13, 110, 110, 0.34), 0 10px 30px -10px rgba(2, 6, 23, 0.10)",
        card: "0 2px 8px -2px rgba(2, 6, 23, 0.06), 0 1px 3px -1px rgba(2, 6, 23, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(13, 110, 110, 0.22), 0 8px 20px -8px rgba(2, 6, 23, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(13, 110, 110, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
