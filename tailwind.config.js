/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#020203",
        bgPrimary: "#18181B",
        secondary: "#2943A3",
        third: "##F5F5F5",
        fourth: "#FCFCFC",
        fifth: "#E9634B",
      },
      animation: {
        "bounce-slow": "bounce 1s infinite",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.50)",
        "4xl": ["0px 4px 30px rgba(0, 0, 0, 0.05)"],
        title: "0px 4px 4px rgba(0, 0, 0, 0.15)",
      },
      boxShadow: {
        dark: "0px 4px 40px 2px rgba(0, 0, 0, 0.15)",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    container: {
      padding: "4rem",
      center: true,
    },
    container_mobile: {
      padding: "2rem",
      center: true,
    },
  },
  fontFamily: {
    sans: ["Inter", "sans-serif"],
  },
  container: {
    padding: "4rem",
    center: true,
  },
  container_mobile: {
    padding: "2rem",
    center: true,
  },
  plugins: [require("flowbite/plugin")],
};
