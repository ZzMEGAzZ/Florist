import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        xs: 'clamp(0.4rem, 0.2rem + 0.2vw, 0.75rem)',
        sm: 'clamp(0.6rem, 0.3rem + 0.2vw, 1rem)',
        md: 'clamp(0.8rem, 0.4rem + 0.3vw, 1.25rem)',
        base: 'clamp(1rem, 0.5rem + 0.5vw, 1.5rem)',
        lg: 'clamp(1.15rem, 0.6rem + 0.5vw, 2rem)',
        xl: 'clamp(1.3rem, 0.7rem + 0.8vw, 3rem)',
        '2xl': 'clamp(1.45rem, 0.8rem + 0.8vw, 4rem)',
        '3xl': 'clamp(1.6rem, 0.9rem + 0.8vw, 5rem)',
        '4xl': 'clamp(1.75rem, 1rem + 1vw, 6rem)',
        '5xl': 'clamp(2rem, 1.1rem + 1vw, 7rem)',
    },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config