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
        "heading1-mobile": ['26px', { lineHeight: "38px"}],
        "heading2-mobile": ['19px', { lineHeight: "38px"}],
        "heading2-desktop": ['26px', { lineHeight: "38px"}],
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        penguinRun: {
          '0%': {
            transform: 'translateX(-100vw) scaleX(-1)'
          },
          '100%': {
            transform: 'translateX(110vw) scaleX(-1)'
          },
        },
        zombieRun: {
          '0%': {
            transform: 'translateX(-100vw)'
          },
          '100%': {
            transform: 'translateX(110vw)'
          },
        },
      },
      animation: {
        bounce: 'bounce 2s infinite',
        penguinRun: 'penguinRun 5s linear forwards',
        zombieRun: 'zombieRun 6s linear forwards'
      },
    },
    fontFamily: {
      rubik: ["Rubik"]
    }
  },
  plugins: [],
}
