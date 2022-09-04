/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        darkMode: '#221C2D',
        inputBg: '#332E3D',
        darkGray: '#19191C',
        primary: '#6640D1',
        lightGray: '#232327',
        darkBlue: '#2D314F',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
