/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#dc7555',
          'primary-focus': '#d55a34',
          'primary-content': '#ffffff',

          secondary: '#79cabe',
          'secondary-focus': '#46af9f',
          'secondary-content': '#ffffff',

          accent: '#f6d879',
          'accent-focus': '#f2cb40',
          'accent-content': '#ffffff',

          neutral: '#464647',
          'neutral-focus': '#282829',
          'neutral-content': '#ffffff',

          'base-100': '#464647',
          'base-200': '#282829',
          'base-300': '#141415',
          'base-content': '#ffffff',

          info: '#80aebf',
          success: '#33c08a',
          warning: '#ffc368',
          error: '#f0635b'
        }
      }
    ]
  }
}
