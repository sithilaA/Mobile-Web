/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#007AFF",
                "background-light": "#F8F9FB",
                "background-dark": "#0F172A",
                "card-light": "#FFFFFF",
                "card-dark": "#1E293B",
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "16px",
            },
        },
    },
    plugins: [],
}
