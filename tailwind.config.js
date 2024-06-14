/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px'
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        gray: {
          900: '#1a1a1a'
        }
      },
      backgroundImage: {
        site: "url('./src/assets/site-bg.jpg')",
        about: "url('./src/assets/about.png')",
        services: "url('./src/assets/services.png')"
      }
    }
  },
  plugins: []
}
