import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderWidth: {
        sm: "0.0105rem",
        DEFAULT: "0.5rem",
        md: "0.625rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      fontW:{
        xl1:{
          fontSize: "1.75rem",
          lineHeight: "1.90rem",
          fontWeight: "600",
        }
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(300, 300, 300, 0.3)',
      },
      colors: {
        foreground: {
          primary: "rgb(244 244 245)", // Primary text
          secondary: "rgb(161 161 170)", // Secondary text
          tertiary: "#64748B", // Muted text
          accent: "#38BDF8", // Accent text
        },
        background: {
          primary: "#0F0F12", // Deepest background
          secondary: "#1F1F23", // Slightly lighter background
          tertiary: "#1A2036", // Surface color
          elevated: "#252D4A", // Elevated surface color
        },
        accent: {
          blue: {
            DEFAULT: '#0EA5E9',
            hover: '#38BDF8',
            muted: '#0C4A6E',
          },
          purple: {
            DEFAULT: '#8B5CF6',
            hover: '#A78BFA',
            muted: '#5B21B6',
          },
          success: {
            emerald: 'emerald-600',
            hover: '#34D399',
            muted: '#065F46',
          },
          amber: {
            DEFAULT: '#F59E0B',
            hover: '#FBBF24',
            muted: '#92400E',
          },
        },

        // Border specific colors
        border: {
          light:"#374151",
          lightest:"#6B7280",
          dark: "#1F2937",
          accent: {
            green: "#22c55e",
            blue: "#0ea5e9",
            purple: "#8b5cf6",
            amber: "#f59e0b",
          },
        },
        status: {
          success: {
            DEFAULT: '#10B981',
            muted: '#065F46',
            foreground: '#34D399',
          },
          warning: {
            DEFAULT: '#F59E0B',
            muted: '#92400E',
            foreground: '#FBBF24',
          },
          error: {
            DEFAULT: '#EF4444',
            muted: '#991B1B',
            foreground: '#FCA5A5',
          },
          info: {
            DEFAULT: '#0EA5E9',
            muted: '#0C4A6E',
            foreground: '#38BDF8',
          },
        },

        // Main brand colors (keeping consistent with previous design)
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        // Investment-specific colors (same as before)
        profit: {
          light: "#4ade80",
          DEFAULT: "#22c55e",
          dark: "#16a34a",
        },
        loss: {
          light: "#f87171",
          DEFAULT: "#ef4444",
          dark: "#dc2626",
        },
        // Chart colors (maintained from previous)
        chart: {
          1: "#0ea5e9",
          2: "#22c55e",
          3: "#f59e0b",
          4: "#ef4444",
          5: "#8b5cf6",
          6: "#ec4899",
        },
      },
      // Enhanced border radius
      borderRadius: {
        none: "0",
        sm: "0.375rem",
        DEFAULT: "0.5rem",
        md: "0.625rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
      boxShadow2: {
        "sm-dark": "0 1px 2px 0 rgba(0, 0, 0, 0.35)",
        dark: "0 1px 3px 0 rgba(0, 0, 0, 0.35), 0 1px 2px -1px rgba(0, 0, 0, 0.35)",
        "md-dark":
          "0 4px 6px -1px rgba(0, 0, 0, 0.35), 0 2px 4px -2px rgba(0, 0, 0, 0.35)",
        "lg-dark":
          "0 10px 15px -3px rgba(0, 0, 0, 0.35), 0 4px 6px -4px rgba(0, 0, 0, 0.35)",
        "xl-dark":
          "0 20px 25px -5px rgba(0, 0, 0, 0.35), 0 8px 10px -6px rgba(0, 0, 0, 0.35)",
        "inner-dark": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.35)",
        "glow-sm": "0 0 15px rgba(56, 189, 248, 0.35)",
        "glow-md": "0 0 25px rgba(56, 189, 248, 0.35)",
        "glow-lg": "0 0 35px rgba(56, 189, 248, 0.35)",
      },
      // Gradients
      backgroundImage: {
        "gradient-dark-radial":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
        "gradient-dark-conic":
          "conic-gradient(from 0deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-dark-mesh":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
