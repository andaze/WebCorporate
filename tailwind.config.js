/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './content/**/*.{md,html,js}',
    './themes/**/*.{md,html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
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
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'Noto Sans JP',
          fontWeight: '100 900',
          src: 'url("../font/NotoSansCJKjp-VF.min.woff2") format("woff2"), url("../font/NotoSansCJKjp-VF.min.woff") format("woff"), url("../font/NotoSansCJKjp-VF.min.ttf") format("ttf")',
          fontDisplay: 'swap',
        }
      });
    })
  ],
}
