/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F7F1DF',
          '2': '#FAF6ED',
        },
        gold: {
          DEFAULT: '#C59B27',
          light: '#EED88E',
          dark: '#997519',
          pale: '#EED88E',
          border: '#D4AF37',
        },
        ink: {
          DEFAULT: '#2C1A14',
          muted: '#6C5347',
        },
        cocoa: '#6C5347',
        choc: '#1C100B',
        berry: '#8C2D19',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Outfit"', 'sans-serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -5px rgba(44, 26, 20, 0.08)',
        lift: '0 20px 45px -20px rgba(44, 26, 20, 0.25)',
      },
    },
  },
  plugins: [],
};