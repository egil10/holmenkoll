import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Norwegian flag palette
        "no-red": "#BA0C2F",
        "no-red-dark": "#8E0823",
        "no-blue": "#00205B",
        "no-blue-dark": "#001340",
        "no-blue-light": "#1d3a8a",
        "no-cream": "#F8F5EE",
        "no-paper": "#FFFFFF",
        "no-ink": "#0E1226",
        "no-muted": "#5B6478",
        "no-line": "rgba(14, 18, 38, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      backgroundImage: {
        "flag-gradient": "linear-gradient(135deg, #BA0C2F 0%, #FFFFFF 50%, #00205B 100%)",
        "flag-stripe": "linear-gradient(90deg, #BA0C2F 0%, #BA0C2F 33%, #FFFFFF 33%, #FFFFFF 66%, #00205B 66%, #00205B 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(14,18,38,0.04), 0 8px 24px rgba(14,18,38,0.05)",
        "card-hover": "0 2px 6px rgba(14,18,38,0.06), 0 16px 40px rgba(14,18,38,0.08)",
        ring: "0 0 0 4px rgba(186, 12, 47, 0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
