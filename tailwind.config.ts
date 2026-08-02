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
        navy: "#0F172A",
        amber: "#4F46E5",
        green: "#06B6D4",
        ivory: "#F8FAFC",
        ink: "#0F172A",
        body: "#64748B",
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
        "surface-deep": "#172554",
        "surface-2": "#1E293B",
        "surface-soft": "#F1F5F9"
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
        soft: "0 24px 64px rgba(15, 23, 42, 0.18)",
        card: "0 10px 30px rgba(15, 23, 42, 0.07)",
        amber: "0 14px 32px rgba(79, 70, 229, 0.22)"
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
