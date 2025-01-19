/* tailwind.config.cjs */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768 px",
            lg: "976 px",
            xl: "1440px ",
        },
        colors: {
            // Primary
            red: "hsl(7, 99%, 70%)",
            yellow: "hsl(51, 100%, 49%)",
            darkDesaturatedCyan: "hsl(167, 40%, 24%)",
            darkBlue: "hsl(198, 62%, 26%)",
            darkModerateCyan: "hsl(168, 34%, 41%)",
            black: "#000",
            // Neutral
            veryDarkModerateCyan: "hsl(212, 27%, 19%)",
            veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
            darkGrayishBlue: "hsl(232, 10%, 55%)",
            grayishBlue: "hsl(210, 4%, 67%)",
            white: "hsl(0, 0%, 100%)",
        },
        fontFamily: {
            fontMain: ["Fraunces", "serif"],
            fontAdditional: ["Barlow", "serif"],
        },
    },
    plugins: [],
};
