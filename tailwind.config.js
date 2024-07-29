/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    // NOTE: settings there overwrite all section settings (all colors, font sizes etc)
    // to add additionfal settings - use it in 'extend' section
    //
    // colors: {
    //   mycustom: "#3246a8",
    // },
    // fontSize: {
    //   xl: "22px",
    //   xs: "12px",
    //   sm: "15px",
    //   base: "18px",
    // },
    extend: {
      colors: {
        mycustom: "#3246a8",
      },
      fontSize: {
        xl: "22px",
        xs: "12px",
        sm: "15px",
        base: "18px",
      },
    },
  },
  plugins: [],
};
