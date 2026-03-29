/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          saffron: "#f59e0b",
          emerald: "#10b981",
          deep: "#0b1120",
          ink: "#e6eefc",
        },
      },
      boxShadow: {
        glow: "0 0 50px rgba(245, 158, 11, 0.2)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pop: {
          "0%": { transform: "scale(.98)", opacity: "0" },
          "60%": { transform: "scale(1.02)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "float-slow": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
          "100%": { transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-left": {
          "0%": { transform: "translateX(-40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-right": {
          "0%": { transform: "translateX(40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { opacity: "1" },
          "70%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "rotate-slow": {
          "from": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(360deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.45s ease both",
        pop: "pop 0.45s cubic-bezier(.2,.9,.3,1) both",
        "float-slow": "float-slow 8s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "slide-up": "slide-up 0.5s ease both",
        "slide-down": "slide-down 0.5s ease both",
        "slide-left": "slide-left 0.5s ease both",
        "slide-right": "slide-right 0.5s ease both",
        "scale-in": "scale-in 0.3s ease both",
        "bounce-in": "bounce-in 0.6s cubic-bezier(.2,.9,.3,1) both",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at 20% 20%, rgba(245,158,11,.18), transparent 35%), radial-gradient(circle at 80% 0%, rgba(16,185,129,.15), transparent 28%), radial-gradient(circle at 80% 80%, rgba(59,130,246,.16), transparent 32%)",
      },
    },
  },
  plugins: [],
};
