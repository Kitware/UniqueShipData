/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,md}",
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#031529",
          900: "#062847",
          800: "#073c68"
        },
        signal: "#3eae2b",
        ocean: "#0875d1"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        panel: "0 24px 70px rgba(2, 18, 35, 0.18)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        marina: {
          primary: "#3eae2b",
          "primary-content": "#031529",
          secondary: "#0875d1",
          "secondary-content": "#ffffff",
          accent: "#30a8e8",
          neutral: "#031529",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f4f6f8",
          "base-300": "#dce2e8",
          "base-content": "#17202a",
          info: "#0875d1",
          success: "#4cc43b",
          warning: "#f3b33d",
          error: "#dc4c64"
        }
      }
    ]
  }
};
