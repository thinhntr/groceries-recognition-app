const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: (theme) => ({ 8: theme("spacing.8"), ...defaultTheme.minWidth }),
    minHeight: (theme) => ({
      14: theme("spacing.14"),
      ...defaultTheme.minHeight,
    }),
    extend: {
      transitionProperty: {
        width: "width",
      },
      maxWidth: {
        "85-screen": "85vw",
        "105-screen": "105vw",
      },
      maxHeight: {
        "85-screen": "85vw",
        "105-screen": "105vw",
      },
      colors: {
        cyan: {
          400: "#22d3ee",
        },
        "light-blue": {
          500: "#0ea5e9",
        },
      },
    },
  },
  variants: {
    extend: {
      width: ["hover"],
      display: ["group-hover"],
      filter: ["hover"],
      grayscale: ["hover"],
      opacity: ["hover"],
    },
  },
  plugins: [],
};
