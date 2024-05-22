/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "Dark-cyan": "hsl(185, 75%, 39%)",
        "dark-desaturated-blue": "hsl(229, 23%, 23%)",
        "Dark-grayish-blue": "hsl(227, 10%, 46%)",
        "Dark-gray": "hsl(0, 0%, 59%)",
      },
    },
    fontFamily: {
      kumbh: ["Kumbh Sans", "sans-serif"],
    },
  },
  plugins: [],
};
