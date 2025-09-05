/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'unlimited': {
          'primary': '#FA453D',
          'orange': '#FA453D',
          'red': '#FA453D', 
          'dark': '#1D3557',
          'navy': '#1A365D',
          'light': '#F7FAFC',
          'gray': '#718096',
          'accent': '#FF6B35',
          'hover': '#FB6A64'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'heading': ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      },
      fontSize: {
        'banner': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'section': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      }
    },
  },
  plugins: [],
}
