/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#E5484D",
        backgroundColor: "#1C1C1C",
        borderColor: "#191111",
        adminTextColor: "#202020",
        adminSideBarColor: "#FCFCFC",
        adminBorderColor: "#CECECE",
        adminCardColor: "#F0F0F0",
        adminTextGrayColor: "#484848",
      }
    },
    fontFamily: {
      rubik: ["Rubik"]
    }
  },
  plugins: [],
}