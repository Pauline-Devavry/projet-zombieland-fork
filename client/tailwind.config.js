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
        secondaryBackgroundColor: "#111113",
        borderColor: "#6E2920",
        adminTextColor: "#202020",
        adminSideBarColor: "#FCFCFC",
        adminBorderColor: "#CECECE",
        adminCardColor: "#F0F0F0",
        adminTextGrayColor: "#484848",
        gradiantDarkRed: "#5E1C16"
      },
      fontSize: {
        "heading1-desktop": ['32px', { lineHeight: '38px' }],
        "heading1-mobile": ['26px', { lineHeight: "38px"}]
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' },
        },
      },
      animation: {
        bounce: 'bounce 2s infinite',
        scrollLeft: 'scrollLeft 20s linear infinite',
        scrollRight: 'scrollRight 20s linear infinite',
      },
    },
    fontFamily: {
      rubik: ["Rubik"]
    }
  },
  plugins: [],
}
