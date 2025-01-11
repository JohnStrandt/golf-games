/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.svg"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        base: "rgba(var(--base))",
        background: "rgba(var(--background))",
        primary: "rgba(var(--primary))",
        accent: "rgba(var(--accent))",
        secondary: "rgba(var(--secondary))",
        alert: "rgba(var(--alert))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
