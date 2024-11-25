/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          500: "#38b2ac",
          600: "#2c7a7b",
          700: "#285e61",
        },
      },
      animation: {
        "sand-flow": "sand-flow 3s infinite ease-in-out",
      },
      keyframes: {
        "sand-flow": {
          "0%, 100%": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transform: "translateY(0)",
          },
          "50%": {
            clipPath: "polygon(50% 0, 50% 0, 100% 100%, 0 100%)",
            transform: "translateY(50%)",
          },
        },
      },
    },
  },
  plugins: [],
};
