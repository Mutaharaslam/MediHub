/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerBackground: "url('/src/assets/svgs/headerbg.svg')",
        footerBackground: "url('/src/assets/svgs/footerbg.svg')",
        doctorBg: "url('/src/assets/svgs/doctorBg.svg')",
        Bg: "url('/src/assets/svgs/BG.svg')",
        picBg: "url('/src/assets/svgs/picBg.svg')",
        fullBg: "url('/src/assets/svgs/fullBg.svg')",
        buttonBg: "url('/src/assets/svgs/buttonBg.svg')",
        homepagedoctor: "url('/src/assets/svgs/homePageDoctor.svg')",
        blurryeffect: "url('/src/assets/svgs/bluryEffect.svg')",
        blacklurryEffect: "url('/src/assets/svgs/blackblurryEffect.svg')",
        circle: "url('/src/assets/svgs/circle.svg')",
        contactUsDoctor: "url('/src/assets/svgs/ContactUsDoctor.svg')",
      },
      boxShadow: {
        custom: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
    },
    fontFamily: {
      sans: ['Nexa', 'system-ui'],
      serif: ['Inter', 'Georgia'],
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    colors: {
      transparent: "transparent",
      black: {
        900: "#000",
        primary: "#1E1E1E",
        secondary: "#181818",
      },
      white: "#fff",
      primary: "#C09B4F",
      secondary: "#E7E7E7",
      tertiary: "#181818",
      yellow: "#DDB660",
      blue: "#4246B4",
      green: "#55B865",
      gray: {
        100: "#f7fafc",
        200: "#E7E7E7",
        300: "#D9D9D9",
        400: "#cccccc",
        500: "#c2c2c2",
        600: "#c4c4c4",
        700: "#c1c1c1",
        800: "#181818",
        900: "#1a202c",
      },
      orange: {
        primary: "#FFCA88",
      },
    },
  },
  plugins: [],
};
