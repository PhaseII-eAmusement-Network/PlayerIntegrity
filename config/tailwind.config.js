const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      'animation': {
        'gradient-x':'gradient-x 15s ease infinite',
        'gradient-y':'gradient-y 15s ease infinite',
        'gradient-xy':'gradient-xy 15s ease infinite',
      },
      'keyframes': {
          'gradient-y': {
              '0%, 100%': {
                  'background-size':'400% 400%',
                  'background-position': 'center top'
              },
              '50%': {
                  'background-size':'200% 200%',
                  'background-position': 'center center'
              }
          },
          'gradient-x': {
              '0%, 100%': {
                  'background-size':'200% 200%',
                  'background-position': 'left center'
              },
              '50%': {
                  'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          },
          'gradient-xy': {
              '0%, 100%': {
                  'background-size':'400% 400%',
                  'background-position': 'left center'
              },
              '50%': {
                  'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          }
      },
      colors: {
        'outer-space': {
          DEFAULT: '#253031',
          50: '#769598',
          100: '#6B8B8E',
          200: '#5A7477',
          300: '#485E5F',
          400: '#374748',
          500: '#253031',
          600: '#0D1111',
          700: '#000000',
          800: '#000000',
          900: '#000000'
        },
        'spectra': {
          DEFAULT: '#315659',
          50: '#85B8BC',
          100: '#78B0B5',
          200: '#5EA1A6',
          300: '#4E898E',
          400: '#3F6F73',
          500: '#315659',
          600: '#1D3335',
          700: '#091011',
          800: '#000000',
          900: '#000000'
        },
        'jelly-bean': {
          DEFAULT: '#2978A0',
          50: '#9BCCE5',
          100: '#8BC4E1',
          200: '#6AB4D9',
          300: '#4AA3D1',
          400: '#3190C0',
          500: '#2978A0',
          600: '#1E5773',
          700: '#123547',
          800: '#07141A',
          900: '#000000'
        },
        'gimblet': {
          DEFAULT: '#BCAB79',
          50: '#F9F8F3',
          100: '#F2EFE6',
          200: '#E5DECB',
          300: '#D7CDAF',
          400: '#CABC94',
          500: '#BCAB79',
          600: '#A99354',
          700: '#837342',
          800: '#5E522F',
          900: '#38311C'
        },
        'onahau': {
          DEFAULT: '#C6E0FF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#EFF6FF',
          500: '#C6E0FF',
          600: '#8EC1FF',
          700: '#56A3FF',
          800: '#1E84FF',
          900: '#0068E5'
        },
        'soft-red': {
          DEFAULT: '#9F2A2A',
          50: '#F8EBE4',
          100: '#F2D7CC',
          200: '#E5AC9C',
          300: '#D87B6C',
          400: '#CB463B',
          500: '#9F2A2A',
          600: '#83232A',
          700: '#661B26',
          800: '#4A1420',
          900: '#2E0C16'
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
