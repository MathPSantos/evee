module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        blur: "url(/src/assets/blur-bg.png)",
      },
      fontFamily: {
        sans: "Epilogue, sans-serif",
      },
      colors: {
        green: {
          100: "#C2E7D6",
          300: "#00b37e",
          500: "#00875F",
          700: "#015f43",
        },
        blue: {
          500: "#81d8f7",
        },
        orange: {
          500: "#fba94c",
        },
        red: {
          500: "#f75A68",
        },
        gray: {
          100: "#e1e1e6",
          200: "#C7C7CA",
          300: "#8d8d99",
          500: "#323238",
          600: "#222226",
          700: "#121214",
          900: "#0B0B0B",
        },
      },
    },
  },
  plugins: [],
};
