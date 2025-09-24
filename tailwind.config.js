/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "2xl": "1600px", // MUI xl 브레이크포인트와 매칭
      },
    },
    extend: {
      fontFamily: {
        'metropolis': ['var(--font-metropolis)', 'sans-serif'],
        'pretendard': ['var(--font-pretendard)', 'sans-serif'],
        'roboto': ['var(--font-roboto)', 'sans-serif'],
        'figtree': ['var(--font-figtree)', 'sans-serif'],
      },
      colors: {
        // shadcn 기본 색상 - CSS 변수 사용
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
        // Spotlite 커스텀 색상 (CSS 변수 사용)
        spotlite: {
          text: {
            primary: "hsl(var(--spotlite-text-primary))",
            secondary: "hsl(var(--spotlite-text-secondary))",
          },
          lightGrey: {
            DEFAULT: "hsl(var(--spotlite-light-grey))",
            light: "hsl(var(--spotlite-light-grey-light))",
          },
          floatingBg: "hsl(var(--spotlite-floating-bg))",
        },
        minor: {
          DEFAULT: "hsl(var(--minor))",
          foreground: "hsl(var(--minor-foreground))",
        },
        negative: {
          DEFAULT: "hsl(var(--negative))",
          foreground: "hsl(var(--negative-foreground))",
        },
        line: {
          DEFAULT: "hsl(var(--line))",
          dark: "hsl(var(--line-dark))",
          foreground: "hsl(var(--line-foreground))",
        },
        highlight: "hsl(var(--highlight))",
        warning: {
          light: "hsl(var(--warning-light))",
          DEFAULT: "hsl(var(--warning))",
          dark: "hsl(var(--warning-dark))",
        },
        success: "hsl(var(--success))",
        info: "hsl(var(--info))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        spotlite: "0.75rem", // MUI 테마의 SPOTLITE_BORDER_RADIUS
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
    },
  },
  plugins: [require("tailwindcss-animate")],
}
