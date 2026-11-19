import localFont from "next/font/local";

// Body + heading font — IBM Plex Sans (Technical Precision design system)
export const bodyFont = localFont({
  src: [
    { path: "./fonts/IBMPlexSans-variable.woff2", weight: "300", style: "normal" },
    { path: "./fonts/IBMPlexSans-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexSans-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/IBMPlexSans-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/IBMPlexSans-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

// Heading font alias (same family and faces as bodyFont; kept as its own const because --font-heading is a separate role)
export const headingFont = localFont({
  src: [
    { path: "./fonts/IBMPlexSans-variable.woff2", weight: "300", style: "normal" },
    { path: "./fonts/IBMPlexSans-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexSans-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/IBMPlexSans-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/IBMPlexSans-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

// Mono font — IBM Plex Mono (eyebrows, labels, technical notation)
export const monoFont = localFont({
  src: [
    { path: "./fonts/IBMPlexMono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexMono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});
