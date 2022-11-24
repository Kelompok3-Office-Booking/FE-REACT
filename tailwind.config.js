/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#020203",
                bgPrimary: "#18181B",
                secondary: "#2943A3",
                third: "##F5F5F5",
                fourth: "#FCFCFC",
            },
            animation: {
                "bounce-slow": "bounce 1s infinite",
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
    plugins: [require("flowbite/plugin")],
};