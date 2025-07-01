/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-gradient': "linear-gradient(41deg, rgba(45,57,166,1) 1%, rgba(228,31,36,1) 99%)",
        'partnership-gradient': "linear-gradient(to bottom, #ff0606, #f50050, #cf0081, #911ca1, #303ca9)",
        'capital-gradient': 'linear-gradient(to bottom, #f64c50, #e3296f, #c0208b, #892fa0, #303ca9)'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

