/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neubrutalism color palette
        purple: {
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        red: {
          500: '#EF4444',
          600: '#DC2626',
        },
        green: {
          500: '#22C55E',
          600: '#16A34A',
        },
        gray: {
          100: '#F3F4F6',
          200: '#E5E7EB',
        },
        black: '#000000',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neu-sm': '2px_2px_0px_black',
        'neu-md': '4px_4px_0px_black',
        'neu-lg': '6px_6px_0px_black',
        'neu-xl': '8px_8px_0px_black',
      },
    },
  },
  plugins: [],
}

