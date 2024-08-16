/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "subtle-pulse": "subtle-pulse 0.6s ease-in-out",
        checkmark: "checkmark 0.6s ease-out",
      },
      keyframes: {
        "subtle-pulse": {
          "0%, 60%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        checkmark: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1.2)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        // Remove spinner buttons for WebKit browsers (e.g., Chrome, Safari)
        'input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button':
          {
            "-webkit-appearance": "none",
            margin: "0",
          },
        // Remove spinner buttons for Firefox
        'input[type="number"]': {
          "-moz-appearance": "textfield",
        },
      });
    },
  ],
};
