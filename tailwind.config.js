/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        accent: "var(--accent)",
      },
      fontFamily: {
        inter: "var(--inter)",
      },
      fontSize: {
        navSize: "var(--navSize)",
        titleSize: "var(--titleSize)",
        subTitleSize: "var(--subTitleSize)",
        bodySize: "var(--bodySize)",
      },
    },
  },
  plugins: [],
};
