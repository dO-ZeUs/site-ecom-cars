/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/js/*.js", "./auth/*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px"
    },
    extend: {
      colors: {},
      keyframes: {
        move: {
          "50%": {transform: "scale(1.1)"}
        }
      },
      animation: {
        scaleAnimation: "move 3s linear infinite"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        md: "30px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
