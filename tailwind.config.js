/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "move-right": "moveRight 3s infinite alternate ease-in-out",
        "move-left": "moveLeft 4s infinite alternate ease-in-out",
        "move-up": "moveUp 5s infinite alternate ease-in-out",
        shake: "shake 0.5s ease-in-out infinite",
        "rotate-circle": "rotateCircle 10s linear infinite",
        fadeIn: "fadeIn 1s ease-in-out forwards",
        bounce: "bounce 0.5s infinite",
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(20px)" },
        },
        moveLeft: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-20px)" },
        },
        moveUp: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-20px)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-2px)" },
          "75%": { transform: "translateX(2px)" },
        },
        rotateCircle: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
