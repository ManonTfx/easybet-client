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
        darkGray: '#19191C',
        primary: '#5D6AD2',
        lightGray: '#232327',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
