module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mercury: {
          DEFAULT: "#E8E8E8",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FCFCFC",
          500: "#E8E8E8",
          600: "#CCCCCC",
          700: "#B0B0B0",
          800: "#949494",
          900: "#787878",
        },
        black: {
          DEFAULT: "#020202",
          50: "#5E5E5E",
          100: "#545454",
          200: "#3F3F3F",
          300: "#2B2B2B",
          400: "#161616",
          500: "#020202",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        lavender: {
          DEFAULT: "#BE73ED",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#F0DFFB",
          300: "#E0BBF6",
          400: "#CF97F2",
          500: "#BE73ED",
          600: "#A741E7",
          700: "#8D1BD4",
          800: "#6C15A3",
          900: "#4B0F71",
        },
        pancho: {
          DEFAULT: "#EDCAA3",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FAF1E7",
          400: "#F4DEC5",
          500: "#EDCAA3",
          600: "#E4AF74",
          700: "#DB9445",
          800: "#C27826",
          900: "#935B1D",
        },
        persianblue: {
          DEFAULT: "#3724C2",
          50: "#B6AEF0",
          100: "#A69CED",
          200: "#877AE6",
          300: "#6858E0",
          400: "#4935DA",
          500: "#3724C2",
          600: "#2A1B93",
          700: "#1C1263",
          800: "#0F0A34",
          900: "#010105",
        },
        mountainmeadow: {
          DEFAULT: "#10B981",
          50: "#8CF5D2",
          100: "#79F3CB",
          200: "#53F0BC",
          300: "#2EEDAE",
          400: "#13DF9B",
          500: "#10B981",
          600: "#0C855D",
          700: "#075239",
          800: "#031E15",
          900: "#000000",
        },
        buttercup: {
          DEFAULT: "#F59E0B",
          50: "#FCE4BB",
          100: "#FBDCA8",
          200: "#FACD81",
          300: "#F8BD59",
          400: "#F7AE32",
          500: "#F59E0B",
          600: "#C07C08",
          700: "#8A5906",
          800: "#543603",
          900: "#1E1401",
        },
      },
      backgroundImage: {
        video: "url('./assets/bg.mp4')",
        plant: "url('./plant.svg')",
      },
      fontFamily: {
        "sans-serif": ["inter", "sans-serif"],
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      spacing: {
        200: "50rem",
        160: "40rem",
        192: "48rem",
        240: "60rem",
        288: "72rem",
        "95vh": "95vh",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
