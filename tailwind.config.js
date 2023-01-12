/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        huntDeerTheme: {
          primary: "#1FAA59",
          secondary: "#EAEFFA",
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
