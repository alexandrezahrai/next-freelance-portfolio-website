/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px", // => @media (min-width: 576px) { ... }
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
        lg: "36px",
      },
    },
    extend: {
      colors: {
        "off-black": "#18181B",
        "gray-light": "#FAFAFA",
        "gray-medium": "#F4F4F5",
        "gray-dark": "#27272A",
        "gray-text": "#71717A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
