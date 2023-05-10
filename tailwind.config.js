/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        grey: '#f8f9fa',
        yellow: '#f9a252',
        orange: '#eb8923',
        white: '#ffffff',
        gray: '#d1d5db',
        red: '#e30044',
        error: '#dc3545',
        info: '#17a2b8',
        success: '#28a745',
        'gray-100': '#f9fafb',
      },
    },
  },
  plugins: [],
};
