const { callbacks } = require("@tensorflow/tfjs");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      minWidth: {
        "2-rem": "2rem",
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
