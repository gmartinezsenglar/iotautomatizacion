/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['IBM Plex Mono', 'Menlo', 'monospace'],
        body: ['IBM Plex Mono', 'Menlo', 'monospace'],
      },
      colors: {
        'wild-watermelon': {
          DEFAULT: '#FE5E78',
          50: '#FFCDC8',
          400: '#FE5E78',
        },
      },
    },
  },
  plugins: [],
}

