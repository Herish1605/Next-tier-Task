module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          purple: "var(--primary-purple)",
          blue: "var(--primary-blue)",
          darkBlue: "var(--primary-dark-blue)",
          lightBlue: "var(--primary-light-blue)",
        },
        secondary: {
          purpleLight: "var(--secondary-purple-light)",
          blueLight: "var(--secondary-blue-light)",
          blueDark: "var(--secondary-blue-dark)",
        },
        text: {
          white: "var(--text-white)",
          white80: "var(--text-white-80)",
          gray: "var(--text-gray)",
        },
        border: {
          gradientStart: "var(--border-gradient-start)",
          gradientMiddle: "var(--border-gradient-middle)",
          gradientEnd: "var(--border-gradient-end)",
        },
        bg: {
          darkBlue: "var(--bg-dark-blue)",
          cardDark: "var(--bg-card-dark)",
          cardLight: "var(--bg-card-light)",
        },
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "nunito-sans": ["Nunito Sans", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        symbol: ["Symbol", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "purple-blue-gradient": "linear-gradient(to right, #ad4aff, #5480f7)",
        "purple-blue-vertical": "linear-gradient(to bottom, #ad4aff, #5480f7)",
        "card-gradient": "linear-gradient(150deg, #120e33 0%, #120e33 50%, #1f1f24 100%)",
        "border-gradient": "linear-gradient(133deg, #c456ff 0%, #8892cb4c 50%, #c456ff 100%)",
      },
    },
  },
  plugins: [],
};