/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
      extend: {
        extend: {
          colors: {
            'mystery-black': '#1C1C1C',
            'elegant-off-white': '#F2F2F2',
            'soft-pink': '#F6C9D7',
            'artistic-rosewood': '#9A3D3D',
            'golden-accents': '#D2A663',
            'deep-burgundy': '#800020',
          },
        },
      },
    },
    plugins: [],
  };