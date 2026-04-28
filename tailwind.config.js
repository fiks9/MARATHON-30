/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f378a",
        "primary-container": "#6750a4",
        "on-primary": "#ffffff",
        "on-primary-container": "#e0d2ff",
        "primary-fixed": "#e9ddff",
        "primary-fixed-dim": "#cfbcff",
        secondary: "#63597c",
        "secondary-container": "#e1d4fd",
        "on-secondary-container": "#645a7d",
        tertiary: "#765b00",
        "tertiary-container": "#c9a74d",
        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        background: "#fdf7ff",
        "on-background": "#1d1b20",
        surface: "#fdf7ff",
        "surface-variant": "#e6e0e9",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f8f2fa",
        "surface-container": "#f2ecf4",
        "on-surface-variant": "#494551",
        outline: "#7a7582",
        "outline-variant": "#cbc4d2",
      },
      fontFamily: {
        display: ["Epilogue", "sans-serif"],
        body: ["Lexend", "sans-serif"],
        mono: ["'Space Grotesk'", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.5rem, 8vw, 5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: "800" },
        ],
        "headline-lg": [
          "clamp(1.75rem, 5vw, 3rem)",
          { lineHeight: "1.15", fontWeight: "700" },
        ],
        "body-md": [
          "1.0625rem",
          { lineHeight: "1.65", fontWeight: "300" },
        ],
        "stat-label": [
          "0.8125rem",
          { lineHeight: "1", fontWeight: "500", letterSpacing: "0.08em" },
        ],
      },
      spacing: {
        "section-gap": "clamp(4rem, 10vw, 8rem)",
        "container-padding": "clamp(1.25rem, 5vw, 4rem)",
        "stack-sm": "0.5rem",
        "stack-md": "1.5rem",
        "stack-lg": "3rem",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        barRise: {
          "0%": { opacity: "0", transform: "scaleY(0)" },
          "100%": { opacity: "1", transform: "scaleY(1)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "bar-rise": "barRise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
