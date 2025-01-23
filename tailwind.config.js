/* tailwind.config.cjs */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateRows: {
                "custom-rows": "repeat(auto-fill, minmax(700px, 1fr))",
            },
        },
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px ",
        },
        colors: {
            // Primary
            red: "hsl(7, 99%, 70%)",
            yellow: "hsl(51, 100%, 49%)",
            darkDesaturatedCyan: "hsl(167, 40%, 24%)",
            darkBlue: "hsl(198, 62%, 26%)",
            darkModerateCyan: "hsl(168, 34%, 41%)",
            blue: "hsl(200, 100%, 62%)",
            footerBg: "hsl(167, 44%, 70%)",
            black: "#000",
            btnHover: "rgba(255, 255, 255, 0.4)",
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
        fontSize: {
            12: "12px",
            16: "16px",
            "clamp-extra-xs": "clamp(.9rem, 4vw, 1.2rem)",
            "clamp-xs": "clamp(1rem, 1.3vw, 1.2rem)",
            "clamp-sm": "clamp(1rem, 5vw, 3rem)",
            "clamp-lg": "clamp(2rem, 8vw, 10rem)",
        },
    },
    plugins: [],
};
