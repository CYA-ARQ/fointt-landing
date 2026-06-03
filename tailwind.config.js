/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        readex: ["Readex Pro", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        glow: "0 30px 120px rgba(255, 255, 255, 0.16)",
        soft: "0 22px 70px rgba(0, 0, 0, 0.45)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.25", transform: "scaleX(0.8)" },
          "50%": { opacity: "0.7", transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "pulse-line": "pulseLine 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
