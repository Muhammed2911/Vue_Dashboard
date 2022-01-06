module.exports = {
    purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        stroke: (theme) => ({
            red: theme("colors.red.500"),
            green: theme("colors.green.500"),
            blue: theme("colors.blue.500"),
            yellow: theme("colors.yellow.500"),
            gray: theme("colors.gray.500"),
        }),
        extend: {},
    },
    variants: {
        stroke: ["hover", "focus"],
        extend: {},
    },
    plugins: [],
};
