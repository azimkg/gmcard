/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  variants: {
    extend: {
      textDecoration: ['hover', 'focus', 'decorate-dashed'],
    },
  },
  theme: {
    screens: {
      'md': { 'max': '767px' },
      'lg': { 'max': '1023px' },
      '2xl': { 'max': '1200px' },
      'min-md': { 'min': '767px' },
      'min-lg': { 'min': '1023px' },
      'min-2xl': { 'min': '1200px' },
      'print': { 'raw': 'print' }
    },
    extend: {
      boxShadow: {
        'my-drop-shadow': 'drop-shadow(0 3px 0 rgba(0,26,40,.29))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

