import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
       
      },
      fontFamily: {
        body: ['var(--josefin-font)'],
        title: ['var(--cormorant-font)'],
      },
    },
  },
  plugins: [],
}
export default config
