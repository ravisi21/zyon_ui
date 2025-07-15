/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'price-red': '#DD6060',
        'price-green': '#55BB55',
        'price-neutral': '#AAAAAA',
        'logo-green': '#009900',
        'zyon-blue': '#6699FF',
        'button-blue': '#1890FF',
        'brighter-green': '#6D6',
        'order-header-blue': '#4080DD',
        'order-header-red': '#DD8833',
        'dark-bg': '#18191A',
        'dark-bg-2': '#232526',
        'header-green': '#44c060'
      },
      fontSize: {
        'xxs': '0.625rem', // Example: 10px
      },
      scale: {
        102: '1.02',
      }
    },
  },
  plugins: [],
}

