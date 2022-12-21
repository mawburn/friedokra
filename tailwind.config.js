/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        switch: {
          on: {
            primary: '#F00',
            secondary: '#1F2937',
            tertiary: '#4B5563',
          },
          off: {
            primary: '#F00',
            secondary: '#1F2937',
            tertiary: '#4B5563',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
