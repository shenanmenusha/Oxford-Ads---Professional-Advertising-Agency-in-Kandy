/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        "primary-hover": "#1e40af",
        secondary: "#6b7280",
      },
      borderRadius: {
        container: "0.75rem",
      },
      gap: {
        section: "2rem",
      },
    },
  },
  plugins: [],
};
