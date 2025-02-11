/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      onest: ["Onest", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      maxWidth: {
        contained: "1200px",
      },
      colors: {
        cream2: "#FAF5E2;",
        black: "#202020",
        white2: "#FCFAF2",
        primary: "#43AA13",
        "primary-light": "#5fd528",
        "primary-dark": "#193E2C",
        cream: "#FCFAF2",
        secondary: "#193E2C",
        "cream-sec": "#FAF5E2",
      },
    },
  },
  plugins: [],
};
