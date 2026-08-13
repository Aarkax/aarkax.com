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
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)"
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)"
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)"
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)"
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)"
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          2: "var(--accent-2)"
        },
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        input: "var(--input)",
        ring: "var(--ring)"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem"
      },
      fontFamily: {
        sans: ["Inter", "Geist", "system-ui", "sans-serif"],
        display: ["Geist", "Inter", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "ui-monospace", "monospace"]
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255, 255, 255, 0.05) inset, 0 24px 60px -40px rgba(0, 0, 0, 0.8)",
        glow: "0 0 24px -4px rgba(59, 130, 246, 0.4)"
      },
      keyframes: {
        "float-glow": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)", opacity: "0.5" },
          "50%": { transform: "translate3d(0, -3%, 0) scale(1.06)", opacity: "0.75" }
        },
        dash: {
          to: { strokeDashoffset: "-200" }
        },
        pulseNode: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" }
        },
        rise: {
          from: { opacity: "0", transform: "translate3d(0, 18px, 0)" },
          to: { opacity: "1", transform: "none" }
        }
      },
      animation: {
        "glow-drift": "float-glow 14s ease-in-out infinite",
        dash: "dash 6s linear infinite",
        node: "pulseNode 3.2s ease-in-out infinite",
        rise: "rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both"
      }
    }
  },
  plugins: []
};

export default config;

