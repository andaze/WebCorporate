/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './content/**/*.{md,html,js}',
    './themes/**/*.{md,html,js}',
  ],
  theme: {
    extend: {
      zIndex: {
          '-1': '-1',
      },
      height: {
          'height for key-visual': 'calc(100vh_+_20rem)',
          'height-25rem': '25rem',
          'height-34rem': '34rem',
      },
      backgroundImage: {
          'interaction_guide_circle': "url('../img/clicked.svg')",
      },
      transitionDuration: {
          '2000': '2000ms',
      }
    },
  },
  plugins: [],
}
