

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      fontFamily: {
        sans: ['Outfit', '"Epilogue"', '"Lora"', 'sans-serif'],
      },
      screens: {
        'max-sm': { max: '480px'},
        'max-md': { max: '640px'},
        'max-lg': { max: '768px'},
        'max-xl': { max: '1024px'},
      },
      fontSize: {
        '12px': '12px',
        '10px': '10px',
        '20px': '20px',
        '24px': '24px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
        '90%': '90%',
        '43%': '43%',
        '52px': '52px',
      },
      borderRadius: {
        br: '0.625rem',
        4: '4px',
      },
      colors: {
        black: colors.black,
        black: '#101525',
        blue: colors.blue,
        red: '#FF939C',
        warning: colors.yellow,
        success: colors.green,
        label: '#ABABAB',
        graylight:'#D6D8DC',
        layoutbg:'#141933',
        button:'#4285DE',
        
        gray: {
          100: '#535355',
          200: '#d3d3d3',
          300: '#bdbdbe',
          400: '#a7a7a8',
          500: '#919192',
          600: '#7b7b7c',
          700: '#656566',
          800: '#4f4f51',
          900: '#39393b',
          main: '#232325',
        },
        primary: {
          100: '#e6ebf6',
          200: '#cdd7ed',
          300: '#b3c2e4',
          400: '#9aaedb',
          500: '#819ad3',
          600: '#6886ca',
          700: '#4f72c1',
          800: '#355db8',
          900: '#1c49af',
          main: '#141933',
        },
       
       
        blue: {
          100: '#F7F7F9',
        },
        white: '#ffffff',
        'th-primary': 'var(--primary)',
        'th-gray': 'var(--gray)',
      },
      animation: {
        scaleSideBarNav: 'scaleSideBarNav 300ms ease-in-out forwards',
        scaleComment: 'scaleComment 800ms ease',
        slide: 'slide 800ms ease',
      },
      keyframes: {
        scaleSideBarNav: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      keyframes: {
        scaleComment: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
      },
    },
  },
  variants: {},
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging',
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
    ],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),

  ],
};
