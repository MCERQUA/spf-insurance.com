import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

// Body + heading font — IBM Plex Sans (Technical Precision design system)
export const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Heading font alias (same family for consistent Technical Precision aesthetic)
export const headingFont = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Mono font — IBM Plex Mono (eyebrows, labels, technical notation)
export const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});
