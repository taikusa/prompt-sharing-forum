/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: "pastel", // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  },
}
