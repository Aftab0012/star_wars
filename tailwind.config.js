/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Oswald', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        merriweather: ['Merriweather Sans', 'sans-serif'],
        roboto: ['Roboto Condensed', 'sans-serif'],
        playfair: ['Roboto Condensed', 'sans-serif'],
        vast: ['Vast Shadow', 'serif'],
      },
      colors: {
        primary: {
          500: '#FF7000',
          100: '#FFF1E6',
        },
        dark: {
          100: '#000000',
          200: '#0F1117',
          300: '#151821',
          400: '#212734',
          500: '#101012',
        },
        light: {
          900: '#FFFFFF',
          800: '#F4F6F8',
          850: '#FDFDFD',
          700: '#DCE3F1',
          500: '#7B8EC8',
          400: '#858EAD',
        },
        'accent-blue': '#1DA1F2',
      },
    },
  },
  plugins: [],
};
