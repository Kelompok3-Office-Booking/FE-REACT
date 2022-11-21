/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            sans: ["Inter", "sans-serif"],
        },
        container: {
            padding: "4rem",
        },
    },
    plugins: [require("flowbite/plugin")],
};