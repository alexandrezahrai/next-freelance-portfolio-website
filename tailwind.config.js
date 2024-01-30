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
        md: "36px",
      },
    },
    extend: {
      // @link https://utopia.fyi/type/calculator?c=320,16,1.2,1440,18,1.25,5,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
      fontSize: {
        "step-0": "clamp(1rem, 0.9643rem + 0.1786vw, 1.125rem)", // Step 0 (Body): 16.00px → 18.00px
        "step-1": "clamp(1.2rem, 1.1411rem + 0.2946vw, 1.4063rem)", // Step 1: 19.20px → 22.50px
        "step-2": "clamp(1.44rem, 1.3491rem + 0.4545vw, 1.7581rem)", // Step 2: 23.04px → 28.13px
        "step-3": "clamp(1.7281rem, 1.594rem + 0.6705vw, 2.1975rem)", // Step 3: 27.65px → 35.16px
        "step-4": "clamp(2.0738rem, 1.8814rem + 0.9616vw, 2.7469rem)", // Step 4: 33.18px → 43.95px
        "step-5": "clamp(2.4881rem, 2.2181rem + 1.35vw, 3.4331rem)", // Step 5 (H1): 39.81px → 54.93px
        "step-6": "clamp(2.9863rem, 2.6134rem + 1.8643vw, 4.2913rem)", // Step 6: 47.78px → 68.66px
      },
      colors: {
        "blue-primary": "hsl(221,100%,50%)",
        "blue-very-dark": "hsl(223, 49%, 8%)",
        "off-black": "hsl(240,6%,10%)",
        "gray-light": "#FAFAFA",
        "gray-medium": "#F4F4F5",
        "gray-dark": "#27272A",
        "gray-text": "#71717A",
        bubblegum: "hsl(290, 100%, 66%)",
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
