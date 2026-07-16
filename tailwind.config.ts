import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./sanity/**/*.{ts,tsx}",
    "./schemas/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        navy: "#06172A",
        amber: "#E89610",
        green: "#08473D",
        ivory: "#F8F5EE",
        ink: "#06172A",
        body: "#374151",
        "surface-deep": "#0A1F38",
        "surface-2": "#0F2A45",
        "surface-soft": "#EFE9DA"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      fontFamily: {
        sans: ["Inter", "Geist", "IBM Plex Sans", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "IBM Plex Mono", "ui-monospace", "monospace"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.24)",
        card: "0 1px 0 rgba(6, 23, 42, 0.08)",
        amber: "0 14px 32px rgba(232, 150, 16, 0.22)"
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(rgba(6,23,42,.16) 1px, transparent 1px)",
        "technical-grid":
          "linear-gradient(rgba(248,245,238,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(248,245,238,.08) 1px, transparent 1px)"
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        emphasized: "var(--ease-emphasized)"
      }
    }
  },
  plugins: []
};

export default config;
